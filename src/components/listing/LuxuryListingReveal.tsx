"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { buildSpecs, type Listing } from "@/lib/listings";

type Props = {
  listing: Listing;
  variant?: "buyerPreview" | "sellerLaunch";
  copy?: Partial<RevealCopy>;
};

type RevealCopy = {
  eyebrow: string;
  title: string;
  emphasis: string;
  lede: string;
  kicker: string;
  panelTitle: string;
  panelBody: string;
  primaryCta: string;
  primaryHref: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function WebGLCurtain({
  open,
  lift,
  pointer,
  isDragging,
  material,
  onReady,
}: {
  open: number;
  lift: number;
  pointer: { x: number; y: number };
  isDragging: boolean;
  material: "champagne" | "espresso";
  onReady: (ready: boolean) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const openRef = useRef(open);
  const liftRef = useRef(lift);
  const pointerRef = useRef(pointer);
  const draggingRef = useRef(isDragging);
  const materialRef = useRef(material);
  const settledRef = useRef(open);
  const velocityRef = useRef(0);
  const lastSettledRef = useRef(open);
  const smoothPointerRef = useRef(pointer);
  const smoothLiftRef = useRef(lift);
  const lastPointerRef = useRef(pointer);
  const smoothPointerVelocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    openRef.current = open;
    liftRef.current = lift;
    pointerRef.current = pointer;
    draggingRef.current = isDragging;
    materialRef.current = material;
  }, [open, lift, pointer, isDragging, material]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) {
      onReady(false);
      return;
    }

    const vertexSource = `
      attribute vec2 a_local;
      attribute float a_side;
      uniform float u_open;
      uniform float u_velocity;
      uniform float u_lift;
      uniform float u_time;
      uniform vec2 u_pointer;
      uniform vec2 u_pointer_velocity;
      uniform float u_material;
      varying vec2 v_local;
      varying float v_side;
      varying float v_fold;
      varying float v_pressure;
      varying float v_motion;
      void main() {
        float springOpen = smoothstep(0.0, 1.0, u_open);
        float closedWidth = 1.16;
        float gatheredWidth = 0.24;
        float width = mix(closedWidth, gatheredWidth, springOpen);
        float closedCenter = a_side * 0.42;
        float openCenter = a_side * 1.02;
        float center = mix(closedCenter, openCenter, springOpen);
        float gatherSkew = sin(a_local.x * 3.14159) * springOpen * 0.035 * a_side;
        float x = center + (a_local.x - 0.5) * width + gatherSkew;
        float y = a_local.y * 2.0 - 1.0;
        float verticalLag = pow(a_local.y, 1.65);
        float pullLag = u_velocity * verticalLag * (0.55 + a_local.x * 0.42);
        vec2 handPoint = vec2(u_pointer.x * 2.0 - 1.0, 1.0 - u_pointer.y);
        vec2 clothPoint = vec2(x, a_local.y);
        vec2 handDelta = vec2((handPoint.x - clothPoint.x) * 0.78, (handPoint.y - clothPoint.y) * 1.24);
        float hand = 1.0 - smoothstep(0.0, 0.24, length(handDelta));
        float handWide = 1.0 - smoothstep(0.0, 0.46, length(handDelta));
        float pointerSpeed = clamp(length(u_pointer_velocity) * 3.0, 0.0, 1.0);
        float wake = 0.0;
        float ridge = sin(a_local.x * 64.0 + a_local.y * 5.0 + u_time * 0.58);
        float ridge2 = sin(a_local.x * 29.0 - a_local.y * 2.4 - u_time * 0.22);
        float diagonal = sin((a_local.x * 18.0 + a_local.y * 8.0) * a_side + u_time * 0.18);
        float slow = sin(a_local.x * 10.0 - u_time * 0.22 + a_side * 0.7);
        float edgeLift = pow(a_local.x, 2.1) * u_open;
        float bunch = smoothstep(0.26, 1.0, u_open);
        float weight = sin(a_local.y * 3.14159);
        float handPressure = hand * (0.035 + pointerSpeed * 0.030);
        float wakePull = wake * pointerSpeed * 0.040;
        float napDrag = dot(normalize(u_pointer_velocity + vec2(0.0001)), vec2(a_side, 0.28));
        float billow = (ridge * (0.048 + bunch * 0.030) + ridge2 * (0.025 + bunch * 0.018) + diagonal * 0.016 + slow * 0.018 + handWide * 0.024 + handPressure + wakePull + pullLag * 0.18) * (1.0 - u_open * 0.02) * weight;
        x += (billow + pullLag * 0.11 + hand * napDrag * 0.012) * a_side;
        y += sin(a_local.x * 9.0 + u_time * 0.55) * 0.010 * (0.45 + edgeLift) * weight;
        y += abs(u_velocity) * 0.030 * verticalLag * (0.6 + hand * 0.4);
        y += u_lift * hand * weight * 0.28;
        y += (hand * -0.018 + wakePull * 0.36) * weight;
        float sag = -pow(abs(a_local.x - 0.5) * 2.0, 2.0) * 0.024 * (1.0 - u_open * 0.35);
        y += sag;
        float depth = edgeLift * 0.28 + bunch * abs(ridge) * 0.13 + abs(ridge) * 0.06 + abs(diagonal) * 0.04 + hand * 0.10 + wake * pointerSpeed * 0.080 + abs(u_velocity) * 0.10 * verticalLag + u_lift * hand * 0.16;
        float w = 1.0 + depth * 0.32;
        gl_Position = vec4(x, y, depth, w);
        v_local = a_local;
        v_side = a_side;
        v_fold = ridge;
        v_pressure = max(hand, wake * pointerSpeed * 0.72);
        v_motion = napDrag * pointerSpeed;
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float u_open;
      uniform float u_time;
      uniform vec2 u_pointer;
      uniform vec2 u_pointer_velocity;
      uniform float u_material;
      varying vec2 v_local;
      varying float v_side;
      varying float v_fold;
      varying float v_pressure;
      varying float v_motion;
      float grain(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      void main() {
        float pleat = 0.5 + 0.5 * v_fold;
        float micro = grain(v_local * vec2(240.0, 96.0) + u_time * 0.014);
        float vertical = sin(v_local.x * 112.0) * 0.5 + 0.5;
        float weave = sin(v_local.x * 380.0) * sin(v_local.y * 172.0) * 0.5 + 0.5;
        float sideRim = smoothstep(0.66, 1.0, v_local.x) * (0.38 + u_open * 0.74);
        float edgeKnife = smoothstep(0.88, 1.0, v_local.x);
        float diagonalSheen = smoothstep(0.965, 1.0, sin((v_local.x * 11.0 + v_local.y * 7.5) * v_side - u_time * 0.16) * 0.5 + 0.5);
        float hem = smoothstep(0.0, 0.045, v_local.y) + smoothstep(1.0, 0.955, v_local.y);
        float creaseShadow = smoothstep(0.0, 0.35, vertical) * (1.0 - smoothstep(0.35, 0.78, vertical));
        float outerDark = 1.0 - smoothstep(0.0, 0.22, v_local.x) * 0.38;
        float hand = v_pressure;
        float espressoMode = step(0.5, u_material);
        vec3 baseChampagne = vec3(0.36, 0.255, 0.155);
        vec3 highChampagne = vec3(0.72, 0.555, 0.335);
        vec3 baseEspresso = vec3(0.055, 0.038, 0.030);
        vec3 highEspresso = vec3(0.36, 0.255, 0.175);
        vec3 base = mix(baseChampagne, baseEspresso, espressoMode);
        vec3 champagne = mix(highChampagne, highEspresso, espressoMode);
        vec3 espresso = mix(vec3(0.110, 0.070, 0.046), vec3(0.020, 0.016, 0.014), espressoMode);
        vec3 bronze = mix(vec3(0.62, 0.40, 0.20), vec3(0.76, 0.48, 0.24), espressoMode);
        vec3 warm = mix(vec3(1.00, 0.82, 0.54), vec3(1.00, 0.66, 0.34), espressoMode);
        float velvetNap = pow(1.0 - abs(pleat - 0.5) * 2.0, 2.0);
        float napSheen = smoothstep(-0.65, 0.95, v_motion) * hand;
        float brushShadow = smoothstep(0.18, 0.82, hand) * smoothstep(0.82, 0.18, abs(v_motion));
        float light = 0.18 + pleat * 0.46 + vertical * 0.18 + sideRim * 0.98 + edgeKnife * 0.55 + diagonalSheen * 0.16 + hand * 0.11 + napSheen * 0.22;
        light -= creaseShadow * 0.34;
        light -= brushShadow * 0.05;
        light *= outerDark;
        vec3 color = mix(base, champagne, 0.34 + velvetNap * 0.26);
        color = mix(color, espresso, creaseShadow * 0.42);
        color = mix(color, espresso, brushShadow * 0.10);
        color = mix(color, bronze, sideRim * 0.30);
        color += warm * sideRim * 0.30;
        color += warm * edgeKnife * 0.28;
        color += warm * diagonalSheen * (0.07 + espressoMode * 0.04);
        color += warm * napSheen * 0.12;
        color += vec3(micro) * 0.018;
        color += vec3(weave) * 0.014;
        color *= 0.76 + hem * 0.24;
        float openFade = 1.0 - smoothstep(0.76, 1.0, u_open) * 0.34;
        float alpha = (0.992 - sideRim * 0.028) * openFade;
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) {
      onReady(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      onReady(false);
      return;
    }

    const segmentsX = 88;
    const segmentsY = 22;
    const data: number[] = [];
    const push = (side: number, x: number, y: number) => data.push(x, y, side);
    for (const side of [-1, 1]) {
      for (let y = 0; y < segmentsY; y++) {
        for (let x = 0; x < segmentsX; x++) {
          const x0 = x / segmentsX;
          const x1 = (x + 1) / segmentsX;
          const y0 = y / segmentsY;
          const y1 = (y + 1) / segmentsY;
          push(side, x0, y0); push(side, x1, y0); push(side, x0, y1);
          push(side, x1, y0); push(side, x1, y1); push(side, x0, y1);
        }
      }
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    const stride = 3 * 4;
    const localLoc = gl.getAttribLocation(program, "a_local");
    const sideLoc = gl.getAttribLocation(program, "a_side");
    const openLoc = gl.getUniformLocation(program, "u_open");
    const velocityLoc = gl.getUniformLocation(program, "u_velocity");
    const liftLoc = gl.getUniformLocation(program, "u_lift");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const pointerLoc = gl.getUniformLocation(program, "u_pointer");
    const pointerVelocityLoc = gl.getUniformLocation(program, "u_pointer_velocity");
    const materialLoc = gl.getUniformLocation(program, "u_material");
    let frame = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.15 : 1.75);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      const stiffness = draggingRef.current ? 0.18 : 0.105;
      const damping = draggingRef.current ? 0.74 : 0.82;
      velocityRef.current += (openRef.current - settledRef.current) * stiffness;
      velocityRef.current *= damping;
      settledRef.current = clamp(settledRef.current + velocityRef.current, 0.035, 1);
      const clothVelocity = clamp(settledRef.current - lastSettledRef.current, -0.08, 0.08);
      lastSettledRef.current = settledRef.current;
      smoothPointerRef.current = pointerRef.current;
      const pointerVelocity = {
        x: clamp((pointerRef.current.x - lastPointerRef.current.x) / 100, -0.08, 0.08),
        y: clamp((pointerRef.current.y - lastPointerRef.current.y) / 100, -0.08, 0.08),
      };
      lastPointerRef.current = pointerRef.current;
      smoothPointerVelocityRef.current = {
        x: smoothPointerVelocityRef.current.x * 0.72 + pointerVelocity.x * 0.28,
        y: smoothPointerVelocityRef.current.y * 0.72 + pointerVelocity.y * 0.28,
      };
      smoothLiftRef.current += (liftRef.current - smoothLiftRef.current) * (draggingRef.current ? 0.22 : 0.09);
      resize();
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(localLoc);
      gl.vertexAttribPointer(localLoc, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(sideLoc);
      gl.vertexAttribPointer(sideLoc, 1, gl.FLOAT, false, stride, 8);
      gl.uniform1f(openLoc, settledRef.current);
      gl.uniform1f(velocityLoc, clothVelocity);
      gl.uniform1f(liftLoc, smoothLiftRef.current);
      gl.uniform1f(timeLoc, (performance.now() - start) / 1000);
      gl.uniform2f(pointerLoc, smoothPointerRef.current.x / 100, smoothPointerRef.current.y / 100);
      gl.uniform2f(pointerVelocityLoc, smoothPointerVelocityRef.current.x, smoothPointerVelocityRef.current.y);
      gl.uniform1f(materialLoc, materialRef.current === "espresso" ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, data.length / 3);
      frame = requestAnimationFrame(render);
    };

    onReady(true);
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, [onReady]);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-30 h-full w-full motion-reduce:hidden" aria-hidden />;
}

export function LuxuryListingReveal({ listing, variant = "buyerPreview", copy }: Props) {
  const [progress, setProgress] = useState(0.16);
  const [lift, setLift] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [webglReady, setWebglReady] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const dragStartRef = useRef({ x: 50, y: 50, progress: 0.16, side: 1 });
  const specs = buildSpecs(listing);
  const galleryImages = Array.from(new Set([listing.heroPhoto, ...listing.photos.slice(1)].filter(Boolean)));
  const [activeImage, setActiveImage] = useState(0);
  const imageCount = galleryImages.length;
  const currentImage = galleryImages[activeImage] ?? listing.heroPhoto;
  const openPercent = clamp(progress, 0.04, 1);
  const revealLabel = openPercent > 0.68 ? "Draw shut" : "Draw open";
  const imageFocus = openPercent > 0.78;
  const galleryReady = imageCount > 1 && imageFocus;
  const ceremonyOpacity = clamp(1 - (openPercent - 0.18) / 0.14, 0, 1);
  const leftShift = openPercent * 82;
  const rightShift = openPercent * 82;
  const fabricDepth = 8 + openPercent * 10;
  const seamGlow = 0.18 + openPercent * 0.52;
  const clothHitWidth = `${clamp(58 - openPercent * 47, 11, 58)}%`;
  const isSellerLaunch = variant === "sellerLaunch";
  const curtainMaterial = isSellerLaunch ? "espresso" : "champagne";
  const stageAtmosphere = isSellerLaunch
    ? {
        "--curtain-glow": "rgba(255,124,52,0.32)",
        "--curtain-rim": "rgba(255,168,82,0.58)",
        "--curtain-haze": "rgba(60,18,6,0.36)",
      }
    : {
        "--curtain-glow": "rgba(224,192,154,0.30)",
        "--curtain-rim": "rgba(255,224,170,0.54)",
        "--curtain-haze": "rgba(112,73,34,0.28)",
      };
  const defaults: RevealCopy = isSellerLaunch
    ? {
        eyebrow: "The Luxury Launch Standard",
        title: "Make the first look",
        emphasis: "feel expensive.",
        lede: "A serious home should not hit the market like another upload. For select properties, Luke builds the launch around the first pause: the view, the privacy, the film, the copy, and the reason a buyer remembers it.",
        kicker: "Seller Launch Preview",
        panelTitle: "Your listing should feel considered before anyone asks the price.",
        panelBody: "This is the standard sellers are really buying: a first impression that protects value, slows the scroll, and makes the right buyer want the private tour.",
        primaryCta: "Plan a Luxury Launch",
        primaryHref: "/sellers",
      }
    : {
        eyebrow: "Featured Estate Preview",
        title: "Let the setting",
        emphasis: "arrive first.",
        lede: "Some properties need more than a thumbnail. Pull the cloth back and judge the things a spec sheet cannot sell: water, privacy, approach, and whether the place makes you pause.",
        kicker: "Featured Lakefront Preview",
        panelTitle: "The kind of first look that makes a shortlist shorter.",
        panelBody: "Open the view, study the setting, then decide whether the privacy, scale, and water deserve a closer conversation with Luke.",
        primaryCta: "Open listing",
        primaryHref: `/listings/${listing.slug}`,
      };
  const revealCopy = { ...defaults, ...copy };

  const updateFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });

    if (isDragging) {
      const start = dragStartRef.current;
      const directionalPull = ((x - start.x) / 100) * start.side * 1.65;
      const liftPull = Math.max(0, (start.y - y) / 100);
      const downwardClose = Math.max(0, (y - start.y) / 100) * 0.38;
      setProgress(clamp(start.progress + directionalPull + liftPull * 0.85 - downwardClose, 0.04, 1));
      setLift(clamp(liftPull * 1.55, 0, 1));
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>, side: -1 | 1) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });
    dragStartRef.current = { x, y, progress, side };
    setLift(0);
    setIsDragging(true);
  };

  const finishDrag = () => {
    setIsDragging(false);
    setLift(0);
  };

  const toggleReveal = () => {
    setProgress((current) => (current > 0.62 ? 0.08 : 0.98));
  };

  const showGalleryImage = (direction: -1 | 1) => {
    if (imageCount < 2) return;
    setProgress((current) => Math.max(current, 0.94));
    setActiveImage((current) => (current + direction + imageCount) % imageCount);
  };

  return (
    <section className="tone-office tonal-section border-y border-[var(--color-line)] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="mb-10 grid grid-cols-1 gap-7 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
              {revealCopy.eyebrow}
            </span>
            <h2 className="m-0 mt-6 max-w-[620px] font-serif text-[clamp(38px,5vw,76px)] font-light leading-[0.94] tracking-[-0.035em] text-[var(--color-text)]">
              {revealCopy.title}
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                {revealCopy.emphasis}
              </em>
            </h2>
          </div>
          <p className="m-0 max-w-[540px] text-[15px] leading-[1.85] text-[var(--color-text-muted)] md:ml-auto md:text-right">
            {revealCopy.lede}
          </p>
        </div>

        <div className="grid overflow-hidden border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.42)] shadow-[0_34px_110px_-70px_rgba(0,0,0,0.95)] lg:grid-cols-[1.16fr_0.84fr]">
          <div
            ref={stageRef}
            className="group/reveal relative isolate min-h-[430px] cursor-grab touch-pan-y overflow-hidden bg-[var(--color-bg)] [perspective:1200px] active:cursor-grabbing md:min-h-[580px]"
            style={
              {
                "--reveal-x": `${pointer.x}%`,
                "--reveal-y": `${pointer.y}%`,
                ...stageAtmosphere,
              } as CSSProperties
            }
            aria-label="Interactive listing reveal. Drag from the center toward either side to open or close the curtain."
          >
            {currentImage ? (
              <Image
                key={currentImage}
                src={currentImage}
                alt={`${listing.address} gallery image ${activeImage + 1}`}
                fill
                priority={false}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover scale-[1.02] transition-[opacity,transform,filter] duration-700 ease-[var(--ease-luxe)] group-hover/reveal:scale-[1.05] motion-reduce:scale-100 motion-reduce:transition-none"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[var(--color-surface-2)] text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                No photo
              </div>
            )}

            <div
              className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.58))] transition-opacity duration-300"
              style={{ opacity: imageFocus ? 0.18 : isDragging ? 0.28 + seamGlow * 0.14 : 0.22 }}
            />
            <div
              className="pointer-events-none absolute inset-0 z-[11] mix-blend-screen bg-[radial-gradient(circle_at_var(--reveal-x)_var(--reveal-y),var(--curtain-glow),transparent_28%),linear-gradient(103deg,transparent_16%,var(--curtain-rim)_34%,transparent_46%,transparent_62%,var(--curtain-rim)_78%,transparent_90%)] transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
              style={{ opacity: imageFocus ? 0.28 : 0.1 + seamGlow * 0.16 }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-[12] h-2/3 bg-[radial-gradient(ellipse_at_50%_0%,var(--curtain-haze),transparent_68%)] transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
              style={{ opacity: imageFocus ? 0.34 : 0.48 }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[28%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(224,192,154,0.2),rgba(255,255,255,0.08)_18%,transparent_62%)] blur-xl transition-opacity duration-300 motion-reduce:hidden"
              style={{ opacity: imageFocus ? 0.22 : seamGlow }}
              aria-hidden
            />

            <WebGLCurtain open={openPercent} lift={lift} pointer={pointer} isDragging={isDragging} material={curtainMaterial} onReady={setWebglReady} />

            <div
              className="pointer-events-none absolute left-1/2 top-[9%] z-[39] flex size-[70px] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(255,224,170,0.26)] bg-[rgba(9,7,5,0.20)] p-3 shadow-[0_12px_42px_-30px_rgba(0,0,0,0.95)] transition-opacity duration-700 motion-reduce:hidden md:top-[14%] md:size-[112px] md:p-4"
              style={{ opacity: ceremonyOpacity * (0.88 - openPercent * 0.8) }}
              aria-hidden
            >
              <Image
                src="/luke-mori-luxury-mark.svg"
                alt=""
                width={72}
                height={72}
                className="h-full w-full object-contain opacity-90"
                unoptimized
              />
            </div>
            <div
              className="pointer-events-none absolute left-1/2 top-[9%] z-[39] size-[44px] -translate-x-1/2 rounded-full border border-[rgba(255,224,170,0.18)] transition-opacity duration-700 motion-reduce:hidden md:top-[14%] md:size-[68px]"
              style={{ opacity: ceremonyOpacity * (0.58 - openPercent * 0.5) }}
              aria-hidden
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 z-[38] h-16 bg-[linear-gradient(180deg,rgba(7,6,5,0.98),rgba(31,20,13,0.92)_40%,rgba(190,133,70,0.42)_51%,rgba(10,8,7,0.78)_64%,rgba(7,6,5,0.18)_100%)] shadow-[0_18px_42px_-26px_rgba(0,0,0,0.95)] transition-opacity duration-500" style={{ opacity: imageFocus ? 0.64 : 1 }} aria-hidden>
              <div className="absolute inset-x-5 top-4 h-px bg-[linear-gradient(90deg,transparent,rgba(224,192,154,0.58),transparent)]" />
              <div className="absolute inset-x-8 top-7 h-[4px] rounded-full bg-[linear-gradient(90deg,rgba(43,28,18,0.42),rgba(160,104,55,0.64)_28%,rgba(236,199,140,0.72)_50%,rgba(160,104,55,0.64)_72%,rgba(43,28,18,0.42))] shadow-[0_0_18px_rgba(224,192,154,0.16)]" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[39] w-8 bg-[linear-gradient(90deg,rgba(5,4,3,0.92),rgba(5,4,3,0.28),transparent)] transition-opacity duration-500" style={{ opacity: imageFocus ? 0.55 : 1 }} aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[39] w-8 bg-[linear-gradient(270deg,rgba(5,4,3,0.92),rgba(5,4,3,0.28),transparent)] transition-opacity duration-500" style={{ opacity: imageFocus ? 0.55 : 1 }} aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[38] h-12 bg-[linear-gradient(0deg,rgba(7,6,5,0.95),rgba(7,6,5,0.18)_78%,transparent)]" aria-hidden />

            <div
              className="absolute inset-y-0 left-0 z-[46] cursor-grab touch-none active:cursor-grabbing"
              style={{ width: clothHitWidth }}
              onPointerDown={(event) => handlePointerDown(event, -1)}
              onPointerMove={updateFromPointer}
              onPointerUp={finishDrag}
              onPointerCancel={finishDrag}
              aria-hidden
            />
            <div
              className="absolute inset-y-0 right-0 z-[46] cursor-grab touch-none active:cursor-grabbing"
              style={{ width: clothHitWidth }}
              onPointerDown={(event) => handlePointerDown(event, 1)}
              onPointerMove={updateFromPointer}
              onPointerUp={finishDrag}
              onPointerCancel={finishDrag}
              aria-hidden
            />

            {!webglReady && (
              <>
                <div
                  className="absolute inset-y-0 left-0 z-30 w-[54%] origin-right overflow-hidden border-r border-[rgba(224,192,154,0.38)] bg-[radial-gradient(circle_at_26%_28%,rgba(224,192,154,0.19),transparent_24%),linear-gradient(94deg,rgba(8,7,7,0.99),rgba(27,17,12,0.97)_34%,rgba(66,43,28,0.87)_50%,rgba(18,12,9,0.98)_68%,rgba(5,5,5,0.99))] shadow-[28px_0_74px_-34px_rgba(0,0,0,0.98)] will-change-transform motion-reduce:hidden"
                  style={{
                    transform: `translateX(-${leftShift}%) scaleX(${1 - openPercent * 0.58}) translateZ(${fabricDepth}px)`,
                    transition: isDragging ? "none" : "transform 560ms var(--ease-luxe)",
                  }}
                  aria-hidden
                >
                  <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(255,255,255,0.075)_0_1px,transparent_1px_14px),linear-gradient(90deg,rgba(0,0,0,0.42)_0_9px,transparent_9px_28px),radial-gradient(circle_at_36%_45%,rgba(255,255,255,0.12),transparent_20%)]" />
                  <div className="absolute inset-0 animate-[curtain-breathe_5.8s_ease-in-out_infinite] opacity-45 [background-image:linear-gradient(112deg,transparent_0%,rgba(255,255,255,0.13)_32%,transparent_46%,rgba(224,192,154,0.11)_62%,transparent_78%)] motion-reduce:animate-none" />
                  <div className="absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.55),rgba(255,255,255,0.2),rgba(224,192,154,0.22),rgba(0,0,0,0.8))]" />
                  <div className="absolute inset-y-0 right-4 w-3 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.24),rgba(39,25,17,0.9),rgba(0,0,0,0.98))] blur-[1px]" />
                </div>

                <div
                  className="absolute inset-y-0 right-0 z-30 w-[54%] origin-left overflow-hidden border-l border-[rgba(224,192,154,0.38)] bg-[radial-gradient(circle_at_76%_32%,rgba(224,192,154,0.17),transparent_25%),linear-gradient(86deg,rgba(5,5,5,0.99),rgba(18,12,9,0.98)_30%,rgba(66,43,28,0.87)_50%,rgba(27,17,12,0.97)_66%,rgba(8,7,7,0.99))] shadow-[-28px_0_74px_-34px_rgba(0,0,0,0.98)] will-change-transform motion-reduce:hidden"
                  style={{
                    transform: `translateX(${rightShift}%) scaleX(${1 - openPercent * 0.58}) translateZ(${fabricDepth}px)`,
                    transition: isDragging ? "none" : "transform 560ms var(--ease-luxe)",
                  }}
                  aria-hidden
                >
                  <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_14px),linear-gradient(90deg,rgba(0,0,0,0.42)_0_10px,transparent_10px_30px),radial-gradient(circle_at_70%_44%,rgba(255,255,255,0.11),transparent_20%)]" />
                  <div className="absolute inset-0 animate-[curtain-breathe_6.4s_ease-in-out_infinite_reverse] opacity-45 [background-image:linear-gradient(68deg,transparent_0%,rgba(224,192,154,0.11)_28%,transparent_43%,rgba(255,255,255,0.12)_63%,transparent_80%)] motion-reduce:animate-none" />
                  <div className="absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(224,192,154,0.22),rgba(255,255,255,0.2),rgba(0,0,0,0.55),transparent)]" />
                  <div className="absolute inset-y-0 left-4 w-3 rounded-full bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(39,25,17,0.9),rgba(255,255,255,0.24))] blur-[1px]" />
                </div>
              </>
            )}

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-40 flex w-[196px] -translate-x-1/2 -translate-y-1/2 flex-col items-center border border-[rgba(255,224,170,0.66)] bg-[linear-gradient(180deg,rgba(35,23,13,0.94),rgba(8,7,6,0.90))] px-5 py-4 text-center shadow-[0_24px_80px_-38px_rgba(0,0,0,0.98),inset_0_1px_0_rgba(255,255,255,0.08)] transition-[transform,border-color,background,opacity] duration-300 ease-[var(--ease-luxe)]"
              style={{ opacity: ceremonyOpacity, transform: ceremonyOpacity < 0.18 ? "translate(-50%, -50%) scale(0.9)" : undefined }}
              aria-hidden
            >
              <span className="mb-3 h-px w-16 bg-[linear-gradient(90deg,transparent,var(--color-bronze-light),transparent)]" />
              <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-light)]">
                Private first look
              </span>
              <span className="mt-3 block font-serif text-[24px] font-light italic leading-none text-[var(--color-text)]">
                Unveil the view
              </span>
              <span className="mt-3 block text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Drag the cloth
              </span>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(10,11,13,0.76))]" />
            <div className="absolute right-4 top-20 z-[60] flex flex-col gap-2 sm:hidden">
              <Link
                href={`/listings/${listing.slug}`}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,224,170,0.46)] bg-[rgba(8,7,6,0.72)] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_42px_-28px_rgba(0,0,0,0.95)] backdrop-blur-md transition-[border-color,background,color] duration-300 hover:border-[var(--color-bronze-light)] hover:bg-[rgba(8,7,6,0.9)] hover:text-[var(--color-bronze-light)]"
              >
                View property
              </Link>
              <button
                type="button"
                onClick={toggleReveal}
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,224,170,0.36)] bg-[rgba(212,184,150,0.86)] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-button-text)] shadow-[0_14px_42px_-28px_rgba(0,0,0,0.95)] backdrop-blur-md transition-[background,border-color] duration-300 hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)] motion-reduce:hidden"
              >
                {revealLabel}
              </button>
            </div>
            {imageCount > 1 && (
              <div
                className="absolute inset-x-5 top-1/2 z-[62] flex -translate-y-1/2 items-center justify-between transition-opacity duration-500 ease-[var(--ease-luxe)] motion-reduce:transition-none"
                style={{ opacity: galleryReady ? 1 : 0, pointerEvents: galleryReady ? "auto" : "none" }}
                aria-label="Listing photo controls"
              >
                <button
                  type="button"
                  onClick={() => showGalleryImage(-1)}
                  className="grid size-11 place-items-center rounded-full border border-[rgba(255,224,170,0.42)] bg-[rgba(8,7,6,0.7)] font-serif text-[26px] leading-none text-white shadow-[0_18px_52px_-30px_rgba(0,0,0,0.95)] backdrop-blur-md transition-[transform,border-color,background,color] duration-300 ease-[var(--ease-luxe)] hover:-translate-x-0.5 hover:border-[var(--color-bronze-light)] hover:bg-[rgba(8,7,6,0.92)] hover:text-[var(--color-bronze-light)]"
                  aria-label="Previous listing photo"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => showGalleryImage(1)}
                  className="grid size-11 place-items-center rounded-full border border-[rgba(255,224,170,0.42)] bg-[rgba(8,7,6,0.7)] font-serif text-[26px] leading-none text-white shadow-[0_18px_52px_-30px_rgba(0,0,0,0.95)] backdrop-blur-md transition-[transform,border-color,background,color] duration-300 ease-[var(--ease-luxe)] hover:translate-x-0.5 hover:border-[var(--color-bronze-light)] hover:bg-[rgba(8,7,6,0.92)] hover:text-[var(--color-bronze-light)]"
                  aria-label="Next listing photo"
                >
                  ›
                </button>
              </div>
            )}
            {imageCount > 1 && (
              <div
                className="pointer-events-none absolute bottom-5 right-5 z-[62] border border-[rgba(255,224,170,0.32)] bg-[rgba(8,7,6,0.72)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_42px_-28px_rgba(0,0,0,0.95)] backdrop-blur-md transition-opacity duration-500 ease-[var(--ease-luxe)] motion-reduce:transition-none"
                style={{ opacity: galleryReady ? 1 : 0 }}
              >
                {String(activeImage + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}
              </div>
            )}
            <div className="pointer-events-none absolute left-1/2 top-[calc(50%+120px)] z-40 hidden w-[300px] -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-opacity duration-300 md:flex" style={{ opacity: ceremonyOpacity }} aria-hidden>
              <span>Pull left</span>
              <span className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-bronze-dim),var(--color-bronze-light),var(--color-bronze-dim))]" />
              <span>Lift or slide</span>
              <span className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-bronze-dim),var(--color-bronze-light),var(--color-bronze-dim))]" />
              <span>Pull right</span>
            </div>
            <div className="absolute bottom-5 left-5 z-40 max-w-[78%] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)]">
                {revealCopy.kicker}
              </p>
              <p className="m-0 mt-2 font-serif text-[clamp(24px,3.2vw,42px)] font-light leading-[1.02]">
                {listing.address}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-[var(--color-line)] bg-[rgba(19,21,23,0.72)] p-7 md:p-9 lg:border-l lg:border-t-0 lg:p-10">
            <div>
              <div className="mb-7 flex flex-wrap gap-2">
                {listing.location && (
                  <span className="border border-[var(--color-line-strong)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-bronze-light)]">
                    {listing.location}
                  </span>
                )}
                {listing.propertyType && (
                  <span className="border border-[var(--color-line-strong)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {listing.propertyType}
                  </span>
                )}
              </div>

              <p className="m-0 font-serif text-[clamp(34px,4vw,56px)] font-light italic leading-none text-[var(--color-bronze-light)]">
                {listing.price || "Price on request"}
              </p>
              <h3 className="m-0 mt-6 font-serif text-[clamp(28px,3vw,44px)] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]">
                {revealCopy.panelTitle}
              </h3>
              <p className="m-0 mt-5 text-[15px] leading-[1.85] text-[var(--color-text-muted)]">
                {revealCopy.panelBody}
              </p>

              {specs.length > 0 && (
                <ul className="mt-8 grid grid-cols-2 gap-px bg-[var(--color-line)]">
                  {specs.map((spec) => (
                    <li key={spec.label} className="bg-[var(--color-surface)] p-4">
                      <span className="block font-serif text-[24px] font-light italic text-[var(--color-text)]">
                        {spec.value}
                      </span>
                      <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                        {spec.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={revealCopy.primaryHref}
                className="inline-flex items-center justify-center rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-[transform,background,border-color] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]"
              >
                {revealCopy.primaryCta}
              </Link>
              {isSellerLaunch && (
                <Link
                  href={`/listings/${listing.slug}`}
                  className="inline-flex items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-[transform,border-color,color] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
                >
                  View property
                </Link>
              )}
              <button
                type="button"
                onClick={toggleReveal}
                className="inline-flex items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-[transform,border-color,color] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] motion-reduce:hidden"
              >
                {revealLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

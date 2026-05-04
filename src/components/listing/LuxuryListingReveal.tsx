"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { buildSpecs, type Listing } from "@/lib/listings";

type Props = {
  listing: Listing;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function WebGLCurtain({
  open,
  pointer,
  isDragging,
  onReady,
}: {
  open: number;
  pointer: { x: number; y: number };
  isDragging: boolean;
  onReady: (ready: boolean) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const openRef = useRef(open);
  const pointerRef = useRef(pointer);
  const draggingRef = useRef(isDragging);
  const settledRef = useRef(open);
  const smoothPointerRef = useRef(pointer);

  useEffect(() => {
    openRef.current = open;
    pointerRef.current = pointer;
    draggingRef.current = isDragging;
  }, [open, pointer, isDragging]);

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
      uniform float u_time;
      uniform vec2 u_pointer;
      varying vec2 v_local;
      varying float v_side;
      varying float v_fold;
      void main() {
        float width = mix(1.12, 0.052, smoothstep(0.0, 1.0, u_open));
        float hinge = a_side < 0.0 ? -1.0 : 1.0;
        float inner = a_side < 0.0 ? -1.0 + width : 1.0 - width;
        float x = mix(hinge, inner, a_local.x);
        float y = a_local.y * 2.0 - 1.0;
        float hand = 1.0 - smoothstep(0.0, 0.78, abs((u_pointer.x * 2.0 - 1.0) - x));
        float ridge = sin(a_local.x * 52.0 + a_local.y * 5.0 + u_time * 0.68);
        float ridge2 = sin(a_local.x * 23.0 - a_local.y * 2.0 - u_time * 0.28);
        float slow = sin(a_local.x * 10.0 - u_time * 0.28 + a_side * 0.7);
        float edgeLift = pow(a_local.x, 2.1) * u_open;
        float weight = sin(a_local.y * 3.14159);
        float billow = (ridge * 0.040 + ridge2 * 0.020 + slow * 0.014 + hand * 0.024) * (1.0 - u_open * 0.10) * weight;
        x += billow * a_side;
        y += sin(a_local.x * 9.0 + u_time * 0.55) * 0.010 * (0.45 + edgeLift) * weight;
        float sag = -pow(abs(a_local.x - 0.5) * 2.0, 2.0) * 0.018 * (1.0 - u_open * 0.35);
        y += sag;
        float depth = edgeLift * 0.36 + abs(ridge) * 0.06 + hand * 0.030;
        float w = 1.0 + depth * 0.48;
        gl_Position = vec4(x, y, depth, w);
        v_local = a_local;
        v_side = a_side;
        v_fold = ridge;
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float u_open;
      uniform float u_time;
      uniform vec2 u_pointer;
      varying vec2 v_local;
      varying float v_side;
      varying float v_fold;
      float grain(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      void main() {
        float pleat = 0.5 + 0.5 * v_fold;
        float micro = grain(v_local * vec2(180.0, 70.0) + u_time * 0.018);
        float vertical = sin(v_local.x * 92.0) * 0.5 + 0.5;
        float weave = sin(v_local.x * 320.0) * sin(v_local.y * 148.0) * 0.5 + 0.5;
        float sideRim = smoothstep(0.68, 1.0, v_local.x) * (0.32 + u_open * 0.68);
        float creaseShadow = smoothstep(0.0, 0.35, vertical) * (1.0 - smoothstep(0.35, 0.78, vertical));
        float outerDark = 1.0 - smoothstep(0.0, 0.22, v_local.x) * 0.38;
        float hand = 1.0 - smoothstep(0.0, 0.68, abs(u_pointer.y - v_local.y));
        vec3 base = vec3(0.36, 0.255, 0.155);
        vec3 champagne = vec3(0.72, 0.555, 0.335);
        vec3 espresso = vec3(0.110, 0.070, 0.046);
        vec3 bronze = vec3(0.62, 0.40, 0.20);
        vec3 warm = vec3(1.00, 0.82, 0.54);
        float velvetNap = pow(1.0 - abs(pleat - 0.5) * 2.0, 2.0);
        float light = 0.20 + pleat * 0.42 + vertical * 0.15 + sideRim * 0.88 + hand * 0.045;
        light -= creaseShadow * 0.34;
        light *= outerDark;
        vec3 color = mix(base, champagne, 0.34 + velvetNap * 0.26);
        color = mix(color, espresso, creaseShadow * 0.42);
        color = mix(color, bronze, sideRim * 0.30);
        color += warm * sideRim * 0.24;
        color += vec3(micro) * 0.020;
        color += vec3(weave) * 0.010;
        float topBottomShade = smoothstep(0.0, 0.04, v_local.y) * smoothstep(1.0, 0.96, v_local.y);
        color *= 0.82 + topBottomShade * 0.18;
        float openFade = 1.0 - smoothstep(0.76, 1.0, u_open) * 0.44;
        float alpha = (0.995 - sideRim * 0.035) * openFade;
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

    const segmentsX = 64;
    const segmentsY = 18;
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
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const pointerLoc = gl.getUniformLocation(program, "u_pointer");
    let frame = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      const ease = draggingRef.current ? 0.34 : 0.12;
      settledRef.current += (openRef.current - settledRef.current) * ease;
      smoothPointerRef.current = {
        x: smoothPointerRef.current.x + (pointerRef.current.x - smoothPointerRef.current.x) * 0.18,
        y: smoothPointerRef.current.y + (pointerRef.current.y - smoothPointerRef.current.y) * 0.18,
      };
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
      gl.uniform1f(timeLoc, (performance.now() - start) / 1000);
      gl.uniform2f(pointerLoc, smoothPointerRef.current.x / 100, smoothPointerRef.current.y / 100);
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

export function LuxuryListingReveal({ listing }: Props) {
  const [progress, setProgress] = useState(0.16);
  const [isDragging, setIsDragging] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [webglReady, setWebglReady] = useState(false);
  const specs = buildSpecs(listing);
  const openPercent = clamp(progress, 0.04, 1);
  const revealLabel = openPercent > 0.68 ? "Draw shut" : "Draw open";
  const imageFocus = openPercent > 0.78;
  const leftShift = openPercent * 104;
  const rightShift = openPercent * 104;
  const leftRotate = openPercent * -22;
  const rightRotate = openPercent * 22;
  const fabricDepth = 18 + openPercent * 34;
  const seamGlow = 0.18 + openPercent * 0.52;

  const setRevealFromX = (x: number) => {
    const distanceFromCenter = Math.abs(x - 50) / 50;
    setProgress(clamp(distanceFromCenter, 0.04, 1));
  };

  const updateFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });

    if (isDragging) {
      setRevealFromX(x);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });
    setRevealFromX(x);
    setIsDragging(true);
  };

  const finishDrag = () => {
    setIsDragging(false);
  };

  const toggleReveal = () => {
    setProgress((current) => (current > 0.62 ? 0.08 : 0.98));
  };

  return (
    <section className="tone-office tonal-section border-y border-[var(--color-line)] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="mb-10 grid grid-cols-1 gap-7 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
              Featured Estate Preview
            </span>
            <h2 className="m-0 mt-6 max-w-[620px] font-serif text-[clamp(38px,5vw,76px)] font-light leading-[0.94] tracking-[-0.035em] text-[var(--color-text)]">
              Preview the property
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">before the crowd does.</em>
            </h2>
          </div>
          <p className="m-0 max-w-[540px] text-[15px] leading-[1.85] text-[var(--color-text-muted)] md:ml-auto md:text-right">
Some properties deserve a little ceremony. Hold the pull, slide either way, and let the view take over before you decide whether it belongs on your shortlist.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.42)] shadow-[0_34px_110px_-70px_rgba(0,0,0,0.95)] lg:grid-cols-[1.16fr_0.84fr]">
          <div
            className="group/reveal relative isolate min-h-[430px] cursor-grab touch-pan-y overflow-hidden bg-[var(--color-bg)] [perspective:1200px] active:cursor-grabbing md:min-h-[580px]"
            onPointerDown={handlePointerDown}
            onPointerMove={updateFromPointer}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            style={
              {
                "--reveal-x": `${pointer.x}%`,
                "--reveal-y": `${pointer.y}%`,
              } as CSSProperties
            }
            aria-label="Interactive listing reveal. Drag from the center toward either side to open or close the curtain."
          >
            {listing.heroPhoto ? (
              <Image
                src={listing.heroPhoto}
                alt={listing.address}
                fill
                priority={false}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover scale-[1.02] transition-transform duration-700 ease-[var(--ease-luxe)] group-hover/reveal:scale-[1.05] motion-reduce:scale-100 motion-reduce:transition-none"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[var(--color-surface-2)] text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                No photo
              </div>
            )}

            <div
              className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_var(--reveal-x)_var(--reveal-y),rgba(255,255,255,0.25),transparent_18%),linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.58))] transition-opacity duration-300"
              style={{ opacity: imageFocus ? 0.22 : 0.34 + seamGlow * 0.28 }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[28%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(224,192,154,0.2),rgba(255,255,255,0.08)_18%,transparent_62%)] blur-xl transition-opacity duration-300 motion-reduce:hidden"
              style={{ opacity: imageFocus ? 0.22 : seamGlow }}
              aria-hidden
            />

            <WebGLCurtain open={openPercent} pointer={pointer} isDragging={isDragging} onReady={setWebglReady} />

            <div
              className="pointer-events-none absolute left-1/2 top-[15%] z-[39] flex size-[92px] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(255,224,170,0.26)] bg-[rgba(9,7,5,0.20)] p-4 shadow-[0_12px_42px_-30px_rgba(0,0,0,0.95)] transition-opacity duration-700 motion-reduce:hidden md:top-[14%] md:size-[112px]"
              style={{ opacity: imageFocus ? 0 : 0.88 - openPercent * 0.8 }}
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
              className="pointer-events-none absolute left-1/2 top-[15%] z-[39] size-[56px] -translate-x-1/2 rounded-full border border-[rgba(255,224,170,0.18)] transition-opacity duration-700 motion-reduce:hidden md:top-[14%] md:size-[68px]"
              style={{ opacity: imageFocus ? 0 : 0.58 - openPercent * 0.5 }}
              aria-hidden
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 z-[38] h-16 bg-[linear-gradient(180deg,rgba(7,6,5,0.98),rgba(31,20,13,0.92)_40%,rgba(190,133,70,0.42)_51%,rgba(10,8,7,0.78)_64%,rgba(7,6,5,0.18)_100%)] shadow-[0_18px_42px_-26px_rgba(0,0,0,0.95)] transition-opacity duration-500" style={{ opacity: imageFocus ? 0.64 : 1 }} aria-hidden>
              <div className="absolute inset-x-5 top-4 h-px bg-[linear-gradient(90deg,transparent,rgba(224,192,154,0.58),transparent)]" />
              <div className="absolute inset-x-8 top-7 h-[4px] rounded-full bg-[linear-gradient(90deg,rgba(43,28,18,0.42),rgba(160,104,55,0.64)_28%,rgba(236,199,140,0.72)_50%,rgba(160,104,55,0.64)_72%,rgba(43,28,18,0.42))] shadow-[0_0_18px_rgba(224,192,154,0.16)]" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[39] w-8 bg-[linear-gradient(90deg,rgba(5,4,3,0.92),rgba(5,4,3,0.28),transparent)] transition-opacity duration-500" style={{ opacity: imageFocus ? 0.55 : 1 }} aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[39] w-8 bg-[linear-gradient(270deg,rgba(5,4,3,0.92),rgba(5,4,3,0.28),transparent)] transition-opacity duration-500" style={{ opacity: imageFocus ? 0.55 : 1 }} aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[38] h-12 bg-[linear-gradient(0deg,rgba(7,6,5,0.95),rgba(7,6,5,0.18)_78%,transparent)]" aria-hidden />

            {!webglReady && (
              <>
                <div
                  className="absolute inset-y-0 left-0 z-30 w-[54%] origin-right overflow-hidden border-r border-[rgba(224,192,154,0.38)] bg-[radial-gradient(circle_at_26%_28%,rgba(224,192,154,0.19),transparent_24%),linear-gradient(94deg,rgba(8,7,7,0.99),rgba(27,17,12,0.97)_34%,rgba(66,43,28,0.87)_50%,rgba(18,12,9,0.98)_68%,rgba(5,5,5,0.99))] shadow-[28px_0_74px_-34px_rgba(0,0,0,0.98)] will-change-transform motion-reduce:hidden"
                  style={{
                    transform: `translateX(-${leftShift}%) rotateY(${leftRotate}deg) translateZ(${fabricDepth}px)`,
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
                    transform: `translateX(${rightShift}%) rotateY(${rightRotate}deg) translateZ(${fabricDepth}px)`,
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
              style={{ opacity: imageFocus ? 0.07 : 1, transform: imageFocus ? "translate(-50%, -50%) scale(0.9)" : undefined }}
              aria-hidden
            >
              <span className="mb-3 h-px w-16 bg-[linear-gradient(90deg,transparent,var(--color-bronze-light),transparent)]" />
              <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-light)]">
                Private first look
              </span>
              <span className="mt-2 block font-serif text-[27px] font-light italic leading-none text-[var(--color-text)]">
                {listing.price || "Private preview"}
              </span>
              <span className="mt-3 block text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Hold and slide
              </span>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(10,11,13,0.76))]" />
            <div className="pointer-events-none absolute left-1/2 top-[calc(50%+120px)] z-40 hidden w-[260px] -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] md:flex" aria-hidden>
              <span>Open</span>
              <span className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-bronze-dim),var(--color-bronze-light),var(--color-bronze-dim))]" />
              <span>Centre closes</span>
              <span className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-bronze-dim),var(--color-bronze-light),var(--color-bronze-dim))]" />
              <span>Open</span>
            </div>
            <div className="absolute bottom-5 left-5 z-40 max-w-[78%] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)]">
                Featured Luxury Listing
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
                A private first look buyers remember.
              </h3>
              <p className="m-0 mt-5 text-[15px] leading-[1.85] text-[var(--color-text-muted)]">
                Pull the drape back, study the setting, then decide whether the privacy, scale, and view deserve a closer conversation.
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
                href={`/listings/${listing.slug}`}
                className="inline-flex items-center justify-center rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-[transform,background,border-color] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]"
              >
                Open listing
              </Link>
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

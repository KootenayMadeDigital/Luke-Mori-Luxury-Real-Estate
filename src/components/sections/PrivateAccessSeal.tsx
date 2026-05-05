"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function WebGLSeal({ opened, pointer }: { opened: boolean; pointer: { x: number; y: number } }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const openedRef = useRef(opened);
  const pointerRef = useRef(pointer);
  const smoothPointerRef = useRef(pointer);

  useEffect(() => {
    openedRef.current = opened;
    pointerRef.current = pointer;
  }, [opened, pointer]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) return;

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float u_time;
      uniform float u_open;
      uniform vec2 u_pointer;
      varying vec2 v_uv;

      float grain(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float lineSegment(vec2 p, vec2 a, vec2 b) {
        vec2 pa = p - a;
        vec2 ba = b - a;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        return length(pa - ba * h);
      }

      void main() {
        vec2 uv = v_uv;
        vec2 p = (uv - 0.5) * 2.0;
        p.x *= 1.02;
        float r = length(p);
        if (r > 1.0) discard;

        vec2 hand = (u_pointer - 0.5) * 2.0;
        hand.y *= -1.0;
        float handLight = 1.0 - smoothstep(0.0, 0.82, length(p - hand));
        float bevel = smoothstep(1.0, 0.72, r) * smoothstep(0.20, 0.72, r);
        float rim = smoothstep(0.72, 0.98, r);
        float inner = 1.0 - smoothstep(0.0, 0.58, r);
        float angle = atan(p.y, p.x);
        float ridges = sin(angle * 36.0 + sin(r * 18.0) * 0.8) * 0.5 + 0.5;
        float pressed = (1.0 - smoothstep(0.0, 0.36, length(p - hand))) * (1.0 - u_open * 0.4);
        float emboss = sin((p.x + p.y) * 20.0 + u_time * 0.18) * 0.014 + ridges * 0.025;

        vec3 blackWax = vec3(0.045, 0.030, 0.024);
        vec3 walnut = vec3(0.22, 0.13, 0.070);
        vec3 bronze = vec3(0.78, 0.55, 0.30);
        vec3 warm = vec3(1.0, 0.80, 0.50);

        float light = 0.20 + bevel * 0.48 + rim * 0.36 + handLight * 0.26 + emboss;
        light -= pressed * 0.18;
        vec3 color = mix(blackWax, walnut, bevel * 0.44 + inner * 0.18);
        color = mix(color, bronze, rim * 0.18 + handLight * 0.06);
        color += warm * (rim * 0.16 + handLight * 0.12);

        float c1 = lineSegment(p, vec2(-0.02, -0.92), vec2(0.05, -0.42));
        c1 = min(c1, lineSegment(p, vec2(0.05, -0.42), vec2(-0.06, -0.08)));
        c1 = min(c1, lineSegment(p, vec2(-0.06, -0.08), vec2(0.08, 0.24)));
        c1 = min(c1, lineSegment(p, vec2(0.08, 0.24), vec2(0.00, 0.88)));
        float crack = 1.0 - smoothstep(0.006, 0.020, c1);
        color = mix(color, vec3(1.0, 0.84, 0.55), crack * u_open * 0.62);
        color = mix(color, vec3(0.018, 0.012, 0.010), crack * u_open * 0.46);

        float ringA = 1.0 - smoothstep(0.012, 0.025, abs(r - 0.78));
        float ringB = 1.0 - smoothstep(0.010, 0.022, abs(r - 0.52));
        color += warm * (ringA * 0.16 + ringB * 0.08) * (1.0 - u_open * 0.32);
        color += vec3(grain(uv * 280.0 + u_time * 0.02)) * 0.018;

        float splitShadow = smoothstep(0.0, 0.04, abs(p.x + p.y * 0.04)) * u_open;
        color *= 1.0 - (1.0 - splitShadow) * 0.22;

        float alpha = smoothstep(1.0, 0.96, r) * (0.98 - u_open * 0.10);
        gl_FragColor = vec4(color * light, alpha);
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
    if (!vertex || !fragment) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), gl.STATIC_DRAW);
    const positionLoc = gl.getAttribLocation(program, "a_position");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const openLoc = gl.getUniformLocation(program, "u_open");
    const pointerLoc = gl.getUniformLocation(program, "u_pointer");
    const start = performance.now();
    let frame = 0;
    let smoothOpen = openedRef.current ? 1 : 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      smoothOpen += ((openedRef.current ? 1 : 0) - smoothOpen) * 0.12;
      smoothPointerRef.current = {
        x: smoothPointerRef.current.x + (pointerRef.current.x - smoothPointerRef.current.x) * 0.16,
        y: smoothPointerRef.current.y + (pointerRef.current.y - smoothPointerRef.current.y) * 0.16,
      };
      resize();
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(positionLoc);
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1f(timeLoc, (performance.now() - start) / 1000);
      gl.uniform1f(openLoc, smoothOpen);
      gl.uniform2f(pointerLoc, smoothPointerRef.current.x / 100, smoothPointerRef.current.y / 100);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}

export function PrivateAccessSeal() {
  const [opened, setOpened] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 48 });

  const updatePointer = (event: PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100),
      y: clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100),
    });
  };

  return (
    <div className="mt-10 rounded-[1.65rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.035)] p-1.5 shadow-[0_28px_90px_-70px_rgba(0,0,0,0.92)]">
      <div className="grid overflow-hidden rounded-[calc(1.65rem-0.375rem)] border border-[rgba(224,192,154,0.14)] bg-[linear-gradient(135deg,rgba(16,15,13,0.9),rgba(35,25,18,0.76),rgba(10,10,10,0.92))] sm:grid-cols-[0.82fr_1.18fr]">
        <div className="relative flex min-h-[220px] items-center justify-center border-b border-[var(--color-line)] p-8 sm:border-b-0 sm:border-r">
          <button
            type="button"
            onPointerMove={updatePointer}
            onPointerDown={updatePointer}
            onPointerUp={() => setOpened(true)}
            onClick={() => setOpened(true)}
            className="group relative aspect-square w-[min(52vw,190px)] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bronze-light)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080706]"
            aria-label={opened ? "Private access seal opened" : "Open private access seal"}
            aria-pressed={opened}
          >
            <WebGLSeal opened={opened} pointer={pointer} />
            <span className="pointer-events-none absolute inset-[22%] flex items-center justify-center rounded-full border border-[rgba(255,224,170,0.24)] text-center transition-opacity duration-500" style={{ opacity: opened ? 0 : 1 }}>
              <span>
                <span className="block text-[8px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)]">Press</span>
                <span className="mt-1 block font-serif text-[24px] font-light italic leading-none text-[var(--color-text)]">Private</span>
              </span>
            </span>
          </button>
        </div>

        <div className="p-6 sm:p-7">
          <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
            Quiet introduction
          </p>
          <h3 className="m-0 mt-4 font-serif text-[28px] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]">
            Private access starts with the same conversation.
          </h3>
          <p className="m-0 mt-4 text-[14px] leading-[1.75] text-[var(--color-text-muted)]">
            If a home should stay quiet, Luke can tell you before the market sees it. If public launch is stronger, he will tell you that too.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#consult"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-button-text)] transition-[background,border-color,transform] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-[2px] hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]"
            >
              Request Access
            </Link>
            <Link
              href="/sellers"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text)] transition-[border-color,color,transform] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-[2px] hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
            >
              Quiet Sale
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useId, useRef } from "react";

type Effect = "proof" | "waterfront" | "glass";

type ShaderEntry = {
  canvas: HTMLCanvasElement;
  effect: Effect;
  pointer: { x: number; y: number };
  intensity: number;
  revealed: boolean;
  visible: boolean;
};

type Props = {
  effect: Effect;
  pointer: { x: number; y: number };
  intensity?: number;
  revealed?: boolean;
  className?: string;
};

const entries = new Map<string, ShaderEntry>();
let gl: WebGL2RenderingContext | null = null;
let offscreen: HTMLCanvasElement | null = null;
let program: WebGLProgram | null = null;
let vao: WebGLVertexArrayObject | null = null;
let rafId: number | null = null;
let startTime = 0;
let lastRender = 0;
const FRAME_MS = 1000 / 30;

const vertexSource = `#version 300 es
precision highp float;
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentSource = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;
uniform float u_time;
uniform float u_effect;
uniform float u_intensity;
uniform float u_revealed;
uniform vec2 u_pointer;
uniform vec2 u_resolution;

float hash(vec2 p) {
  p = fract(p * vec2(127.1, 311.7));
  p += dot(p, p + 19.19);
  return fract(p.x * p.y);
}

float softCircle(vec2 uv, vec2 center, float radius, float softness) {
  float aspect = u_resolution.x / max(u_resolution.y, 1.0);
  vec2 d = vec2((uv.x - center.x) * aspect, uv.y - center.y);
  return 1.0 - smoothstep(radius, radius + softness, length(d));
}

void main() {
  vec2 uv = v_uv;
  vec2 pointer = u_pointer;
  float grain = hash(uv * u_resolution.xy * 0.42 + u_time * 0.8);
  float lens = softCircle(uv, pointer, 0.18, 0.045);
  float lensWide = softCircle(uv, pointer, 0.28, 0.13);
  vec2 centered = uv - 0.5;
  float vignette = smoothstep(0.92, 0.12, length(centered));

  vec3 color = vec3(0.0);
  float alpha = 0.0;

  if (u_effect < 0.5) {
    float gridA = 1.0 - smoothstep(0.0, 0.012, abs(fract(uv.x * 22.0) - 0.5));
    float gridB = 1.0 - smoothstep(0.0, 0.012, abs(fract(uv.y * 16.0) - 0.5));
    float glass = (gridA + gridB) * 0.018;
    float rim = smoothstep(0.68, 1.0, lens) * (1.0 - smoothstep(0.96, 1.0, lens));
    float sweep = sin((uv.x * 1.8 + uv.y * 0.7 - u_time * 0.22) * 6.28318) * 0.5 + 0.5;
    color = vec3(0.88, 0.82, 0.72) * (glass + grain * 0.026 + lensWide * 0.034 + rim * 0.28 + sweep * lens * 0.035);
    color += vec3(1.0, 0.86, 0.58) * rim * 0.20;
    alpha = (0.12 + lensWide * 0.15 + rim * 0.44 + grain * 0.022) * u_intensity * (1.0 - u_revealed * 0.82) * vignette;
  } else if (u_effect < 1.5) {
    float caustic = sin((uv.x * 9.0 + sin(uv.y * 5.0 + u_time * 0.42)) + u_time * 0.55);
    caustic += sin((uv.x * 17.0 - uv.y * 7.0) - u_time * 0.32) * 0.55;
    caustic = smoothstep(0.72, 1.0, caustic * 0.5 + 0.5);
    color = vec3(0.70, 0.88, 0.84) * caustic + vec3(0.98, 0.78, 0.45) * caustic * 0.18;
    alpha = caustic * 0.18 * u_intensity * vignette;
  } else {
    float sheen = smoothstep(0.0, 0.04, abs(fract((uv.x + uv.y * 0.5 - u_time * 0.12) * 2.2) - 0.5));
    float rim = 1.0 - smoothstep(0.42, 0.72, length(centered));
    color = vec3(0.95, 0.88, 0.74) * (1.0 - sheen) * 0.15 + vec3(0.65, 0.88, 1.0) * lensWide * 0.06;
    alpha = (1.0 - sheen) * rim * 0.22 * u_intensity;
  }

  fragColor = vec4(color, alpha);
}`;

function effectToUniform(effect: Effect): number {
  if (effect === "waterfront") return 1;
  if (effect === "glass") return 2;
  return 0;
}

function supportsWebGL2() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

function compileShader(ctx: WebGL2RenderingContext, source: string, type: number) {
  const shader = ctx.createShader(type);
  if (!shader) return null;
  ctx.shaderSource(shader, source);
  ctx.compileShader(shader);
  if (!ctx.getShaderParameter(shader, ctx.COMPILE_STATUS)) {
    ctx.deleteShader(shader);
    return null;
  }
  return shader;
}

function initSingleton() {
  if (gl && program && vao && offscreen) return true;
  if (!supportsWebGL2()) return false;

  offscreen = document.createElement("canvas");
  const ctx = offscreen.getContext("webgl2", { alpha: true, antialias: true, premultipliedAlpha: false });
  if (!ctx) return false;

  const vertex = compileShader(ctx, vertexSource, ctx.VERTEX_SHADER);
  const fragment = compileShader(ctx, fragmentSource, ctx.FRAGMENT_SHADER);
  if (!vertex || !fragment) return false;

  const nextProgram = ctx.createProgram();
  if (!nextProgram) return false;
  ctx.attachShader(nextProgram, vertex);
  ctx.attachShader(nextProgram, fragment);
  ctx.linkProgram(nextProgram);
  ctx.deleteShader(vertex);
  ctx.deleteShader(fragment);
  if (!ctx.getProgramParameter(nextProgram, ctx.LINK_STATUS)) return false;

  const nextVao = ctx.createVertexArray();
  const buffer = ctx.createBuffer();
  if (!nextVao || !buffer) return false;
  ctx.bindVertexArray(nextVao);
  ctx.bindBuffer(ctx.ARRAY_BUFFER, buffer);
  ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), ctx.STATIC_DRAW);
  const positionLoc = ctx.getAttribLocation(nextProgram, "a_position");
  ctx.enableVertexAttribArray(positionLoc);
  ctx.vertexAttribPointer(positionLoc, 2, ctx.FLOAT, false, 0, 0);
  ctx.bindVertexArray(null);
  ctx.enable(ctx.BLEND);
  ctx.blendFunc(ctx.SRC_ALPHA, ctx.ONE_MINUS_SRC_ALPHA);

  gl = ctx;
  program = nextProgram;
  vao = nextVao;
  startTime = performance.now();
  return true;
}

function render(timestamp: number) {
  if (!gl || !program || !vao || !offscreen) return;
  if (timestamp - lastRender < FRAME_MS) {
    rafId = requestAnimationFrame(render);
    return;
  }
  lastRender = timestamp;

  let hasVisible = false;
  const time = ((timestamp - startTime) / 1000) % 1000;
  const locTime = gl.getUniformLocation(program, "u_time");
  const locEffect = gl.getUniformLocation(program, "u_effect");
  const locIntensity = gl.getUniformLocation(program, "u_intensity");
  const locRevealed = gl.getUniformLocation(program, "u_revealed");
  const locPointer = gl.getUniformLocation(program, "u_pointer");
  const locResolution = gl.getUniformLocation(program, "u_resolution");

  for (const entry of entries.values()) {
    if (!entry.visible) continue;
    hasVisible = true;
    const rect = entry.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(rect.width * dpr));
    const height = Math.max(1, Math.floor(rect.height * dpr));
    if (entry.canvas.width !== width) entry.canvas.width = width;
    if (entry.canvas.height !== height) entry.canvas.height = height;
    if (offscreen.width !== width) offscreen.width = width;
    if (offscreen.height !== height) offscreen.height = height;

    gl.viewport(0, 0, width, height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindVertexArray(vao);
    gl.uniform1f(locTime, time);
    gl.uniform1f(locEffect, effectToUniform(entry.effect));
    gl.uniform1f(locIntensity, entry.intensity);
    gl.uniform1f(locRevealed, entry.revealed ? 1 : 0);
    gl.uniform2f(locPointer, entry.pointer.x / 100, entry.pointer.y / 100);
    gl.uniform2f(locResolution, width, height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    const ctx2d = entry.canvas.getContext("2d");
    ctx2d?.clearRect(0, 0, width, height);
    ctx2d?.drawImage(offscreen, 0, 0, width, height);
  }

  if (hasVisible) rafId = requestAnimationFrame(render);
  else rafId = null;
}

function ensureLoop() {
  if (rafId === null) rafId = requestAnimationFrame(render);
}

export function LuxuryShaderSurface({ effect, pointer, intensity = 1, revealed = false, className = "" }: Props) {
  const id = useId();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !initSingleton()) return;
    entries.set(id, { canvas, effect: "proof", pointer: { x: 50, y: 50 }, intensity: 1, revealed: false, visible: true });
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      const current = entries.get(id);
      if (current) {
        current.visible = entry.isIntersecting;
        if (entry.isIntersecting) ensureLoop();
      }
    }, { threshold: 0.02 });
    observer.observe(canvas);
    ensureLoop();
    return () => {
      observer.disconnect();
      entries.delete(id);
    };
  }, [id]);

  useEffect(() => {
    const entry = entries.get(id);
    if (!entry) return;
    entry.effect = effect;
    entry.pointer = pointer;
    entry.intensity = intensity;
    entry.revealed = revealed;
    ensureLoop();
  }, [effect, id, intensity, pointer, revealed]);

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 h-full w-full motion-reduce:hidden ${className}`} aria-hidden />;
}

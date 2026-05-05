"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import * as THREE from "three";

type SoldProof = {
  image: string;
  imageAlt: string;
  status: string;
  address: string;
  area: string;
  type: string;
  offered: string;
};

type Props = {
  lead: SoldProof;
  note: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

type IceShard = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  tint: string;
  drift: number;
};

type FrozenArchiveSceneProps = {
  pointer: { x: number; y: number };
  thaw: number;
};

function FrozenArchiveScene({ pointer, thaw }: FrozenArchiveSceneProps) {
  const shellRef = useRef<THREE.Group>(null);
  const rimRef = useRef<THREE.Mesh>(null);
  const heatRef = useRef<THREE.PointLight>(null);
  const shards = useMemo<IceShard[]>(() => {
    return [
      { position: [-1.96, 1.12, 0.2], rotation: [0.08, -0.18, -0.52], scale: [0.46, 2.8, 0.026], tint: "#e9fbff", drift: 0.42 },
      { position: [-0.86, 0.72, 0.28], rotation: [-0.04, 0.2, -0.44], scale: [0.22, 2.45, 0.018], tint: "#ccebf1", drift: 0.58 },
      { position: [0.42, 0.18, 0.24], rotation: [0.05, -0.1, -0.36], scale: [0.3, 3.18, 0.02], tint: "#f5efe1", drift: 0.36 },
      { position: [1.54, -0.2, 0.3], rotation: [-0.08, 0.16, -0.43], scale: [0.38, 3.45, 0.022], tint: "#d9f5fb", drift: 0.64 },
      { position: [2.24, 0.52, 0.22], rotation: [0.04, -0.14, -0.5], scale: [0.16, 2.72, 0.018], tint: "#f7e8cf", drift: 0.51 },
    ];
  }, []);

  useFrame((state) => {
    const px = pointer.x / 100 - 0.5;
    const py = pointer.y / 100 - 0.5;
    const time = state.clock.elapsedTime;
    const freeze = 1 - thaw;

    if (shellRef.current) {
      shellRef.current.rotation.y = THREE.MathUtils.lerp(shellRef.current.rotation.y, px * 0.1 * freeze, 0.055);
      shellRef.current.rotation.x = THREE.MathUtils.lerp(shellRef.current.rotation.x, -py * 0.065 * freeze, 0.055);
      shellRef.current.position.z = THREE.MathUtils.lerp(shellRef.current.position.z, thaw * -0.28, 0.045);
      shellRef.current.scale.setScalar(THREE.MathUtils.lerp(shellRef.current.scale.x, 1 + thaw * 0.035, 0.05));
    }

    if (rimRef.current) {
      const material = rimRef.current.material as THREE.MeshPhysicalMaterial;
      material.opacity = THREE.MathUtils.lerp(material.opacity, 0.38 * freeze, 0.07);
      rimRef.current.rotation.z = Math.sin(time * 0.18) * 0.006;
    }

    if (heatRef.current) {
      heatRef.current.position.x = px * 4.2;
      heatRef.current.position.y = -py * 2.6;
      heatRef.current.intensity = THREE.MathUtils.lerp(heatRef.current.intensity, 0.55 + thaw * 2.8, 0.08);
    }
  });

  return (
    <>
      <ambientLight intensity={1.15} color="#cde7ec" />
      <directionalLight position={[-3.2, 2.2, 4.8]} intensity={2.4} color="#f8fdff" />
      <directionalLight position={[3.4, -1.7, 3.1]} intensity={1.1} color="#d4b896" />
      <pointLight ref={heatRef} position={[0, 0, 2.1]} intensity={1.6} distance={5.5} color="#ffe0ad" />

      <group ref={shellRef} position={[0, 0, 0]}>
        <mesh ref={rimRef} position={[0, 0, 0.02]}>
          <boxGeometry args={[5.92, 3.38, 0.06]} />
          <meshPhysicalMaterial
            color="#dff7fb"
            transparent
            opacity={0.38}
            roughness={0.18}
            metalness={0}
            transmission={0.54}
            thickness={0.72}
            ior={1.31}
            clearcoat={1}
            clearcoatRoughness={0.05}
            depthWrite={false}
          />
        </mesh>

        {shards.map((shard, index) => (
          <mesh key={index} position={shard.position} rotation={shard.rotation} scale={shard.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial
              color={shard.tint}
              transparent
              opacity={Math.max(0.05, 0.36 - thaw * 0.31)}
              roughness={0.1 + shard.drift * 0.08}
              transmission={0.62}
              thickness={0.36}
              ior={1.32}
              clearcoat={1}
              clearcoatRoughness={0.03}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

export function FrostedSoldProof({ lead, note }: Props) {
  const [pointer, setPointer] = useState({ x: 50, y: 44 });
  const [thaw, setThaw] = useState(0.08);

  const updatePointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });
    setThaw((current) => clamp(current + (event.buttons ? 0.06 : 0.022), 0.08, 0.86));
  };

  const chill = () => setThaw((current) => clamp(current - 0.035, 0.08, 0.86));
  const thawNow = () => setThaw((current) => clamp(current + 0.22, 0.08, 0.86));
  const freeze = 1 - thaw;
  const thawRadius = 10 + thaw * 34;

  const archiveStyle = {
    "--heat-x": `${pointer.x}%`,
    "--heat-y": `${pointer.y}%`,
    "--thaw": thaw,
    "--freeze": freeze,
    "--thaw-radius": `${thawRadius}%`,
  } as CSSProperties;

  const frostMask = {
    WebkitMaskImage: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, transparent 0%, transparent ${Math.max(0, thawRadius - 12)}%, rgba(0,0,0,0.42) ${thawRadius}%, black ${thawRadius + 18}%)`,
    maskImage: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, transparent 0%, transparent ${Math.max(0, thawRadius - 12)}%, rgba(0,0,0,0.42) ${thawRadius}%, black ${thawRadius + 18}%)`,
  } as CSSProperties;

  return (
    <article
      className="luxury-card group relative min-h-[540px] cursor-crosshair overflow-hidden border border-[rgba(223,247,251,0.24)] bg-[var(--color-surface)] shadow-[0_38px_120px_-58px_rgba(0,0,0,0.92)]"
      onPointerMove={updatePointer}
      onPointerDown={(event) => {
        updatePointer(event);
        thawNow();
      }}
      onPointerLeave={chill}
      style={archiveStyle}
      aria-label={`${lead.address}, sold proof. Drag across the frozen archive to thaw the public result.`}
    >
      <Image
        src={lead.image}
        alt={lead.imageAlt}
        fill
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="luxury-media object-cover transition-transform duration-1000 ease-[var(--ease-luxe)] group-hover:scale-[1.018] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={{ filter: `saturate(${0.82 + thaw * 0.22}) contrast(${0.9 + thaw * 0.12}) brightness(${0.74 + thaw * 0.16})` }}
        priority
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,12,0.12),rgba(6,10,12,0.18)_30%,rgba(6,10,12,0.58)_64%,rgba(6,10,12,0.95))]" />

      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
        style={{ ...frostMask, opacity: 0.94 - thaw * 0.46 }}
        aria-hidden
      >
        <Image
          src={lead.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-cover blur-[13px] saturate-[0.42] brightness-[0.56] scale-[1.06]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.26),transparent_28%),radial-gradient(circle_at_72%_12%,rgba(181,224,236,0.18),transparent_32%),linear-gradient(135deg,rgba(229,251,255,0.42),rgba(150,191,203,0.2)_42%,rgba(7,12,14,0.64))]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
        style={{ opacity: 1 - thaw * 0.7 }}
        aria-hidden
      >
        <Canvas
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 5.2], fov: 38 }}
          dpr={[1, 1.65]}
        >
          <FrozenArchiveScene pointer={pointer} thaw={thaw} />
        </Canvas>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-30 mix-blend-screen transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
        style={{ opacity: 0.78 - thaw * 0.42 }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[linear-gradient(102deg,transparent_8%,rgba(255,255,255,0.26)_18%,transparent_25%,transparent_42%,rgba(213,246,255,0.2)_49%,transparent_57%,rgba(255,236,204,0.14)_78%,transparent_87%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(54deg,transparent_14%,rgba(255,255,255,0.16)_14.4%,transparent_15.2%),linear-gradient(126deg,transparent_38%,rgba(221,247,255,0.18)_38.4%,transparent_39.2%),linear-gradient(71deg,transparent_65%,rgba(255,255,255,0.13)_65.5%,transparent_66.3%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--heat-x)_var(--heat-y),rgba(255,235,196,0.48),rgba(180,229,240,0.18)_18%,transparent_38%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
        style={{ ...frostMask, opacity: 0.86 - thaw * 0.58 }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.11)_0_1px,transparent_1px_5px),repeating-linear-gradient(118deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_18px),radial-gradient(circle_at_50%_50%,rgba(235,252,255,0.2),rgba(121,158,170,0.22)_44%,rgba(3,7,9,0.1)_100%)]" />
      </div>

      <div className="absolute left-6 top-6 z-40 rounded-[1px] border border-[rgba(255,255,255,0.34)] bg-[rgba(6,10,12,0.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_34px_-18px_rgba(0,0,0,0.95)]">
        {lead.status}
      </div>

      <button
        type="button"
        className="absolute right-5 top-5 z-40 rounded-full border border-[rgba(223,247,251,0.42)] bg-[rgba(6,10,12,0.78)] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_40px_-28px_rgba(0,0,0,0.95)] transition-[background,border-color,color,transform] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze-light)] hover:text-[var(--color-bronze-light)] motion-reduce:transition-none md:hidden"
        onClick={(event) => {
          event.stopPropagation();
          thawNow();
        }}
      >
        Thaw
      </button>

      <div className="absolute inset-x-0 bottom-0 z-40 p-7 sm:p-9">
        <div className="mb-6 font-serif text-[62px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,251,252,0.97)] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] sm:text-[88px]">
          Sold
        </div>
        <div className="grid grid-cols-1 gap-5 border-t border-[rgba(226,249,255,0.24)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="m-0 mb-3 inline-flex border border-[rgba(223,247,251,0.28)] bg-[rgba(6,10,12,0.62)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Drag to thaw the archived proof.
            </p>
            <h2 className="m-0 inline-flex bg-[rgba(6,10,12,0.48)] px-3 py-2 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.94)] sm:text-[44px]">
              {lead.address}
            </h2>
            <p className="m-0 mt-3 inline-flex bg-[rgba(6,10,12,0.44)] px-3 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              {lead.area} · {lead.type}
            </p>
            <p className="m-0 mt-3 max-w-[620px] bg-[rgba(6,10,12,0.42)] px-3 py-2 text-[14px] leading-[1.65] text-white/90">
              {note}
            </p>
          </div>
          <div className="justify-self-start bg-[rgba(6,10,12,0.46)] px-4 py-2 font-serif text-[30px] italic text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] sm:justify-self-end">
            {lead.offered}
          </div>
        </div>
      </div>
    </article>
  );
}

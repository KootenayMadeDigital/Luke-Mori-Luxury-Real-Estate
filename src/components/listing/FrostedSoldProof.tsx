"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
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

type PrivacyGlassSceneProps = {
  pointer: { x: number; y: number };
  revealed: boolean;
};

function PrivacyGlassScene({ pointer, revealed }: PrivacyGlassSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const mainPaneRef = useRef<THREE.Mesh>(null);
  const upperPaneRef = useRef<THREE.Mesh>(null);
  const lowerPaneRef = useRef<THREE.Mesh>(null);
  const sweepRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const px = pointer.x / 100 - 0.5;
    const py = pointer.y / 100 - 0.5;
    const open = revealed ? 1 : 0;
    const targetOpacity = revealed ? 0 : 1;
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, px * 0.14, 0.065);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -py * 0.08, 0.065);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, revealed ? -0.34 : 0, 0.06);
      groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, revealed ? 1.08 : 1, 0.06);
    }

    for (const mesh of [mainPaneRef.current, upperPaneRef.current, lowerPaneRef.current]) {
      const material = mesh?.material as THREE.MeshPhysicalMaterial | undefined;
      if (material) material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity * 0.2, 0.08);
    }

    if (mainPaneRef.current) {
      mainPaneRef.current.position.x = THREE.MathUtils.lerp(mainPaneRef.current.position.x, open * 1.2 + px * 0.08, 0.055);
      mainPaneRef.current.rotation.z = THREE.MathUtils.lerp(mainPaneRef.current.rotation.z, open * -0.018, 0.055);
    }
    if (upperPaneRef.current) {
      upperPaneRef.current.position.x = THREE.MathUtils.lerp(upperPaneRef.current.position.x, -1.1 + open * -2.2 - px * 0.1, 0.055);
      upperPaneRef.current.position.y = THREE.MathUtils.lerp(upperPaneRef.current.position.y, 0.28 + open * 0.16, 0.055);
    }
    if (lowerPaneRef.current) {
      lowerPaneRef.current.position.x = THREE.MathUtils.lerp(lowerPaneRef.current.position.x, 1.22 + open * 2.2 + px * 0.08, 0.055);
      lowerPaneRef.current.position.y = THREE.MathUtils.lerp(lowerPaneRef.current.position.y, -0.18 - open * 0.14, 0.055);
    }
    if (sweepRef.current) {
      const material = sweepRef.current.material as THREE.MeshBasicMaterial;
      sweepRef.current.position.x = -2.2 + ((time * 0.22) % 4.6);
      sweepRef.current.rotation.z = -0.46;
      material.opacity = THREE.MathUtils.lerp(material.opacity, revealed ? 0 : 0.16, 0.06);
    }
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[-3.2, 2.4, 4.5]} intensity={2.1} color="#ffe7c3" />
      <directionalLight position={[3.4, -1.6, 3.2]} intensity={0.65} color="#bcd6df" />
      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh ref={mainPaneRef} position={[0.08, -0.04, -0.02]} rotation={[0.012, -0.025, 0]}>
          <planeGeometry args={[5.8, 3.25, 12, 8]} />
          <meshPhysicalMaterial
            color="#ead6ba"
            side={THREE.DoubleSide}
            transparent
            opacity={0.2}
            roughness={0.08}
            metalness={0.02}
            transmission={0.5}
            thickness={0.42}
            ior={1.46}
            clearcoat={1}
            clearcoatRoughness={0.06}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={upperPaneRef} position={[-1.1, 0.28, 0.08]} rotation={[0, 0, -0.34]}>
          <boxGeometry args={[0.42, 5.8, 0.018]} />
          <meshPhysicalMaterial
            color="#f5e5cc"
            transparent
            opacity={0.2}
            roughness={0.1}
            transmission={0.58}
            thickness={0.48}
            ior={1.5}
            clearcoat={1}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={lowerPaneRef} position={[1.22, -0.18, 0.09]} rotation={[0, 0, -0.34]}>
          <boxGeometry args={[0.32, 5.6, 0.016]} />
          <meshPhysicalMaterial
            color="#dec19b"
            transparent
            opacity={0.18}
            roughness={0.12}
            transmission={0.48}
            thickness={0.34}
            ior={1.42}
            clearcoat={1}
            depthWrite={false}
          />
        </mesh>

        <mesh ref={sweepRef} position={[-2.2, 0.18, 0.14]}>
          <planeGeometry args={[0.16, 4.8]} />
          <meshBasicMaterial color="#fff2d8" transparent opacity={0.16} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      </group>
    </>
  );
}

export function FrostedSoldProof({ lead, note }: Props) {
  const [pointer, setPointer] = useState({ x: 50, y: 44 });
  const [revealed, setRevealed] = useState(false);

  const updatePointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });
  };

  const focusStyle = {
    "--lens-x": `${pointer.x}%`,
    "--lens-y": `${pointer.y}%`,
  } as CSSProperties;

  return (
    <article
      className="luxury-card group relative min-h-[540px] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_34px_100px_-64px_rgba(0,0,0,0.82)]"
      onPointerMove={updatePointer}
      onPointerDown={updatePointer}
      onClick={() => setRevealed((current) => !current)}
      style={focusStyle}
      aria-label={`${lead.address}, sold proof. Public result shown, private details protected.`}
    >
      <Image
        src={lead.image}
        alt={lead.imageAlt}
        fill
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="luxury-media object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        priority
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.06),rgba(10,11,13,0.08)_30%,rgba(10,11,13,0.62)_64%,rgba(10,11,13,0.96))]" />

      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
        style={{ opacity: revealed ? 0 : 1 }}
        aria-hidden
      >
        <Image
          src={lead.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-cover blur-[7px] saturate-[0.72] brightness-[0.62] scale-[1.035]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,236,222,0.12),rgba(10,11,13,0.24)_42%,rgba(10,11,13,0.72)),radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.13),transparent_36%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
        style={{ opacity: revealed ? 0 : 1 }}
        aria-hidden
      >
        <Canvas
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 5.2], fov: 38 }}
          dpr={[1, 1.65]}
        >
          <PrivacyGlassScene pointer={pointer} revealed={revealed} />
        </Canvas>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_var(--lens-x)_var(--lens-y),rgba(255,255,255,0.11),transparent_24%),linear-gradient(116deg,transparent_18%,rgba(255,255,255,0.12)_32%,transparent_43%,rgba(224,192,154,0.06)_70%,transparent_82%)] transition-opacity duration-500 motion-reduce:hidden"
        style={{ opacity: revealed ? 0 : 0.72 }}
        aria-hidden
      />

      <div className="absolute left-6 top-6 z-40 rounded-[1px] border border-[rgba(255,255,255,0.34)] bg-[rgba(10,11,13,0.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_34px_-18px_rgba(0,0,0,0.95)] backdrop-blur-sm">
        {lead.status}
      </div>

      <button
        type="button"
        className="absolute right-5 top-5 z-40 rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(10,11,13,0.74)] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_40px_-28px_rgba(0,0,0,0.95)] transition-[background,border-color,color] duration-300 hover:border-[var(--color-bronze-light)] hover:text-[var(--color-bronze-light)] md:hidden"
        onClick={(event) => {
          event.stopPropagation();
          setRevealed((current) => !current);
        }}
      >
        {revealed ? "Frost" : "Reveal"}
      </button>

      <div className="absolute inset-x-0 bottom-0 z-40 p-7 sm:p-9">
        <div className="mb-6 font-serif text-[62px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,239,229,0.96)] drop-shadow-[0_4px_28px_rgba(0,0,0,0.92)] sm:text-[88px]">
          Sold
        </div>
        <div className="grid grid-cols-1 gap-5 border-t border-[rgba(245,239,229,0.22)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="m-0 mb-3 inline-flex border border-[rgba(255,255,255,0.22)] bg-[rgba(10,11,13,0.54)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.88)] backdrop-blur-[2px]">
              Public result. Private details protected.
            </p>
            <h2 className="m-0 inline-flex bg-[rgba(10,11,13,0.38)] px-3 py-2 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-[2px] sm:text-[44px]">
              {lead.address}
            </h2>
            <p className="m-0 mt-3 inline-flex bg-[rgba(10,11,13,0.34)] px-3 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] backdrop-blur-[2px]">
              {lead.area} · {lead.type}
            </p>
            <p className="m-0 mt-3 max-w-[620px] bg-[rgba(10,11,13,0.34)] px-3 py-2 text-[14px] leading-[1.65] text-white/90 backdrop-blur-[2px]">
              {note}
            </p>
          </div>
          <div className="justify-self-start bg-[rgba(10,11,13,0.34)] px-4 py-2 font-serif text-[30px] italic text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-[2px] sm:justify-self-end">
            {lead.offered}
          </div>
        </div>
      </div>
    </article>
  );
}

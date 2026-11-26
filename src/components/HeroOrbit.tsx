"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * A frosted-glass ring and two small spheres around the lighthouse, built with
 * React Three Fiber. Two canvases are stacked: the "back" one sits behind the
 * lighthouse image (rear half of the ring), the "front" one sits above it (front
 * half of the ring that sweeps across the plinth, plus the spheres).
 */

type Mouse = { x: number; y: number };
const TILT = 0.8;
const SPIN = 0.13;
const CENTER = { x: 0.775, y: 0.74 };

const ORANGE = new THREE.Color("#ff3b00");
const PEACH = new THREE.Color("#ffd0c0");
const FROST = new THREE.Color("#f1eeea");
const WHITE = new THREE.Color("#f7f5f2");

/** Ring arc in the xz plane (z>0 faces the camera). The tube is thick at the back and thin at the front. */
function ringGeometry(R: number, start: number) {
  const nA = 96;
  const nP = 36;
  const pos: number[] = [];
  const col: number[] = [];
  const idx: number[] = [];
  const c = new THREE.Color();
  const r0 = R * 0.15;
  const dr = R * 0.06;
  for (let i = 0; i <= nA; i++) {
    const al = start + (Math.PI * i) / nA;
    const ux = Math.cos(al);
    const uz = Math.sin(al);
    const r = r0 - dr * uz; // thick back (uz<0), thin front (uz>0)
    for (let j = 0; j <= nP; j++) {
      const ph = (j / nP) * Math.PI * 2;
      const rad = R + r * Math.cos(ph);
      pos.push(rad * ux, r * Math.sin(ph), rad * uz);
      // light orange on the left, melting to frosted white; the front turns white
      const t = THREE.MathUtils.smoothstep(ux, -0.5, 0.85);
      c.copy(ORANGE).lerp(PEACH, Math.min(1, t * 1.7)).lerp(FROST, Math.max(0, t - 0.4) / 0.6);
      c.lerp(WHITE, THREE.MathUtils.smoothstep(uz, -0.1, 0.75) * 0.88);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let i = 0; i < nA; i++) {
    for (let j = 0; j < nP; j++) {
      const p = i * (nP + 1) + j;
      const q = p + nP + 1;
      idx.push(p, q, p + 1, q, q + 1, p + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function Scene({ part, mouse }: { part: "back" | "front"; mouse: React.MutableRefObject<Mouse> }) {
  const { size, gl, scene } = useThree();
  const w = size.width;
  const h = size.height;
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const orange = useRef<THREE.Mesh>(null);
  const glass = useRef<THREE.Mesh>(null);

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1;
    const pm = new THREE.PMREMGenerator(gl);
    const env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.85;
    return () => {
      env.dispose();
      pm.dispose();
    };
  }, [gl, scene]);

  const R = w * 0.19;
    const geo = useMemo(() => ringGeometry(R, part === "back" ? Math.PI : 0), [R, part]);
  useEffect(() => () => geo.dispose(), [geo]);

  const cx = (CENTER.x - 0.5) * w;
  const cy = (0.5 - CENTER.y) * h;
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useFrame(({ clock }) => {
    const t = reduce ? 0 : clock.elapsedTime;
    if (outer.current && inner.current) {
      outer.current.rotation.z = SPIN + Math.sin(t * 0.4) * 0.03 + mouse.current.x * 0.07;
      inner.current.rotation.x = TILT + mouse.current.y * 0.07;
    }
    if (orange.current) orange.current.position.set(cx - w * 0.2 + mouse.current.x * -16, (0.5 - 0.8) * h + Math.sin(t * 1.3) * 8, 40);
    if (glass.current) glass.current.position.set((0.905 - 0.5) * w + mouse.current.x * -24, (0.5 - 0.2) * h + Math.sin(t * 1.1 + 2) * 10, 40);
  });

  return (
    <>
      <directionalLight position={[-500, 700, 900]} intensity={1.8} color="#fff4e6" />
      <ambientLight intensity={0.8} color="#ffeedd" />
      <group ref={outer} position={[cx, cy, 0]}>
        <group ref={inner}>
          <mesh geometry={geo}>
            <meshPhysicalMaterial
              vertexColors
              roughness={0.52}
              metalness={0}
              clearcoat={0.35}
              clearcoatRoughness={0.4}
              sheen={0.7}
              sheenRoughness={0.5}
              sheenColor="#ffffff"
            />
          </mesh>
        </group>
      </group>
      {part === "front" && (
        <>
          <mesh ref={orange} scale={w * 0.0165}>
            <sphereGeometry args={[1, 48, 48]} />
            <meshPhysicalMaterial color="#ff3b00" roughness={0.3} clearcoat={1} clearcoatRoughness={0.12} />
          </mesh>
          <mesh ref={glass} scale={w * 0.02}>
            <sphereGeometry args={[1, 48, 48]} />
            <meshPhysicalMaterial color="#ffffff" roughness={0.2} clearcoat={1} clearcoatRoughness={0.08} />
          </mesh>
        </>
      )}
    </>
  );
}

export default function HeroOrbit() {
  const [on, setOn] = useState(false);
  const [visible, setVisible] = useState(true);
  const host = useRef<HTMLDivElement>(null);
  const mouse = useRef<Mouse>({ x: 0, y: 0 });
  const target = useRef<Mouse>({ x: 0, y: 0 });

  useEffect(() => {
    setOn(!window.matchMedia("(max-width: 900px)").matches);
  }, []);

  useEffect(() => {
    if (!on) return;
    const el = host.current?.parentElement;
    if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.current = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 };
    };
    let raf = 0;
    const ease = () => {
      mouse.current.x += (target.current.x - mouse.current.x) * 0.06;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.06;
      raf = requestAnimationFrame(ease);
    };
    raf = requestAnimationFrame(ease);
    el.addEventListener("pointermove", move);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      io.disconnect();
    };
  }, [on]);

  if (!on) return <div ref={host} hidden />;

  const canvas = (part: "back" | "front", cls: string) => (
    <div className={`orbit-canvas ${cls}`} aria-hidden="true">
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1500], near: 1, far: 4000, zoom: 1 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        frameloop={visible ? "always" : "never"}
        style={{ pointerEvents: "none" }}
      >
        <Scene part={part} mouse={mouse} />
      </Canvas>
    </div>
  );

  return (
    <div ref={host} style={{ display: "contents" }}>
      {canvas("back", "orbit-back")}
      {canvas("front", "orbit-front")}
    </div>
  );
}

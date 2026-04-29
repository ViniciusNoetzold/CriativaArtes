import { Float, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './ThreeScenes.module.css';

function canCreateWebGLContext() {
  const canvas = document.createElement('canvas');
  const context =
    canvas.getContext('webgl2') ||
    canvas.getContext('webgl') ||
    canvas.getContext('experimental-webgl');

  return Boolean(context);
}

function FloatingOrb({ color, position, scale, speed }) {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed;
    ref.current.position.x = position[0] + Math.sin(t) * 0.24;
    ref.current.position.y = position[1] + Math.cos(t * 0.8) * 0.2;
    ref.current.rotation.x = t * 0.18;
    ref.current.rotation.y = t * 0.12;
  });

  return (
    <Float speed={speed} floatIntensity={0.6} rotationIntensity={0.35}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
}

function NeonRibbon({ color, position, rotation, scale, speed }) {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = rotation[0] + Math.sin(clock.elapsedTime * speed) * 0.1;
    ref.current.rotation.y = rotation[1] + clock.elapsedTime * speed * 0.18;
    ref.current.rotation.z = rotation[2] + Math.cos(clock.elapsedTime * speed) * 0.08;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
      <torusKnotGeometry args={[0.82, 0.045, 160, 12]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.55}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function AbstractConstellation() {
  const group = useRef(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.35) * 0.18;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.22) * 0.08;
  });

  return (
    <group ref={group} position={[0, -0.05, -0.4]}>
      <Float speed={1.35} floatIntensity={0.5} rotationIntensity={0.45}>
        <mesh position={[-1.15, -2.1, -0.25]} rotation={[0.4, 0.5, 0.2]} scale={[0.7, 0.7, 0.7]}>
          <torusKnotGeometry args={[0.42, 0.09, 100, 12]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.6} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.05} floatIntensity={0.42} rotationIntensity={0.35}>
        <mesh position={[1.25, -1.95, -0.1]} rotation={[0.8, -0.25, 0.4]} scale={[0.55, 0.55, 0.55]}>
          <torusKnotGeometry args={[0.48, 0.055, 120, 10]} />
          <meshStandardMaterial color="#ffe600" emissive="#ffe600" emissiveIntensity={0.7} roughness={0.24} />
        </mesh>
      </Float>
      <Float speed={1.55} floatIntensity={0.36} rotationIntensity={0.55}>
        <mesh position={[-2.75, 0.95, -0.15]} rotation={[0.5, 0.25, -0.7]} scale={[0.82, 0.82, 0.82]}>
          <torusGeometry args={[0.62, 0.045, 20, 96]} />
          <meshBasicMaterial color="#00e5ff" transparent opacity={0.58} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
      <Float speed={1.25} floatIntensity={0.38} rotationIntensity={0.45}>
        <mesh position={[2.7, 0.85, -0.12]} rotation={[0.7, -0.4, 0.6]} scale={[0.78, 0.78, 0.78]}>
          <torusGeometry args={[0.62, 0.045, 20, 96]} />
          <meshBasicMaterial color="#ff2d9b" transparent opacity={0.58} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
      <Float speed={0.95} floatIntensity={0.34} rotationIntensity={0.4}>
        <mesh position={[0, 1.95, -0.35]} rotation={[0.2, 0.8, 0.2]} scale={[0.72, 0.72, 0.72]}>
          <octahedronGeometry args={[0.8, 1]} />
          <meshBasicMaterial color="#39ff14" wireframe transparent opacity={0.42} />
        </mesh>
      </Float>
    </group>
  );
}

function HeroWireframes() {
  const left = useRef(null);
  const right = useRef(null);

  useFrame(({ clock }) => {
    if (left.current) {
      left.current.rotation.x = clock.elapsedTime * 0.22;
      left.current.rotation.y = clock.elapsedTime * 0.32;
    }
    if (right.current) {
      right.current.rotation.x = -clock.elapsedTime * 0.18;
      right.current.rotation.y = clock.elapsedTime * 0.28;
    }
  });

  return (
    <>
      <mesh ref={left} position={[-4.1, 0.45, 0.15]} scale={[0.82, 0.82, 0.82]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.46} />
      </mesh>
      <mesh ref={right} position={[4.1, 0.32, 0.15]} scale={[0.78, 0.78, 0.78]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#ff2d9b" wireframe transparent opacity={0.46} />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  const [canRenderCanvas, setCanRenderCanvas] = useState(false);

  useEffect(() => {
    setCanRenderCanvas(canCreateWebGLContext());
  }, []);

  if (!canRenderCanvas) {
    return null;
  }

  return (
    <Canvas
      className={styles.heroCanvas}
      camera={{ position: [0, 0, 7.2], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.65} />
      <pointLight position={[-3, 3, 4]} intensity={4.2} color="#ff2d9b" />
      <pointLight position={[3.2, 2.4, 3]} intensity={3.6} color="#00e5ff" />
      <pointLight position={[0, -3, 4]} intensity={2.4} color="#ffe600" />
      <FloatingOrb color="#ff2d9b" position={[-3.45, 1.35, -1.6]} scale={[2.2, 2.2, 2.2]} speed={0.45} />
      <FloatingOrb color="#00e5ff" position={[3.45, 1.05, -1.8]} scale={[1.95, 1.95, 1.95]} speed={0.55} />
      <FloatingOrb color="#a855f7" position={[-0.5, -2.1, -1.9]} scale={[1.65, 1.65, 1.65]} speed={0.62} />
      <FloatingOrb color="#ffe600" position={[2.55, -1.95, -2.2]} scale={[1.08, 1.08, 1.08]} speed={0.38} />
      <FloatingOrb color="#ff6a00" position={[-3.05, -0.72, -2]} scale={[1.08, 1.08, 1.08]} speed={0.5} />
      <NeonRibbon color="#00e5ff" position={[-3.7, 1.85, -0.35]} rotation={[0.6, 0.2, -0.45]} scale={[0.62, 0.62, 0.62]} speed={0.8} />
      <NeonRibbon color="#ff2d9b" position={[3.7, 1.6, -0.35]} rotation={[0.4, -0.5, 0.38]} scale={[0.6, 0.6, 0.6]} speed={0.72} />
      <NeonRibbon color="#ffe600" position={[0, -2.45, -0.5]} rotation={[0.7, 0.6, 0.1]} scale={[0.48, 0.48, 0.48]} speed={0.65} />
      <HeroWireframes />
      <AbstractConstellation />
      <Sparkles count={100} size={2.8} scale={[7, 4.8, 3]} speed={0.36} color="#f0eeff" opacity={0.62} />
    </Canvas>
  );
}

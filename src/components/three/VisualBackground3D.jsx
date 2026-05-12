import { Float, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Component, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './ThreeScenes.module.css';
import { canUseWebGL } from './webgl.js';

const scenes = {
  hero: {
    colors: ['#ff4fa8', '#37e4ee', '#ffda55', '#a56cff'],
    camera: [0, 0, 7.4],
    spark: '#fff8ff',
  },
  about: {
    colors: ['#37e4ee', '#ff4fa8', '#58df75', '#ffda55'],
    camera: [0, 0, 7.2],
    spark: '#37e4ee',
  },
  products: {
    colors: ['#ff4fa8', '#37e4ee', '#ffda55', '#58df75'],
    camera: [0, 0, 7],
    spark: '#37e4ee',
  },
  customizer: {
    colors: ['#58df75', '#37e4ee', '#ff4fa8', '#ffda55'],
    camera: [0, 0, 7.1],
    spark: '#58df75',
  },
  process: {
    colors: ['#37e4ee', '#a56cff', '#58df75', '#ffda55'],
    camera: [0, 0, 7.4],
    spark: '#a56cff',
  },
  gallery: {
    colors: ['#ff4fa8', '#ff8b3d', '#37e4ee', '#a56cff'],
    camera: [0, 0, 7.2],
    spark: '#ff4fa8',
  },
  testimonials: {
    colors: ['#a56cff', '#ff4fa8', '#37e4ee', '#ffda55'],
    camera: [0, 0, 7],
    spark: '#a56cff',
  },
  cta: {
    colors: ['#58df75', '#37e4ee', '#ff4fa8', '#ffda55'],
    camera: [0, 0, 7],
    spark: '#58df75',
  },
};

class CanvasBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

function NeonMaterial({ color, opacity = 0.72, wireframe = false }) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.86}
      roughness={0.32}
      metalness={0.08}
      transparent
      opacity={opacity}
      wireframe={wireframe}
      depthWrite={false}
    />
  );
}

function SceneRig({ activeScene }) {
  const config = scenes[activeScene] ?? scenes.hero;

  useFrame(({ camera }, delta) => {
    camera.position.x += (config.camera[0] - camera.position.x) * Math.min(delta * 2.2, 1);
    camera.position.y += (config.camera[1] - camera.position.y) * Math.min(delta * 2.2, 1);
    camera.position.z += (config.camera[2] - camera.position.z) * Math.min(delta * 2.2, 1);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.38} />
      <pointLight position={[-3.4, 2.8, 3]} intensity={1.8} color={config.colors[0]} />
      <pointLight position={[3.2, -2.4, 3]} intensity={1.55} color={config.colors[1]} />
      <GlowPlane color={config.colors[2]} />
      <SceneByVariant variant={activeScene} colors={config.colors} />
      <Sparkles count={activeScene === 'hero' ? 56 : 30} size={activeScene === 'hero' ? 2.2 : 1.45} scale={[7.8, 4.8, 2.3]} speed={0.12} color={config.spark} opacity={activeScene === 'hero' ? 0.45 : 0.28} />
    </>
  );
}

function FloatingRig({ children, position = [0, 0, 0], speed = 1 }) {
  const ref = useRef(null);

  useFrame(({ clock }, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12 * speed;
    ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.42 * speed) * 0.035;
  });

  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

function GlowPlane({ color }) {
  return (
    <mesh position={[0, 0, -1.45]} rotation={[0, 0, -0.12]} scale={[10, 5.8, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color={color} transparent opacity={0.035} depthWrite={false} />
    </mesh>
  );
}

function HeroScene({ colors }) {
  const group = useRef(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.22) * 0.08;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.32) * 0.16;
  });

  return (
    <group ref={group} position={[0, -0.08, -0.2]}>
      <Float speed={0.92} floatIntensity={0.38} rotationIntensity={0.34}>
        <mesh position={[-3.35, 1.45, -0.15]}>
          <torusGeometry args={[0.76, 0.045, 18, 96]} />
          <meshBasicMaterial color={colors[1]} transparent opacity={0.5} depthWrite={false} />
        </mesh>
      </Float>
      <Float speed={0.82} floatIntensity={0.34} rotationIntensity={0.3}>
        <mesh position={[3.35, 1.1, -0.1]}>
          <torusGeometry args={[0.72, 0.045, 18, 96]} />
          <meshBasicMaterial color={colors[0]} transparent opacity={0.5} depthWrite={false} />
        </mesh>
      </Float>
      <Float speed={0.7} floatIntensity={0.28} rotationIntensity={0.28}>
        <mesh position={[0, -2.15, 0]}>
          <torusKnotGeometry args={[0.48, 0.045, 110, 10]} />
          <NeonMaterial color={colors[2]} opacity={0.5} />
        </mesh>
      </Float>
      <mesh position={[-4.1, 0.15, 0.05]} scale={[0.78, 0.78, 0.78]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color={colors[1]} wireframe transparent opacity={0.36} depthWrite={false} />
      </mesh>
      <mesh position={[4.05, 0.2, 0.05]} scale={[0.72, 0.72, 0.72]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={colors[0]} wireframe transparent opacity={0.36} depthWrite={false} />
      </mesh>
    </group>
  );
}

function ProductsScene({ colors }) {
  const positions = [
    [-3.2, 1.25, -0.2],
    [-1.35, -1.2, 0.15],
    [1.25, 1.15, -0.1],
    [3.1, -0.85, 0],
  ];

  return (
    <FloatingRig speed={0.8}>
      {positions.map((position, index) => (
        <Float key={colors[index]} speed={0.8 + index * 0.12} floatIntensity={0.25} rotationIntensity={0.28}>
          <group position={position} rotation={[0.35, index * 0.7, -0.16]}>
            <mesh scale={[0.78, 0.78, 0.78]}>
              {index % 2 === 0 ? <torusGeometry args={[0.64, 0.045, 18, 88]} /> : <octahedronGeometry args={[0.78, 1]} />}
              <NeonMaterial color={colors[index]} opacity={0.58} wireframe={index === 1} />
            </mesh>
            <mesh position={[0, 0, -0.12]} scale={[1.48, 1.48, 1.48]}>
              <torusGeometry args={[0.68, 0.012, 12, 72]} />
              <meshBasicMaterial color={colors[index]} transparent opacity={0.36} depthWrite={false} />
            </mesh>
          </group>
        </Float>
      ))}
      <mesh rotation={[0.45, 0.1, -0.08]} scale={[5.8, 0.18, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <NeonMaterial color={colors[1]} opacity={0.18} />
      </mesh>
    </FloatingRig>
  );
}

function ProcessScene({ colors }) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3.4, -0.95, -0.25),
        new THREE.Vector3(-1.25, 1.05, 0),
        new THREE.Vector3(1.1, -0.35, 0.18),
        new THREE.Vector3(3.3, 1.05, -0.1),
      ]),
    [],
  );

  return (
    <FloatingRig speed={0.62} position={[0, -0.1, 0]}>
      <mesh>
        <tubeGeometry args={[curve, 72, 0.025, 8, false]} />
        <NeonMaterial color={colors[0]} opacity={0.54} />
      </mesh>
      {curve.points.map((point, index) => (
        <Float key={`${point.x}-${point.y}`} speed={0.9 + index * 0.1} floatIntensity={0.22} rotationIntensity={0.22}>
          <group position={point.toArray()}>
            <mesh>
              <icosahedronGeometry args={[0.48, 1]} />
              <NeonMaterial color={colors[index]} opacity={0.62} wireframe={index % 2 === 0} />
            </mesh>
            <mesh scale={[1.7, 1.7, 1.7]}>
              <torusGeometry args={[0.42, 0.012, 12, 64]} />
              <meshBasicMaterial color={colors[index]} transparent opacity={0.4} depthWrite={false} />
            </mesh>
          </group>
        </Float>
      ))}
    </FloatingRig>
  );
}

function GalleryScene({ colors }) {
  const cards = [
    [-2.8, 0.95, -0.35, -0.2],
    [-0.9, -1.05, 0.05, 0.18],
    [1.15, 0.85, -0.15, -0.16],
    [3, -0.75, -0.3, 0.22],
  ];

  return (
    <FloatingRig speed={0.55}>
      {cards.map(([x, y, z, tilt], index) => (
        <Float key={`${x}-${y}`} speed={0.75 + index * 0.14} floatIntensity={0.2} rotationIntensity={0.18}>
          <group position={[x, y, z]} rotation={[0.18, tilt, tilt]}>
            <mesh scale={[1.18, 0.76, 0.04]}>
              <boxGeometry args={[1, 1, 1]} />
              <NeonMaterial color={colors[index]} opacity={0.28} />
            </mesh>
            <mesh position={[0, 0.02, 0.05]} scale={[1.34, 0.9, 1]}>
              <planeGeometry args={[1, 1]} />
              <meshBasicMaterial color={colors[index]} transparent opacity={0.08} depthWrite={false} />
            </mesh>
            <mesh position={[0, -0.25, 0.08]} rotation={[0, 0, 0.08]} scale={[0.82, 0.035, 1]}>
              <boxGeometry args={[1, 1, 1]} />
              <NeonMaterial color={colors[index]} opacity={0.75} />
            </mesh>
          </group>
        </Float>
      ))}
    </FloatingRig>
  );
}

function CtaScene({ colors }) {
  const group = useRef(null);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    group.current.rotation.z += delta * 0.12;
    group.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 1.2) * 0.025);
  });

  return (
    <group ref={group} position={[0, 0, -0.15]}>
      {[0, 1, 2].map((index) => (
        <mesh key={colors[index]} rotation={[0.45 + index * 0.22, index * 0.6, index * 0.38]} scale={[1.4 + index * 0.72, 1.4 + index * 0.72, 1.4 + index * 0.72]}>
          <torusGeometry args={[0.92, 0.018, 14, 96]} />
          <meshBasicMaterial color={colors[index]} transparent opacity={0.45 - index * 0.08} depthWrite={false} />
        </mesh>
      ))}
      <Float speed={0.85} floatIntensity={0.24} rotationIntensity={0.3}>
        <mesh>
          <icosahedronGeometry args={[0.86, 2]} />
          <NeonMaterial color={colors[0]} opacity={0.38} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

function SceneByVariant({ variant, colors }) {
  if (variant === 'about') return <ProcessScene colors={colors} />;
  if (variant === 'products') return <ProductsScene colors={colors} />;
  if (variant === 'customizer') return <CtaScene colors={colors} />;
  if (variant === 'process') return <ProcessScene colors={colors} />;
  if (variant === 'gallery') return <GalleryScene colors={colors} />;
  if (variant === 'testimonials') return <GalleryScene colors={colors} />;
  if (variant === 'cta') return <CtaScene colors={colors} />;
  return <HeroScene colors={colors} />;
}

export default function VisualBackground3D({ activeScene = 'hero' }) {
  const [canRenderCanvas, setCanRenderCanvas] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    setCanRenderCanvas(canUseWebGL());
  }, []);

  useEffect(() => {
    const handleVisibility = () => setPageVisible(document.visibilityState !== 'hidden');
    handleVisibility();
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  if (!canRenderCanvas) {
    return null;
  }

  return (
    <div className={styles.globalCanvasFrame} aria-hidden="true">
      <CanvasBoundary>
        <Canvas
          className={styles.globalCanvas}
          camera={{ position: scenes.hero.camera, fov: 46 }}
          dpr={[0.75, 1.15]}
          frameloop={pageVisible ? 'always' : 'demand'}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power', stencil: false }}
          performance={{ min: 0.45 }}
        >
          <SceneRig activeScene={activeScene} />
        </Canvas>
      </CanvasBoundary>
    </div>
  );
}

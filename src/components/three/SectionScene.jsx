import { Float, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import styles from './ThreeScenes.module.css';

function canCreateWebGLContext() {
  const canvas = document.createElement('canvas');
  const context =
    canvas.getContext('webgl2') ||
    canvas.getContext('webgl') ||
    canvas.getContext('experimental-webgl');

  return Boolean(context);
}

const variants = {
  products: {
    colors: ['#ff2d9b', '#00e5ff', '#ffe600'],
    y: -1.6,
  },
  process: {
    colors: ['#00e5ff', '#a855f7', '#39ff14'],
    y: 1.2,
  },
  gallery: {
    colors: ['#ff6a00', '#ff2d9b', '#00e5ff'],
    y: -1.2,
  },
  cta: {
    colors: ['#39ff14', '#00e5ff', '#ff2d9b'],
    y: 0,
  },
};

function RibbonCluster({ colors, y }) {
  const group = useRef(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.22) * 0.05;
    group.current.rotation.y = clock.elapsedTime * 0.08;
  });

  return (
    <group ref={group} position={[0, y, -0.6]}>
      {colors.map((color, index) => (
        <Float
          key={color}
          speed={0.85 + index * 0.18}
          floatIntensity={0.34 + index * 0.08}
          rotationIntensity={0.2}
        >
          <mesh position={[index * 1.9 - 1.9, Math.sin(index) * 0.25, -index * 0.16]} rotation={[0.4, index, 0.2]}>
            <torusKnotGeometry args={[0.68 + index * 0.1, 0.035, 130, 10]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.55}
              roughness={0.28}
              transparent
              opacity={0.65}
            />
          </mesh>
        </Float>
      ))}
      <mesh position={[0, 0, -0.85]} rotation={[0, 0, -0.08]} scale={[7.5, 0.45, 1]}>
        <planeGeometry args={[1, 1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.025} />
      </mesh>
    </group>
  );
}

export default function SectionScene({ variant = 'products' }) {
  const config = variants[variant] ?? variants.products;
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [canRenderCanvas, setCanRenderCanvas] = useState(false);

  useEffect(() => {
    setCanRenderCanvas(canCreateWebGLContext());
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldRender(entry.isIntersecting);
      },
      { rootMargin: '220px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.sectionCanvasSlot} aria-hidden="true">
      {canRenderCanvas && shouldRender && (
        <Canvas
          className={styles.sectionCanvas}
          camera={{ position: [0, 0, 6.5], fov: 48 }}
          dpr={[1, 1.25]}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        >
          <ambientLight intensity={0.45} />
          <pointLight position={[-3, 2, 3]} intensity={2.2} color={config.colors[0]} />
          <pointLight position={[3, -2, 3]} intensity={1.8} color={config.colors[1]} />
          <RibbonCluster colors={config.colors} y={config.y} />
          <Sparkles count={36} size={1.6} scale={[7, 4.8, 2]} speed={0.18} color={config.colors[1]} opacity={0.3} />
        </Canvas>
      )}
    </div>
  );
}

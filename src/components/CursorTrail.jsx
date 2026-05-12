import { useEffect, useRef } from 'react';
import styles from './CursorTrail.module.css';

const TRAIL_COUNT = 12;
const COLORS = ['#ff4fa8', '#37e4ee', '#ffda55', '#ff8b3d', '#a56cff', '#58df75'];

export default function CursorTrail() {
  const layerRef = useRef(null);
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let frame = 0;
    let hasMoved = false;
    const trails = Array.from({ length: TRAIL_COUNT }, () => ({ x: mouseX, y: mouseY }));

    const handleMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!hasMoved) {
        hasMoved = true;
        layerRef.current?.classList.add(styles.visible);
      }
    };

    const animate = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        cursor.style.background = COLORS[Math.floor(Date.now() / 200) % COLORS.length];
      }

      const positions = [{ x: mouseX, y: mouseY }];
      trailRefs.current.forEach((node, index) => {
        if (!node) return;
        const target = positions[index] ?? { x: mouseX, y: mouseY };
        trails[index].x += (target.x - trails[index].x) * 0.35;
        trails[index].y += (target.y - trails[index].y) * 0.35;
        node.style.left = `${trails[index].x}px`;
        node.style.top = `${trails[index].y}px`;
        positions.push({ x: trails[index].x, y: trails[index].y });
      });

      frame = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMove);
    frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layerRef} className={styles.layer} aria-hidden="true">
      <div ref={cursorRef} className={styles.cursor} />
      {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          ref={(node) => {
            trailRefs.current[index] = node;
          }}
          className={`${styles.trailDot} ${styles[`dot${index}`]}`}
        />
      ))}
    </div>
  );
}

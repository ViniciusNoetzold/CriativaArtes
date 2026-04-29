import { useEffect, useState } from 'react';

export default function useActiveScene() {
  const [activeScene, setActiveScene] = useState('hero');

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-scene-section]'));
    const visibility = new Map(nodes.map((node) => [node.dataset.sceneSection, 0]));

    if (!nodes.length || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.dataset.sceneSection, entry.intersectionRatio);
        });

        const nextScene = [...visibility.entries()].reduce(
          (best, current) => (current[1] > best[1] ? current : best),
          ['hero', 0],
        )[0];

        setActiveScene(nextScene || 'hero');
      },
      { rootMargin: '-18% 0px -26%', threshold: [0, 0.18, 0.34, 0.5, 0.68] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return activeScene;
}

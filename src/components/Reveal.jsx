import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

export default function Reveal({
  as: Element = 'div',
  className = '',
  children,
  threshold = 0.15,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const classes = [styles.reveal, isVisible ? styles.visible : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Element ref={ref} className={classes} data-visible={isVisible ? 'true' : 'false'} {...props}>
      {children}
    </Element>
  );
}

import { heroLines } from '../data/siteContent.js';
import styles from './AnimatedHeadline.module.css';

const rainbowWords = new Set(['personalizamos']);

export default function AnimatedHeadline() {
  let wordIndex = 0;

  return (
    <h1 className={styles.headline}>
      {heroLines.map((line) => (
        <span className={styles.line} key={line}>
          {line.split(' ').map((word) => {
            const delayClass = styles[`delay${wordIndex}`] ?? styles.delay0;
            wordIndex += 1;

            return (
              <span
                className={`${styles.word} ${delayClass} ${rainbowWords.has(word) ? 'rainbowText' : ''}`}
                key={`${line}-${word}`}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

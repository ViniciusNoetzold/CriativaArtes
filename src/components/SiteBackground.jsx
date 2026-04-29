import styles from './SiteBackground.module.css';

export default function SiteBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <span className={styles.ribbonOne} />
      <span className={styles.ribbonTwo} />
      <span className={styles.ribbonThree} />
      <span className={styles.beamOne} />
      <span className={styles.beamTwo} />
      <span className={styles.beamThree} />
      <span className={styles.ringOne} />
      <span className={styles.ringTwo} />
      <span className={styles.meshOne} />
      <span className={styles.meshTwo} />
      <span className={styles.pulseGrid} />
      <span className={styles.sparkField} />
    </div>
  );
}

import styles from './SiteBackground.module.css';

export default function SiteBackground({ activeScene = 'hero' }) {
  return (
    <div className={styles.background} data-active-scene={activeScene} aria-hidden="true">
      <span className={styles.depthWash} />
      <span className={styles.auroraField} />
      <span className={styles.waveOne} />
      <span className={styles.waveTwo} />
      <span className={styles.waveThree} />
      <span className={styles.liquidFold} />
      <span className={styles.pearlSheen} />
      <span className={styles.warmAccents} />
      <span className={styles.softGrain} />
    </div>
  );
}

import { galleryItems } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="galeria" className={`${section.section} ${section.alt}`} data-scene-section="gallery">
      <div className={section.inner}>
        <Reveal className={section.header}>
          <div className={section.label}>✦ Nosso trabalho</div>
          <h2 className={section.title}>
            GALERIA DE <span className="rainbowText">PROJETOS</span>
          </h2>
        </Reveal>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <Reveal
              as="article"
              className={`${styles.card} ${styles[item.size]} ${styles[item.tone]}`}
              key={item.label}
            >
              <div className={styles.visual} aria-hidden="true" />
              <span className={styles.tag}>{item.tag}</span>
              <h3 className={styles.label}>{item.label}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { galleryItems } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Gallery.module.css';

export default function Gallery() {
  return (
    <section id="galeria" className={`${section.section} ${section.alt}`} data-scene-section="gallery">
      <div className={section.inner}>
        <Reveal className={section.header}>
          <div className={section.label}>Nosso trabalho</div>
          <h2 className={section.title}>
            GALERIA DE <span className="rainbowText">PROJETOS</span>
          </h2>
          <p className={section.sub}>
            Uma seleção real de camisetas, uniformes, canecas, taças, copos, canetas e presentes personalizados.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <Reveal as="article" className={`${styles.card} ${styles[item.tone]}`} key={item.image}>
              <img className={styles.image} src={item.image} alt={item.label} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.tag}>{item.tag}</span>
                <h3 className={styles.label}>{item.label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

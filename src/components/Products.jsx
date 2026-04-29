import { products } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import SectionScene from './three/SectionScene.jsx';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section id="produtos" className={`${section.section} ${section.alt}`}>
      <SectionScene variant="products" />
      <div className={section.inner}>
        <Reveal className={section.header}>
          <div className={section.label}>✦ O que personalizamos</div>
          <h2 className={section.title}>
            NOSSOS <span className="rainbowText">PRODUTOS</span>
          </h2>
          <p className={section.sub}>
            Cada peça é única: feita com amor e dedicação para o seu evento, empresa ou presente especial.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {products.map((product) => (
            <Reveal
              as="article"
              className={`${styles.card} ${styles[product.tone]}`}
              key={product.name}
            >
              <div className={styles.cardBorder} />
              <div className={styles.glyph} aria-hidden="true">
                {product.glyph}
              </div>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.description}>{product.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

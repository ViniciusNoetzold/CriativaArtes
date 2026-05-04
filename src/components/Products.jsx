import { products } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Products.module.css';

export default function Products() {
  return (
    <section id="produtos" className={`${section.section} ${section.alt}`} data-scene-section="products">
      <div className={section.inner}>
        <div className={styles.headerGrid}>
          <Reveal className={styles.headerText}>
            <div className={section.label}>O que personalizamos</div>
            <h2 className={section.title}>
              ESCOLHA O PRODUTO, <span className="rainbowText">A GENTE CRIA A ARTE</span>
            </h2>
            <p className={section.sub}>
              Uma vitrine prática para o cliente entender o que pode pedir: roupas, uniformes, canecas, taças, copos,
              canetas, brindes e presentes sob medida.
            </p>
          </Reveal>

          <Reveal className={styles.orderPanel}>
            <span className={styles.panelLabel}>Como pedir</span>
            <strong>Sem quantidade mínima</strong>
            <p>Envie referências, nome, logo, cores ou tema. A Criativa Artes desenvolve a ideia e alinha a arte antes de produzir.</p>
            <a className={styles.panelButton} href="#personalizar">
              Personalizar meu produto
            </a>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <Reveal as="article" className={`${styles.card} ${styles[product.tone]}`} key={product.name}>
              <div className={styles.media}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className={styles.badge}>Sob medida</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.detail}>{product.detail}</p>
                <div className={styles.examples} aria-label={`Exemplos de ${product.name}`}>
                  {product.examples.map((example) => (
                    <span key={example}>{example}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

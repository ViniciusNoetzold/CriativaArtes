import { testimonials } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="relatos" className={`${section.section} ${styles.testimonials}`} data-scene-section="testimonials">
      <div className={section.inner}>
        <Reveal className={section.header}>
          <div className={section.label}>Relatos e resultados</div>
          <h2 className={section.title}>
            CLIENTES QUE <span className="rainbowText">VOLTAM E INDICAM</span>
          </h2>
          <p className={section.sub}>
            A Criativa Artes já tem trabalhos com relatos de clientes, e essa área fica pronta para receber as fotos e
            depoimentos reais que serão enviados.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <Reveal as="article" className={`${styles.card} ${styles[item.tone]}`} key={item.title}>
              <span className={styles.marker} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

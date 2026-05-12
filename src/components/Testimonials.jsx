import { testimonials } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="relatos" className={`${section.section} ${styles.testimonials}`} data-scene-section="testimonials">
      <div className={section.inner}>
        <Reveal className={section.header}>
          <div className={section.label}>Confiança no processo</div>
          <h2 className={section.title}>
            Atendimento que <span className="rainbowText">organiza sua ideia</span>
          </h2>
          <p className={section.sub}>
            Do presente único ao pedido para empresas, o foco é deixar o processo claro antes da produção.
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

import { businessStory, differentials } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './AboutBusiness.module.css';

export default function AboutBusiness() {
  return (
    <section id="sobre" className={`${section.section} ${styles.about}`} data-scene-section="about">
      <div className={section.inner}>
        <div className={styles.layout}>
          <Reveal className={styles.story}>
            <div className={section.label}>{businessStory.eyebrow}</div>
            <h2 className={`${section.title} ${styles.title}`}>
              DA IDEIA AO <span className="rainbowText">PERSONALIZADO</span>
            </h2>
            <p className={styles.lead}>{businessStory.intro}</p>
            <p className={styles.copy}>{businessStory.body}</p>

            <div className={styles.metrics}>
              {businessStory.highlights.map((item) => (
                <div className={styles.metric} key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className={styles.panel}>
            <Reveal className={styles.panelHeader}>
              <span className={styles.panelKicker}>Criativa Artes</span>
              <h3>{businessStory.title}</h3>
            </Reveal>
            <div className={styles.valueGrid}>
              {differentials.map((item) => (
                <Reveal as="article" className={`${styles.valueCard} ${styles[item.tone]}`} key={item.title}>
                  <span className={styles.valueDot} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

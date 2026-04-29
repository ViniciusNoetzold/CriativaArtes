import { Fragment } from 'react';
import { steps } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import SectionScene from './three/SectionScene.jsx';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section id="como-funciona" className={section.section}>
      <SectionScene variant="process" />
      <div className={section.inner}>
        <Reveal className={section.header}>
          <div className={section.label}>✦ Simples assim</div>
          <h2 className={section.title}>
            COMO <span className="rainbowText">FUNCIONA</span>
          </h2>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <Reveal as="article" className={styles.step}>
                <div className={`${styles.stepNum} ${styles[step.tone]}`}>
                  <span>{step.number}</span>
                </div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </Reveal>

              {index < steps.length - 1 && (
                <Reveal className={styles.connector} threshold={0.4}>
                  <span className={styles.connectorLine} />
                </Reveal>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

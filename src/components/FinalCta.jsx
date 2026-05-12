import ctaBanner from '../assets/brand/criativa-artes-banner.jpg';
import { contact } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import { WhatsAppIcon } from './SocialIcon.jsx';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section
      id="cta-final"
      className={`${section.section} ${styles.ctaSection}`}
      aria-labelledby="final-cta-title"
      data-scene-section="cta"
    >
      <div className={section.inner}>
        <Reveal className={styles.panel}>
          <div className={styles.content}>
            <h2 id="final-cta-title">Pronto para criar seu personalizado?</h2>
            <p>
              Canecas, camisetas, copos, almofadas e brindes personalizados feitos do seu jeito, com criatividade e
              carinho.
            </p>

            <a className={styles.primaryButton} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className={styles.buttonIcon} />
              Pedir orçamento no WhatsApp
            </a>
          </div>

          <div className={styles.bannerFrame} style={{ '--banner-image': `url(${ctaBanner})` }}>
            <img
              className={styles.banner}
              src={ctaBanner}
              alt="Banner da Criativa Artes com caneca, copo, squeeze, almofada e camiseta personalizados."
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

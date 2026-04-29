import { contact } from '../data/siteContent.js';
import AnimatedHeadline from './AnimatedHeadline.jsx';
import { InstagramIcon, WhatsAppIcon } from './SocialIcon.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} data-scene-section="hero">
      <div className={styles.animatedBackdrop} aria-hidden="true">
        <span className={styles.backdropOrbOne} />
        <span className={styles.backdropOrbTwo} />
        <span className={styles.backdropOrbThree} />
        <span className={styles.backdropRingOne} />
        <span className={styles.backdropRingTwo} />
        <span className={styles.backdropRibbon} />
      </div>
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.content}>
        <AnimatedHeadline />
        <p className={styles.subtitle}>Copos, taças, canecas, canetas e muito mais...</p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className={styles.buttonIcon} />
            Solicitar Orçamento
          </a>
          <a className={styles.secondaryButton} href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={styles.buttonIcon} />
            {contact.instagramHandle}
          </a>
        </div>
      </div>

      <a className={styles.scrollIndicator} href="#produtos" aria-label="Ir para produtos">
        <span className={styles.scrollArrow} />
      </a>
    </section>
  );
}

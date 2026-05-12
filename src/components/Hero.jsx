import { contact } from '../data/siteContent.js';
import AnimatedHeadline from './AnimatedHeadline.jsx';
import { WhatsAppIcon } from './SocialIcon.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} data-scene-section="hero">
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.heroWash} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.kicker}>Chapecó/SC · Personalizados sob demanda</p>
        <AnimatedHeadline />
        <p className={styles.subtitle}>
          Canecas, camisetas, copos, almofadas, papelaria e brindes personalizados para presentes, empresas e datas
          especiais.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#produtos">
            Ver produtos
          </a>
          <a className={styles.secondaryButton} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className={styles.buttonIcon} />
            Pedir orçamento
          </a>
        </div>

        <ul className={styles.trustList} aria-label="Diferenciais da Guria Arteira">
          <li>Arte alinhada antes da produção</li>
          <li>Uma peça ou quantidade maior</li>
          <li>Atendimento direto pelo WhatsApp</li>
        </ul>
      </div>

      <a className={styles.scrollIndicator} href="#produtos" aria-label="Ir para produtos">
        <span className={styles.scrollArrow} />
      </a>
    </section>
  );
}

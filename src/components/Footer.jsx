import { contact } from '../data/siteContent.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>CRIATIVA ARTES</div>
      <div className={styles.info}>Chapecó/SC · Personalização com amor ♥</div>
      <div className={styles.links}>
        <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}

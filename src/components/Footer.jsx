import brandLogo from '../assets/brand/guria-arteira-logo.jpg';
import { contact } from '../data/siteContent.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img className={styles.logoMark} src={brandLogo} alt="Guria Arteira" loading="lazy" />
        <div className={styles.info}>
          {contact.addressLine} - {contact.city}
        </div>
      </div>
      <div className={styles.info}>{contact.hours}</div>
      <div className={styles.links}>
        <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href={contact.emailHref}>E-mail</a>
        <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}

import { contact } from '../data/siteContent.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.logo}>CRIATIVA ARTES</div>
        <div className={styles.info}>
          {contact.addressLine} · {contact.city}
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

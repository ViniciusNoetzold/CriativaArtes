import brandLogo from '../assets/brand/guria-arteira-logo.jpg';
import { contact, navLinks } from '../data/siteContent.js';
import { InstagramIcon, WhatsAppIcon } from './SocialIcon.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandColumn}>
          <img className={styles.logoMark} src={brandLogo} alt="Guria Arteira" loading="lazy" />
          <p>Personalizados criativos feitos com carinho para presentes, empresas, eventos e datas especiais.</p>
        </div>

        <nav className={styles.column} aria-label="Navegação do rodapé">
          <h2>Navegação</h2>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.column}>
          <h2>Atendimento</h2>
          <ul className={styles.contactList}>
            <li>
              <MapIcon className={styles.icon} />
              <span>{contact.addressLine} - {contact.city}</span>
            </li>
            <li>
              <ClockIcon className={styles.icon} />
              <span>{contact.hours}</span>
            </li>
            <li>
              <WhatsAppIcon className={styles.icon} />
              <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <MailIcon className={styles.icon} />
              <a href={contact.emailHref}>E-mail</a>
            </li>
            <li>
              <InstagramIcon className={styles.icon} />
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.column} ${styles.ctaColumn}`}>
          <h2>Tem uma ideia personalizada?</h2>
          <p>Chame no WhatsApp e conte o que você quer criar.</p>
          <a className={styles.footerButton} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className={styles.buttonIcon} />
            Falar no WhatsApp
          </a>
        </div>

        <div className={styles.bottomLine}>© 2026 Criativa Artes. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

function MapIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

function ClockIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.15 3.4 2.03-.9 1.52L11 13V6h2v6.15Z"
      />
    </svg>
  );
}

function MailIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-.4 4.25-7.1 5.32a.83.83 0 0 1-1 0L4.4 8.25 5.6 6.7 12 11.5l6.4-4.8 1.2 1.55Z"
      />
    </svg>
  );
}

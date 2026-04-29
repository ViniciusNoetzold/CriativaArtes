import { useState } from 'react';
import { contact, navLinks } from '../data/siteContent.js';
import { WhatsAppIcon } from './SocialIcon.jsx';
import styles from './NavBar.module.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <a className={styles.logo} href="#hero" onClick={closeMenu}>
        CRIATIVA ARTES
      </a>

      <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a className={styles.cta} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className={styles.ctaIcon} />
        WhatsApp
      </a>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

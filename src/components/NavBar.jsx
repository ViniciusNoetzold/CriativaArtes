import { useState } from 'react';
import brandLogo from '../assets/brand/guria-arteira-logo.jpg';
import { contact, navLinks } from '../data/siteContent.js';
import { WhatsAppIcon } from './SocialIcon.jsx';
import styles from './NavBar.module.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <a className={styles.logo} href="#hero" aria-label="Guria Arteira - início" onClick={closeMenu}>
        <span className={styles.logoMark} aria-hidden="true">
          <img src={brandLogo} alt="" />
        </span>
      </a>

      <ul id="main-menu" className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
        <li className={styles.mobileCtaItem}>
          <a className={styles.mobileCta} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <WhatsAppIcon className={styles.ctaIcon} />
            Pedir orçamento
          </a>
        </li>
      </ul>

      <a className={styles.cta} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className={styles.ctaIcon} />
        Pedir orçamento
      </a>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-controls="main-menu"
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

import brandLogo from '../assets/brand/guria-arteira-logo.jpg';
import { contact } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import { InstagramIcon, WhatsAppIcon } from './SocialIcon.jsx';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  const mapAddress = `${contact.addressLine}, ${contact.neighborhood}, ${contact.city.replace(' / ', ', ')}`;
  const encodedMapAddress = encodeURIComponent(mapAddress);
  const googleMapEmbedUrl = `https://www.google.com/maps?q=${encodedMapAddress}&output=embed`;
  const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedMapAddress}`;

  return (
    <section id="cta-final" className={`${section.section} ${styles.ctaSection}`} data-scene-section="cta">
      <Reveal className={styles.box}>
        <img className={styles.brandSeal} src={brandLogo} alt="Guria Arteira" loading="lazy" />
        <div className={section.label}>Bora personalizar?</div>
        <h2 className={`${section.title} ${styles.title}`}>
          Você tem a ideia,
          <br />
          <span className="rainbowText">nós personalizamos</span>
        </h2>
        <p className={styles.copy}>
          Fale com a Guria Arteira pelo WhatsApp, conte sua ideia e receba um orçamento sem compromisso para uma peça
          única ou para a quantidade que você precisar.
        </p>

        <a className={styles.primaryButton} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={styles.buttonIcon} />
          Pedir orçamento no WhatsApp
        </a>

        <div className={styles.contacts}>
          <a className={styles.chip} href={contact.phoneHref}>
            <span className={styles.chipIcon}>☎</span>
            {contact.phoneDisplay}
          </a>
          <a className={styles.chip} href={contact.emailHref}>
            <span className={styles.chipIcon}>@</span>
            {contact.email}
          </a>
          <a className={styles.chip} href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={styles.chipSvg} />
            {contact.instagramHandle}
          </a>
        </div>

        <div className={styles.serviceInfo}>
          <div>
            <strong>Loja física</strong>
            <span>
              {contact.addressLine} · {contact.neighborhood} · {contact.city}
            </span>
          </div>
          <div>
            <strong>Atendimento</strong>
            <span>{contact.hours}</span>
          </div>
        </div>

        <div className={styles.mapFrame}>
          <iframe
            className={styles.map}
            title="Localização Guria Arteira - Chapecó/SC"
            src={googleMapEmbedUrl}
            width="100%"
            height="320"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className={styles.mapLink} href={googleMapUrl} target="_blank" rel="noopener noreferrer">
            {contact.city} · Ver mapa maior
          </a>
        </div>
      </Reveal>
    </section>
  );
}

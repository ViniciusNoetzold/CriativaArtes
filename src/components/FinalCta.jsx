import { contact } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import { InstagramIcon, WhatsAppIcon } from './SocialIcon.jsx';
import SectionScene from './three/SectionScene.jsx';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section id="cta-final" className={`${section.section} ${styles.ctaSection}`}>
      <SectionScene variant="cta" />
      <Reveal className={styles.box}>
        <div className={section.label}>✦ Bora personalizar?</div>
        <h2 className={`${section.title} ${styles.title}`}>
          VOCÊ TEM A IDEIA!!
          <br />
          <span className="rainbowText">NÓS PERSONALIZAMOS!!</span>
        </h2>
        <p className={styles.copy}>
          Fale com a gente agora mesmo e receba um orçamento sem compromisso. É rápido, fácil e o resultado é
          incrível!
        </p>

        <a className={styles.primaryButton} href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className={styles.buttonIcon} />
          Solicitar Orçamento Grátis
        </a>

        <div className={styles.contacts}>
          <a className={styles.chip} href={contact.phoneHref}>
            <span className={styles.chipIcon}>☎</span>
            {contact.phoneDisplay}
          </a>
          <a className={styles.chip} href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={styles.chipSvg} />
            {contact.instagramHandle}
          </a>
        </div>

        <div className={styles.mapFrame}>
          <iframe
            className={styles.map}
            title="Localização Criativa Artes - Chapecó/SC"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-52.6870%2C-27.1100%2C-52.6170%2C-27.0600&layer=mapnik&marker=-27.0858%2C-52.6150"
            width="100%"
            height="320"
            loading="lazy"
            allowFullScreen
          />
          <a
            className={styles.mapLink}
            href="https://www.openstreetmap.org/?mlat=-27.0858&mlon=-52.6150#map=14/-27.0858/-52.6150"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chapecó / SC · Ver mapa maior ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}

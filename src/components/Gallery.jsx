import { useMemo, useState } from 'react';
import { galleryItems } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Gallery.module.css';

const galleryFilters = ['Todos', 'Canecas', 'Camisetas', 'Copos', 'Almofadas', 'Papelaria', 'Brindes'];

const tagGroups = {
  Canecas: ['Canecas'],
  Camisetas: ['Camisetas', 'Uniformes'],
  Copos: ['Copos', 'Squeezes', 'Taças'],
  Almofadas: ['Almofadas'],
  Papelaria: ['Papelaria'],
  Brindes: ['Empresas', 'Kits', 'Datas'],
};

const matchesFilter = (item, filter) => filter === 'Todos' || tagGroups[filter]?.includes(item.tag);

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => matchesFilter(item, activeFilter)),
    [activeFilter],
  );

  return (
    <section id="galeria" className={`${section.section} ${section.alt}`} data-scene-section="gallery">
      <div className={section.inner}>
        <Reveal className={section.header}>
          <div className={section.label}>Trabalhos reais</div>
          <h2 className={section.title}>
            Galeria de <span className="rainbowText">trabalhos feitos</span>
          </h2>
          <p className={section.sub}>
            Veja algumas ideias de personalizados já produzidos para presentes, empresas, eventos e datas especiais.
          </p>
        </Reveal>

        <Reveal className={styles.filters} aria-label="Filtrar galeria por tipo de produto">
          {galleryFilters.map((filter) => (
            <button
              className={`${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ''}`}
              type="button"
              aria-pressed={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <Reveal as="article" className={`${styles.card} ${styles[item.tone]}`} key={item.image}>
              <div className={styles.media}>
                <img className={styles.image} src={item.image} alt={item.label} loading="lazy" />
              </div>
              <div className={styles.caption}>
                <span className={styles.tag}>{item.tag}</span>
                <h3 className={styles.label}>{item.label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { galleryItems } from '../data/siteContent.js';
import useAutoCarousel from '../hooks/useAutoCarousel.js';
import { cn } from '../lib/utils.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Gallery.module.css';
import { FlipReveal, FlipRevealItem } from './ui/flip-reveal.jsx';

const MOBILE_PREVIEW_COUNT = 6;
const galleryFilters = [
  'Todos',
  'Uniformes',
  'Camisetas',
  'Copos',
  'Canecas',
  'Taças',
  'Squeezes',
  'Papelaria',
  'Almofadas',
  'Empresas',
  'Kits',
  'Datas',
];

const filterTones = {
  Todos: 'yellow',
  Uniformes: 'cyan',
  Camisetas: 'magenta',
  Copos: 'orange',
  Canecas: 'magenta',
  Taças: 'yellow',
  Squeezes: 'cyan',
  Papelaria: 'green',
  Almofadas: 'purple',
  Empresas: 'orange',
  Kits: 'yellow',
  Datas: 'magenta',
};

const matchesFilter = (item, filter) => filter === 'Todos' || item.tag === filter;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems = useMemo(
    () => galleryItems.filter((item) => matchesFilter(item, activeFilter)),
    [activeFilter],
  );
  const visibleFlipKeys = activeFilter === 'Todos' ? ['all'] : [activeFilter];
  const previewItems = useMemo(
    () => new Set(filteredItems.slice(0, MOBILE_PREVIEW_COUNT).map((item) => item.image)),
    [filteredItems],
  );
  const { scrollNext, scrollPrevious, trackProps, trackRef } = useAutoCarousel({
    enabled: !isExpanded,
    resetKey: `${activeFilter}-${isExpanded ? 'expanded' : 'preview'}-${filteredItems.length}`,
  });
  const gridClasses = [
    styles.grid,
    isExpanded ? styles.expandedMode : styles.carouselMode,
    !isExpanded ? styles.mobileCollapsed : '',
  ]
    .filter(Boolean)
    .join(' ');
  const mobileControlsClasses = [styles.mobileControls, isExpanded ? styles.expandedControls : '']
    .filter(Boolean)
    .join(' ');
  const carouselProps = isExpanded ? {} : trackProps;

  useEffect(() => {
    setIsExpanded(false);
    trackRef.current?.scrollTo({ left: 0, behavior: 'auto' });
  }, [activeFilter, trackRef]);

  const toggleExpanded = () => {
    trackRef.current?.scrollTo({ left: 0, behavior: 'auto' });
    setIsExpanded((value) => !value);
  };

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
              className={cn(
                styles.filterButton,
                styles[filterTones[filter]],
                activeFilter === filter && styles.filterActive,
              )}
              type="button"
              aria-pressed={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        {filteredItems.length > MOBILE_PREVIEW_COUNT && (
          <div className={mobileControlsClasses}>
            <button
              className={styles.expandButton}
              type="button"
              aria-expanded={isExpanded}
              onClick={toggleExpanded}
            >
              {isExpanded ? 'Recolher seção' : 'Expandir seção'}
            </button>

            {!isExpanded && (
              <div className={styles.carouselButtons} aria-label="Navegar pela galeria">
                <button className={styles.arrowButton} type="button" aria-label="Trabalho anterior" onClick={scrollPrevious}>
                  <span className={`${styles.arrowIcon} ${styles.arrowLeft}`} aria-hidden="true" />
                </button>
                <button className={styles.arrowButton} type="button" aria-label="Próximo trabalho" onClick={scrollNext}>
                  <span className={styles.arrowIcon} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        )}

        <FlipReveal
          className={gridClasses}
          aria-label="Galeria de trabalhos feitos"
          keys={visibleFlipKeys}
          showClass={styles.itemVisible}
          hideClass={styles.itemHidden}
          role="list"
          {...carouselProps}
        >
          {galleryItems.map((item) => {
            const isPreviewHidden = !isExpanded && !previewItems.has(item.image);

            return (
              <FlipRevealItem
                className={cn(styles.card, styles[item.tone], isPreviewHidden && styles.previewHidden)}
                flipKey={item.tag}
                key={item.image}
                role="listitem"
              >
                <article className={styles.cardSurface}>
                  <div className={styles.media}>
                    <img className={styles.image} src={item.image} alt={item.label} loading="lazy" />
                    <span className={styles.floatingTag}>{item.tag}</span>
                  </div>
                  <div className={styles.caption}>
                    <span className={styles.captionKicker}>Trabalho feito</span>
                    <h3 className={styles.label}>{item.label}</h3>
                  </div>
                </article>
              </FlipRevealItem>
            );
          })}
        </FlipReveal>
      </div>
    </section>
  );
}

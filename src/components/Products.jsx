import { useState } from 'react';
import { productCategories } from '../data/siteContent.js';
import useAutoCarousel from '../hooks/useAutoCarousel.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import styles from './Products.module.css';

const MOBILE_PREVIEW_COUNT = 4;

const categoryId = (title) =>
  `categoria-${title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(' ', '-')}`;

export default function Products() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { scrollNext, scrollPrevious, trackProps, trackRef } = useAutoCarousel({
    enabled: !isExpanded,
    resetKey: isExpanded ? 'products-expanded' : 'products-preview',
  });
  const guideClasses = [
    styles.guideGrid,
    isExpanded ? styles.expandedMode : styles.carouselMode,
    !isExpanded ? styles.mobileCollapsed : '',
  ]
    .filter(Boolean)
    .join(' ');
  const mobileControlsClasses = [styles.mobileControls, isExpanded ? styles.expandedControls : '']
    .filter(Boolean)
    .join(' ');
  const carouselProps = isExpanded ? {} : trackProps;

  const toggleExpanded = () => {
    trackRef.current?.scrollTo({ left: 0, behavior: 'auto' });
    setIsExpanded((value) => !value);
  };

  return (
    <section id="produtos" className={`${section.section} ${section.alt}`} data-scene-section="products">
      <div className={section.inner}>
        <div className={styles.headerGrid}>
          <Reveal className={styles.headerText}>
            <div className={section.label}>Catálogo por categoria</div>
            <h2 className={section.title}>
              Guia de Produtos <span className="rainbowText">Personalizados</span>
            </h2>
            <p className={section.sub}>
              Escolha o tipo de produto que combina com sua ideia. A Guria Arteira transforma presentes, lembranças e
              materiais personalizados em peças únicas.
            </p>
          </Reveal>

          <Reveal className={styles.orderPanel}>
            <span className={styles.panelLabel}>Orçamento sob medida</span>
            <strong>Da unidade ao lote</strong>
            <p>Conte sua ideia, envie referências e confirme material, prazo e quantidade direto pelo WhatsApp.</p>
            <a className={styles.panelButton} href="#personalizar">
              Montar pré-orçamento
            </a>
          </Reveal>
        </div>

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
            <div className={styles.carouselButtons} aria-label="Navegar pelo guia de produtos">
              <button className={styles.arrowButton} type="button" aria-label="Produto anterior" onClick={scrollPrevious}>
                <span className={`${styles.arrowIcon} ${styles.arrowLeft}`} aria-hidden="true" />
              </button>
              <button className={styles.arrowButton} type="button" aria-label="Próximo produto" onClick={scrollNext}>
                <span className={styles.arrowIcon} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>

        <div
          className={guideClasses}
          aria-label={`Guia de produtos personalizados. Prévia com ${MOBILE_PREVIEW_COUNT} categorias no celular.`}
          {...carouselProps}
        >
          {productCategories.map((category) => {
            const id = categoryId(category.title);

            return (
              <Reveal as="article" className={`${styles.card} ${styles[category.tone]}`} key={category.title}>
                <a className={styles.mediaLink} href="#personalizar" aria-label={`Pedir orçamento para ${category.title}`}>
                  <span className={styles.media}>
                    <img src={category.image} alt={category.title} loading="lazy" />
                  </span>
                </a>

                <div className={styles.content}>
                  <span className={styles.categoryLabel}>Categoria</span>
                  <h3 id={id}>{category.title}</h3>
                  <p>{category.description}</p>

                  <div className={styles.examples} aria-label={`Exemplos de ${category.title}`}>
                    {category.examples.map((example) => (
                      <span key={example}>{example}</span>
                    ))}
                  </div>

                  <a className={styles.cardAction} href="#personalizar" aria-labelledby={id}>
                    Quero personalizar
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className={styles.fallbackCta}>
          <strong>Não encontrou exatamente o que precisa?</strong>
          <span>Use a opção “Outros” no orçamento e descreva o produto desejado.</span>
          <a href="#personalizar">Descrever meu pedido</a>
        </Reveal>
      </div>
    </section>
  );
}

import { useMemo, useState } from 'react';
import { contact, customizerProducts, personalizationPackages } from '../data/siteContent.js';
import useAutoCarousel from '../hooks/useAutoCarousel.js';
import Reveal from './Reveal.jsx';
import section from './Section.module.css';
import { WhatsAppIcon } from './SocialIcon.jsx';
import styles from './ProductCustomizer.module.css';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const getQuantity = (value) => Math.max(1, Number.parseInt(value, 10) || 1);

export default function ProductCustomizer() {
  const [customerName, setCustomerName] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(customizerProducts[0].id);
  const [otherProduct, setOtherProduct] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState(personalizationPackages[0].id);
  const [quantity, setQuantity] = useState(10);
  const [notes, setNotes] = useState('');
  const { scrollNext, scrollPrevious, trackProps } = useAutoCarousel({
    enabled: false,
    breakpoint: '(max-width: 700px)',
  });

  const selectedProduct = customizerProducts.find((product) => product.id === selectedProductId) ?? customizerProducts[0];
  const selectedPackage =
    personalizationPackages.find((option) => option.id === selectedPackageId) ?? personalizationPackages[0];
  const normalizedQuantity = getQuantity(quantity);
  const productName =
    selectedProduct.id === 'outros'
      ? otherProduct.trim() || 'produto sob consulta'
      : selectedProduct.name.toLowerCase();

  const total = useMemo(() => {
    if (selectedProduct.basePrice === null) return null;
    return (selectedProduct.basePrice + selectedPackage.unitExtra) * normalizedQuantity + selectedPackage.setupFee;
  }, [normalizedQuantity, selectedPackage.setupFee, selectedPackage.unitExtra, selectedProduct.basePrice]);

  const handleProductSelect = (productId, event) => {
    setSelectedProductId(productId);

    if (!window.matchMedia('(max-width: 700px)').matches) return;

    event.currentTarget.closest('label')?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const totalText = total === null ? 'Sob consulta' : currency.format(total);
  const unitText =
    selectedProduct.basePrice === null ? 'sob consulta' : currency.format(selectedProduct.basePrice + selectedPackage.unitExtra);

  const whatsAppMessage = useMemo(() => {
    const name = customerName.trim() || '[informar nome]';
    const details = notes.trim() || 'Ainda vou enviar referências e detalhes da arte.';
    const priceLine =
      total === null
        ? 'Gostaria de confirmar valor, prazo e possibilidade de produção.'
        : `A estimativa exibida no site foi ${currency.format(total)}.`;

    return [
      `Olá, tudo bem? Meu nome é ${name}.`,
      `Estou entrando em contato pelo site da Guria Arteira e meu pedido é ${normalizedQuantity} unidade(s) de ${productName}.`,
      `Tipo de personalização: ${selectedPackage.name}.`,
      `Detalhes do pedido: ${details}`,
      priceLine,
    ].join('\n');
  }, [customerName, normalizedQuantity, notes, productName, selectedPackage.name, total]);

  const whatsAppHref = `${contact.whatsappUrl}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <section id="personalizar" className={section.section} data-scene-section="customizer">
      <div className={section.inner}>
        <Reveal className={styles.header}>
          <div className={section.label}>Orçamento personalizado</div>
          <h2 className={section.title}>
            Organize seu pedido e <span className="rainbowText">chame no WhatsApp</span>
          </h2>
          <p className={section.sub}>
            Escolha produto, quantidade e tipo de arte. A estimativa ajuda a iniciar a conversa; o valor final é
            confirmado conforme material, prazo e disponibilidade.
          </p>
        </Reveal>

        <div className={styles.builder}>
          <Reveal
            as="form"
            className={styles.form}
            aria-label="Personalizar produto"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className={styles.clientRow}>
              <label className={styles.field}>
                <span>Seu nome</span>
                <input
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Ex: Ana"
                />
              </label>

              <label className={styles.field}>
                <span>Quantidade</span>
                <div className={styles.quantityControl}>
                  <button type="button" aria-label="Diminuir quantidade" onClick={() => setQuantity((value) => getQuantity(value) - 1 || 1)}>
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    onBlur={() => setQuantity(normalizedQuantity)}
                  />
                  <button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantity((value) => getQuantity(value) + 1)}>
                    +
                  </button>
                </div>
              </label>
            </div>

            <fieldset className={`${styles.group} ${styles.productGroup}`}>
              <legend>1. Produto</legend>
              <div className={styles.productControls} aria-label="Navegar pelos produtos">
                <button className={styles.arrowButton} type="button" aria-label="Produto anterior" onClick={scrollPrevious}>
                  <span className={`${styles.arrowIcon} ${styles.arrowLeft}`} aria-hidden="true" />
                </button>
                <button className={styles.arrowButton} type="button" aria-label="Próximo produto" onClick={scrollNext}>
                  <span className={styles.arrowIcon} aria-hidden="true" />
                </button>
              </div>
              <div className={styles.productGrid} aria-label="Produtos disponíveis para orçamento" {...trackProps}>
                {customizerProducts.map((product) => (
                  <label className={`${styles.option} ${styles[product.tone]}`} key={product.id}>
                    <input
                      type="radio"
                      name="product"
                      value={product.id}
                      checked={selectedProductId === product.id}
                      onChange={(event) => handleProductSelect(product.id, event)}
                    />
                    <span className={styles.optionTitle}>{product.name}</span>
                    <span className={styles.optionText}>{product.description}</span>
                    <span className={styles.optionPrice}>
                      {product.basePrice === null ? 'Sob consulta' : `A partir de ${currency.format(product.basePrice)}`}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {selectedProduct.id === 'outros' && (
              <label className={`${styles.field} ${styles.otherField}`}>
                <span>Qual produto você quer personalizar?</span>
                <input
                  type="text"
                  value={otherProduct}
                  onChange={(event) => setOtherProduct(event.target.value)}
                  placeholder="Ex: chaveiro, boné, avental..."
                />
              </label>
            )}

            <fieldset className={styles.group}>
              <legend>2. Tipo de personalização</legend>
              <div className={styles.packageGrid}>
                {personalizationPackages.map((option) => (
                  <label className={styles.packageOption} key={option.id}>
                    <input
                      type="radio"
                      name="package"
                      value={option.id}
                      checked={selectedPackageId === option.id}
                      onChange={() => setSelectedPackageId(option.id)}
                    />
                    <span>
                      <strong>{option.name}</strong>
                      <small>{option.description}</small>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className={styles.field}>
              <span>Detalhes da arte</span>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Ex: caneca com meu nome, flores em tons rosa e a frase Feliz Aniversário."
                rows="4"
              />
            </label>
          </Reveal>

          <Reveal className={styles.summary}>
            <div className={styles.priceBox}>
              <span className={styles.summaryLabel}>Pré-orçamento</span>
              <strong className={styles.total}>{totalText}</strong>
              <p className={styles.priceNote}>
                Estimativa a partir de {unitText} por unidade. A confirmação acontece pelo WhatsApp.
              </p>
            </div>

            <dl className={styles.resume}>
              <div>
                <dt>Produto</dt>
                <dd>{productName}</dd>
              </div>
              <div>
                <dt>Personalização</dt>
                <dd>{selectedPackage.name}</dd>
              </div>
              <div>
                <dt>Quantidade</dt>
                <dd>{normalizedQuantity} unidade(s)</dd>
              </div>
            </dl>

            <a className={styles.whatsappButton} href={whatsAppHref} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className={styles.whatsappIcon} />
              Pedir orçamento no WhatsApp
            </a>

            <details className={styles.preview}>
              <summary>Ver mensagem pronta</summary>
              <p>{whatsAppMessage}</p>
            </details>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

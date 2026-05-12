export const contact = {
  phoneDisplay: '(49) 9 8898-2232',
  phoneHref: 'tel:+5549988982232',
  whatsappUrl: 'https://wa.me/5549988982232',
  email: 'gilalmeidaderi@gmail.com',
  emailHref: 'mailto:gilalmeidaderi@gmail.com',
  addressLine: 'Rua Albino Sá Filho, 1355 D',
  neighborhood: 'Bairro Vila Real',
  city: 'Chapecó / SC',
  hours: 'Segunda a sexta, das 09:00 às 12:00 e das 14:00 às 18:00',
  instagramUrl: 'https://www.instagram.com/guria.arteira.chape/',
  instagramHandle: '@guria.arteira.chape',
};

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#personalizar', label: 'Orçamento' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#relatos', label: 'Relatos' },
  { href: '#cta-final', label: 'Contato' },
];

export const heroLines = ['Você tem a ideia,', 'nós personalizamos'];

const productImage = (file) => new URL(`../assets/produtos/${file}`, import.meta.url).href;

export const businessStory = {
  eyebrow: 'Desde 2019',
  title: 'PERSONALIZAÇÃO COM CARA DE PRESENTE E ACABAMENTO PROFISSIONAL',
  intro:
    'A Guria Arteira nasceu criando peças personalizadas para equipes e hoje atende presentes, empresas, eventos e datas especiais com produção sob demanda.',
  body:
    'O processo combina atendimento próximo, alinhamento de arte antes da produção e sublimação para entregar cores vivas em canecas, camisetas, copos, almofadas, papelaria e brindes.',
  highlights: [
    { value: '2019', label: 'início da história' },
    { value: '1+', label: 'peça sob demanda' },
    { value: '100%', label: 'personalizado' },
  ],
};

export const differentials = [
  {
    title: 'Ideia bem direcionada',
    description: 'Você envia referências, cores, tema ou logotipo e recebe orientação para transformar o pedido em um produto viável.',
    tone: 'magenta',
  },
  {
    title: 'Sem pedido mínimo',
    description: 'Produzimos desde uma peça especial até quantidades maiores para equipes, lembranças, ações comerciais e empresas.',
    tone: 'cyan',
  },
  {
    title: 'Sublimação durável',
    description: 'A técnica valoriza cores, fotos e estampas com acabamento limpo em diferentes materiais personalizados.',
    tone: 'green',
  },
  {
    title: 'Atendimento direto',
    description: 'O orçamento acontece pelo WhatsApp para alinhar prazo, arte, quantidade, material e retirada em Chapecó.',
    tone: 'yellow',
  },
];

export const products = [
  {
    name: 'Uniformes e camisetas',
    description: 'Para equipes, empresas, cursos, eventos e presentes personalizados.',
    detail: 'Produção sob demanda com arte alinhada antes da sublimação.',
    tone: 'cyan',
    image: productImage('8755a4a7-aef6-467e-967e-d969432d3781.jpg'),
    examples: ['Times', 'Empresas', 'Cursos'],
  },
  {
    name: 'Canecas personalizadas',
    description: 'Presentes, kits, lembranças, ações comerciais e datas especiais.',
    detail: 'Ideal para colocar nome, frase, foto, marca ou tema de evento.',
    tone: 'magenta',
    image: productImage('4028014d-c69f-46d8-99db-52f8970a9c58.jpg'),
    examples: ['Fotos', 'Nomes', 'Marcas'],
  },
  {
    name: 'Copos, long drinks e squeezes',
    description: 'Opções para festas, aniversários, brindes e uso diário.',
    detail: 'Cores vivas e temas infantis, esportivos, corporativos ou comemorativos.',
    tone: 'green',
    image: productImage('732ed74b-cc23-4172-bef3-eb2447199293.jpg'),
    examples: ['Festas', 'Brindes', 'Infantil'],
  },
  {
    name: 'Almofadas personalizadas',
    description: 'Presentes afetivos, decoração temática e lembranças para datas especiais.',
    detail: 'Boa opção para fotos, frases, personagens, nomes e composições mais afetivas.',
    tone: 'purple',
    image: productImage('fc65872f-38cb-4b43-831e-ede47f4e4f53.jpg'),
    examples: ['Fotos', 'Natal', 'Família'],
  },
  {
    name: 'Papelaria e canetas',
    description: 'Itens úteis para empresas, escolas, consultórios e eventos.',
    detail: 'Ajuda a deixar marca, contato e identidade visual presentes no dia a dia.',
    tone: 'orange',
    image: productImage('f0da5838-08fb-4ff2-bec5-5077fa994206.jpg'),
    examples: ['Canetas', 'Tags', 'Eventos'],
  },
  {
    name: 'Kits e lembranças',
    description: 'Combinações sob medida para aniversários, Natal, empresas e ações especiais.',
    detail: 'Você envia a ideia e a Guria Arteira indica o melhor conjunto para produzir.',
    tone: 'yellow',
    image: productImage('573df70d-38be-443c-98fa-c4e22f84024f.jpg'),
    examples: ['Kits', 'Natal', 'Datas'],
  },
];

export const productCategories = [
  {
    title: 'Canecas personalizadas',
    description: 'Canecas de cerâmica, vidro e modelos para presente com foto, frase, nome ou marca.',
    tone: 'magenta',
    image: productImage('4028014d-c69f-46d8-99db-52f8970a9c58.jpg'),
    examples: ['Fotos', 'Nomes', 'Logo'],
  },
  {
    title: 'Camisetas',
    description: 'Camisetas e uniformes para equipes, empresas, cursos, eventos e lembranças.',
    tone: 'cyan',
    image: productImage('8755a4a7-aef6-467e-967e-d969432d3781.jpg'),
    examples: ['Times', 'Empresas', 'Eventos'],
  },
  {
    title: 'Copos e squeezes',
    description: 'Copos long drink, squeezes e opções para festas, brindes, aniversários e uso diário.',
    tone: 'green',
    image: productImage('732ed74b-cc23-4172-bef3-eb2447199293.jpg'),
    examples: ['Festas', 'Infantil', 'Brindes'],
  },
  {
    title: 'Almofadas',
    description: 'Almofadas com fotos, frases, temas infantis, Natal e presentes afetivos.',
    tone: 'purple',
    image: productImage('fc65872f-38cb-4b43-831e-ede47f4e4f53.jpg'),
    examples: ['Fotos', 'Natal', 'Família'],
  },
  {
    title: 'Papelaria personalizada',
    description: 'Canetas, tags, lembranças e itens de apoio para eventos, escolas e empresas.',
    tone: 'orange',
    image: productImage('5f8ef339-3a71-42e0-9f9a-9363f882134f.jpg'),
    examples: ['Canetas', 'Tags', 'Escolas'],
  },
  {
    title: 'Kits presenteáveis',
    description: 'Combinações de produtos personalizados para presentear com mais presença.',
    tone: 'yellow',
    image: productImage('573df70d-38be-443c-98fa-c4e22f84024f.jpg'),
    examples: ['Presentes', 'Natal', 'Eventos'],
  },
  {
    title: 'Brindes corporativos',
    description: 'Produtos com marca para clientes, equipes, feiras, campanhas e ações comerciais.',
    tone: 'cyan',
    image: productImage('b119cd57-6cf6-433b-9b8d-978cf2633e6f.jpg'),
    examples: ['Marca', 'Equipe', 'Campanhas'],
  },
  {
    title: 'Datas comemorativas',
    description: 'Presentes e lembranças para aniversário, Dia dos Pais, Natal, formaturas e ocasiões especiais.',
    tone: 'magenta',
    image: productImage('ca5da38b-d204-4e3a-9805-65c3ff45c76e.jpg'),
    examples: ['Natal', 'Aniversário', 'Formatura'],
  },
];

export const customizerProducts = [
  {
    id: 'caneca',
    name: 'Caneca',
    description: 'Foto, nome, frase, logo ou tema especial.',
    basePrice: 35,
    tone: 'magenta',
  },
  {
    id: 'camiseta',
    name: 'Camiseta ou uniforme',
    description: 'Times, empresas, cursos e eventos.',
    basePrice: 58,
    tone: 'cyan',
  },
  {
    id: 'copo',
    name: 'Copo ou squeeze',
    description: 'Festas, lembranças, brindes e eventos.',
    basePrice: 18,
    tone: 'green',
  },
  {
    id: 'almofada',
    name: 'Almofada',
    description: 'Fotos, frases, datas especiais e decoração.',
    basePrice: 45,
    tone: 'purple',
  },
  {
    id: 'papelaria',
    name: 'Papelaria',
    description: 'Canetas, tags e itens de apoio personalizados.',
    basePrice: 7,
    tone: 'orange',
  },
  {
    id: 'kit',
    name: 'Kit personalizado',
    description: 'Combinações para presentes, datas e empresas.',
    basePrice: 75,
    tone: 'yellow',
  },
  {
    id: 'brinde',
    name: 'Brinde empresarial',
    description: 'Produtos com marca para clientes e equipes.',
    basePrice: 12,
    tone: 'cyan',
  },
  {
    id: 'datas',
    name: 'Data comemorativa',
    description: 'Natal, aniversário, formatura e ocasiões especiais.',
    basePrice: 35,
    tone: 'magenta',
  },
  {
    id: 'outros',
    name: 'Outros',
    description: 'Digite o produto para a equipe avaliar.',
    basePrice: null,
    tone: 'purple',
  },
];

export const personalizationPackages = [
  {
    id: 'nome-frase',
    name: 'Nome ou frase',
    description: 'Personalização simples com texto, nome, data ou frase curta.',
    unitExtra: 0,
    setupFee: 0,
  },
  {
    id: 'foto-imagem',
    name: 'Foto ou imagem',
    description: 'Aplicação de foto, personagem, referência visual ou tema pronto.',
    unitExtra: 6,
    setupFee: 0,
  },
  {
    id: 'logo-marca',
    name: 'Logo ou marca',
    description: 'Boa opção para empresas, escolas, times e eventos corporativos.',
    unitExtra: 5,
    setupFee: 15,
  },
  {
    id: 'arte-completa',
    name: 'Arte completa',
    description: 'Composição mais detalhada com cores, ajustes e organização da arte.',
    unitExtra: 9,
    setupFee: 25,
  },
];

export const steps = [
  {
    number: '1',
    tone: 'magenta',
    title: 'VOCÊ ENVIA A IDEIA',
    description:
      'Chame no WhatsApp e conte produto, quantidade, prazo, tema, fotos, referências, cores ou logo.',
  },
  {
    number: '2',
    tone: 'cyan',
    title: 'A ARTE É ALINHADA',
    description:
      'A equipe avalia o pedido, orienta o melhor caminho e confirma detalhes antes de produzir.',
  },
  {
    number: '3',
    tone: 'green',
    title: 'O PRODUTO É FINALIZADO',
    description:
      'A peça sai personalizada, pronta para presentear, divulgar sua marca ou marcar a data especial.',
  },
];

export const galleryItems = [
  {
    label: 'Uniformes esportivos personalizados',
    tag: 'Uniformes',
    tone: 'cyan',
    image: productImage('1cc0dfed-f3cd-4e99-803a-3f742c2999aa.jpg'),
  },
  {
    label: 'Camisetas infantis estampadas',
    tag: 'Camisetas',
    tone: 'magenta',
    image: productImage('205006d3-5fd0-427c-a016-106f68e010b0.jpg'),
  },
  {
    label: 'Squeezes personalizadas para crianças',
    tag: 'Squeezes',
    tone: 'cyan',
    image: productImage('29736d9e-8252-47e8-82ed-82c2541df163.jpg'),
  },
  {
    label: 'Uniforme de equipe',
    tag: 'Uniformes',
    tone: 'yellow',
    image: productImage('2f8a3df6-5981-4a0f-b2e4-cfdd6395cb74.jpg'),
  },
  {
    label: 'Camisetas com frases personalizadas',
    tag: 'Camisetas',
    tone: 'purple',
    image: productImage('33baa264-22e6-4d68-b2d8-e4d63baf8039.jpg'),
  },
  {
    label: 'Caneca personalizada para presente',
    tag: 'Canecas',
    tone: 'magenta',
    image: productImage('4028014d-c69f-46d8-99db-52f8970a9c58.jpg'),
  },
  {
    label: 'Taças personalizadas para casal',
    tag: 'Taças',
    tone: 'yellow',
    image: productImage('573df70d-38be-443c-98fa-c4e22f84024f.jpg'),
  },
  {
    label: 'Canetas personalizadas coloridas',
    tag: 'Papelaria',
    tone: 'green',
    image: productImage('5f8ef339-3a71-42e0-9f9a-9363f882134f.jpg'),
  },
  {
    label: 'Copos long drink neon',
    tag: 'Copos',
    tone: 'orange',
    image: productImage('732ed74b-cc23-4172-bef3-eb2447199293.jpg'),
  },
  {
    label: 'Copos para aniversário',
    tag: 'Copos',
    tone: 'magenta',
    image: productImage('80fd22c2-e24b-475c-9d40-de1ff3924d43.jpg'),
  },
  {
    label: 'Uniformes numerados',
    tag: 'Uniformes',
    tone: 'cyan',
    image: productImage('8755a4a7-aef6-467e-967e-d969432d3781.jpg'),
  },
  {
    label: 'Taças personalizadas',
    tag: 'Taças',
    tone: 'magenta',
    image: productImage('99a592f0-c5fb-4a7e-88cd-76e89210323e.jpg'),
  },
  {
    label: 'Camisetas para batizado',
    tag: 'Camisetas',
    tone: 'purple',
    image: productImage('9e3ecc17-41e7-44b0-a0a8-f32959253962.jpg'),
  },
  {
    label: 'Uniformes esportivos rosa',
    tag: 'Uniformes',
    tone: 'magenta',
    image: productImage('af3a53c2-5c4d-4346-929e-22b7ec84156c.jpg'),
  },
  {
    label: 'Canecas corporativas',
    tag: 'Empresas',
    tone: 'orange',
    image: productImage('b119cd57-6cf6-433b-9b8d-978cf2633e6f.jpg'),
  },
  {
    label: 'Kits de uniformes esportivos',
    tag: 'Kits',
    tone: 'yellow',
    image: productImage('b900146d-66e1-4d19-86fe-99175b7c6b29.jpg'),
  },
  {
    label: 'Canetas para empresa',
    tag: 'Empresas',
    tone: 'green',
    image: productImage('b961615a-a73e-4190-a180-d258479c6fd6.jpg'),
  },
  {
    label: 'Lembranças natalinas',
    tag: 'Datas',
    tone: 'magenta',
    image: productImage('ca5da38b-d204-4e3a-9805-65c3ff45c76e.jpg'),
  },
  {
    label: 'Camisetas de curso',
    tag: 'Camisetas',
    tone: 'cyan',
    image: productImage('d1c7d9e4-d512-4dbb-8892-6e62694a94ef.jpg'),
  },
  {
    label: 'Copos com canudo',
    tag: 'Copos',
    tone: 'green',
    image: productImage('eaa14028-3336-4e23-bbe5-acf72fb09861.jpg'),
  },
  {
    label: 'Copos infantis personalizados',
    tag: 'Copos',
    tone: 'yellow',
    image: productImage('eaeaf3a1-7ba4-403b-90ef-a500d4fa56a4.jpg'),
  },
  {
    label: 'Canetas em grande quantidade',
    tag: 'Papelaria',
    tone: 'magenta',
    image: productImage('f0da5838-08fb-4ff2-bec5-5077fa994206.jpg'),
  },
  {
    label: 'Almofadas de Natal',
    tag: 'Almofadas',
    tone: 'orange',
    image: productImage('fc65872f-38cb-4b43-831e-ede47f4e4f53.jpg'),
  },
  {
    label: 'Canecas de vidro personalizadas',
    tag: 'Canecas',
    tone: 'cyan',
    image: productImage('fde12dd7-05c4-4836-9f86-e1d76911f89b.jpg'),
  },
];

export const testimonials = [
  {
    title: 'Arte alinhada antes da produção',
    description: 'O pedido é conferido com o cliente para reduzir dúvidas sobre cores, nomes, tema, quantidade e acabamento.',
    tone: 'magenta',
  },
  {
    title: 'Pedidos de uma peça ou mais',
    description: 'A produção atende presentes únicos, kits, lembranças e demandas maiores para equipes e empresas.',
    tone: 'cyan',
  },
  {
    title: 'Trabalhos reais na galeria',
    description: 'As fotos do site mostram variedade de produtos já personalizados, de uniformes a canecas, copos e almofadas.',
    tone: 'purple',
  },
];

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
  { href: '#personalizar', label: 'Personalizar' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#relatos', label: 'Relatos' },
  { href: '#cta-final', label: 'Contato' },
];

export const heroLines = ['VOCÊ TEM', 'A IDEIA!!', 'NÓS PERSONALIZAMOS!!'];

const productImage = (file) => new URL(`../assets/produtos/${file}`, import.meta.url).href;

export const businessStory = {
  eyebrow: 'Desde 2019',
  title: 'DA PAIXÃO POR FUTEBOL PARA A ARTE DE PERSONALIZAR',
  intro:
    'A Criativa Artes nasceu do gosto por futebol, criando camisetas para equipes e ampliando aos poucos para presentes, brindes e produtos personalizados para diferentes ocasiões.',
  body:
    'Hoje trabalhamos com sublimação, uma técnica limpa e sustentável, para transformar ideias em peças únicas com qualidade, cuidado e a quantidade que cada cliente precisa.',
  highlights: [
    { value: '2019', label: 'início da história' },
    { value: '1+', label: 'peça sob demanda' },
    { value: '100%', label: 'personalizado' },
  ],
};

export const differentials = [
  {
    title: 'A ideia que você sonhar',
    description: 'Você conta o que imagina e a Criativa Artes desenvolve a personalização para transformar esse pedido em produto.',
    tone: 'magenta',
  },
  {
    title: 'Sem pedido mínimo',
    description: 'Produzimos na quantidade que o cliente precisa, desde uma peça especial até demandas maiores para equipes e empresas.',
    tone: 'cyan',
  },
  {
    title: 'Sublimação limpa',
    description: 'A produção usa sublimação, técnica versátil, durável e mais limpa para criar cores vivas em diferentes materiais.',
    tone: 'green',
  },
  {
    title: 'Atendimento direto',
    description: 'O contato acontece pelo WhatsApp, com conversa próxima para entender referências, cores, prazos e detalhes do projeto.',
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
    name: 'Taças personalizadas',
    description: 'Para casais, formaturas, eventos, lembranças e kits especiais.',
    detail: 'Um produto leve e marcante para transformar pequenas datas em presente.',
    tone: 'yellow',
    image: productImage('573df70d-38be-443c-98fa-c4e22f84024f.jpg'),
    examples: ['Casais', 'Eventos', 'Kits'],
  },
  {
    name: 'Canetas e brindes',
    description: 'Para empresas, escolas, consultórios e ações promocionais.',
    detail: 'Boa escolha para pedidos em quantidade, com marca e contato visíveis.',
    tone: 'orange',
    image: productImage('f0da5838-08fb-4ff2-bec5-5077fa994206.jpg'),
    examples: ['Empresas', 'Escolas', 'Eventos'],
  },
  {
    name: 'Presentes e lembranças',
    description: 'Almofadas, lembranças natalinas, kits afetivos e produtos sob medida.',
    detail: 'Você envia a ideia e a Criativa Artes encontra o melhor formato para produzir.',
    tone: 'purple',
    image: productImage('ca5da38b-d204-4e3a-9805-65c3ff45c76e.jpg'),
    examples: ['Natal', 'Datas', 'Família'],
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
    id: 'copo',
    name: 'Copo long drink',
    description: 'Festas, lembranças, brindes e eventos.',
    basePrice: 18,
    tone: 'cyan',
  },
  {
    id: 'taca',
    name: 'Taça',
    description: 'Casais, formaturas, kits e datas especiais.',
    basePrice: 32,
    tone: 'yellow',
  },
  {
    id: 'camiseta',
    name: 'Camiseta ou uniforme',
    description: 'Times, empresas, cursos e eventos.',
    basePrice: 58,
    tone: 'green',
  },
  {
    id: 'caneta',
    name: 'Caneta',
    description: 'Brindes corporativos e pedidos em quantidade.',
    basePrice: 7,
    tone: 'orange',
  },
  {
    id: 'presente',
    name: 'Presente personalizado',
    description: 'Almofadas, lembranças e kits sob medida.',
    basePrice: 45,
    tone: 'purple',
  },
  {
    id: 'outros',
    name: 'Outros',
    description: 'Digite o produto para a equipe avaliar.',
    basePrice: null,
    tone: 'cyan',
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
    name: 'Pacote arte completa',
    description: 'Criação mais detalhada com composição, cores e ajustes de layout.',
    unitExtra: 9,
    setupFee: 25,
  },
];

export const steps = [
  {
    number: '1',
    tone: 'magenta',
    title: 'VOCÊ MANDA A IDEIA',
    description:
      'Entre em contato pelo WhatsApp e nos conte o que você precisa. Fotos, referências, cores: quanto mais, melhor.',
  },
  {
    number: '2',
    tone: 'cyan',
    title: 'NÓS CRIAMOS',
    description:
      'Nossa equipe desenvolve o projeto personalizado e envia a arte para aprovação antes de produzir.',
  },
  {
    number: '3',
    tone: 'green',
    title: 'VOCÊ RECEBE',
    description:
      'Produto finalizado com qualidade e carinho, pronto para surpreender. Entrega em Chapecó e região.',
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
    label: 'Almofadas personalizadas',
    tag: 'Presentes',
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
    tag: 'Canetas',
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
    label: 'Taças Nivea personalizadas',
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
    tag: 'Canecas',
    tone: 'orange',
    image: productImage('b119cd57-6cf6-433b-9b8d-978cf2633e6f.jpg'),
  },
  {
    label: 'Kits de uniformes esportivos',
    tag: 'Uniformes',
    tone: 'yellow',
    image: productImage('b900146d-66e1-4d19-86fe-99175b7c6b29.jpg'),
  },
  {
    label: 'Canetas para empresa',
    tag: 'Canetas',
    tone: 'green',
    image: productImage('b961615a-a73e-4190-a180-d258479c6fd6.jpg'),
  },
  {
    label: 'Lembranças natalinas',
    tag: 'Presentes',
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
    tag: 'Canetas',
    tone: 'magenta',
    image: productImage('f0da5838-08fb-4ff2-bec5-5077fa994206.jpg'),
  },
  {
    label: 'Almofadas de Natal',
    tag: 'Presentes',
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
    title: 'Relatos reais dos trabalhos',
    description: 'A seção está preparada para destacar clientes que já receberam produtos personalizados e compartilharam suas experiências.',
    tone: 'magenta',
  },
  {
    title: 'Antes da produção',
    description: 'Cada arte pode ser alinhada com o cliente antes de seguir para a produção, reduzindo dúvidas e deixando o resultado mais fiel.',
    tone: 'cyan',
  },
  {
    title: 'Fotos entram aqui',
    description: 'Quando as imagens dos trabalhos chegarem, elas entram junto dos relatos para mostrar acabamento, variedade e carinho em cada peça.',
    tone: 'purple',
  },
];

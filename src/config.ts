// Site Configuration
// Le Refuge de la Pomme - B&B in Gressan, Valle d'Aosta

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "it",
  siteTitle: "Le Refuge de la Pomme - B&B Valle d'Aosta",
  siteDescription: "Accogliente B&B a Gressan, Valle d'Aosta. Scopri il comfort di un rifugio di montagna con tutti i servizi moderni.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
  airbnbLink: string;
  phone: string;
}

export const heroConfig: HeroConfig = {
  backgroundText: "Le Refuge de la Pomme",
  heroImage: "/images/cop.jpeg",
  heroImageAlt: "Esterno del B&B Le Refuge de la Pomme con vista sulle montagne",
  overlayText: "La tua casa in Valle d'Aosta",
  brandName: "Le Refuge de la Pomme",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Alloggio", href: "#alloggio" },
    { label: "Galleria", href: "#galleria" },
    { label: "Servizi", href: "#servizi" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "FAQ", href: "#faq" },
  ],
  airbnbLink: "https://www.airbnb.com/rooms/1182698702822127628",
  phone: "+393473014084",
};

// Intro Grid Section - About the B&B
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
  airbnbLink: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Il tuo rifugio",
  titleLine2: "in Valle d'Aosta",
  description: "Le Refuge de la Pomme è un accogliente appartamento situato a Gressan, nel cuore della Valle d'Aosta. Circondato dalle maestose montagne alpine, offre un'esperienza autentica di montagna con tutti i comfort moderni. Ideale per famiglie, coppie e gruppi di amici che cercano una vacanza rilassante nella natura.",
  portfolioImages: [
    { src: "/images/WhatsApp Image 2026-03-16 at 19.14.25.jpeg", alt: "Soggiorno accogliente con travi in legno" },
    { src: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (2).jpeg", alt: "Zona pranzo con tavolo e sedie" },
    { src: "/images/WhatsApp Image 2026-03-16 at 19.14.32 (1).jpeg", alt: "Cucina moderna e attrezzata" },
    { src: "/images/09dfd78b-6be2-4cc5-ac48-d349ad0b80a7.jpeg", alt: "Soggiorno caldo e accogliente" },
    { src: "/images/29cbfa5c-91ef-4ff5-bbfb-8a3c90eb77f2.jpeg", alt: "Cucina attrezzata" },
    { src: "/images/WhatsApp Image 2026-03-16 at 19.14.32.jpeg", alt: "Camera da letto matrimoniale" },
    { src: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (1).jpeg", alt: "Camera con letti a castello" },
    { src: "/images/e09a99ee-98b9-419d-bd03-0a8bc882a76a.jpeg", alt: "Camera matrimoniale elegante" },
    { src: "/images/b61f250d-6e8b-4775-b51c-2bf66f8536a1.jpeg", alt: "Camera familiare con letti a castello" },
    { src: "/images/ec8d1688-d81e-4502-a478-6eeacfd51517.jpeg", alt: "Ingresso del B&B" },
    { src: "/images/931bd77f-a402-4884-842f-75de56dafa08.jpeg", alt: "Bagno moderno" },
    { src: "/images/0872fc94-5210-4d71-a7aa-57eca8c30518.jpeg", alt: "Bagno con doccia" },
    { src: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (8).jpeg", alt: "Spazi interni" },
  ],
  accentText: "Gressan, Valle d'Aosta - Italia",
  airbnbLink: "https://www.airbnb.com/rooms/1182698702822127628",
};

// Featured Projects Section - Rooms & Spaces
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
  airbnbLink: string;
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Gli Spazi",
  titleRegular: "Il nostro",
  titleItalic: "Alloggio",
  viewAllText: "Vedi tutti gli spazi",
  viewAllHref: "#alloggio",
  viewProjectText: "Scopri di più",
  airbnbLink: "https://www.airbnb.com/rooms/1182698702822127628",
  projects: [
    {
      id: 1,
      title: "Zona Pranzo e Cucina",
      category: "Cucina e Pranzo",
      year: "",
      image: "/images/9c6296b6-b323-46b5-a016-c202c9713334.jpeg",
      description: "Spazioso ambiente con cucina moderna completamente attrezzata e zona pranzo elegante. Frigorifero, forno, piano cottura, microonde, angolo bar e tavolo da pranzo per 6 persone. L'ambiente perfetto per cucinare e condividere i pasti in compagnia.",
    },
    {
      id: 2,
      title: "Camera Matrimoniale",
      category: "Camera",
      year: "",
      image: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (13).jpeg",
      description: "Elegante camera matrimoniale con armadio in legno, comò con specchio e finiture calde che creano un'atmosfera romantica e rilassante.",
    },
    {
      id: 3,
      title: "Camera Familiare",
      category: "Camera",
      year: "",
      image: "/images/b61f250d-6e8b-4775-b51c-2bf66f8536a1.jpeg",
      description: "Camera perfetta per famiglie con letti a castello e letto singolo. Spaziosa e confortevole, ideale per i più piccoli.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
  airbnbLink: string;
}

export const servicesConfig: ServicesConfig = {
  subtitle: "Cosa Offriamo",
  titleLine1: "I nostri",
  titleLine2Italic: "Servizi",
  description: "Le Refuge de la Pomme offre tutti i servizi necessari per una vacanza confortevole e senza pensieri. Dalla cucina attrezzata al garage privato, ogni dettaglio è curato per il tuo benessere.",
  airbnbLink: "https://www.airbnb.com/rooms/1182698702822127628",
  services: [
    {
      iconName: "Home",
      title: "Appartamento Completo",
      description: "90mq di spazio con soggiorno, cucina, due camere da letto e bagno. Perfetto per 4-6 ospiti.",
    },
    {
      iconName: "Utensils",
      title: "Cucina Attrezzata",
      description: "Frigorifero, forno, piano cottura, microonde, bollitore e tutta la stoviglia necessaria.",
    },
    {
      iconName: "Car",
      title: "Garage Privato",
      description: "Ampio garage per due auto con accesso diretto all'appartamento. Comodo e sicuro.",
    },
    {
      iconName: "Wifi",
      title: "Wi-Fi Gratuito",
      description: "Connessione internet ad alta velocità inclusa per tutta la durata del soggiorno.",
    },
    {
      iconName: "Tv",
      title: "TV e Intrattenimento",
      description: "TV a schermo piatto nel soggiorno e nelle camere per momenti di relax.",
    },
    {
      iconName: "WashingMachine",
      title: "Lavanderia",
      description: "Lavatrice e asciugatrice a disposizione degli ospiti per soggiorni lunghi.",
    },
    {
      iconName: "Mountain",
      title: "Vista Montagna",
      description: "Panorama mozzafiato sulle montagne della Valle d'Aosta direttamente dal balcone.",
    },
    {
      iconName: "Thermometer",
      title: "Riscaldamento Autonomo",
      description: "Termosifoni in ogni stanza per un comfort ottimale anche nelle giornate più fredde.",
    },
  ],
};

// Why Choose Me Section - B&B Features
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
  airbnbLink: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Perché Sceglierci",
  titleRegular: "Il Rifugio",
  titleItalic: "Perfetto",
  statsLabel: "In Numeri",
  airbnbLink: "https://www.airbnb.com/rooms/1182698702822127628",
  stats: [
    { value: 6, suffix: "", label: "Ospiti Massimi" },
    { value: 2, suffix: "", label: "Camere da Letto" },
    { value: 1, suffix: "", label: "Bagno" },
    { value: 90, suffix: "mq", label: "Superficie" },
  ],
  featureCards: [
    {
      image: "/images/Capture.PNG",
      imageAlt: "Zona pranzo con tavolo e sedie",
      title: "Zona Pranzo",
      description: "Tavolo da pranzo per 6 persone, perfetto per gustare i pasti in compagnia.",
    },
    {
      image: "/images/0872fc94-5210-4d71-a7aa-57eca8c30518.jpeg",
      imageAlt: "Bagno con doccia",
      title: "Bagno Moderno",
      description: "Bagno completo con doccia, bidet, lavabo e tutti i comfort necessari.",
    },
  ],
  wideImage: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (6).jpeg",
  wideImageAlt: "Vista esterna del B&B con giardino e meli a destra",
  wideTitle: "Un'oasi di pace",
  wideDescription: "Immerso nel verde con vista panoramica sulle montagne, Le Refuge de la Pomme è il luogo ideale per rigenerarsi e godere della natura circostante.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  date?: string;
  rating?: number;
  verified?: boolean;
  image: string;
  quote: string;
}

export interface RatingBreakdown {
  label: string;
  value: number;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  rating: number;
  reviewCount: number;
  guestFavorite: boolean;
  breakdown: RatingBreakdown[];
  airbnbLink: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Dicono di Noi",
  titleRegular: "Recensioni",
  titleItalic: "Ospiti",
  rating: 5.0,
  reviewCount: 15,
  guestFavorite: true,
  breakdown: [
    { label: "Pulizia", value: 5.0 },
    { label: "Precisione", value: 4.9 },
    { label: "Check-in", value: 4.7 },
    { label: "Comunicazione", value: 4.9 },
    { label: "Posizione", value: 4.9 },
    { label: "Rapporto qualità/prezzo", value: 4.8 },
  ],
  airbnbLink: "https://www.airbnb.com/rooms/1182698702822127628/reviews",
  testimonials: [
    {
      id: 1,
      name: "Natasha",
      role: "9 anni su Airbnb",
      date: "Giugno 2025",
      rating: 5,
      verified: true,
      image: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (6).jpeg",
      quote: "Il posto era magnificamente posizionato con una vista incredibile sulla valle d'Aosta... L'appartamento è molto spazioso, moderno, pulito e dotato di tutte le attrezzature necessarie per un soggiorno confortevole.",
    },
    {
      id: 2,
      name: "Paul",
      role: "4 anni su Airbnb",
      date: "Marzo 2026",
      rating: 5,
      verified: true,
      image: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (7).jpeg",
      quote: "Abbiamo trascorso un bellissimo soggiorno, il cottage è accogliente, ben attrezzato, confortevole e la vista su Aosta è molto bella. La host Manuela è molto reattiva e gli scambi sono stati fluidi.",
    },
    {
      id: 3,
      name: "Josh",
      role: "11 anni su Airbnb",
      date: "Agosto 2025",
      rating: 5,
      verified: true,
      image: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (8).jpeg",
      quote: "Appartamento bellissimo e impeccabile, ma anche casalingo e confortevole. La vista è il punto forte.",
    },
    {
      id: 4,
      name: "Matteo",
      role: "4 anni su Airbnb",
      date: "Febbraio 2026",
      rating: 5,
      verified: true,
      image: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (13).jpeg",
      quote: "Appartamento recentemente ristrutturato e curato in ogni dettaglio. Host gentile e disponibile. Location incantevole, tranquilla ma molto vicino ad Aosta.",
    },
    {
      id: 5,
      name: "Luca",
      role: "6 anni su Airbnb",
      date: "Gennaio 2026",
      rating: 5,
      verified: true,
      image: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (2).jpeg",
      quote: "Bellissimo appartamento moderno con vista mozzafiato. Attenzione ai dettagli e davvero tranquillo. La vista sulla valle a mezzanotte è stata impagabile.",
    },
    {
      id: 6,
      name: "Erika",
      role: "10 anni su Airbnb",
      date: "Gennaio 2026",
      rating: 5,
      verified: true,
      image: "/images/WhatsApp Image 2026-03-16 at 19.14.34 (1).jpeg",
      quote: "Appartamento moderno ed estremamente curato in montagna, facile da trovare in una posizione eccellente vicino ad Aosta e Pila.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Domande Frequenti",
  titleRegular: "Hai",
  titleItalic: "Domande?",
  ctaText: "Pronto per prenotare?",
  ctaButtonText: "Prenota su Airbnb",
  ctaHref: "https://www.airbnb.com/rooms/1182698702822127628",
  faqs: [
    {
      id: "1",
      question: "Quanti ospiti può ospitare l'appartamento?",
      answer: "L'appartamento può ospitare fino a 6 persone. Dispone di una camera matrimoniale, una camera con letti a castello e un letto singolo aggiuntivo. Ideale per famiglie o gruppi di amici.",
    },
    {
      id: "2",
      question: "È possibile portare animali domestici?",
      answer: "Sì, accettiamo animali domestici di piccola taglia su richiesta. Ti preghiamo di comunicarcelo al momento della prenotazione per verificare la disponibilità.",
    },
    {
      id: "3",
      question: "Quali sono gli orari di check-in e check-out?",
      answer: "Il check-in è disponibile dalle 15:00, mentre il check-out deve essere effettuato entro le 11:00. Per esigenze diverse, contattaci al numero +393473014084.",
    },
    {
      id: "4",
      question: "L'appartamento dispone di parcheggio?",
      answer: "Sì, l'appartamento include un ampio garage privato per due auto con accesso diretto all'alloggio. È incluso nel prezzo della prenotazione.",
    },
    {
      id: "5",
      question: "Quali attività si possono fare nei dintorni?",
      answer: "La Valle d'Aosta offre infinite possibilità: escursioni in montagna, sci nelle vicine stazioni sciistiche, visite ai castelli medievali, degustazioni di vini e prodotti tipici, terme e molto altro. Saremo felici di consigliarti le migliori attività!",
    },
    {
      id: "6",
      question: "Come posso prenotare?",
      answer: "Puoi prenotare direttamente su Airbnb cliccando sul pulsante 'Prenota su Airbnb' in homepage o in fondo alla pagina. Per qualsiasi informazione puoi anche contattarci al numero +393473014084.",
    },
  ],
};

// Footer Section
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  phone: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
  airbnbLink: string;
}

export const footerConfig: FooterConfig = {
  logoText: "Le Refuge de la Pomme",
  contactLabel: "Contattaci",
  phone: "+393473014084",
  navigationLabel: "Navigazione",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Alloggio", href: "#alloggio" },
    { label: "Galleria", href: "#galleria" },
    { label: "Servizi", href: "#servizi" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "FAQ", href: "#faq" },
  ],
  tagline: "La tua casa in Valle d'Aosta\nDove il comfort incontra la montagna",
  copyright: "© 2024 Le Refuge de la Pomme. Tutti i diritti riservati.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Termini e Condizioni", href: "#" },
  ],
  airbnbLink: "https://www.airbnb.com/rooms/1182698702822127628",
};

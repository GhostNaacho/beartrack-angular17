// import images
//import LogoImg from '@public/assets/images/logo.svg';
//import HeroImg from '@public/assets/images/hero/hero.svg';
//import Feature1 from '@public/assets/images/features/feature1.svg';
//import Feature2 from '@public/assets/images/features/feature2.svg';
//import Feature3 from '@public/assets/images/features/feature3.svg';
//import Feature4 from '@public/assets/images/features/feature4.svg';


export const header = {
  logo: "LogoImg",
  btnText: 'CONTÁCTANOS',
};

export const nav = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/' },
  { name: 'Precio', href: '/' },
  { name: 'Comentarios', href: '/' },
];

export const hero = {
  title: 'La logística',
  subtitle: 'en tus manos.',
  lead1: 'Transforma la gestión de envíos en una experiencia sin complicaciones con BearTrack. Desde la creación de rutas hasta el monitoreo en tiempo real, nuestro sistema intuitivo pone el poder de la logística en tus manos. Aumenta la satisfacción de tus clientes, reduce',
  lead2: 'Aumenta la satisfacción de tus clientes, reduce los costos operativos y haz crecer tu negocio con BearTrack. Descubre una nueva era de gestión de envíos hoy mismo.',
  image: "HeroImg",
  btnText: 'AGENDA TU DEMO',
};

export const features = {
  title: 'Características principales',
  subtitle:
    'Conoce cómo nuestras características principales están llevando la logística al siguiente nivel.',
    items: [
      {
        id: 0,
        title: "Administración",
        image: "/assets/images/admin.jpeg",
        description:
          "Lorem ipsum dolor sit amet consectetur. Molestie at adipiscing mi nam. Morbi urna odio quis amet risus. Erat arcu imperdiet et pellentesque sollicitudin egestas rhoncus sagittis lobortis. Aliquet vitae non vel diam pharetra sapien aliquet lorem. Nunc nunc pulvinar metus est pharetra massa. Varius sagittis lacus quam nunc.Accumsan lorem nunc mauris neque morbi eu. Aliquet dignissim erat augue congue tincidunt fermentum euismod volutpat risus. Montes id nam rhoncus nulla facilisis facilisis integer auctor.",
      },
      {
        id: 1,
        title: "Seguimiento",
        image: "/assets/images/seguimiento.jpeg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        title: "Reportes",
        image: "/assets/images/reportes.jpeg",
        description:
          "Auctor at eget sagittis eu urna elementum vitae diam ornare. Mauris massa ridiculus erat sed enim. Massa hendrerit sem lacus lectus orci aenean commodo cras tincidunt. Et lacus blandit venenatis tellus consectetur lectus nec et praesent. Id scelerisque ultricies congue elementum eget purus euismod. Rutrum ridiculus porttitor egestas diam fringilla feugiat lacus nec quis. Eget habitant proin sed amet scelerisque at. Mi proin.",
      },
      {
        id: 3,
        title: "Aplicación",
        image: "/assets/images/app.jpeg",
  
        description:
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
      },
    ],
};

export const accordion = {
  title: 'Preguntas frecuentes',
  subtitle:
    'Todo lo que necesitas saber sobre BearTrack.',
  faqs: [
    {
      id: 0,
      que: "¿Cuáles son los medios de pago aceptados?",
      res: "Los únicos requisitos son un computador con navegador web e internet, para poder acceder a la plataforma. Para los repartidores, deben usar Android 8.0 o superior.",
    },
    {
      id: 1,
      que: "¿Realmente puedo tener el control total?",
      res: "Los únicos requisitos son un computador con navegador web e internet, para poder acceder a la plataforma. Para los repartidores, deben usar Android 8.0 o superior.",
    },
    {
      id: 2,
      que: "¿Qué pasa si un cliente ya no trabaja conmigo? ¿Puedo bloquearle el acceso?",
      res: "Los únicos requisitos son un computador con navegador web e internet, para poder acceder a la plataforma. Para los repartidores, deben usar Android 8.0 o superior.",
    },
    {
      id: 3,
      que: "¿Qué requisitos necesito para poder usar BearTrack?",
      res: "Los únicos requisitos son un computador con navegador web e internet, para poder acceder a la plataforma. Para los repartidores, deben usar Android 8.0 o superior.",
    },
    {
      id: 4,
      que: "¿Cómo es el cobro?",
      res: "Los únicos requisitos son un computador con navegador web e internet, para poder acceder a la plataforma. Para los repartidores, deben usar Android 8.0 o superior.",
    },
  ],
};

export const pricing = {
  title: 'Precios',
  subtitle: 'Conoce más sobre nuestros planes y costos.',
  cards: [
    {
    id: 0,
      title: "Por Usuario",
      comentary: "La mejor opción para emprendedores",
      configuration: "Individual",
      price: "$35.000",
      priceType: "por usuario",
      userAdmin: "1",
      userClient: "50",
      storage: "30 días",
      btnText: 'Contratar',
    },
    {
      id: 1,
      title: "Por Uso",
      comentary: "La mejor opción para PYMES",
      configuration: "Usage",
      price: "$150.000",
      priceType: "por paquete",
      userAdmin: "1",
      userClient: "50",
      storage: "30 días",
      btnText: 'Contratar',
    },
    // {
    //   id: 2,
    //   title: "Company",
    //   comentary: "Para logisticas robustas",
    //   configuration: "Company",
    //   price: "$200.000",
    //   priceType: "anual",
    //   userAdmin: "1",
    //   userClient: "50",
    //   storage: "30 días",
    //   btnText: 'Contratar',
    // },
  ],
};

export const testimonials = {
  title: 'Qué dicen nuestros clientes',
  subtitle: 'Las voces de nuestros clientes hablan más alto que cualquier palabra que podamos decir. Descubre cómo BearTrack ha transformado la gestión de envíos para empresas logísticas de todos los tamaños.',
  clients: [
    {
      id: 0,
      stars: 5,
      description:
        "Desde que implementamos BearTrack, hemos notado un cambio significativo en la eficiencia de nuestra cadena logística. Las herramientas fáciles de usar nos permiten planificar rutas de manera rápida y adaptarnos a cambios en tiempo real. ¡Nuestros clientes están encantados con la puntualidad de sus entregas, y nosotros estamos encantados con los resultados!",
      clientName: "GAMU",
    },
    {
      id: 1,
      stars: 5,
      description:
        "Como dueño de una empresa logística, siempre buscaba formas de simplificar nuestras operaciones. Con BearTrack, encontramos la solución perfecta.",
        clientName: "GAMU",
    },
    {
      id: 2,
      stars: 5,
      description:
        "Como usuario no técnico, siempre me preocupa la adaptación a nuevas plataformas. Con BearTrack, esa preocupación desapareció. La curva de aprendizaje es suave, y cuando he tenido alguna pregunta, el equipo de soporte siempre ha estado disponible con respuestas rápidas y soluciones efectivas.",
        clientName: "GAMU",
    },
    {
      id: 3,
      stars: 5,
      description:
        "Esta plataforma no solo mejora la eficiencia, sino que también ha tenido un impacto directo en nuestra rentabilidad.",
        clientName: "GAMU",
    },
    {
      id: 4,
      stars: 5,
      description:
        "¡Recomendaría esta plataforma a cualquier empresa logística que busque simplificar su operación!",
        clientName: "GAMU",
    },
    {
      id: 5,
      stars: 5,
      description:
        "¡Nunca ha sido tan fácil gestionar envíos y mantener a nuestros clientes informados en cada paso del camino!",
        clientName: "GAMU",
    },
    {
      id: 6,
      stars: 5,
      description:
        "Esta plataforma no solo mejora la eficiencia, sino que también ha tenido un impacto directo en nuestra rentabilidad.",
        clientName: "GAMU",
    },
    {
      id: 7,
      stars: 5,
      description:
        "Como dueño de una empresa logística, siempre buscaba formas de simplificar nuestras operaciones. Con BearTrack, encontramos la solución perfecta.",
        clientName: "GAMU",
    },
    {
      id: 8,
      stars: 5,
      description:
        "¡Nunca ha sido tan fácil gestionar envíos y mantener a nuestros clientes informados en cada paso del camino!",
        clientName: "GAMU",
    },
  ],
};

export const cta = {
  title: 'Empecemos',
  subtitle: 'Tengamos una reunión de 15 minutos para explicarte cómo te podemos ayudar a hacer crecer tu negocio en base a una logística de calidad.',
  btnText: 'AGENDA TU DEMO',
};

export const footer = {
  logo: "LogoImg",
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @DvlprChris 2024',
};

export const bubbles = {
  items: [
    {id: 0, bubble: " "},
    {id: 1, bubble: " "},
    {id: 2, bubble: " "},
    {id: 3, bubble: " "},
    {id: 4, bubble: " "},
    {id: 5, bubble: " "},
    {id: 6, bubble: " "},
    {id: 7, bubble: " "},
    {id: 9, bubble: " "},
    {id: 9, bubble: " "},
    
  ]
};
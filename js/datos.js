/* ==========================================================================
   MODO SHOP · Datos del sitio
   --------------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITÁS TOCAR PARA ACTUALIZAR LA WEB.

   Cambiar el stock:          editá "stock" del producto.
   Marcar como agotado:       poné  stock: 0   (aparece como AGOTADO).
   Sacarlo de la web:         agregá  oculto: true
   Agregar Instagram:         completá  instagram  acá abajo.
   Mostrar precios:           agregá  precio: 55000  al producto.
                              Si no hay precio, muestra "Consultar precio".
   Cambiar el dupe:           editá  dupe: '...'  del producto.
   Si no se parece a nada:    poné  original: true  (muestra "Creación propia").
   ========================================================================== */

window.MODOSHOP = window.MODOSHOP || {};

MODOSHOP.config = {
  marca: 'MODO SHOP',

  /* WhatsApp en formato internacional, sin + ni espacios.
     54 (Argentina) + 9 (celular) + 264 (San Juan) + número */
  whatsapp: '5492645744837',
  whatsappVisible: '+54 9 264 574-4837',

  /* Cuando tengas la cuenta de Instagram, poné el usuario SIN la arroba.
     Ej: instagram: 'modoshop.sj'
     Mientras esté vacío, el botón muestra "próximamente". */
  instagram: '',

  ciudad: 'San Juan, Argentina',
  envios: 'Despacho el mismo día · todo el país',

  /* Cómo se anuncia el perfume que imita cada uno.
     'Dupe de' es lo que dice la gente. Si preferís algo más prudente
     frente a las marcas, cambialo por 'Inspirado en' y listo. */
  etiquetaDupe: 'Dupe de',

  /* Departamentos de San Juan donde entregás en mano.
     Para agregar o sacar uno, editá esta lista. */
  puntosEntrega: ['Capital', 'Rivadavia', 'Rawson', 'Pocito'],

  /* Mensajes que se abren en WhatsApp */
  mensajeProducto: function (p) {
    return '¡Hola MODO SHOP! Me interesa: ' + p.nombre +
           (p.presentacion ? ' (' + p.presentacion + ')' : '') +
           '. Quería consultar precio y disponibilidad.';
  },
  mensajeGeneral: '¡Hola MODO SHOP! Quería hacer una consulta.',
  mensajeMayorista: '¡Hola MODO SHOP! Quería consultar la lista mayorista.'
};

/* --------------------------------------------------------------------------
   CATÁLOGO
   categoria: 'perfume' | 'reloj'
   genero:    'Hombre' | 'Mujer' | 'Unisex'
   stock:     número de unidades · null = a pedido (sin stock definido)
   destacado: true -> aparece en la sección "Más buscados"
   -------------------------------------------------------------------------- */

MODOSHOP.productos = [

  /* ===================== PERFUMES ÁRABES ===================== */

  { id: 'armaf-mandarin-sky', categoria: 'perfume', marca: 'Armaf',
    nombre: 'Armaf Odyssey Mandarin Sky', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 3, destacado: true, img: 'assets/productos/armaf-mandarin-sky.jpg',
    dupe: 'Jean Paul Gaultier Scandal pour Homme',
    familia: 'Cítrico ambarino',
    desc: 'Mandarina, naranja, azafrán y salvia que abren fresco y cierran dulce sobre caramelo, haba tonka y ambroxan. Uno de los más vendidos de Armaf.' },

  { id: 'armaf-mandarin-sky-elixir', categoria: 'perfume', marca: 'Armaf',
    nombre: 'Armaf Mandarin Sky Elixir', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 3, destacado: true, img: 'assets/productos/armaf-mandarin-sky-elixir.jpg',
    dupe: 'Jean Paul Gaultier Scandal Le Parfum',
    familia: 'Oriental amaderado',
    desc: 'La versión más intensa y nocturna del Mandarin Sky. Mandarina, lavanda y cardamomo sobre caramelo, tonka, incienso y vainilla.' },

  { id: 'french-avenue-liquid-brun', categoria: 'perfume', marca: 'French Avenue',
    nombre: 'French Avenue Liquid Brun', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 3, destacado: true, img: 'assets/productos/french-avenue-liquid-brun.jpg',
    dupe: 'Parfums de Marly Althaïr',
    familia: 'Amaderado dulce',
    desc: 'Canela, azahar, cardamomo y bergamota sobre vainilla bourbon, praliné y ambroxan. Uno de los lanzamientos más elogiados de los últimos años.' },

  { id: 'afnan-9pm-night-out', categoria: 'perfume', marca: 'Afnan',
    nombre: 'Afnan 9PM Night Out', presentacion: 'Extrait de Parfum 100 ml', genero: 'Unisex',
    stock: 3, destacado: true, img: 'assets/productos/afnan-9pm-night-out.jpg',
    original: true,
    familia: 'Frutal especiado',
    desc: 'Fruta del dragón, bergamota, coñac y manzana; cardamomo, gamuza y toffee; haba tonka, akigalawood y pachulí. Extracto de perfume, de altísima duración. Los que lo probaron lo ubican entre el Le Male Elixir y el Azzaro The Most Wanted.' },

  { id: 'lattafa-kingdom-man', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa The Kingdom Man', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 3, destacado: true, img: 'assets/productos/lattafa-kingdom-man.jpg',
    dupe: 'Jean Paul Gaultier Le Male Elixir',
    familia: 'Aromático',
    desc: 'Menta, lavanda y salvia arriba; vainilla, tabaco y azahar en el corazón; tonka, benjuí y labdano en el fondo.' },

  { id: 'lattafa-yara-rosa', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Yara (Rosa)', presentacion: 'Eau de Parfum 100 ml', genero: 'Mujer',
    stock: 3, destacado: true, img: 'assets/productos/lattafa-yara-rosa.jpg',
    dupe: 'Van Cleef & Arpels Orchidée Vanille',
    familia: 'Floral gourmand',
    desc: 'El clásico rosa de Lattafa. Orquídea y heliotropo sobre vainilla, almizcle y sándalo. Dulce, cremoso y muy femenino.' },

  { id: 'lattafa-badee-al-oud-glory', categoria: 'perfume', marca: 'Lattafa',
    nombre: "Lattafa Bade'e Al Oud For Glory", presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/lattafa-badee-al-oud-glory.jpg',
    dupe: 'Initio Parfums Privés Oud for Greatness',
    familia: 'Oriental amaderado',
    desc: 'Azafrán, nuez moscada y lavanda; oud y pachulí; almizcle. Un clásico absoluto de la casa: potente y elegante.' },

  { id: 'lattafa-honor-glory', categoria: 'perfume', marca: 'Lattafa',
    nombre: "Lattafa Bade'e Al Oud Honor & Glory", presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 1, destacado: true, img: 'assets/productos/lattafa-honor-glory.jpg',
    dupe: 'Bond No. 9 Tribeca',
    familia: 'Ámbar vainilla',
    desc: 'Ananá y crème brûlée arriba; canela, cúrcuma, pimienta negra y benjuí en el corazón; vainilla, sándalo, cashmeran y musgo en el fondo. El hermano dulce del Oud For Glory, en frasco blanco y dorado.' },

  { id: 'lattafa-khamrah-qahwa', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Khamrah Qahwa', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/lattafa-khamrah-qahwa.jpg',
    dupe: 'Kilian Paris Angels’ Share, en versión con café',
    familia: 'Oriental vainilla',
    desc: 'La versión con café del Khamrah. Dátil, café y especias sobre vainilla y maderas. Ganador del Readers’ Choice de Fragrantica 2024.' },

  { id: 'lattafa-vintage-radio', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Vintage Radio', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 2, img: 'assets/productos/lattafa-vintage-radio.jpg',
    dupe: 'Initio Parfums Privés Paragon',
    familia: 'Oriental amaderado',
    desc: 'Lavanda, salvia y bergamota; ciruela, palo santo y pimienta negra; sándalo y oud. Seco, serio y con mucha presencia.' },

  { id: 'alharamain-amber-oud-gold', categoria: 'perfume', marca: 'Al Haramain',
    nombre: 'Al Haramain Amber Oud Gold Edition', presentacion: 'Eau de Parfum 120 ml', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/alharamain-amber-oud-gold.jpg',
    dupe: 'Xerjoff Casamorati Erba Pura',
    familia: 'Frutal ambarino',
    desc: 'El más conocido de Al Haramain. Arranque frutal y brillante que baja a ámbar, vainilla y maderas. Frasco grande de 120 ml.' },

  { id: 'armaf-club-de-nuit-intense', categoria: 'perfume', marca: 'Armaf',
    nombre: 'Armaf Club de Nuit Intense Man', presentacion: 'Eau de Toilette 105 ml', genero: 'Hombre',
    stock: 2, destacado: true, img: 'assets/productos/armaf-club-de-nuit-intense.jpg',
    dupe: 'Creed Aventus',
    familia: 'Amaderado especiado',
    desc: 'Limón, ananá, bergamota y grosella; abedul, jazmín y rosa; almizcle, ámbar gris, pachulí y vainilla. El clon más famoso del mercado: proyecta y dura más que muchos originales.' },

  { id: 'armaf-club-de-nuit-iconic', categoria: 'perfume', marca: 'Armaf',
    nombre: 'Armaf Club de Nuit Iconic', presentacion: 'Eau de Parfum 105 ml', genero: 'Hombre',
    stock: 2, img: 'assets/productos/armaf-club-de-nuit-iconic.jpg',
    dupe: 'Chanel Bleu de Chanel',
    familia: 'Amaderado fresco',
    desc: 'Pomelo, limón y jengibre sobre ámbar, sándalo y maderas. Frasco azul con detalles dorados, de los más lindos de la línea.' },

  { id: 'lattafa-asad-bourbon', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Asad Bourbon', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, destacado: true, img: 'assets/productos/lattafa-asad-bourbon.jpg',
    dupe: 'Azzaro The Most Wanted Intense',
    familia: 'Oriental especiado',
    desc: 'Lavanda, mirabel y pimienta rosa; cacao, nuez moscada y davana; vainilla bourbon, ámbar y vetiver.' },

  { id: 'lattafa-his-confession', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa His Confession', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, img: 'assets/productos/lattafa-his-confession.jpg',
    dupe: 'Celine Black Tie',
    familia: 'Oriental amaderado',
    desc: 'Canela, lavanda y mandarina; iris, benjuí y ciprés; vainilla, tonka, ámbar, incienso, cedro y pachulí.' },

  { id: 'afnan-9pm', categoria: 'perfume', marca: 'Afnan',
    nombre: 'Afnan 9PM', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, destacado: true, img: 'assets/productos/afnan-9pm.jpg',
    dupe: 'Jean Paul Gaultier Ultra Male',
    familia: 'Oriental vainilla',
    desc: 'Manzana, lavanda y canela sobre vainilla, tonka y ámbar. El best seller de Afnan, ideal para la noche.' },

  { id: 'armaf-odyssey-homme', categoria: 'perfume', marca: 'Armaf',
    nombre: 'Armaf Odyssey Homme', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, img: 'assets/productos/armaf-odyssey-homme.jpg',
    dupe: 'Tom Ford Noir Extreme',
    familia: 'Oriental',
    desc: 'Cardamomo, mandarina y neroli; azahar y rosa; vainilla, sándalo, ámbar y maderas.' },

  { id: 'rasasi-hawas-for-him', categoria: 'perfume', marca: 'Rasasi',
    nombre: 'Rasasi Hawas For Him', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, destacado: true, img: 'assets/productos/rasasi-hawas-for-him.jpg',
    dupe: 'Paco Rabanne Invictus',
    familia: 'Acuático fresco',
    desc: 'Canela, bergamota y azahar sobre ámbar gris y sándalo. Fresco, versátil y de los más elogiados para el día a día.' },

  { id: 'lattafa-khamrah', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Khamrah', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/lattafa-khamrah.jpg',
    dupe: 'Kilian Paris Angels’ Share',
    familia: 'Oriental especiado',
    desc: 'Bergamota, canela y salvia; praliné, notas frutales y nardo; vainilla, oud dulce, mirra, tonka y benjuí. El fenómeno de Lattafa.' },

  { id: 'afnan-9am-dive', categoria: 'perfume', marca: 'Afnan',
    nombre: 'Afnan 9AM Dive', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 2, img: 'assets/productos/afnan-9am-dive.jpg',
    dupe: 'Yves Saint Laurent Y Eau de Parfum',
    familia: 'Aromático acuático',
    desc: 'Fresco y dulce a la vez, pensado para el verano. De los mejores de Afnan para el calor.' },

  { id: 'lattafa-art-of-universe', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Art of Universe', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 2, img: 'assets/productos/lattafa-art-of-universe.jpg',
    dupe: 'Initio Parfums Privés Blue Talisman',
    familia: 'Cítrico aromático',
    desc: 'Mandarina, jengibre, bergamota y menta; pera y azahar; almizcle, ámbar y cedro. Limpio y muy usable de día.' },

  { id: 'alharamain-amber-oud-dubai-night', categoria: 'perfume', marca: 'Al Haramain',
    nombre: 'Al Haramain Amber Oud Dubai Night', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, img: 'assets/productos/alharamain-amber-oud-dubai-night.jpg',
    dupe: 'Montale Paris Arabians Tonka',
    familia: 'Oriental amaderado',
    desc: 'Azafrán, bergamota y elemí; oud, rosa búlgara y muguet; tonka, ámbar, almizcle blanco y musgo de roble.' },

  { id: 'lattafa-fakhar-black', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Fakhar Black', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, img: 'assets/productos/lattafa-fakhar-black.jpg',
    dupe: 'Yves Saint Laurent Y Eau de Parfum',
    familia: 'Oriental fougère',
    desc: 'Manzana, bergamota y jengibre; lavanda, salvia, enebro y geranio; tonka, cedro, amberwood y vetiver.' },

  { id: 'afnan-supremacy-not-only-intense', categoria: 'perfume', marca: 'Afnan',
    nombre: 'Afnan Supremacy Not Only Intense', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 2, img: 'assets/productos/afnan-supremacy-not-only-intense.jpg',
    dupe: 'Nishane Istanbul Hacivat',
    familia: 'Oriental especiado',
    desc: 'Especiado, dulce y con mucha proyección. Firmado por el perfumista Imran Fazlani.' },

  { id: 'lattafa-khamrah-waha', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Khamrah Waha', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/lattafa-khamrah-waha.jpg',
    original: true,
    familia: 'Aromático acuático',
    desc: 'El lanzamiento más nuevo de la familia Khamrah: la misma firma dulce, pero en clave fresca y aireada.' },

  { id: 'lattafa-sakeena', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Sakeena', presentacion: 'Eau de Parfum 100 ml', genero: 'Mujer',
    stock: 1, img: 'assets/productos/lattafa-sakeena.jpg',
    original: true,
    familia: 'Floral frutal gourmand',
    desc: 'Maracuyá, notas ozónicas y mandarina; frambuesa, rosa, azahar y sal marina; toffee, praliné, vainilla y almizcle.' },

  { id: 'lattafa-yara-candy', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Yara Candy', presentacion: 'Eau de Parfum 100 ml', genero: 'Mujer',
    stock: 1, img: 'assets/productos/lattafa-yara-candy.jpg',
    original: true,
    familia: 'Floral frutal gourmand',
    desc: 'Grosella negra y mandarina verde; caramelo de frutilla y gardenia; vainilla, almizcle, ámbar y sándalo.' },

  { id: 'bharara-king', categoria: 'perfume', marca: 'Bharara',
    nombre: 'Bharara King', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 1, destacado: true, img: 'assets/productos/bharara-king.jpg',
    dupe: 'Xerjoff Casamorati Erba Pura',
    familia: 'Frutal ambarino',
    desc: 'Naranja, bergamota y limón; notas frutales; vainilla, almizcle blanco y ámbar. Proyección y duración muy por encima del promedio.' },

  { id: 'lattafa-asad-elixir', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Asad Elixir', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 1, img: 'assets/productos/lattafa-asad-elixir.jpg',
    dupe: 'Dior Sauvage Elixir',
    familia: 'Oriental especiado',
    desc: 'La evolución más concentrada del Asad original, a mitad de camino entre el Asad y el Asad Bourbon.' },

  { id: 'rasasi-hawas-kobra', categoria: 'perfume', marca: 'Rasasi',
    nombre: 'Rasasi Hawas Kobra', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 1, img: 'assets/productos/rasasi-hawas-kobra.jpg',
    dupe: 'Louis Vuitton Imagination',
    familia: 'Oriental amaderado',
    desc: 'Jengibre, bergamota y mandarina; té verde, canela y neroli; almizcle, ámbar y maderas. Abre como un té helado de limón.' },

  { id: 'lattafa-mayar-cherry', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Mayar Cherry', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 1, img: 'assets/productos/lattafa-mayar-cherry.jpg',
    dupe: 'Yves Saint Laurent Black Opium Over Red',
    familia: 'Oriental vainilla',
    desc: 'Frutilla y bergamota; mermelada de cereza y cacao; vainilla, ámbar y pachulí. Goloso y adictivo.' },

  { id: 'lattafa-teriaq', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Teriaq', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 1, img: 'assets/productos/lattafa-teriaq.jpg',
    dupe: 'Jean Paul Gaultier La Belle Le Parfum',
    familia: 'Gourmand amaderado',
    desc: 'Caramelo, almendra amarga, damasco y pimienta rosa; miel, ruibarbo, flores blancas y rosa; cuero, vainilla, almizcle y vetiver.' },

  { id: 'lattafa-ansaam-gold', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Ansaam Gold', presentacion: 'Eau de Parfum 100 ml', genero: 'Mujer',
    stock: 1, img: 'assets/productos/lattafa-ansaam-gold.jpg',
    dupe: 'Parfums de Marly Oriana',
    familia: 'Oriental floral',
    desc: 'Mandarina y pera; notas dulces, jazmín y rosa; almizcle, vainilla y frambuesa.' },

  { id: 'lattafa-ansaam-silver', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Ansaam Silver', presentacion: 'Eau de Parfum 100 ml', genero: 'Unisex',
    stock: 1, img: 'assets/productos/lattafa-ansaam-silver.jpg',
    dupe: 'Azzaro The Most Wanted',
    familia: 'Oriental especiado',
    desc: 'De la línea Lattafa Pride. Cardamomo bien marcado y davana sobre vainilla y ámbar. Duración larga: 6 horas en piel y más de 12 en la ropa.' },

  { id: 'rasasi-hawas-ice', categoria: 'perfume', marca: 'Rasasi',
    nombre: 'Rasasi Hawas Ice', presentacion: 'Eau de Parfum 100 ml', genero: 'Hombre',
    stock: 1, img: 'assets/productos/rasasi-hawas-ice.jpg',
    dupe: 'Paco Rabanne Invictus Aqua',
    familia: 'Aromático fresco',
    desc: 'Manzana, limón italiano, bergamota siciliana y anís estrellado; ciruela, azahar y cardamomo; almizcle, ámbar y maderas.' },

  { id: 'lattafa-eclaire', categoria: 'perfume', marca: 'Lattafa',
    nombre: 'Lattafa Eclaire', presentacion: 'Eau de Parfum 100 ml', genero: 'Mujer',
    stock: 1, img: 'assets/productos/lattafa-eclaire.jpg',
    dupe: 'Giardini di Toscana Bianco Latte',
    familia: 'Gourmand',
    desc: 'Vainilla rica, caramelo tibio y notas lácteas. Para quien busca un dulce sin vueltas.' },

  /* ===================== RELOJES CASIO ===================== */

  { id: 'casio-a158wa-1', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage A158WA-1', presentacion: 'Digital · acero', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/casio-a158wa-1.webp',
    familia: 'Línea Vintage',
    desc: 'El clásico plateado de malla de acero. Alarma diaria, cronómetro, luz, calendario automático y resistencia al agua.' },

  { id: 'casio-a168wa-1', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage A168WA-1', presentacion: 'Digital · acero', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/casio-a168wa-1.webp',
    familia: 'Línea Vintage',
    desc: 'Hermano mayor del A158, con caja más grande y luz LED. Alarma, cronómetro y calendario automático.' },

  { id: 'casio-a159wa-n1', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage A159WA-N1', presentacion: 'Digital · acero', genero: 'Unisex',
    stock: 1, img: 'assets/productos/casio-a159wa-n1.webp',
    familia: 'Línea Vintage',
    desc: 'Versión con frente negro y malla de acero. El mismo corazón del A158 con una estética más sobria.' },

  { id: 'casio-aq230a-1d', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage AQ-230A-1D', presentacion: 'Analógico y digital · acero', genero: 'Unisex',
    stock: 2, destacado: true, img: 'assets/productos/casio-aq230a-1d.webp',
    familia: 'Línea Vintage',
    desc: 'Analógico y digital al mismo tiempo, con esfera oscura. Uno de los modelos más pedidos de la línea retro.' },

  { id: 'casio-aq230a-7d', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage AQ-230A-7D', presentacion: 'Analógico y digital · acero', genero: 'Unisex',
    stock: 1, img: 'assets/productos/casio-aq230a-7d.webp',
    familia: 'Línea Vintage',
    desc: 'El mismo ana-digi con esfera blanca y agujas doradas. Clásico total.' },

  { id: 'casio-aq230a-2a1', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage AQ-230A-2A1', presentacion: 'Analógico y digital · acero', genero: 'Unisex',
    stock: 1, img: 'assets/productos/casio-aq230a-2a1.webp',
    familia: 'Línea Vintage',
    desc: 'Variante de esfera clara del AQ-230, en acero y con doble display analógico + digital.' },

  { id: 'casio-la670wa-1d', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage LA-670WA-1D', presentacion: 'Digital · acero', genero: 'Mujer',
    stock: 2, destacado: true, img: 'assets/productos/casio-la670wa-1d.webp',
    familia: 'Línea Vintage dama',
    desc: 'Versión de caja chica pensada para muñeca fina. Alarma, cronómetro y luz.' },

  { id: 'casio-la670wga-9d', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage LA-670WGA-9D', presentacion: 'Digital · dorado', genero: 'Mujer',
    stock: 2, destacado: true, img: 'assets/productos/casio-la670wga-9d.webp',
    familia: 'Línea Vintage dama',
    desc: 'El mismo LA-670 en acabado dorado completo. De los más elegidos para regalo.' },

  { id: 'casio-la680wa-1b', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio Vintage LA-680WA-1B', presentacion: 'Digital · acero', genero: 'Mujer',
    stock: 1, img: 'assets/productos/casio-la680wa-1b.webp',
    familia: 'Línea Vintage dama',
    desc: 'Caja rectangular chica con malla de acero. Alarma, cronómetro y calendario.' },

  { id: 'casio-w800h-5a', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio W-800H-5A', presentacion: 'Digital · resina', genero: 'Hombre',
    stock: 1, img: 'assets/productos/casio-w800h-5a.webp',
    familia: 'Línea deportiva',
    desc: 'Deportivo de resina con 10 años de batería, luz, 5 alarmas y resistencia al agua 100 m.' },

  { id: 'casio-w217h-1a', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio W-217H-1A', presentacion: 'Digital · resina', genero: 'Unisex',
    stock: 1, img: 'assets/productos/casio-w217h-1a.webp',
    familia: 'Línea deportiva',
    desc: 'Digital compacto de resina negra. Cronómetro, alarma, luz y resistencia al agua.' },

  { id: 'casio-w59-1v', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio W-59-1V', presentacion: 'Digital · resina', genero: 'Unisex',
    stock: 1, img: 'assets/productos/casio-w59-1v.webp',
    familia: 'Línea deportiva',
    desc: 'Clásico de resina negra, resistente al agua 50 m. Simple, indestructible y económico.' },

  { id: 'casio-mtpb145d-2a2', categoria: 'reloj', marca: 'Casio',
    nombre: 'Casio MTP-B145D-2A2', presentacion: 'Analógico · acero', genero: 'Hombre',
    stock: 2, destacado: true, img: 'assets/productos/casio-mtpb145d-2a2.webp',
    familia: 'Línea analógica',
    desc: 'Analógico de esfera azul con calendario y malla de acero. Resistencia al agua 50 m. El más vestidor del catálogo.' }
];

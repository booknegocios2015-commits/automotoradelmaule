import { Service, Review, GalleryVehicle } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'frenos',
    title: 'Cambio de Pastillas de Freno en Cauquenes',
    description: 'Utilizamos componentes de alto rendimiento para garantizar una frenada segura en cualquier condición climática del Maule.',
    longDescription: 'Las pastillas de freno son fundamentales para tu seguridad. En nuestro taller realizamos un servicio completo de revisión, rectificado de discos (si es necesario) y sustitución de pastillas utilizando marcas certificadas que cumplen o superan los estándares de fábrica de tu vehículo.',
    iconName: 'ShieldAlert',
    isFeatured: true,
    tag: 'MÁS SOLICITADO',
    basePrice: '$45.000',
    estimatedTime: '1 hr 30 min',
    symptoms: [
      'Chirrido o ruido agudo al frenar',
      'El pedal se siente esponjoso o se va al fondo',
      'Mayor distancia para detener el vehículo',
      'Luz de advertencia de frenos en el tablero'
    ],
    benefits: [
      'Instalación de marcas premium (Brembo, Bosch, Raybestos)',
      'Inspección complementaria del sistema hidráulico y líquido',
      'Garantía total de frenado de precisión',
      'Seguridad certificada para ti y tu familia'
    ]
  },
  {
    id: 'aceite',
    title: 'Cambio de Aceite de Motor',
    description: 'Lubricantes sintéticos de última generación para prolongar la vida útil de tu motor.',
    longDescription: 'Un motor limpio y bien lubricado funciona de manera más eficiente y dura mucho más. Utilizamos aceites sintéticos y filtros de primera línea que reducen el desgaste, optimizan el consumo de combustible y mantienen la potencia óptima.',
    iconName: 'Droplet',
    basePrice: '$38.000',
    estimatedTime: '45 min',
    symptoms: [
      'Indicador de cambio de aceite encendido',
      'Aceite oscuro, viscoso o con olor a quemado',
      'Ruidos inusuales provenientes del motor',
      'Kilometraje excedido desde el último servicio'
    ],
    benefits: [
      'Aceites certificados (Castrol, Mobil 1, Liqui Moly)',
      'Filtro de aceite premium incluido',
      'Revisión y llenado de niveles de fluidos esenciales',
      'Disposición ecológica certificada del aceite usado'
    ]
  },
  {
    id: 'scanner',
    title: 'Scanner Automotriz Computarizado',
    description: 'Diagnóstico computarizado avanzado para todas las marcas.',
    longDescription: 'Identificamos con precisión de diagnóstico de fábrica cualquier falla electrónica de tu vehículo. Leemos códigos de falla de motor, transmisión, ABS, bolsas de aire y más, solucionando problemas complejos sin adivinanzas.',
    iconName: 'Cpu',
    basePrice: '$25.000',
    estimatedTime: '30 min',
    symptoms: [
      'Luz "Check Engine" encendida',
      'Pérdida de potencia o jaloneos',
      'Consumo excesivo e injustificado de combustible',
      'Fallas intermitentes de accesorios eléctricos'
    ],
    benefits: [
      'Scanner multimarca de última generación profesional',
      'Informe detallado impreso/digital de códigos de falla',
      'Borrado de códigos y calibración de sensores',
      'Explicación técnica de soluciones recomendadas'
    ]
  },
  {
    id: 'suspension',
    title: 'Diagnóstico y Cambio de Suspensión',
    description: 'Revisión y cambio de amortiguadores para un confort total.',
    longDescription: 'La suspensión no solo garantiza tu comodidad, sino también el control de tu auto al girar y frenar. Reemplazamos amortiguadores, bandejas, terminales y homocinéticas dañados para devolverle a tu auto la firmeza y seguridad originales.',
    iconName: 'Wrench',
    basePrice: '$65.000',
    estimatedTime: '2 hrs 30 min',
    symptoms: [
      'Inestabilidad en curvas o viento fuerte',
      'El auto sigue rebotando después de un bache',
      'Desgaste irregular o excesivamente rápido de neumáticos',
      'Ruidos metálicos o golpes al transitar por caminos irregulares'
    ],
    benefits: [
      'Amortiguadores originales o de calidad OEM superior',
      'Garantía total en piezas y mano de obra calificada',
      'Mayor estabilidad, confort de marcha y precisión de dirección',
      'Prevención de desgaste prematuro de tus neumáticos'
    ]
  },
  {
    id: 'afinamiento',
    title: 'Afinamiento de Motor Completo',
    description: 'Optimización de consumo y rendimiento del motor.',
    longDescription: 'Recupera el rendimiento, suavidad y economía de combustible originales de tu auto. El afinamiento integral incluye cambio de bujías, limpieza de inyectores/cuerpo de aceleración y reemplazo de filtros de aire y bencina.',
    iconName: 'Gauge',
    basePrice: '$85.000',
    estimatedTime: '3 hrs',
    symptoms: [
      'Ralentí inestable o vibraciones molestas',
      'Dificultad o demora al arrancar por la mañana',
      'Disminución evidente en la aceleración',
      'Excesiva emisión de humos o gases'
    ],
    benefits: [
      'Bujías de iridium o platino de máxima duración',
      'Limpieza ultrasónica o química de inyectores',
      'Restablecimiento de la economía de combustible',
      'Aprobación segura para la revisión técnica'
    ]
  },
  {
    id: 'preventiva',
    title: 'Mantención Preventiva Programada',
    description: 'Planes por kilometraje según especificaciones de fábrica.',
    longDescription: 'Evita fallas costosas en la ruta con mantenciones periódicas profesionales. Diseñamos planes personalizados a los 10k, 20k, 50k y 100k kilómetros que cumplen rigurosamente las pautas de los fabricantes.',
    iconName: 'CalendarDays',
    basePrice: '$120.000',
    estimatedTime: '4 hrs',
    symptoms: [
      'Cumplimiento del intervalo de kilometraje del fabricante',
      'Planificación de viajes largos por vacaciones o trabajo',
      'Adquisición de un vehículo usado sin historial conocido',
      'Prevención de pérdida de garantía oficial'
    ],
    benefits: [
      'Inspección multipunto rigurosa de seguridad',
      'Cambio coordinado de filtros, bujías y lubricantes',
      'Revisión completa de frenos, dirección, correas y luces',
      'Historial de mantenimiento digital de tu auto'
    ]
  }
];

export const TESTIMONIALS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Ricardo Valdés',
    vehicle: 'Toyota Hilux 2021',
    rating: 5,
    comment: 'Excelente servicio en Cauquenes. Hice el cambio de pastillas y scanner, quedé muy conforme con la rapidez y la explicación técnica de los profesionales. Cuidan cada detalle.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArrU1y8YDSvCSMdmpPCnWjWFCGUiT-tRdpRrVYPWIIxqc1ZyG14JFZO5tiz7GcMCCjtX1y0RD_SYE5PzKfPQgtnhj7gAO8t3OymyusPgaAYGD7ozmrKuX9dlUgZ6xNFcIW_5UUY7QUpthhSUG1vN19d_XEChlXRRvtqt3KvssebqBWmcLvrBjw7A1yaAdWx6iVrYYYGy_rBmf-vMzg94IgZVcTGmUnnFlKJxuxXTFXno5f1DAGetJziugN1bp-VgRdFTlvB9GH11a5',
    date: 'Hace 2 semanas'
  },
  {
    id: 'rev-2',
    name: 'Carla Montes',
    vehicle: 'Hyundai Tucson 2022',
    rating: 5,
    comment: 'Vengo desde Pelluhue solo para atender mi auto acá. La confianza y transparencia en los precios no se encuentra en otro lado. Te mandan fotos de los repuestos antiguos.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD5HUKl5U8R2KXrsRq5TWeOvnzfhwsyKQaaI0yXcR6P7nVmIQtJXk7TGU2H3NA20TJ8lFdQThQobsD9t6HrokhtQVRuPr9xqKFnbqwKBfZD1vNtNlXEWwxXWHweBjn3PGL7yP97ijc35JSg8HgQc25kpKXoIUQw1un9FbCmMecMTLboyS4K2VFFjrKXzC9eB64RVfWYLvVEc4LE9ApNRwoVvDBEedltXg7rvt1F2BIZnisTVhUDBQKy5hhfvNUpjahUab2bOIrVVq2',
    date: 'Hace 1 mes'
  },
  {
    id: 'rev-3',
    name: 'José Manuel',
    vehicle: 'Mazda CX-5 2020',
    rating: 5,
    comment: 'El cambio de aceite fue súper rápido. Se nota que usan productos premium y herramientas de última tecnología. Recomendado al 100% para todo el Maule Sur.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCpCW1r0Ty1DBED0dLljOjm3O2AFJJcZ_psPQfL43CweDZz04lq_9SuCGIy076hvEn3Anl_a4SJ_t_CZHzVjJlA3O3S--1izby5D4mnvr5PF6-Sjbn-MHIatyC-k89rLBMVl3i1UC6JIiAXRe_itjHtAF-GJcmgU8bRbziY0iD04XTlYfrC7pOVeIDaKD8aPrwJn6vQ2pr6XvTgQZxMiU_-mB5UDFoEvu1C-c3Z4NgGfXQasyuvz0pTLAybHdObvC3AmfzrA5GJye4',
    date: 'Hace 1 mes'
  }
];

export const GALLERY_VEHICLES: GalleryVehicle[] = [
  {
    id: 'gv-1',
    name: 'Toyota Hilux',
    description: 'Cambio de Pastillas de Freno & Scanner Completo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozia5dYEo46W8czOoZltB4pfyucoSkFO0HIsSEvw0XWHHDGxGsUiERfjobMaSHQhHQLRfRB_Zx3rwi4aewafUw1S0cBB927TqDRGaDbKfRlxPdxiZt-C1JI9D54MGwLfGtRHr-_tnkJYk6_E466o9XGLSXMzy0nBTG4VdOgvwbCqS9vhKFejBZbTvjLcvZrnk_26Hm4MevsDWsAtUG92kdPRtNnelQwH7WQ7ZHjpQeffokRadQH8unQyKnIjFXnorQPUMZS5mbSuh',
    alt: 'Showroom Toyota Hilux en azul metalizado de alta gama en Automotriz Cauquenes'
  },
  {
    id: 'gv-2',
    name: 'Toyota Corolla',
    description: 'Diagnóstico Eléctrico & Afinamiento de Precisión',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGzUlpT0k01xgaOYk3pPGdBF5K_daWG2rFjosftwa-bdAT6Q58T3-C_XwU1SVCe9yj5nSUC9zJgotK4KQVcyt4y25clnZlag5SQ0EOWYFuRsq3rr5R4iKeupngQ4RVqsWd9PT0rAk7TVrdGqR6K4vq9EFIRdshSrfXKQN90R0r7zXU8nyJ1F7CaGXZC5eD_GrrtcGF9E0IY3n3QiCD-wOh0LLLJxXFj8yw0zYQpedz6juOFdpfDq4_qzZhSC5ptogLQ5xVmdKjXZYU',
    alt: 'Toyota Corolla blanco elegante con faros LED en servicio preventivo'
  },
  {
    id: 'gv-3',
    name: 'Hyundai Tucson',
    description: 'Revisión Completa de Tren Delantero y Amortiguadores',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeR3K-H7xG07sNRBlqXFcaWBFJcZtb1XElrTe9yxpolnOsHlJzVMLx0t2QPbFOeuIguRNeigK-2yZVmPuT_3__mWOv1-L9DSn3CGElUHaLMKgMioRiO_b76pga1Mt6MiDRJdPuqqIuQ4RKuxgsCDxfOFrwmw88reF0W22NHdE7ZSSYh5ZWlAB8_fovoxvwrE4LP-pd8FBE2MFmb7DjxjxZZJISEj3yjEbKB6JO5LuBngHvOxYFamtR5hNFzJNyYYMHCnIKvsT2jh1E',
    alt: 'Hyundai Tucson gris grafito elevado en elevador hidráulico'
  },
  {
    id: 'gv-4',
    name: 'Caliper de Freno Deportivo',
    description: 'Instalación de Pastillas Brembo de Alto Rendimiento',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeOUN4dy3sOV9Wpn4R21lxOgXoksVqIE-cIhq53kluNj_VuM5-_gPIPqB_ii6MzFh9mvBJ_WVZ6v89QCFe_Pgu4jtjOp3SFo53GTkYdd40_0pPy492lL8pFgbMJbFL3jrokqY44Rp2uTMMntJwQs01JM7Xrdy8EbV80DDlltJh5XUFvyX4hNQtFTCVZDE8lP5Gb76d--pplucwlWLPD36leK3luwWlGuFiEGIAO40cA3T1he3WZdGEL9aOmrGwdXHYGO9CY5CzJnFd',
    alt: 'Detalle de caliper rojo deportivo y llanta de aleación oscura en taller mecánico'
  },
  {
    id: 'gv-5',
    name: 'Sedán Premium Gris',
    description: 'Mantención de Sistema de Inyección & Cambio de Aceite Sintético',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWxbwVqRVmsGWZI31AcbIxqgeBmy3IOtY7H4l2_rNygJ9ROWPVyVjsLJ4qpmB5AtAAgNkpFae6PoNewrOoocV3EueLjcB2Wrvx1GbdeR-_0YN8dv8rz1TwHRa_bUjUfbZmUNTpeAQQzV6uk6qH3yoEowtn6U4bK1IuSOPrWPWJN2i53e6j-LbWTLG6tQpvvTnIOdOkeDSNSgrT9IKIaC3NcFZiaiNAAgqMaGEqUIWh7iCtbL5lGAz3tRtDsfwVNWtNWnQyREqJoiyj',
    alt: 'Sedán de lujo gris carbón con iluminación de diseño en taller automotriz'
  },
  {
    id: 'gv-6',
    name: 'Camioneta Pickup Silver',
    description: 'Diagnóstico Computarizado & Mantenimiento Preventivo 40K',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4-F0tJABetloJKjuGgmTg-sCRmO6FoiNwDhTWC0GjeKO5YMpstJ_eMxlYDS9AwrBFoGmbfwKRON87j45qhAoh8Jmxa4ESeFSVq8Uxg_MZ8DerRHXf0MwSendHH4tSZ5IMfp6kk3DOMTVlNI_Ls5XvohTQC2ZlUeaziA0TWBxKBXmp8R3VimmKKsKyPFOmgqUq33VYgez8zGlzMni-_Umwsdbqnfo2DqpxVxbQbsVh-VyEbg1WDUEvxMYUau9p9MHMRpxOT_cZosIh',
    alt: 'Pickup plateada de gran tamaño en patio exterior de arquitectura moderna'
  },
  {
    id: 'gv-7',
    name: 'Compartimento Motor Impecable',
    description: 'Servicio de Detalle Mecánico & Ajuste de Niveles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABPbd8Nndv1Ta3_by461wl2zE1f-Y-2YRJDzDurFeSuO-k9R4ZmhbIQP5HTqJ2FSfihEPe4IPtR3nz-ZjT7MsUC90bkLt9wf4N8ra0_hhJiHXNB6ch_ygwjCq6DRWnEyClrhqfUZV5y6yMKotlBSg7pIzogbjLNjT_i_d33HKwQilgBNYBXur77oxDQgxdDzFmXG8hT3B7dxOslzWQlIxztF72zgKtiGiNUR42HRQp7u_y1kPl1w9V_hsMSG6ztwPIfvAAvmW8zEJu',
    alt: 'Motor de automóvil perfectamente limpio y ordenado tras un servicio integral'
  },
  {
    id: 'gv-8',
    name: 'Parachoques & Grilla SUV',
    description: 'Inspección de Sensores ADAS & Luces de Carretera',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEyOEDKrlODVY709IRh_eVfxuc2zQmJQ4jrB3MO_kLwh-OzLBuSYGT9cGFUmlPgjBhku7KUJCPSUNHlZj7dVF0HoqkgNdUtHNPBGKM_s1eKY8-xOEqR72MUOgFvP0Sfv85Iej3Gz-cPnXagtDpX6CGttCpv0GCycWHjlQmaftTDYb6qCXnaw09jZN2glH8UG4TM7HVLeJXMn02GeovAQUvGTO78p1k5r6QjUM0mf16b5sz8emzPsr-bnlqV5b8aPVJP2Bi8INHktq0',
    alt: 'Grilla delantera y emblema de SUV de gama alta en diagnóstico electrónico'
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Agenda tu Cita',
    description: 'Reserva de manera sencilla y rápida por nuestro formulario interactivo o vía directa por chat de WhatsApp.'
  },
  {
    step: '02',
    title: 'Diagnóstico',
    description: 'Evaluamos minuciosamente los sistemas mecánicos y electrónicos para detectar la raíz exacta del problema.'
  },
  {
    step: '03',
    title: 'Cotización Clara',
    description: 'Te presentamos una propuesta transparente de repuestos y mano de obra sin cargos sorpresa ocultos.'
  },
  {
    step: '04',
    title: 'Ejecución y Precisión',
    description: 'Mecánicos calificados reparan tu vehículo con herramientas especializadas bajo rigurosas pautas técnicas.'
  },
  {
    step: '05',
    title: 'Entrega Segura',
    description: 'Tu auto es sometido a pruebas de calidad en ruta y se te entrega lavado, listo para volver a recorrer Chile.'
  }
];

export const GENERAL_FAQ = [
  {
    question: '¿Con qué marcas de vehículos trabajan?',
    answer: 'Atendemos vehículos multimarca. Contamos con diagnóstico computarizado especializado para marcas americanas, asiáticas y europeas de renombre como Toyota, Hyundai, Kia, Chevrolet, Nissan, Ford, Mazda, Peugeot, Volkswagen, Suzuki y más.'
  },
  {
    question: '¿Qué tipo de aceites y repuestos utilizan?',
    answer: 'Trabajamos estrictamente con repuestos de calidad OEM (Original Equipment Manufacturer) u originales. En lubricación, aplicamos aceites sintéticos premium de marcas líderes como Castrol, Liqui Moly y Mobil 1, cumpliendo las homologaciones específicas de tu fabricante.'
  },
  {
    question: '¿Ofrecen garantía por los trabajos realizados?',
    answer: 'Sí, todas nuestras reparaciones y mantenimientos preventivos cuentan con una garantía de taller de 3 meses o 5.000 kilómetros. Tu seguridad y total satisfacción con el trabajo es nuestra máxima prioridad.'
  },
  {
    question: '¿Hacen visitas o reparaciones a domicilio?',
    answer: 'Para garantizar estándares de calidad óptimos, realizamos todos los servicios de reparación en nuestro taller equipado en Cauquenes. Sin embargo, podemos coordinar grúas o traslado de vehículos para clientes en Chanco, Pelluhue u otras comunas aledañas.'
  }
];

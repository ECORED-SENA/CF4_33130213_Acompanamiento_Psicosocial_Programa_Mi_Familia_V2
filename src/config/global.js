export default {
  global: {
    componenteFormativo: 'Implementación del acompañamiento psicosocial',
    descripcionCurso:
      'En este componente se expone en qué consiste el proceso de acompañamiento familiar, el proceso de las visitas en domicilio y encuentros familiares y comunitarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Acompañamiento psicosocial',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Visitas en domicilio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Etapas para el desarrollo de las visitas en domicilio',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Encuentros familiares y comunitarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Iniciativa comunitaria',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF04_33130213_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Visitas en domicilio',
      referencia:
        'ICBF & USAID. (2021). <i>Los primeros pasos hacia la reunificación familiar</i>.',
      tipo: 'Cartilla',
      descarga: '/downloads/Cartilla-Primeros-pasos-reunificación-familiar.pdf',
    },
    {
      tema: '2. Visitas en domicilio',
      referencia: 'ICBF & USAID. (2021). <i>Pensarnos en Familia</i>.',
      tipo: 'Cartilla',
      descarga: '/downloads/Cartilla-Pensamos-en-Familia.pdf',
    },
    {
      tema: '2. Visitas en domicilio',
      referencia: 'ICBF & USAID. (2021). <i>Proyectándonos en Familia</i>.',
      tipo: 'Cartilla',
      descarga: '/downloads/Cartilla-Proyectandonos-en-Famlia.pdf',
    },
    {
      tema: '2. Visitas en domicilio',
      referencia: 'ICBF & USAID. (2021). <i>Fortaleciéndonos en familia</i>.',
      tipo: 'Cartilla',
      descarga: '/downloads/Cartilla-Fortaleciendonos-en-Familia.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ajustes razonables',
      significado:
        'Hace referencia a las modificaciones y adaptaciones, que no impongan una carga desproporcionada o indebida, de todo aquello que impide o limite la participación de las personas con discapacidad en las actividades familiares, sociales y colectivas de la sociedad que habitan. (UNICEF & ICBF, 2020)',
    },
    {
      termino: 'NNAcD',
      significado: 'Abreviatura de niños, niñas y adolescentes.',
    },
    {
      termino: 'PAF',
      significado: 'Abreviatura de Profesional de Acompañamiento Familiar.',
    },
    {
      termino: 'PcD',
      significado: 'Abreviatura de persona con discapacidad.',
    },
    {
      termino: 'UAFU',
      significado: 'Unidad de Acompañamiento Familiar Urbana',
    },
    {
      termino: 'UAFR',
      significado: 'Unidad de Acompañamiento Familiar Rural',
    },
  ],
  referencias: [
    {
      referencia:
        'CEPAL. (2018). <i>Panorama Social de América Latina</i>. Comisión Económica para América Latina y el Caribe.',
    },
    {
      referencia:
        'ICBF. (2019). <i>Guía para el registro de las variables de discapacidad en los sistemas de información del ICBF</i>. Bogotá, D.C.',
    },
    {
      referencia:
        'ICBF. (2021). <i>Guía de Articulación entre las direcciones de Protección y Familias y Comunidades</i>. Bogotá.',
    },
    {
      referencia:
        'ICBF. (22 de Octubre de 2021). GUÍA DE ARTICULACIÓN ENTRE LAS DIRECCIONES DE PROTECCIÓN Y FAMILIAS Y COMUNIDADES MODALIDAD MI FAMILI. 55. Bogotá, Colombia.',
    },
    {
      referencia:
        'ICBF. (2021). <i>Guía de focalización y microfocalización modalidad Mi Familia</i>. Bogotá, D.C.: ICBF.',
    },
    {
      referencia:
        'ICBF. (5 de Enero de 2021). Lineamiento Técnico Modalidad Mi Familia. <i>Lineamiento Técnico Modalidad Mi Familia</i>, 48. Bogotá, Colombia. Obtenido de',
      link: 'https://www.icbf.gov.co/misionales/promocion-y-prevencion/familia',
    },
    {
      referencia:
        'ICBF. (Enero de 2022). Guía de Orientaciones Metodológicas Mi Familia. <i>Guía de Orientaciones Metodológicas Mi Familia</i>.',
    },
    {
      referencia:
        'ICBF. (05 de 01 de 2022). Manual Operativo Mi Familia. Bogotá, Colombia.',
    },
    {
      referencia:
        'ICBF. (2022). <i>Guía de Orientaciones Metodológicas Mi Familia</i>.',
    },
    {
      referencia:
        'UNESCO. (2005). <i>Convención sobre la protección y la promoción de la diversidad de las expresiones culturales</i>. Paris',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Milena Moreno Paez',
          cargo: 'Experta',
          centro: 'ICBF',
        },
        {
          nombre: 'Diego Fernando Ramírez Bermúdez',
          cargo: 'Experta',
          centro: 'ICBF',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedolla',
          cargo: 'Animador y Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedolla',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Cáceres Arenales',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

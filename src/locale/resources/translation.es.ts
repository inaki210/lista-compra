export default {
  format: {
    number: {
      default: '0.00',
    },
    date: {
      default: '$t(format.date.L)',
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
      l: 'D/M/YYYY',
      ll: 'D [de] MMM [de] YYYY',
      lll: 'D [de] MMM [de] YYYY H:mm',
      llll: 'dddd, D [de] MMM [de] YYYY H:mm',
      MMMMYYYY: 'MMMM [de] YYYY',
      DDMM: 'DD/MM',
    },
  },
  timeline: {
    info: {
      compromisos:
        'Conoce <a>los compromisos</a> de los profesionales de confianza.',
      ventajas: 'Conoce <a>las ventajas</a> de los profesionales de confianza.',
    },
  },
  components: {
    backLink: 'volver',
    smallCalendar: {
      label: '<strong>{{date, MMMM}}</strong> {{date, YYYY}}',
    },
    bigCalendar: {
      showMore: '+{{ count }} mas',
    },
  },
  siniestros: {
    actions: {
      ayuda: 'Guía útil',
      agenda: 'Agenda',
      contactos: 'Contactos',
    },
    numeroReferencia: 'Nº de referencia',
    compromisos: {
      titulo: 'Compromisos de los profesionales de confianza',
      plazo: `
        Los peritos y reparadores tienen el compromiso con Seguros Lagun Aro
        de contactar con nuestros clientes en un plazo máximo de 24 horas
        (lunes a viernes, excepto festivos).
      `,
      foto: `
        Los peritos y reparadores deben realizar fotografías de los daños.
      `,
      contactos: `
        Te facilitarán sus datos de contacto, para poder comunicar cualquier
        incidencia durante la gestión de tu expediente.
      `,
      avance: `
        Tras la primera visita, el profesional, debe informar periódicamente a
        la compañía de la situación de tu expediente.
      `,
    },
    datosContacto: {
      titulo: 'Datos de contacto',
      tuTramitadorEs: 'Se encarga de tu expediente',
      tuTramitadorEs_plural: 'Se encargan de tu expediente',
      tuPeritoEs: 'Se encarga de la peritación',
      tuPeritoEs_plural: 'Se encargan de la peritación',
      tuReparadorEs: 'Se encarga de la reparación',
      tuReparadorEs_plural: 'Se encargan de la reparación',
    },
    detalle: {
      titulo: 'Resumen del parte',
      poliza: 'Póliza',
      fechaSiniestro: 'Fecha',
      descripcionCausa: 'Tipo de incidente',
      relato: 'Resumen de los hechos',
      personaContacto: {
        titulo: 'Persona de contacto',
        nombre: 'Nombre',
        razonSocial: 'Razón social',
        telefono: 'Teléfono',
        telefonoMovil: 'Teléfono móvil',
        telefonoTrabajo: 'Teléfono de trabajo',
        email: 'Correo electrónico',
      },
    },
    estado: 'Estado',
    fechaInicio: 'Fecha de inicio',
    ventajas: {
      titulo: 'Ventajas de los profesionales de confianza',
      seleccionado: `
        Todos los profesionales -peritos y gremios- han sido seleccionados y
        homologados por Seguros Lagun Aro, comprometiéndose a cumplir con unos
        estándares de calidad de servicio.
      `,
      profesionales: `
        Te facilitaremos todos los profesionales que sean necesarios para la
        reparación de los daños. En el caso que se requiera, ellos serán los
        encargados de llevar a cabo la coordinación de gremios.
      `,
      informacion: `
        Si eliges reparar con nuestros gremios de confianza, tendrás
        información continua sobre todo el proceso de reparación en tu banca
        online.
      `,
      documentos: `
        El profesional te irá informando a ti y a la compañía de todo lo que
        ocurra con el expediente: avances, retrasos, incidencias etc.
      `,
      contacto: `
        Además, ante cualquier incidencia, puedes ponerte en contacto con
        nosotros por cualquiera de nuestros canales.
      `,
      presupuesto: `
        En Seguros Lagun Aro nos encargaremos de gestionar los presupuestos
        del reparador y, si procede, de abonar la factura.
      `,
      garantia: `
        Cuando la reparación se lleva a cabo con los reparadores de confianza
        de Lagun Aro, el período de garantía es de 3 meses para la reparación
        de aparatos eléctricos y electrodomésticos, y de 12 meses para el
        resto de las reparaciones.
      `,
    },
    verDetalle: 'ver resumen',
    callMeBack: {
      banner: {
        titulo: '¿Tienes dudas?',
        descripcion: 'Si lo deseas <a>te llamamos</a>',
        horario: '24 horas - 365 días',
      },
      form: {
        titulo: {
          sinTelefono: 'Indícanos tu teléfono',
          conTelefono: 'Confírmanos tu teléfono',
        },
        descripcion: 'Si lo deseas, podemos llamarte',
        llamar: 'Te llamamos gratis',
        alternativa:
          'O, si prefieres llamarnos: <a href="tel:944947428">94 494 74 28</a>',
      },
      solicitudRealizada: {
        titulo: 'Hemos recibido correctamente tu solicitud',
        descripcion: 'En breves instantes recibirás nuestra llamada.',
      },
      solicitudErronea: {
        titulo: 'Error al enviar la solicitud',
        descripcion: `
          Si lo prefieres puedes llamarnos tú directamente al
          <a href="tel:944947428">94 494 74 28</a>
        `,
      },
    },
    facturas: {
      titulo: 'Facturas',
      emisor: 'Emisor',
      fecha: 'Fecha',
    },
    agenda: {
      titulo: 'Plan de trabajo previsto',
      trabajo: {
        titulo: '{{ nombre }}',
        tituloFinalizado: '{{ nombre }} FINALIZADO',
        periodo: 'Inicio: {{ inicio, DDMM }} - Fin: {{ fin, DDMM }}',
      },
      aviso: `
        Ten en cuenta que es una previsión de trabajo y cada reparador confirmará
        sus citas antes de acudir, por lo que puede estar sujeto a modificaciones.
      `,
    },
  },
};

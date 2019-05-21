export default {
  format: {
    number: {
      default: '0.00',
    },
    date: {
      default: '$t(format.date.L)',
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY[ko] MMMM[ren] D[a]',
      LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
      LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
      l: 'YYYY-M-D',
      ll: 'YYYY[ko] MMM D[a]',
      lll: 'YYYY[ko] MMM D[a] HH:mm',
      llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
      MMMMYYYY: 'YYYY[ko] MMMM',
      DDMM: 'DD/MM',
    },
  },
  timeline: {
    info: {
      compromisos: 'Ezagutu konfiantzazko profesionalen <a>konpromisoak</a>.',
      ventajas: 'Ezagutu konfiantzazko profesionalen <a>abantailak</a>.',
    },
  },
  components: {
    backLink: 'atzera',
    smallCalendar: {
      label: '{{date, YYYY}}ko <strong>{{date, MMMM}}</strong>',
    },
    bigCalendar: {
      showMore: '+{{ count }} gehiago',
    },
  },
  siniestros: {
    actions: {
      ayuda: 'Gida erabilgarria',
      agenda: 'Agenda',
      contactos: 'Contactos',
    },
    numeroReferencia: 'Erreferentzia zk.',
    compromisos: {
      titulo: 'Konfiantzazko profesionalen konpromisoak',
      plazo: `
        Gehienez 12 orduko epearen barruan (astelehenetik ostiralera,
        jaiegunetan izan ezik) gure bezeroekin harremanetan jartzeko
        konpromisoa daukate perituek eta konpontzaileek Seguros Lagun Arorekin.
      `,
      foto: `
        Perituek eta konpontzaileek kalteen argazkiak atera behar dituzte.
      `,
      contactos: `
        Beren harremanetarako datuak emango dizkizute, edozein gorabeheraren
        berri eman ahal izateko zure espedientea kudeatzen den bitartean.
      `,
      avance: `
        Lehen bisitaren ondoren, profesionalak zure espedientearen berri eman
        behar dio aseguru-etxeari.
      `,
    },
    datosContacto: {
      titulo: 'Harremanetarako datuak',
      tuTramitadorEs: 'Zure espedienteaz arduratzen da',
      tuTramitadorEs_plural: 'Zure espedienteaz arduratzen dira',
      tuPeritoEs: 'Peritazioaz arduratzen da',
      tuPeritoEs_plural: 'Peritazioaz arduratzen dira',
      tuReparadorEs: 'Konponketa-lanaz arduratzen da',
      tuReparadorEs_plural: 'Konponketa-lanaz arduratzen dira',
    },
    detalle: {
      titulo: 'Partearen laburpena',
      poliza: 'Poliza',
      fechaSiniestro: 'Data',
      descripcionCausa: 'Ezbehar-mota',
      relato: 'Gertakarien laburpena',
      personaContacto: {
        titulo: 'Harremanetarako pertsona',
        nombre: 'Izena',
        razonSocial: 'Sozietatearen izena',
        telefono: 'Telefonoz',
        telefonoMovil: 'Telefono mugikorra',
        telefonoTrabajo: 'Laneko telefonoa',
        email: 'Helbide elektronikoa',
      },
    },
    estado: 'Egoera',
    fechaInicio: 'Hasiera-data',
    ventajas: {
      titulo: 'Konfiantzazko profesionalen abantailak',
      seleccionado: `
        Peritu eta gremio guztiak Seguros Lagun Arok hautatu eta homologatutako
        profesionalak dira, eta zerbitzu-kalitatezko estandar batzuk betetzeko
        konpromisoa hartu dute.
      `,
      profesionales: `
        Kalteak konpontzeko beharrezkoak diren profesional guztiak jarriko
        ditugu zure esku. Beharrezkoa izanez gero, haiek arduratuko dira
        gremioak koordinatzeaz.
      `,
      informacion: `
        Konponketa-lanak gure konfiantzazko gremioekin egitea aukeratzen baduzu,
        konponketa-prozesu osoari buruzko etengabeko informazioa izango duzu
        zure lineako bankuan.
      `,
      documentos: `
        Profesionalak zuri eta aseguru-etxeari emango dizue espedientearekin
        gertatzen den ororen berri: aurrerapenak, atzerapenak, gorabeherak...
      `,
      contacto: `
        Gainera, edozein gorabehera gertatuz gero, gurekin harremanetan jar
        zaitezke gure edozein kanalen bidez.
      `,
      presupuesto: `
        Seguros Lagun Aron arduratuko gara konpontzailearen aurrekontuak
        kudeatzeaz eta, hala badagokio, faktura ordaintzeaz.
      `,
      garantia: `
        Konponketa Lagun Aroren konfiantzazko konpontzaileekin egiten bada,
        bermearen epea 3 hilabetekoa izango da gailu elektriko eta etxetresna
        elektrikoen konponketarako, eta 12 hilabetekoa gainerako konponketetarako.
      `,
    },
    verDetalle: 'Ikus laburpena',
    callMeBack: {
      banner: {
        titulo: 'Zalantzak dauzkazu?',
        descripcion: 'Nahi baduzu <a>deituko dizugu</a>',
        horario: '24 orduz - 365 egunean',
      },
      form: {
        titulo: {
          sinTelefono: 'Adierazi zure telefonoa',
          conTelefono: 'Berretsi zure telefonoa',
        },
        descripcion: 'Nahi baduzu, dei zaitzakegu',
        llamar: 'Doan deituko dizugu',
        alternativa:
          'Edo, zuk deitzea nahiago baduzu: <a href="tel:944947428">94 494 74 28</a>',
      },
      solicitudRealizada: {
        titulo: 'Zure eskaria behar bezala jaso dugu',
        descripcion: 'Aurki jasoko duzu gure deia.',
      },
      solicitudErronea: {
        titulo: 'Errorea eskaera bidaltzean',
        descripcion: `
        Edo nahiago baduzu zuzenean dei diezagukezu <a href="tel.:944947428">94 494 74 28</a>
        `,
      },
    },
    facturas: {
      titulo: 'Fakturak',
      emisor: 'Jaulkitzailea',
      fecha: 'Data',
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

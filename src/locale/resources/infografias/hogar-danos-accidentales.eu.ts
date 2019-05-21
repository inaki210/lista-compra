export default {
  titulo: 'Etxebizitzako istripu-kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Hemen erakutsiko dizkizugu
      <strong>era honetako kalteen espedientean eman daitezkeen pausoak</strong>.
      Dena den, dokumentu hau orientatzeko besterik ez da, zure behar eta
      inguruabarretara moldatzen saiatuko baikara.
    </p>
  `,
  proceso: [
    {
      tipo: 'seccion',
      titulo: 'Parte erregistratu dugu.',
    },
    {
      tipo: 'mensaje',
      imagen: 'registro-incidente.svg',
      contenido: `
        Hasteko, espedientearen erreferentzia-zenbakia eta hura kudeatuko duten
        pertsonen izenak, telefonoak eta helbide elektronikoak eman dizkizugu. 
      `,
    },
    {
      tipo: 'seccion',
      titulo: 'Nor arduratuko da nire espedienteaz?',
    },
    {
      tipo: 'mensaje',
      imagen: 'gestor.svg',
      contenido: `
        <p>
          Zure espedientea kudeatzeaz eta prozesu guztia gainbegiratzeaz arduratuko
          den pertsona bat izango duzu —zure espedientearen kudeatzailea—: peritua
          eta/edo konpontzailea bidaltzeaz arduratuko da, eta sor daitezkeen zalantzak,
          gorabeherak eta trabak argitu eta konpontzeaz ere bai. 
        </p>
        <p>
          Edozein unetan jar zaitezke berarekin harremanetan. 
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Norbait bidaliko dit aseguru-etxeak?',
      respuesta: `
        Era horretako ezbeharrentzat peritu bat bidaltzen dugu normalean ezbeharra nola
        gertatu den berrikusteko eta kaltea balioesteko.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Estaldura horrek badu frankiziarik?',
      respuesta: 'Bai, 100 euroko frankizia aplikatzen da ezbehar bakoitzeko.',
    },
    {
      tipo: 'seccion',
      titulo: 'Zein unetan itxiko da espedientea?',
    },
    {
      tipo: 'mensaje',
      imagen: 'cierre.svg',
      contenido: `
        Kalteei dagokien kalte-ordaina eman ondoren, amaituta geratuko da kudeaketa
        eta espedientea itxita.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


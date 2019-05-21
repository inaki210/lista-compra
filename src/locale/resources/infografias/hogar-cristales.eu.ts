export default {
  titulo: 'Loza, marmol eta kristalen kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu  <strong>beira, loza eta marmolen kalteen</strong>
      parte hauek eragozpen ugari sor ditzaketela zure bizilekuan, eta, beraz, ahal
      bezain laster konpontzen saiatuko gara.
    </p>
    <p>
      Hemen erakutsiko dizkizugu espedientean eman daitezkeen pausoak. Dena den,
      dokumentu hau orientatzeko besterik ez da izango, zure behar eta inguruabarretara
      moldatzen saiatuko baikara.
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
        Hasteko, espedientearen erreferentzia-zenbakia eta hura kudeatuko duten pertsonen
        izenak, telefonoak eta helbide elektronikoak eman dizkizugu.
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
          Zure espedientea kudeatzeaz eta prozesu guztia gainbegiratzeaz arduratuko den
          pertsona bat izango duzu —zure espedientearen kudeatzailea—: peritua eta/edo
          konpontzailea bidaltzeaz arduratuko da, eta sor daitezkeen zalantzak, gorabeherak
          eta trabak argitu eta konpontzeaz ere bai. 
        </p>
        <p>
          Edozein unetan jar zaitezke berarekin harremanetan. 
        </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <strong>Partea urgentea bada</strong>, lehenik eta behin zure bizilekura joango
        gara 3 ordu baino lehen larrialdia artatzeko. Zure etxebizitza babestuta uztea
        ahalbidetuko duten konponketa-lanak egingo dugu, ezaugarri bereko beira berri
        batekin ordezteko moduan garen arte. 
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Kalteak nire gremioekin konpon ditzaket?',
      respuesta: `
        Bai, oinarrizkoaz bestelako modalitate guztietan, nahi izanez gero konfiantzazko
        zure konpontzaileekin konpon ditzakezu.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        <p>
          Kasu horretan
          <strong>
            litekeena da guk zuri argazkiak edo bestelako dokumentazioa eskatzea
          </strong>
          eta peritu bat bidali behar izatea kalteen konplexutasunaren eta/edo
          zenbatekoaren arabera. 
        </p>
        <p>
          Kalteak ezin badira konpondu eta kalte-ordaina egokitu badakieke, peritu bat
          bidaliko dugu haiek balora ditzan. 
        </p>
      `,
    },
    {
      tipo: 'seccion',
      titulo: 'Zein unetan itxiko da espedientea?',
    },
    {
      tipo: 'mensaje',
      imagen: 'cierre.svg',
      contenido: `
        Konponketa-lanak egiten bukatu edo kalte-ordaina abonatu ondoren, amaitutzat
        joko da gorabeheraren kudeaketa.

      `,
    },
    {
      tipo: 'faq',
      pregunta: ' Eta kalte berriak sortzen badira? ',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak,
        edo egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu,
        dagozkion gestioak egiten hasiko gara berriz ere zure eskura dituzun profesional
        guztiekin.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


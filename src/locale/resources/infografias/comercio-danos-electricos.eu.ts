export default {
  titulo: 'Datu elektrikoei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu kalte elektrikoen parte hauek eragozpenak sor ditzaketela zure negozioan,
      eta, beraz, ahal bezain laster konpontzen saiatuko gara.
    </p>
    <p>
      Hemen erakutsiko dizkizugu espedientean eman daitezkeen pausoak. Dena den, dokumentu
      hau orientatzeko besterik ez da izango, zure behar eta inguruabarretara moldatzen
      saiatuko baikara.
    </p>
  `,
  proceso: [
    {
      tipo: 'seccion',
      titulo: 'Parte erregistratu dugu',
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
      titulo: ' Nor arduratuko da nire espedienteaz?',
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
        <p>
          <strong> Gorabehera urgentea bada </strong>, lehendik eta behin argiketaria
          bidaliko dugu hornidura elektrikoa berrezartzeko, betiere instalazioaren egoerak
          horretarako aukera ematen badu. Kableatua bustita baldin badago, gerta daiteke
          lanak ezin egin ahal izatea.
        </p>
        <p>
          Urgentziazko zerbitzua amaitutakoan, estalduradun kalte gehiago egonez gero haiek
          kudeatzeari ekingo diogu, konponduz edo dagokien kalte-ordaina emanez.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Kalteak nire gremioekin konpon ditzaket?',
      respuesta: `
        Nahiago baduzu, konfiantzazko zure konpontzaileekin konpon ditzakezu.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        Kasu horretan litekeena da guk zuri eskatzea argazkiak, teknikariaren txosten
        xehatua, zure hornitzaileak egindako gorabehera-egiaztagiria edo bestelako
        dokumentazioa, eta peritu bat bidali behar izatea kalteen konplexutasunaren
        eta/edo zenbatekoaren arabera.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Kalte-ordaina eska dezaket konpontzeko modukoa izan arren?',
      respuesta: `
        Polizak estalitako ezbeharra bada eta ez baduzu konpondu nahi beste gailu bat erosi
        nahi duzulako, konponketa-kostuari dagokion kalte-ordaina eska dezakezu.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Zer gertatuko da nire negozioa itxi behar badut kalteen ondorioz edo konponketa-lanak
        egiteko?
      `,
      respuesta: `
        Baliteke izandako kalteak direla-eta edo egin beharreko konponketa-lanak direla-eta
        zure negozioa itxi behar izatea. Perituak erabakiko du zein kalte-ordain dagokizun
        zure negozioaren kontabilitate-dokumentazioa aztertu ondoren eta polizan kontratatuta
        dituzun bermeekin bat etorriz.
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
        Konponketa-lanak egiten bukatu edo kalte-ordaina abonatu ondoren, amaitutzat joko da
        gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira?',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak, edo
        egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu, berriro ere
        dagozkion gestioak egiten hasiko gara zure eskura dituzun profesional guztiekin.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        Kasu batzuetan, zure negozioan izandako kalteak konpondu ondoren, gorabeherarekin
        lotutako kudeaketak egiten jarraitu ahal izango dugu, eragileari kalteak
        erreklamatzea, esate baterako.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};

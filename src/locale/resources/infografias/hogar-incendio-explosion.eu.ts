export default {
  titulo: 'Suteagatiko edo eztandagatiko kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu <strong> suteak/leherketak eragindako kalteek </strong>
      sortutako gorabeherek traba handiak eragin ditzaketela etxebizitzan; bada, traba
      horiek ahalik eta txikienak izaten ahaleginduko gara.
    </p>
    <p>
      Hemen erakutsiko dizkizugu espedientean izan daitezkeen
      <strong>uneak edo egoerak</strong>.
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
          Zure espedientea kudeatzeaz arduratuko den pertsona bat izango duzu —zure
          espedientearen kudeatzailea—: peritua eta/edo konpontzailea bidaltzeaz
          arduratuko da, eta sor daitezkeen zalantzak, gorabeherak eta trabak argitu
          eta konpontzeaz ere bai. 
        <p>
        <p>
          Edozein unetan jar zaitezke berarekin harremanetan. 
        </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <strong>Partea urgentea bada</strong>, lehenik eta behin larrialdiaz arduratuko
        gara. Horretarako, konpontzaileak bidaliko ditugu, lehen konponketak/garbiketa 
        egin ditzaten eta etxebizitza erabiltzeko ahalik eta egoera onenean utz dezaten. 
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Zer gertatzen da kalte gehiago badago?',
      respuesta: `
        Kalte gehiago badago, kalte horiek konpon badaitezke eta polizak estaltzen baditu,
        haiek konpontzeko beharrezkoak diren profesionalak jarriko ditugu zure esku. 
      `,
    },
    {
      tipo: 'faq',
      pregunta: ' Kalteak nire gremioekin konpon ditzaket?',
      respuesta: `
        Nahiago baduzu, konfiantzazko zure konpontzaileekin konpon ditzakezu.
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
        <p>
          Oinarrizko modalitateko polizetan, konponketa-lanak Seguros Lagun Aroren
          konfiantzazko profesionalekin egin behar dira beti.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Eta kalteak direla-eta edo konponketa-lanak egiteko nire etxebizitzatik irten
        behar badut?
      `,
      respuesta: `
        Baliteke izandako kalteak direla-eta edo egin beharreko konponketa-lanak
        direla-eta zure etxebizitzatik irtetea beharrezkoa izatea. Perituak erabakiko du
        etxebizitza bertan bizitzeko moduan dagoen ala ez. Sortutako gastuei aurre egiteko
        dagokizun dirulaguntzaren berri ere emango dizu, polizan kontratatuta dituzun
        bermeen arabera.
      `,
    },
    {
      tipo: 'faq',
      pregunta: ' Zer gertatzen da hirugarren bati kalteak eragin badizkiot?',
      respuesta: `
        Ez kezkatu, perituak ur-ihesaren kausa gure etxebizitzako hoditeria batean
        dagoelaegiaztatu ondoren, eragindakoarekin harremanetan jarriko gara izan dituen
        kalteengatik kalte-ordaina emateko edo kalte horiek konpontzeko. Kaltetuak bere
        aseguru-etxeari partea ematen badio, bere erreklamazioa jaso arte itxarongo dugu
        akordioa lortzeko. 
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
        Konponketa-lanak egiten bukatu edo kalte-ordaina eman ondoren, amaitutzat joko
        da gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira?',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak, edo
        egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu, dagozkion
        gestioak egiten hasiko gara berriz ere zure eskura dituzun profesional guztiekin. 
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        Kasu batzuetan, zure etxebizitzan izandako kalteak konpondu ondoren, gorabeherarekin
        lotutako gestioak egiten jarraitu ahal izango dugu, eragileari kalteak erreklamatzeko
        nahiz hirugarren kaltetuei kalte-ordaina emateko.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


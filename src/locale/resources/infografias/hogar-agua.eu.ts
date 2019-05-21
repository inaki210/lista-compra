export default {
  titulo: 'Etxebizitzan urak eragindako kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu urak eragindako kalteen parte hauek eragozpen handiak sor ditzaketela
      etxebizitzan; bada, eragozpen horiek ahalik eta txikienak izaten ahaleginduko gara.
    </p>
    <p>
      Espedientean izan daitezkeen uneak edo egoerak erakutsiko dizkizugu. Dena den,
      dokumentu hau orientatzeko besterik ez da, zure behar eta inguruabarretara moldatzen
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
        <p>
          <strong> Gorabehera urgentea bada, </strong>, lehenik eta behin larrialdiaz
          arduratuko gara. Horretarako, urgenteena eta garrantzitsuena konpontzeaz
          arduratuko den konpontzailea bidaliko dizugu, hala nola, ur-hornidura eteteaz
          eta/edo hoditeria konpontzeaz kalteak areagotu ez daitezen.
        </p>
        <p>
          Konpontzaileak ur-ihesa konpon badezake eta bestelako kalterik ez badago,
          amaitutzat joko da gorabeheraren kudeaketa. Hala ez bada, gorabehera kudeatzen
          jarraituko dugu.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Zer egingo dut ur-ihesa nirea ez bada?',
      respuesta: `
        Berehala eman gertatutakoaren berri bizilagunari edo Erkidegoari
        (administratzaileari edo lehendakariari), ura eten eta matxura konpontzeko.
        Kontuan izan ezazu Seguros Lagun Arok bidalitako konpontzaileek ezingo dutela
        inoiz aseguratutako etxebizitza ez den jabetza batean jardun.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta ur-ihesa gauez gertatzen bada?',
      respuesta: `
        Etxebizitzan badago, ixteko giltza itxi beharko duzu eta ahal bezain laster
        jakinarazi guri. Hurrengo egunean, zure etxebizitzan izango duzu iturgina. Eta
        eragilea ez bazara, ihesaren abisua eman beharko duzu —adibidez, bizilagunari edo
        erkidegoko lehendakariari/administratzaileari. 
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta ez badakigu nondik datorren ur-ihesa?',
      respuesta: `
        Laguntza-zerbitzuak urgenteena konponduko du kalteak areagotu ez daitezen eta
        etxebizitzan jarraitu ahal izan dezazun. Ondoren, baliteke peritu batek etorri
        behar izatea ur-ihesaren jatorria zehaztu ahal izateko eta horrela erantzuleari
        hura konpon dezan eskatu ahal izateko.
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
      pregunta: '¿Puedo reparar con mis gremios?',
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
            litekeena da guk zuri argazkiak edo bestelako dokumentazioa eskatze
          </strong>
          eta peritu bat bidali behar izatea kalteen konplexutasunaren eta/edo
          zenbatekoaren arabera.
        </p>
        <p>
          Kalteak ezin badira konpondu eta kalte-ordaina egokitu badakieke, peritu bat
          bidaliko dugu haiek balora ditzan.
        </p>
        <p>
          Oinarrizko modalitateko polizetan konponketa-lanak Seguros Lagun Aroren
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
        direla-eta zure etxebizitzatik irtetea beharrezkoa izatea. Perituak erabakiko
        du etxebizitza bertan bizitzeko moduan dagoen ala ez. Sortutako gastuei aurre
        egiteko dagokizun dirulaguntzaren berri ere emango dizu, polizan kontratatuta
        dituzun bermeen arabera.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Zer gertatzen da hirugarren bati kalteak eragin badizkiot?',
      respuesta: `
        Ez kezkatu, perituak ur-ihesaren kausa gure etxebizitzako hoditeria batean
        dagoela egiaztatu ondoren, eragindakoarekin harremanetan jarriko gara izan
        dituen kalteengatik kalte-ordaina emateko edo kalte horiek konpontzeko.
        Kaltetuak bere aseguru-etxeari partea ematen badio, bere erreklamazioa jaso
        arte itxarongo dugu akordioa lortzeko.
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
        da espedientearen kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira?',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak,
        edo egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu,
        dagozkion gestioak egiten hasiko gara berriz ere zure eskura dituzun profesional
        guztiekin. 
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        Kasu batzuetan, zure etxebizitzan izandako kalteak konpondu ondoren,
        espedientearekin lotutako gestioak egiten jarraitu beharko dugu, eragileari
        kalteak erreklamatzeko nahiz hirugarren kaltetuei kalte-ordaina emateko.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


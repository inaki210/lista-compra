export default {
  titulo: `Makineria eta ekipamendu elektronikoetako datu elektrikoei buruz jakin beharrekoa`,
  descripcion: `
    <p>
      Badakigu makineria eta ekipamendu elektronikoetako kalte elektronikoen parte hauek
      eragozpen ugari sor ditzaketela zure negozioan, eta, beraz, ahal bezain laster
      konpontzen saiatuko gara.
    </p>
    <p>
      Hemen erakutsiko dizkizugu espedientean eman daitezkeen pausoak. Dena den, dokumentu
      hau orientatzeko besterik ez da, zure behar eta inguruabarretara moldatzen saiatuko
      baikara
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
      tipo: 'faq',
      pregunta: 'Kalteak nire gremioekin konpon ditzaket?',
      respuesta: `
        Bai, nahiago baduzu, konfiantzazko zure konpontzaileekin konpon ditzakezu.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        <p>
          Ohikoa izaten da laguntza teknikoko zerbitzu bat edukitzea, gailuaren edo
          makinaren mantentze teknikoaz arduratzen dena. Kasu horretan litekeena da guk
          zuri eskatzea zerbitzu teknikoaren aurrekontua eta txostena, matxuraren kausa
          zehazten duena, eta zenbait kasutan peritua bidali beharko dugu kalteen
          konplexutasunaren eta/edo garrantziaren arabera.
        </p>
        <p>
          Kalteak ezin badira konpondu eta kalte-ordaina egokitu badakieke, peritu bat
          bidaliko dugu haiek balora ditzan.
        </p>
        <p>
          Kaltea elektrizitate-enpresak eragin badu, haiekin ireki duzun gorabehera-zenbakia
          eta hornidura-kontratuaren zenbakia eskatuko dizkizugu erreklamazioa egin ahal
          izateko.
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
        Konponketa-lanak egiten bukatu edo kalte-ordaina abonatu ondoren, amaitutzat joko
        da gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira? ',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak, edo
        egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu, gestioak
        egiten hasiko gara berriz ere zure eskura dituzun profesional guztiekin.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};

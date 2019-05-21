export default {
  titulo: 'Bandalismozko ekintzengatiko kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu bandalismoko ekintzek eragindako kalteek eragozpen ugari sor ditzaketela
      etxebizitzan; bada, eragozpen horiek ahalik eta txikienak izaten ahaleginduko gara.
    </p>
    <p>
      Hemen
      <strong>
        erakutsiko dizkizugu espedientean izan daitezkeen uneak edo egoerak
      </strong>.
      Dena den, dokumentu hau orientatzeko besterik ez da, zure behar eta inguruabarretara
      moldatzen saiatuko baikara.
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
      titulo: 'Nor aduratuko da nire espedienteaz?',
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
        <strong> Gorabehera urgentea bada </strong>, lehenik eta behin larrialdiaz
        arduratuko gara. Horretarako, urgenteena eta garrantzitsuena konpontzeaz
        arduratuko den konpontzailea bidaliko dizugu.
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
      pregunta: 'Kalteak nire gremioekin konpon ditzaket?',
      respuesta: `
        Bai, ezbehar hauek kudeatzeko ezinbestekoa da salaketa aurkeztea agintari
        eskudunen aurrean.
        Salaketa aurkezteak bere horretan ez du esan nahi bandalismozko ekintza bat izan
        behar duenik; Aseguru-etxeak egiaztatu egin beharko du kalteak begi bistako asmo
        txarrez eta kaltea eragiteko asmo soilarekin egin direla.
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
          Oinarrizko modalitateko polizetan, konponketa-lanak konfiantzazko profesionalekin
          egin behar dira beti.
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
        Kasu batzuetan, zure etxebizitzan izandako kalteak konpondu ondoren,
        gorabeherarekin lotutako kudeaketak egiten jarraitu ahal izango dugu, eragileari
        kalteak erreklamatzea, esate baterako.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};

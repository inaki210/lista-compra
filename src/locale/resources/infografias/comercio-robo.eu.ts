export default {
  titulo: 'Lapurretagatiko kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu lapurreta-parte hauek kezka eta eragozpenak sor ditzaketela, eta, beraz,
      ahal bezain laster konpontzen saiatuko gara.
    </p>
    <p>
      Hemen erakutsiko dizkizugu espedientean eman daitezkeen pausoak. Dena den, dokumentu
      hau orientatzeko besterik ez da, zure behar eta inguruabarretara moldatzen saiatuko
      baikara.
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
          <strong>Gorabehera urgentea bada, </strong>, lehenik eta behin larrialdiaz
          arduratuko gara. Horretarako, konpontzaile bat bidaliko dugu kudeaketak eta
          konponketaz arduratzeko, betiere lokala babestuta utziz.
        </p>
        <p>
          Konpontzaileak gorabehera konpon badezake eta bestelako kalterik ez badago,
          gorabeheraren kudeaketa amaitutzat joko da.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Kalteak nire gremioekin konpon ditzaket?',
      respuesta: `
        Nahiago baduzu, konfiantzazko zure konpontzaileekin konpon ditzakezu
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
      tipo: 'faq',
      pregunta: 'Beharrezkoa da salaketa aurkeztea?',
      respuesta: `
        Bai, ezinbestekoa da salaketa aurkeztea agintari eskudunen aurrean, eta horretarako
        oso garrantzitsua da lapurtutako ondasunen xehetasunak ematea kudeaketa errazteko.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Salgaiak, makineria eta eskudirua lapurtu dizkidate. Zein dokumentazio aurkeztu
        behar dut?
      `,
      respuesta: `
        Fakturak, albaranak, argazkiak, enbalajeak, bermeak edo lapurtutako ondasuna
        egiaztatzen duen beste edozein dokumentazio aurkezteak erraztu egingo du izapidetzea
        eta balorazioa egitea. Kasu bakoitzean xehetasun gehiagorekin zehaztuko dizugu zein
        dokumentazio aurkeztu behar den.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Zer gertatuko da nire negozioa itxi behar badut kalteen ondorioz edo
        konponketa-lanak egiteko?
      `,
      respuesta: `
        Baliteke izandako kalteak direla-eta edo egin beharreko konponketa-lanak direla-eta
        zure negozioa itxi behar izatea. Perituak erabakiko du zein kalte-ordain dagokizun
        polizan kontratatuta dituzun bermeen arabera.
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
        Konponketa-lanak egiten bukatu edo kalte-ordaina eman ondoren, amaitutzat joko da
        gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira?',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak, edo
        egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu, gestioak
        egiten hasiko gara berriz ere zure eskura dituzun profesional guztiekin.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};

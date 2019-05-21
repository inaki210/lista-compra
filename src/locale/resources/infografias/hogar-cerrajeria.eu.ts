export default {
  titulo: 'Sarraila ordezteari buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu era honetako parteek larritasuna sor diezazuketela, eta, beraz, ahal bezain
      laster konpontzen saiatuko gara.
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
          Zure espedientea zuzentzeaz arduratuko den pertsona bat izango duzu —zure
          espedientearen kudeatzailea—: peritua eta konpontzailea bidaltzeaz arduratuko da,
          eta sor daitezkeen zalantzak, gorabeherak eta trabak argitu eta konpontzeaz ere
          bai. 
        </p>
        <p>
          Edozein unetan jar zaitezke berarekin harremanetan. 
        </p>
        <p>
          Sarrailagile bat esleitu dizugu, ponpatxoa aldatzen saiatuko da, eta ezinezkoa
          den kasuetan soilik sarraila osoa aldatuko du antzeko beste batekin, betiere
          polizaren muga kontuan hartuz.
        </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <strong>Gorabehera urgentea bada</strong>, lehendik eta behin 3 ordu baino lehen
        sarrailagile bat bidaliko dizugu, urgentzia konpon dezan.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Sarraila hondatu dute lapurreta-saiakeraren ondorioz. Salaketa aurkeztu behar dut?
      `,
      respuesta: `
        Bai, ezbehar hauek kudeatzeko ezinbestekoa da salaketa aurkeztea.
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
        <p>
          Kasu horretan   
          <strong>
            litekeena da guk zuri eskatzea argazkiak, aldatutako sarraila gordetzea edo
            bestelako dokumentazioa,
          </strong>
          eta peritu bat bidali behar izatea kalteen konplexutasunaren eta/edo zenbatekoaren
          arabera. Betiere polizaren muga kontuan hartuz. 
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
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


﻿export default {
  titulo: 'Suteagatiko kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu era honetako parteek eragozpen ugari sor ditzaketela zure negozioan, eta,
      beraz, ahal bezain laster konpontzen saiatuko gara.
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
          Zure espedientea zuzentzeaz eta prozesu guztia gainbegiratzeaz arduratuko den
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
          <strong>Gorabehera urgentea bada, </strong>, lehendabizi egingo duguna 3 ordu
          baino lehen konpontzaile bat bidaltzea izango da, eta urgentzia konpontzeaz
          arduratuko da.
        </p>
        <p>
          Konpontzaileak gorabehera konpon badezake eta bestelako kalterik ez badago,
          kudeaketa amaitutzat emango da.
        </p>
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
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Zer gertatuko da nire negozioa itxi behar badut kalteen ondorioz edo
        konponketa-lanak egiteko?
      `,
      respuesta: `
        Baliteke izandako kalteak direla-eta edo egin beharreko konponketa-lanak
        direla-eta zure negozioa itxi behar izatea. Perituak erabakiko du zein
        dirulaguntza dagokizun polizan kontratatuta dituzun bermeen arabera, zure
        negozioa itxi behar izanagatik sortutako kalteak ahalik eta txikienak izan
        daitezen.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Zer gertatzen da hirugarren bati kalteak eragin badizkiot?',
      respuesta: `
        Ez kezkatu, perituak sutearen kausa egiaztatu ondoren, eragindakoarekin harremanetan
        jarriko gara izan dituen kalteengatik kalte-ordaina emateko edo kalte horiek
        konpontzeko. Kaltetuak bere aseguru-etxeari partea ematen badio, haren erantzuna
        jaso arte itxarongo dugu akordioa lortzeko.
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
        emango da gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira?',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak, edo
        egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu, berriro
        hasiko gara gestioak egiten zure eskura dituzun profesional guztiekin.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        Zenbait kasutan, zure negozioan izandako kalteak konpondu ondoren, zure
        gorabeherarekin lotutako gestioak egiten jarraitu ahal izango dugu, kalte-ordainaren
        abonua egiteko nahiz hirugarren kaltetuei kalte-ordaina emateko.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};

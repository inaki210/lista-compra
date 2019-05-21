export default {
  titulo: 'Elur, haize, kazkabar eta keagatiko kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu era honetako parteek eragozpen ugari sor ditzaketela zure bizilekuan,
      eta, beraz, ahal bezain laster konpontzen saiatuko gara.
    </p>
    <p>
      Hemen erakutsiko dizkizugu espedientean <strong>eman daitezkeen pausoak</strong>.
      Dena den, dokumentu hau orientatzeko besterik ez da izango, zure behar eta
      inguruabarretara moldatzen saiatuko baikara.
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
          Zure espedientea kudeatzeaz arduratuko den pertsona bat izango duzu —zure
          espedientearen kudeatzailea—: peritua eta/edo konpontzailea bidaltzeaz arduratuko
          da, eta sor daitezkeen zalantzak, gorabeherak eta trabak argitu eta konpontzeaz
          ere bai.
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
          <strong>Urgentea bada</strong>, lehenik eta behin 3 ordu baino lehen konpontzaile
          bat bidaliko dizugu, urgentzia konpon dezan. 
        </p>
        <p>
          Konpontzaileak gorabehera konpon badezake eta bestelako kalterik ez badago,
          kudeaketa amaitutzat joko da.
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
        <p>
          Oinarrizko modalitateko polizetan konponketa-lanak Seguros Lagun Aroren
          konfiantzazko profesionalekin egin behar dira beti.
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
        Konponketa-lanak egiten bukatu edo kalte-ordaina eman ondoren, amaitutzat joko
        da espedientearen kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira?',
      respuesta: `
        Aurrerago sortzen badira lehenago baloratu ezin izan ditugun kalte berriak, edo
        egindako konponketa-lanekin arazoak izaten badira, ez zaitez kezkatu, dagozkion
        gestioak egiten hasiko gara berriz ere zure eskura dituzun profesional guztiekin.      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        Kasu batzuetan, zure etxebizitzan izandako kalteak konpondu ondoren,
        gorabeherarekin lotutako gestioak egiten jarraitu beharko dugu, eragileari
        kalteak erreklamatzeko nahiz hirugarren kaltetuei kalte-ordaina emateko.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


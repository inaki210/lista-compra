export default {
  titulo: 'Etxebizitzatik kanpora izandako atrakoagatiko kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Espedientean izan daitezkeen <strong> uneak edo egoerak azalduko dizkizugu</strong>.
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
        <strong>Zure etxebizitzako giltzak lapurtu badizkizute </strong>, urgentziatzat
        hartzen dugu zure etxebizitza babestea, eta, horregatik, sarrailagile bat bidaliko
        dizugu sarraila aldatzeko.
      `,
    },
    {
      tipo: 'faq',
      pregunta: ' Beharrezkoa da salaketa aurkeztea?',
      respuesta: `
        Bai, beharrezkoa da era horretako parteak izapidetzeko. Lapurtutako gauzen
        fakturak eta/edo argazkiak bidaltzeak kudeaketan lagunduko digu.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Lapurtu badidate baina ez banaiz konturatu etxebizitzan kalterik ez dagoelako,
        estalita dago? 
      `,
      respuesta: `
        Ezbehar bermatua izateko ezinbestekoa da pertsonen aurka indarkeria eta/edo
        larderia erabili izana daramatzaten gauzak ostean.
      `,
    },
    {
      tipo: 'seccion',
      titulo: 'Noiz amaitzen da espedientea?',
    },
    {
      tipo: 'mensaje',
      imagen: 'cierre.svg',
      contenido: `
        Lapurtutako gauza eta eskudiruarengatiko kalte-ordaina emandakoan polizaren mugen
        arabera, amaitutzat joko da gorabeheraren kudeaketa.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


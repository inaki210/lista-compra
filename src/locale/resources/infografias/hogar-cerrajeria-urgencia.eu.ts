export default {
  titulo: 'Sarrailagintzako urgentzia bati buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu <strong> Sarrailagintzako urgentzia </strong> hauek eragozpen ugari sor
      ditzaketela zure bizilekuan, eta, beraz, ahal bezain laster konpontzen saiatuko gara.
    </p>
    <p>
      Hemen <strong> erakutsiko dizkizugu </strong> espedientean eman daitezkeen pausoak.
      Dena den, dokumentu hau orientatzeko besterik ez da izango, zure behar eta
      inguruabarretara moldatzen saiatuko baikara.
    </p>
  `,
  proceso: [
    {
      tipo: 'seccion',
      titulo: 'Urgencia',
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <p>
          <strong>Gorabehera urgentea bada</strong>, lehenik eta behin 3 ordu baino lehen
          sarrailagile bat bidaliko dizugu, urgentzia konpon dezan.
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
      pregunta: `
        Sarraila hondatu dute lapurreta-saiakeragatik. Salaketa aurkeztu behar dut?
      `,
      respuesta: `
        Bai, beharrezkoa da era horretako parteak izapidetzeko.
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
  ],
};


export default {
  titulo: 'Elektrizitateagatiko kalteei buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu <strong>elektrizitateagatiko kalteen</strong> parte hauek eragozpen ugari
      sor ditzaketela zure bizilekuan, eta, beraz, ahal bezain laster konpontzen saiatuko
      gara.
    </p>
    <p>
      Espedientean izan daitezkeen <strong> uneak edo egoerak </strong> erakutsiko dizkizugu.
      Dena den, dokumentu hau orientatzeko besterik ez da, zure behar eta inguruabarretara
      moldatzen saiatuko baikara.
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
        Lehenik eta behin larrialdiaz arduratuko gara. Horretarako, argiketari bat bidaliko
        dugu eta zure etxean izango duzu 3 ordu baino lehen, hornidura elektrikoa
        berrezartzeko, betiere instalazioak horretarako aukera ematen badu. Kableatua bustita
        baldin badago, gerta daiteke lanak ezin egin ahal izatea. 
      `,
    },
    {
      tipo: 'seccion',
      titulo: 'Cierre del expediente',
    },
    {
      tipo: 'mensaje',
      imagen: 'cierre.svg',
      contenido: `
        Urgentziazko zerbitzua amaitutakoan, estalduradun kalte gehiago egonez gero haiek
        kudeatzeari ekingo diogu.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


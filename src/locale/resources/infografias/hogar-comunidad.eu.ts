export default {
  titulo: 'Erkidego-ezbehar bati buruz jakin beharrekoa',
  descripcion: `
    <p>
      Espedientean izan daitezkeen <strong>uneak edo egoerak erakutsiko</strong>
      dizkizugu. Dena den, dokumentu hau orientatzeko besterik ez da, zure behar eta
      inguruabarretara moldatzen saiatuko baikara.
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
      tipo: 'seccion',
      titulo: 'Zein dokumentazio aurkeztu behar dut?',
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        <p>
          Erkidego-ezbeharren kudeaketa beti egindako lanen fakturetan eta/edo egindako
          peritazioetan oinarrituta egiten da. Zure partaidetza-kuota ezagutzeko,
          administratzaileak egindako idazki bat helarazi beharko diguzu
          partaidetza-kuotarekin edo zure partaidetza jasotzen duten eskrituren kopia bat
          bestela.
        </p>
        <p>
          Lapurreta/bandalismozko ekintzen kasuetan ere salaketa beharko dugu.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Mantentze-lanak/Hobekuntzak estalita daude?',
      respuesta: `
        Mantentze-lanei dagozkien lanek (teilatuen/fatxaden zaharberritzea egoeragatik...)
        ez daukate estaldurarik.  Ezbehar baten konponketan zehar hobekuntzak egiten badira
        lanak aprobetxatuz, partida horiek deskontatu egingo dira kalte-ordainetik. 
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
        Zure partaidetzaren %-ari dagokion kalte-ordaina emandakoan, ezbeharrak guztizko
        estaldura edo partziala badu, amaitutzat joko da gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta aurrerago beste kalte batzuk sortzen badira?',
      respuesta: `
        Si más adelante surgen nuevos daños que no hemos podido valorar con
        anterioridad, o problemas con las reparaciones efectuadas, no te
        preocupes, iniciaremos de nuevo las gestiones oportunas con todos los
        profesionales a tu disposición.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        En algunas ocasiones, tras solucionar los daños ocurridos en tu
        domicilio, tendremos que continuar realizando gestiones relacionadas con
        el expediente, bien de reclamación de daños al causante, bien para
        proceder a la indemnización de terceros perjudicados.
      `,
    },
  ],
};


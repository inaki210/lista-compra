export default {
  titulo: `Hotz-ganberetako elikagaiak hondatzeari buruz jakin beharrekoa`,
  descripcion: `
    <p>
      Espedientean izan daitezkeen <strong>uneak edo egoerak erakutsiko</strong> dizkizugu.
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
          Kasu guztietan, galdutako salgaien zerrenda xehatu bat eta balorazio ekonomikoa
          aurkeztu behar dira. 
        </p>
        <p>
          Gorabehera hozkailu edo kutxa-izozkailu baten matxuragatik gertatzen bada, edo
          instalazioko kalteengatik, faktura eta matxuraren txostena helarazi behar
          dizkiguzu, beharrezkoa egiaztapenak egiteko. Elektrizitate-hornitzailearen 4 ordu
          baino gehiagoko gorabehera batengatik gertatzen bada gorabehera, matxuraren berri
          eman beharko diozu elektrizitate-enpresari eta haren erantzuna helarazi beharko
          diguzu gorabehera edo matxura berretsiz.       
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Eta nire etxetresna elektrikoa zaharra bada, hala ere estaldura dauka?',
      respuesta: `
        Salgai-hondatzea 10 urte baino gehiagoko etxetresna baten matxuragatik gertatzen
        bada, ezbeharrak ez du estaldurarik izango.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Ekaitza badago eta etxera iristean elikagaiak galdu badira, estalita daude?
      `,
      respuesta: `
        Ekaitzean zehar automatikoak saltatzen badu eta etxean ez egoteagatik berriro
        aktibatu ezin izan baduzu, hozkailuan kalterik ez dagoenez, eta instalazioan ere
        ez, ez dago estaldurarik.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Hondatutako elikagaiak bota ditzaket?',
      respuesta: `
        Ez dizugu eskatutako elikagaiak egoera horretan gordetzeko, baina bai eskatuko
        dizugu bota aurretik argazki batzuk egitea elikagaiei eta guri bidaltzea.
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
        Kalte-ordaina eman ondoren, amaitutzat joko da gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        Kasu batzuetan, zure bizilekuan izandako kalteak konpondu ondoren, gorabeherarekin
        lotutako kudeaketak egiten jarraitu beharko dugu, eragileari kalteak erreklamatzea,
        esate baterako.
        Eskerrik asko gugan uste osoa izateagatik.
      `,
    },
  ],
};


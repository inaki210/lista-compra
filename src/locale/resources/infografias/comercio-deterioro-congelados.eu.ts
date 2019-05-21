export default {
  titulo: 'Hoztutako ondasunak hondatzeari buruz jakin beharrekoa',
  descripcion: `
    <p>
      Badakigu era honetako parteek eragozpenak sor ditzaketela zure negozioan, eta, beraz,
      ahal bezain laster konpontzen saiatuko gara.
    </p>
    <p>
      Espedientean eman daitezkeen pausoak erakutsiko dizkizugu. Dena den, dokumentu hau
      orientatzeko besterik ez da, beti zure behar eta inguruabarretara moldatzen saiatuko
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
          pertsona bat izango duzu —zure espedientearen kudeatzailea—: peritua edo
          konpontzailea bidaltzeaz arduratuko da, eta sor daitezkeen zalantzak, gorabeherak
          eta trabak argitu eta konpontzeaz ere bai.
        </p>
        <p>
          Edozein unetan jar zaitezke berarekin harremanetan.
        </p>
      `,
    },
    {
      tipo: 'seccion',
      titulo: 'Zer egin ezbeharra gertatzen denean?',
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        <p>
          Garrantzitsua da hondatutako ondasunen inbentario edo zerrenda ahalik eta
          xehatuena egitea, eta argazkiak ateratzea, eta ondasun horien albaranak eta/edo
          fakturak biltzea balioa justifikatzeko.
        </p>
        <p>
          Dokumentazio hori zure espedientea kudeatzen ari denari bidal diezaiokezu.
        </p>
        <p>
         Kaltea elektrizitate-enpresak eragin badu, haiekin ireki duzun gorabehera-zenbakia
         eta hornidura-kontratuaren zenbakia eskatuko dizkizugu erreklamazioa egin ahal
         izateko.
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
        Kalte-ordainaren abonua egindakoan, amaitutzat joko da gorabeheraren kudeaketa.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        Zenbait kasutan, gainera, beharrezkoa izan daiteke lotutako kudeaketa batzuk egiten
        jarraitzea, elektrizitate-enpresari egindako erreklamazioa, adibidez. Eskerrik asko
        gugan uste osoa izateagatik.
      `,
    },
  ],
};

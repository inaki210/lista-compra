export default {
  titulo: `
    Lo que tienes que saber sobre el deterioro de alimentos en cámaras
    frigoríficas
  `,
  descripcion: `
    <p>
      Te <strong>mostramos los momentos o situaciones</strong> por las que
      puede pasar tu expediente, aunque tan solo será orientativo, ya que
      siempre trataremos de adecuarnos a tus necesidades y circunstancias.
    </p>
  `,
  proceso: [
    {
      tipo: 'seccion',
      titulo: 'Hemos registrado el parte',
    },
    {
      tipo: 'mensaje',
      imagen: 'registro-incidente.svg',
      contenido: `
        En primer lugar te hemos facilitado un número de referencia del
        expediente y los nombres, teléfonos y correos electrónicos de las
        personas que intervendrán en la gestión del mismo.
      `,
    },
    {
      tipo: 'seccion',
      titulo: '¿Quién se encarga de mi expediente?',
    },
    {
      tipo: 'mensaje',
      imagen: 'gestor.svg',
      contenido: `
        <p>
          Dispondrás de una persona – el gestor de tu expediente - que se
          encargará de gestionar y supervisar todo el proceso: enviar un perito
          y/o un reparador y solucionar las dudas, incidencias e inconvenientes
          que puedan surgir.
        </p>
        <p>
          Puedes contactar con ella en cualquier momento para cualquier duda.
        </p>
      `,
    },
    {
      tipo: 'seccion',
      titulo: '¿Qué documentación tengo que presentar?',
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        <p>
          En todos los casos hay que presentar un listado detallado de las
          mercancías pérdidas, y su valoración económica.
        </p>
        <p>
          Si  el incidente se produce por la avería de un frigorífico o un
          arcón, o por daños en la instalación, nos tienes que hacer llegar
          factura y el informe de la avería para hacer las comprobaciones
          necesarias.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Y si mi electrodoméstico es viejo, también tiene cobertura?',
      respuesta: `
        Si el deterioro de mercancías se produce por avería de electrodoméstico
        de más de 10 años, el siniestro no tiene cobertura.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Si hay tormenta y al llegar a casa se han perdido los alimentos ¿tiene
        cobertura?
      `,
      respuesta: `
        En el caso que  durante una tormenta se salte el automático y al no
        estar en casa no lo haya podido rearmar, al no existir  daños en el
        frigo, ni en la instalación, no existe cobertura.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Puedo tirar los alimentos dañados?',
      respuesta: `
        No te vamos a pedir que guardes los alimentos en ese estado, pero te
        pediremos que antes de tirarlos hagas unas fotos de los mismos y nos
        las envíes.
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
        Tras el abono de la indemnización por los daños, quedará finalizada la
        gestión del incidente.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        En algunas ocasiones, tras solucionar los daños ocurridos en tu
        domicilio, tendremos que continuar realizando gestiones relacionadas
        con el expediente, bien de reclamación de daños al causante, bien para
        proceder a la indemnización de terceros perjudicados.
      `,
    },
  ],
};

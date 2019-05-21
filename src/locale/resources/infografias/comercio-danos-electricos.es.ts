export default {
  titulo: 'Lo que tienes que saber sobre datos eléctricos',
  descripcion: `
    <p>
      Sabemos que este tipo de partes de daños eléctricos pueden ocasionar
      molestias en tu negocio por lo que intentaremos solucionarlo lo antes
      posible.
    </p>
    <p>
      Te mostramos los pasos por los que puede pasar el expediente, aunque tan
      solo será orientativo, ya que siempre trataremos de adecuarnos a tus
      necesidades y circunstancias.
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
          Dispondrás de una persona –el gestor de tu expediente- que se
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
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <p>
          <strong>Si el incidente es urgente</strong>, lo primero haremos es
          enviar un electricista para restablecer el suministro eléctrico
          siempre que el estado de la instalación lo permita. En el caso de que
          el cableado esté mojado cabe la posibilidad que no se pueda realizar
          los trabajos.
        </p>
        <p>
          Tras la finalización del servicio de urgencia, si hubiese más daños
          con cobertura procederemos a gestionarlos, bien reparándolos o
          indemnizándolos.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Puedo reparar con mis gremios?',
      respuesta: `
        Sí, si lo prefieres puedes reparar con tus reparadores de confianza.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        En el caso de reparar con tus reparadores de confianza, es posible que
        te solicitemos fotos, informe detallado de su técnico, justificante de
        incidencia de su suministrador u otra documentación y que tengamos que
        enviar un perito según la complejidad de los daños y/o su importe.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Puedo solicitar indemnización aunque sea reparable?',
      respuesta: `
        Si, si se trata de un siniestro cubierto en póliza y no desea reparar
        porque desea comprar otro aparato, puede solicitar indemnización por el
        coste de reparación.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        ¿Qué ocurre si tengo que cerrar mi negocio debido a  los daños o para
        llevar a cabo la reparación?
      `,
      respuesta: `
        Quizás por los daños sufridos o por las reparaciones que se tengan que
        realizar, sea necesario que cierres tu negocio. El perito será quien
        decida la indemnización correspondiente tras estudio de la documentación
        contable de tu negocio y según las garantías que tengas contratadas en
        tu póliza.
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
        Tras la finalización de los trabajos de reparación o el abono de la
        indemnización por los daños, quedará finalizada la gestión del
        incidente.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Y si más adelante surgen nuevos daños?',
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
        En algunas ocasiones, tras solucionar los daños acontecidos en tu
        negocio, podremos continuar realizando gestiones relacionadas con la
        incidencia como la reclamación al causante.
      `,
    },
  ],
};

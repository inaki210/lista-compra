export default {
  titulo: 'Lo que tienes que saber en un siniestro comunitario',
  descripcion: `
    <p>
      Aquí te <strong>mostramos los momentos o situaciones</strong> por las que
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
          Dispondrás de una persona –el gestor de tu expediente- que se
          encargará de gestionar y supervisar todo el proceso: enviar un perito
          y/o un reparador y solucionar las dudas, incidencias e inconvenientes
          que puedan surgir.
        </p>
        <p>
          Puedes contactar con él en cualquier momento para cualquier duda.
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
          La gestión de los siniestros comunitarios se hace siempre en base a
          las facturas de trabajos realizados y/o peritaciones realizadas.
          Para conocer tu cuota de participación, necesitamos que nos facilites
          un escrito con la cuota de participación efectuada por el
          administrador o una copia de las escrituras donde consta tu
          participación
        <p>
          En los supuestos de robo/acto vandálico también necesitaremos la
          denuncia correspondiente.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Están cubiertas las reparaciones de mantenimiento /mejoras?',
      respuesta: `
        Los trabajos correspondiente a reparaciones de mantenimiento
        (rehabilitación de tejados/fachadas por el estado...) no tienen
        cobertura. Si durante la reparación de un siniestro con cobertura se
        efectúan mejoras aprovechando la obra, esas partidas serán descontando
        de tu indemnización.
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
        Tras el abono de la indemnización de tu % de participación, si el
        siniestro goza de cobertura total o parcial, quedará finalizada la
        gestión del incidente.
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
        En algunas ocasiones, tras solucionar los daños ocurridos en tu
        domicilio, tendremos que continuar realizando gestiones relacionadas con
        el expediente, bien de reclamación de daños al causante, bien para
        proceder a la indemnización de terceros perjudicados.
      `,
    },
  ],
};

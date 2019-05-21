export default {
  titulo: 'Lo que tienes que saber de daños por actos vandálicos',
  descripcion: `
    <p>
      Sabemos que los<strong> daños por actos vandálicos</strong>
      pueden ocasionar muchas molestias en el domicilio, intentaremos que sean
      las menos posibles.
    </p>
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
      En primer lugar te hemos facilitado un número de referencia del expediente
      y los nombres, teléfonos y correos electrónicos de las personas que
      intervendrán en la gestión del mismo.
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
      Dispondrás de una persona –el gestor de tu expediente- que se encargará
      de gestionar el expediente: enviar un perito y/o un reparador y solucionar
      las dudas, incidencias e inconvenientes que puedan surgir.
        <p>
        Puedes contactar con él en cualquier momento para cualquier duda.
        </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <strong>Si el incidente es urgente</strong>, lo primero que vamos a
        hacer es atender la emergencia. Para ello enviaremos un reparador que
        se encargará de solucionar lo más urgente e importante.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Qué pasa si hay más daños?',
      respuesta: `
        Si hay más daños, se pueden reparar y cuentan con cobertura en la
        póliza, pondremos a tu disposición los profesionales que sean necesarios
        para su reparación.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Es necesaria presentación de denuncia?',
      respuesta: `
        Sí, para la gestión de estos siniestros es imprescindible la
        presentación de denuncia ante la autoridad competente. El hecho de
        presentar la denuncia no presupone que se trate de un acto vandálico,
        deberá comprobarse por la Compañía que los daños han sido causados con
        evidente y exclusiva intención de causar un mal.
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
        <p>
          En caso de reparar con tus gremios
          <strong>
            es posible que te solicitemos fotos u otra documentación
          </strong>
          y que tengamos que enviar a un perito según la complejidad de los
          daños y/o su importe.
        </p>
        <p>
          Si los daños no se pueden reparar y son indemnizables, enviaremos
          un perito para su valoración.
        </p>
        <p>
          En las pólizas de modalidad Básica, las reparaciones siempre se deben
          realizar con los profesionales de confianza.
        </p>
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
        Tras la finalización de los trabajos de reparación o el abono por la
        indemnización de los daños, quedará finalizada la gestión del incidente.
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
        domicilio, podremos continuar realizando gestiones relacionadas con la
        incidencia como por ejemplo la reclamación al causante.
      `,
    },
  ],
};

export default {
  titulo: 'Lo que tienes que saber de daños por nieve, viento, granizo y humo',
  descripcion: `
    <p>
      Sabemos que este tipo de partes pueden ocasionar muchas molestias en
      tu domicilio, por lo que intentaremos solucionarlo lo antes posible.
    </p>
    <p>
      Te <strong>mostramos los pasos</strong> por los que puede pasar el
      expediente, aunque tan solo será orientativo, ya que siempre trataremos
      de adecuarnos a tus necesidades y circunstancias.
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
          encargará de gestionar el expdiente: enviar un perito y/o un reparador
          y solucionar las dudas, incidencias e inconvenientes que puedan
          surgir.
        </p>
        <p>
        Puedes contactar con ella en cualquier momento.
        </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <p>
          <strong>Si es urgente</strong>, lo primero que haremos es enviarte un
          reparador en menos de 3h para que solucione la urgencia.
        </p>
        <p>
          Si el reparador puede solucionar el incidente y no existen otros
          daños, quedará finalizada la gestión.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Qué pasa si hay más daños?',
      respuesta: `
        Si hay más daños, se pueden reparar y cuentan con cobertura en la
        póliza, pondremos a tu disposición los profesionales que sean
        necesarios para su reparación.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Puedo reparar con mis gremios?',
      respuesta: `
        Sí, en todas en las modalidades excepto la básica, si lo prefieres
        puedes reparar con tus reparadores de confianza.
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
          Si los daños no se pueden reparar y son indemnizables, enviaremos un
          perito para su valoración.
        </p>
        <p>
          En las pólizas de modalidad Básica, las reparaciones siempre se deben
          realizar con los profesionales de confianza de Seguros Lagun aro.
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
        Tras la finalización de los trabajos de reparación o el abono de la
        indemnización por los daños, quedará finalizada la gestión del
        expediente.
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

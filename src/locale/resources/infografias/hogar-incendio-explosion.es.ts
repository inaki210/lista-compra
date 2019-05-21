export default {
  titulo: 'Lo que tienes que saber de daños por incendio o explosión',
  descripcion: `
    <p>
      Sabemos que los<strong> daños por incendio / explosións</strong>
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
        y/o un reparador así como solucionar las dudas, incidencias e
        inconvenientes que puedan surgir.
      <p>
      <p>
        Puedes contactar con ella en cualquier momento para cualquier duda.
      </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <strong>Si el parte es urgente</strong>, lo primero que vamos a hacer es
        atender la emergencia. Para ello enviaremos reparadores para efectuar
        las primeras reparaciones / limpieza que dejarán la vivienda en las
        mejores condiciones posibles para su uso.
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
          Si los daños no se pueden reparar y son indemnizables, enviaremos un
          perito para su valoración.
        </p>
        <p>
          En las pólizas de modalidad Básica, las reparaciones siempre se deben
          realizar con los profesionales de confianza.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        ¿Y si tengo que salir de mi domicilio por los daños causados o para su
        reparación?
      `,
      respuesta: `
        Quizás por los daños sufridos o por las reparaciones que se tengan que
        realizar, sea necesario que salgas de tu domicilio. El perito será quien
        decida si la vivienda se encuentra inhabitable. También te informará de
        la ayuda económica que te corresponde para cubrir los gastos
        ocasionados, en base a las garantías que tengas contratadas en tu
        póliza.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Qué sucede si he ocasionado daños a un tercero?',
      respuesta: `
        No te preocupes, una vez que el perito verifique que la causa de la fuga
        se encuentra en una tubería de nuestro domicilio, nos pondremos en
        contacto con el afectado para indemnizarle por los daños sufridos o para
        la reparación de los mismos. En caso de que el perjudicado diera parte a
        su compañía de seguros, esperaremos a su reclamación para alcanzar un
        acuerdo.
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
        incidencia, bien de reclamación al causante, bien para proceder a la
        indemnización de terceros perjudicados.
      `,
    },
  ],
};

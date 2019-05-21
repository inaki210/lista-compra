export default {
  titulo: 'Lo que tienes que saber sobre cerrajería',
  descripcion: `
    <p>
      Sabemos que este tipo de partes  de cerrajería pueden ocasionar mucha
      intranquilidad y molestias en tu negocio   por lo que intentaremos
      solucionarlo lo antes posible.
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
        En primer lugar te facilitamos por sms el número de referencia del
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
          <strong>Si el incidente es urgente</strong>, lo primero que haremos
          es enviarte un cerrajero en menos de 3h para que solucione la
          urgencia.
        </p>
        <p>
          Si lo puede solucionar en la misma asistencia y no existen otros
          daños, quedará finalizada la gestión.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Han dañado la cerradura por un intento de robo ¿tengo que presentar
        denuncia?
      `,
      respuesta: `
        Sí, para la gestión de estos siniestros es imprescindible la
        presentación de denuncia.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Puedo reparar con mis gremios?',
      respuesta: `
        Si lo prefieres puedes reparar con tus reparadores de confianza.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        En caso de reparar con tus gremios
        <strong>
          es posible que te solicitemos fotos, guardar cerradura cambiada u
          otra documentación
        </strong>
        y que tengamos que enviar a un perito
        según la complejidad de los daños y/o su importe.
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
  ],
};

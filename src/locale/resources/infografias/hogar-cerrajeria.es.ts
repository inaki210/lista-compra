export default {
  titulo: 'Lo que tienes que saber de una sustitución de cerradura',
  descripcion: `
    <p>
      Sabemos que este tipo de incidentes pueden ocasionar intranquilidad por lo
      que intentaremos solucionarlo lo antes posible.
    </p>
    <p>
       Aquí te mostramos los pasos por los que puede pasar el expediente,
       aunque tan solo es orientativo ya que trataremos de adecuarnos a tus
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
        <p>
          Hemos asignado un cerrajero que  intentará cambiar el bombín y sólo si
          no es posible, se cambiará toda la cerradura por otra similar,
          teniendo en cuenta siempre el límite de la póliza.
        </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        <strong>Si el incidente es urgente</strong>, lo primero que haremos es
        enviarte un cerrajero en menos de 3h para que solucione la urgencia.
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
        <p>
          En caso de reparar con tus gremios
          <strong>
            es posible que te solicitemos fotos, guardar cerradura cambiada u
            otra documentación
          </strong>
          y que tengamos que enviar a un perito según la complejidad de los
          daños y/o su importe. Siempre teniendo en cuenta el límite de tu
          póliza.
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

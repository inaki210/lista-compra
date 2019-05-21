export default {
  titulo: 'Lo que tienes que saber de una urgencia de cerrajería',
  descripcion: `
    <p>
      Sabemos que este tipo de <strong>Urgencia de Cerrajería</strong> puede
      ocasionar muchas molestias en tu domicilio por lo que intentaremos
      solucionarlo lo antes posible.
    </p>
    <p>
      <strong>Te mostramos los pasos</strong> por las que
      puede pasar el expediente, aunque tan solo será orientativo, ya que
      siempre trataremos de adecuarnos a tus necesidades y circunstancias.
    </p>

  `,
  proceso: [
    {
      tipo: 'seccion',
      titulo: 'Urgencia',
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
          Si el reparador puede solucionar el incidente y no existen otros
          daños, quedará finalizada la gestión.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Qué pasa si hay más daños',
      respuesta: `
        Si hay más daños, se pueden reparar y cuentan con cobertura en la
        póliza, pondremos a tu disposición los profesionales que sean necesarios
        para su reparación.
      `,
    },

    {
      tipo: 'faq',
      pregunta: `
        Han dañado la cerradura por un intento de robo, ¿tengo que presentar
        denuncia?
      `,
      respuesta: `
        Sí, para la gestión de estos siniestros es imprescindible la
        presentación de denuncia.
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

export default {
  titulo: 'Lo que tienes que saber de daños causados por robo',
  descripcion: `
    <p>
      Sabemos que este tipo de partes de Robo  ocasionan inquietud y malestar
      por lo que intentaremos solucionarlo lo antes posible.
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
          será atender la emergencia. Para ello enviaremos un reparador que
          encargará de la gestión y reparación correspondiente, siempre dejando
          el local protegido.
        </p>
        <p>
          Si el reparador puede solucionar el incidente y no existen otros
          daños, quedará finalizada la gestión.
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
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Es necesaria presentación de denuncia?',
      respuesta: `
        Sí, es imprescindible la presentación de denuncia ante las autoridades
        competentes, siendo muy importante detallar los bienes robados para
        facilitar la gestión.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Me han robado mercancías, maquinaría y dinero en efectivo ¿Qué
        documentación debo presentar?
      `,
      respuesta: `
        La presentación de facturas, albaranes,  fotos, embalajes, garantías
        o cualquier documentación que acredite el bien robado, facilitará la
        tramitación y su valoración. En cada caso te especificaremos más
        detalladamente la documentación a aportar.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        ¿Qué ocurre si tengo que cerrar mi negocio debido a los daños o para
        llevar a cabo la reparación?
      `,
      respuesta: `
        Quizás por los daños sufridos o por las reparaciones que se tengan que
        realizar, sea necesario que cierres tu negocio. El perito será quien
        decida la indemnización que te corresponda según las garantías que
        tengas contratadas en tu póliza.
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
  ],
};

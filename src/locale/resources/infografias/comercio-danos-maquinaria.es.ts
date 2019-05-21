export default {
  titulo: `
    Lo que tienes que saber sobre datos eléctricos en maquinaria y equipos
    electrónicos
  `,
  descripcion: `
    <p>
      Sabemos que este tipo de partes de daños eléctricos en maquinaria y
      equipos electrónicos pueden ocasionar muchas molestias en tu negocio
      por lo que intentaremos solucionarlo lo antes posible.
    </p>
    <p>
      Te mostramos los pasos por los que puede pasar el expediente, aunque tan
      solo es orientativo ya que trataremos de adecuarnos a tus necesidades y
      circunstancias.
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
          Dispondrás de una persona – el gestor de tu expediente- que se
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
          Es habitual disponer de un servicio de asistencia técnica que es quien
          se encarga del mantenimiento técnico del aparato o la máquina. En ese
          caso es posible que te solicitemos presupuesto e informe de tu
          servicio técnico que determine la causa de la avería y que tengamos
          que enviar un perito según la complejidad de los daños y/o su importe.
        </p>
        <p>
          Si los daños no se pueden reparar y son indemnizables, enviaremos un
          perito para su valoración.
        </p>
        <p>
          En caso de que el daño haya sido provocado por la compañía eléctrica,
          te solicitaremos el número de incidencia que hayas abierto y el número
          de contrato de suministro para su posterior reclamación.
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

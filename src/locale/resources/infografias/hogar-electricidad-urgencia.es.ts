export default {
  titulo: 'Lo que tienes que saber de daños por electricidad',
  descripcion: `
    <p>
      Sabemos que este tipo de partes <strong>de daños por electricidad</strong
      pueden ocasionar muchas molestias en tu domicilio por lo que intentaremos
      solucionarlo lo antes posible.
    </p>
    <p>
      Te <strong>mostramos los momentos o situaciones</strong> por las que puede
      pasar tu expediente, aunque tan solo será orientativo, ya que siempre
      trataremos de adecuarnos a tus necesidades y circunstancias.
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
          Dispondrás de una persona – el gestor de tu expediente – que se
          encargará de dirigir el expediente: enviar al perito, al reparador y
          solucionar las dudas, incidencias e inconvenientes que puedan surgir.
        </p>
        <p>
          Puedes contactar con él  en cualquier momento para cualquier duda.
        </p>
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'urgencia.svg',
      contenido: `
        Lo primero que vamos a hacer es atender la emergencia. Para ello
        enviaremos un electricista que estará en tu domicilio antes de 3h, para
        restablecer el suministro eléctrico siempre que el estado de la
        instalación lo permita. En el caso de que el cableado esté mojado cabe
        la posibilidad que no se pueda realizar los trabajos.
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
        Tras la finalización del servicio de urgencia, si hubiese más daños con
        cobertura procederemos a gestionarlos.
      `,
    },
  ],
};

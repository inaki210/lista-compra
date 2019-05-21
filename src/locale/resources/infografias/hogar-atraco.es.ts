export default {
  titulo: 'Lo que tienes que saber de daños por atraco fuera de la vivienda',
  descripcion: `
    <p>
      Te <strong>mostramos los momentos o situaciones</strong> por las que puede
      pasar tu expediente, aunque tan solo es orientativo ya que trataremos de
      adecuarnos a tus necesidades y circunstancias.
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
        <strong>Si te han robado</strong>, las llaves de tu vivienda,
        consideramos una urgencia proteger tu hogar, por lo que te enviaremos
        un cerrajero para el cambio de cerradura.
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿Es necesaria presentación de denuncia?',
      respuesta: `
        Sí, es imprescindible para la tramitación de este tipo de partes. El
        envío de facturas de los objetos robados y/o fotos nos ayudará en la
        gestión.
      `,
    },
    {
      tipo: 'faq',
      pregunta: `
        Si me roban pero no me doy cuenta por no haber daños en la vivienda,
        ¿Está cubierto?
      `,
      respuesta: `
        Para que sea un siniestro garantizado, se tiene que producir violencia
        y/o intimidación sobre las personas, sustrayendo los objetos que portan.
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
        Una vez se haga la indemnización de los objetos robados y dinero en
        metálico según los límites de la póliza, quedará finalizada la gestión
        del incidente.
      `,
    },
  ],
};

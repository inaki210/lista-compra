export default {
  titulo: 'Lo que tienes que saber de daños accidentales en el hogar',
  descripcion: `
    <p>
      Te mostramos los
      <strong>pasos por los que puede pasar el expediente</strong>
      de este tipo de daños, aunque tan solo es orientativo ya que trataremos
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
          encargará de gestionar y supervisar todo el proceso: enviar un
          perito y/o un reparador así como solucionar las dudas, incidencias
          e inconvenientes que puedan surgir.
        </p>
        <p>
          Puedes contactar con ella en cualquier momento para cualquier duda.
        </p>
      `,
    },
    {
      tipo: 'faq',
      pregunta: '¿La compañía me va a enviar a alguien?',
      respuesta: `
        Para este tipo de siniestros es habitual que enviemos un perito para
        revisar como se ha producido el siniestro y valorar el daño.
      `,
    },
    {
      tipo: 'faq',
      pregunta: 'Esta cobertura, ¿tiene alguna Franquicia ?',
      respuesta: `Sí, se aplica una franquicia de 100 euros por siniestro.
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
        Una vez se procede al abono de la indemnización por los daños, quedará
        finalizada la gestión y cerrado el expediente.
      `,
    },
  ],
};

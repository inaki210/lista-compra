export default {
  titulo: 'Lo que tienes que saber sobre el deterioro de bienes refrigerados',
  descripcion: `
    <p>
      Sabemos que este tipo de partes de pueden ocasionar molestias en tu
      negocio por lo que intentaremos solucionarlo lo antes posible.
    </p>
    <p>
      Te mostramos los pasos por los que puede pasar el expediente, aunque tan
      solo es orientativo, ya que siempre trataremos de adecuarnos a tus
      necesidades y circunstancias
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
      tipo: 'seccion',
      titulo: '¿Qué hacer cuando ocurre el siniestro?',
    },
    {
      tipo: 'mensaje',
      imagen: 'fotos-documentacion.svg',
      contenido: `
        <p>
          Es importante hacer un inventario o listado lo más detallado posible
          de los bienes deteriorados, así como sacar fotografías, recopilar los
          albaranes y/o facturas de compra de dichos bienes que justifiquen su
          valor.
        </p>
        <p>
          Dicha documentación se la puedes enviar a quien gestiona tu
          expediente.
        </p>
        <p>
         En caso de que el daño haya sido provocado por la compañía eléctrica,
         te solicitaremos el nº  de incidencia que hayas abierto con ella y el
         nº de contrato de suministro para que podamos realizar la reclamación.
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
        Tras el abono de la indemnización por los daños, quedará finalizada la
        gestión del incidente.
      `,
    },
    {
      tipo: 'mensaje',
      imagen: 'post-cierre.svg',
      contenido: `
        En algunas ocasiones, además puede que sea necesario continuar
        realizando gestiones relacionadas como la reclamación a la compañía
        eléctrica.
      `,
    },
  ],
};

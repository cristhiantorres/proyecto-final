import { extendObservable } from 'mobx';


class TiendaController {

  constructor(){

    extendObservable(this,

    {

      platos: [
        {
          nombre: 'Nombre del Plato',

          descripcion: 'Descripcion del Platillo',

          precio: 100,

          cantidad: 0
        },
        {
          nombre: 'Nombre del Plato 2',

          descripcion: 'Descripcion del Platillo 2',

          precio: 100,

          cantidad: 0
        },
        {
          nombre: 'Nombre del Plato 3',

          descripcion: 'Descripcion del Platillo 3',

          precio: 100,

          cantidad: 0
        },

      ],

    }

    );

  }

}

var VarTiendaController = new TiendaController;

export default VarTiendaController;
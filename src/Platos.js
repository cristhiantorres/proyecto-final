import React, {Component} from 'react';
import VarTiendaController from './TiendaController';
import logo from './logo.svg';

class Platos extends Component {

  render(){

    let platos_div = [];

    const llenar_array = VarTiendaController.platos.forEach(function(value, index) {

      platos_div.push(<li className="list-group-item">{value.nombre}</li>);

    });

    return (

      <div className="panel panel-primary">

      <div className="panel-heading">
      
        <h5>Lista de Platos</h5>
      
      </div>

      <div className="list-group">

      { platos_div }

      </div>

      </div>

      );

  }


}

export default Platos;
import React, {Component} from 'react';
import Platos from './Platos';

class Lienzo extends Component {

  render(){

    return (

      <div className="container">

        <div className="jumbotron">
        
          <h3>Nombre de Tienda</h3>

        </div>

        <div className="row">
          
          <div className="col-md-6 col-xs-6">
      
            <Platos />
          
          </div>
          
          <div className="col-md-6 col-xs-6">
            
            <h4>Pedidos</h4>
          
          </div>
        
        </div>

      </div>

      );

    };


}

export default Lienzo;

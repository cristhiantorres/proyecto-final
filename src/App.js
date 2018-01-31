import React, { Component } from 'react';
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="container">

        <h2>Hola Mundo</h2>

      </div>

      );
  }
}

export default observer(App);

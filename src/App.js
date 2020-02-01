import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Formlink from './practice/formlink';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


class App extends Component {


  render() {
    return (
      <Card>
      <div className="App">
        <Formlink />
         </div>
      </Card>
    );

  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CardapioContainer from './containers/CardapioContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <CardapioContainer />
      </React.Fragment>
    );
  }
}

export default App;

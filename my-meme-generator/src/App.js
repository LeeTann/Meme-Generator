import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MemeGenerator from './Components/MemeGenerator/MemeGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;

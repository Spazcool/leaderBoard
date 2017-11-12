import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './library/data';
import Usercard from './Usercard';
import Buts from './Buts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Buts/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Usercard data={data}/>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default App;

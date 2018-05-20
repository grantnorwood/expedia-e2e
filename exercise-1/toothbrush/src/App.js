import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import PageNavbar from './components/PageNavbar/PageNavbar';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  /**
   * The original `render()` function from create-react-app.
   */
  renderOriginal() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  
  render() {
    return (
      <div>
        <PageNavbar />
        <div className="container theme-showcase" role="main">
          <HomePage />
        </div>
      </div>
    );
  }
}
          
export default App;

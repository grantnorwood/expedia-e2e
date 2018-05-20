import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Root from './components/Root/Root';

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
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
  }
}
          
export default App;

import React, { Component } from 'react';
import './App.css';
// Import data from given JSON file.
import entityData from './data/data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>DLP Coding Challenge</h2>
        </header>
        <body>
          {JSON.stringify(entityData)}
        </body>
      </div>
    );
  }
}

export default App;

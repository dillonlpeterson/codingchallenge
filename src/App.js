import React, { Component } from 'react';
import './App.css';
// Import data from given JSON file.
import entities from './data/data.json';
import BootstrapTable from 'react-bootstrap-table-next';

const personColumns = [{
    dataField: 'person_name',
    text: '',
    align: 'left',

  }, {
    dataField: 'person_title', 
    text: '',
    align: 'left',
  }, {
    dataField: 'organization_name', 
    text: '',
    align: 'center'
  }, {
    dataField: 'location', 
    text: "",
    align: 'right',
  }];

const orgColumns = [{
  dataField: 'organization_name', 
  text: '',
  align: 'left',
}, {
  dataField: 'location', 
  text: '', 
  aligh: 'right',
}
]

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>DLP Coding Challenge</h2>
        </header>
        <div>
          <BootstrapTable keyField='id' data={entities} columns={personColumns} search/>
        </div>
      </div>
    );
  }
}

export default App;

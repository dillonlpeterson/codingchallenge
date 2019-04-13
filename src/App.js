import React, { Component } from 'react';
import './App.css';
// Import data from given JSON file.
import entities from './data/data.json';
import MUIDataTable from "mui-datatables";

const personColumns = [{
    name: 'person_name',
    label: 'Name', 
  }, {
    name: 'person_title', 
    label: 'Title'
  }, {
    name: 'organization_name', 
    label: 'Organization'
  }, {
    name: 'location', 
    label: 'Location',
  }];

const orgColumns = [{
  name: 'organization_name', 
  text: '',
}, {
  name: 'location', 
  text: '', 
}
]

const options = {
  'pagination': false,
  'print': false, 
  'download':false, 
};

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>DLP Coding Challenge</h2>
        </header>
        <div>
          <MUIDataTable title={"People"} data={entities} columns={personColumns} options={options}></MUIDataTable>
          <MUIDataTable title={"Organizations"} data={entities} columns={orgColumns}></MUIDataTable>
        </div>
      </div>
    );
  }
}

export default App;

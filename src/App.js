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
  'download': false,
  'filter': false,
  'filterType': 'dropdown',
};



class App extends Component {
  // Handles change 
  handleChange = () => {
    // Adjust results shown in tables below.
  }
  renderNavigationBar = () => {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </div>
      </nav>

    )

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>DLP Coding Challenge</h2>
        </header>
        {this.renderNavigationBar()}
        <div>
          <MUIDataTable
            title={"People"}
            data={entities}
            columns={personColumns}
            options={options}
          />
          <MUIDataTable title={"Organizations"} data={entities} columns={orgColumns}></MUIDataTable>
        </div>
      </div>
    );
  }
}

export default App;

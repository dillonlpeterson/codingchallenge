import React, { Component } from 'react';
import './App.css';
// Import data from given JSON file.
import entities from './data/data.json';
import Table from './Table.js';

const columns = [{
  name: 'person_name',
  label: 'Name',
}, {
  name: 'person_title',
  label: 'Title',
}, {
  name: 'organization_name',
  label: 'Organization',
}, {
  label: 'Location',
  name: 'location',
}];

const orgColumns = [{
  name: 'organization_name',
  label: 'Name',
}, {
  name: 'person_title',
  label: 'Title',
  options: {
    display: 'exclude',
  }
}, {
  name: 'organization_name',
  label: 'Organization',
  options: {
    display: 'exclude',
  }
}, {
  label: 'Location',
  name: "location",
}];

const optionsPeople = {
  pagination: false,
  print: false,
  download: false,
  filter: false,
  search: false,
  viewColumns: false,
  selectableRows: false,
};

class App extends Component {
  state = {
    filteredData: {},
  }
  
  // Set initial state 
  componentWillMount() {
    this.setState({
      filteredData: entities
    });
  }

  // Handler method for navigation search bar 
  handleChange = (e) => {
    const result = entities.filter(d => d.person_name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState ({
      filteredData: result,
    });
  }

  // Renders navigation bar with in-line search bar to filter entity data 
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
          <h2>Dillon Peterson // Coding Challenge</h2>
        </header>
        {this.renderNavigationBar()}
        <div>
          <Table
            title={"People"}
            data={this.state.filteredData}
            columns={columns}
            options={optionsPeople}
          />
          <Table 
            title={"Organizations"} 
            data={this.state.filteredOrgs}
            columns={orgColumns}
            options={optionsPeople}
          />
        </div>
      </div>
    );
  }
}

export default App;

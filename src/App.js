import React, { Component } from 'react';
import './App.css';
// Import data from given JSON file.
import entities from './data/data.json';
import MUIDataTable from 'mui-datatables';

const personColumns = [{
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
  search: true,
  viewColumns: false,
  selectableRows: false,
};




class App extends Component {
  state = {
    filteredData: entities,
  }
  componentDidMount() {
    this.setState({
      filteredData: entities
    });
  }

  onTableChange() {
    console.log("On able change")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Dillon Peterson // Coding Challenge</h2>
        </header>
        <div>
          <MUIDataTable
            title="People"
            data={this.state.filteredData}
            columns={personColumns}
            options={optionsPeople}
          />
        </div>
      </div>
    );
  }
}

export default App;

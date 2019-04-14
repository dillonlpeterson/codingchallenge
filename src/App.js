import React, { Component } from 'react';
import './App.css';
// Import data from given JSON file.
import entities from './data/data.json';
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [{
  Header: 'Name', 
  accessor: 'person_name', 
}, {
  Header: 'Title', 
  accessor: 'person_title', 
}, {
  Header: 'Organization Name', 
  accessor: 'organization_name',
}, {
  Header: 'Location',
  accessor: 'location',
}]

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
          <ReactTable 
            data={entities}
            columns ={columns}
            defaultPageSize = {3}
            pageSizeOptions = {[3, 6]}
          />
      </div>
    );
  }
}

export default App;

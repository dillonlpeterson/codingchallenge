import MUIDataTable from 'mui-datatables';
import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        filteredData: {}
    }

    setFilteredData = e => {
        this.setState({
            filteredData: e.target.value
        })
    }

    componentDidMount() {
        this.setState({
            filteredData: this.props.filteredData
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filteredData: nextProps.filteredData
        });
    }

    render() {
        return (
            <MUIDataTable
            data={this.props.data}
            columns={this.props.columns}
            options={this.props.options}
            title={this.props.title}
          />
        )
    }
}

export default Table;
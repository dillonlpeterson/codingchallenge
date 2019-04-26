import MUIDataTable from 'mui-datatables';
import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props)
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
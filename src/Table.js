import MUIDataTable from 'mui-datatables';

class Table extends MUIDataTable {
    state = {
        filteredData: {}
    }

    setFilteredData = e => {
        this.setState({
            filteredData: e.target.value
        })
    }
}
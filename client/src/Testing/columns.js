//Can pick and choose what data to render in the UI
import { ColumnFilter } from '../Components/ColumnFilter'

//Should search for name city or product
export const COLUMNS = [
    { 
        //Mapping each column header to the variable it is grabbing from in json
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter
    },
    { 
        Header: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter
    },
    { 
        Header: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    { 
        Header: 'Date of Birth',
        accessor: 'date_of_birth',
        Filter: ColumnFilter
    },
    { 
        Header: 'Country',
        accessor: 'country',
        Filter: ColumnFilter
    },
    { 
        Header: 'Phone',
        accessor: 'phone',
        Filter: ColumnFilter
    },
]
//Can pick and choose what data to render in the UI
import { ColumnFilter } from './ColumnFilter'

//Should search for name city or product
//Sortable by name in alphabetical order
//Search for name, city, or product
export const COLUMNSFINAL = [
    { 
        //Mapping each column header to the variable it is grabbing from in json
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    { 
        Header: 'Products',
        accessor: 'products',
        Filter: ColumnFilter
    },
    { 
        Header: 'City',
        accessor: 'city',
        Filter: ColumnFilter
    },
    { 
        Header: 'State',
        accessor: 'state',
        Filter: ColumnFilter
    },
    { 
        Header: 'Phone Number',
        accessor: 'phoneNumber',
        Filter: ColumnFilter
    },
]
import React, { useMemo } from 'react'

//import table utilities here
import { useTable, useSortBy } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from '../Testing/columns'
import './table.css'

export const SortingTable = () => {

    //Empty dependency array
    //Ensure data is not recreated every render by using this hook
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    //Use table hook, needs useMemo
    //Shorthand syntax columns: columns

    //Creating a table instance
    const tableInstance = useTable({
        columns,
        data
    })

    //Destructure properties
    //Easy table creation methods from react-table
    const {
        getTableProps, //Needs to be destructured on table tag
        getTableBodyProps, //destructured on tbody
        headerGroups, //Column heading information, each belongs to own header
        rows, 
        prepareRow,
    } = useTable({
        columns,
        data,
    },
    //Adding sorting feature
    useSortBy)

    //Define a basic table structure using HTML

    //thead = table head group
    //tr = table row
    //th = table header cell 
    //td = table data
    return (
        <table { ...getTableProps()}>
            {/* The table header*/}
            <thead>
                { 
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        { 
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' desc' : ' asc') : ''}
                                    </span>
                                </th>
                            ))}
                     </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map( cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                                <td></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'

export const PaginationTable = () => {

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
        page, 
        nextPage, //Navigate across different pages
        previousPage,
        canNextPage, //Boolean properties, indicate wheter the next page is avaiable
        canPreviousPage,
        pageOptions, 
        state,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        usePagination
    )

    const { pageIndex } = state;

    //Define a basic table structure using HTML

    //thead = table head group
    //tr = table row
    //th = table header cell 
    //td = table data
    return (
        <>
        <table { ...getTableProps()}>
            {/* The table header*/}
            <thead>
                { 
                
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        { 
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                     </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
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
        <div>
            <span>
                Page{' '}
                <strong>{pageIndex+1} of {pageOptions.length}</strong>
                {' '}
            </span>
            <button onClick={() => previousPage()} disabled = {!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled = {!canNextPage}>Next</button>
        </div>
        </>
    )
}
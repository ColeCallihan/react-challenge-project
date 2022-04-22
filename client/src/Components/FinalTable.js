import React, { useMemo } from 'react'
//Questionable import. React-Table is utility full of hooks, not a component
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination} from 'react-table'
import { COLUMNSFINAL } from './columnsFinal'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import DATA from './data.json'

export const FinalTable = () => {

    //Empty dependency array
    //Ensure data is not recreated every render by using this hook
    const columns = useMemo(() => COLUMNSFINAL, [])
    const data = useMemo(() => DATA, [])

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
        page, //each page for pagination
        nextPage, //The next page to be loaded
        previousPage,
        canNextPage, //Boolean properties, indicate wheter the next page is avaiable
        canPreviousPage,
        pageOptions,  
        prepareRow,
        state, //Several properites, just need globalfilter and page index
        setGlobalFilter,
    } = useTable({
        columns,
        data,
    }, 
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
    )

    const { globalFilter } = state
    const { pageIndex } = state;
    //Define a basic table structure using HTML

    //thead = table head group
    //tr = table row
    //th = table header cell 
    //td = table data
    return (
        <>
        <div className = "column">
            <div className = "row">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            </div>
        
            <div className = "row">
        <table { ...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        { 
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' desc' : ' arrow up') : ''}
                                    </span>
                                    <div>
                                        {column.canFilter ? column.render('Filter') : null}
                                    </div>
                                </th>
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
            </div>
        </div>
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
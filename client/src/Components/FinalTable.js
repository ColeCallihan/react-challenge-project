import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table'
import { COLUMNSFINAL } from './columnsFinal'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import DATA from './data.json'

export const FinalTable = () => {

    //Empty dependency array
    //Ensure data is not recreated every render by using this hook
    const columnsfinal = useMemo(() => COLUMNSFINAL, [])
    const data = useMemo(() => DATA, [])

    //Use table hook, needs useMemo
    //Shorthand syntax columns: columns

    //Creating a table instance
    const tableInstance = useTable({
        columnsfinal,
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
        state, //Several properites, just need globalfilter
        setGlobalFilter,
    } = useTable({
        columns,
        data,
    }, 
    useFilters,
    useGlobalFilter,
    useSortBy
    )

    const { globalFilter } = state
    //Define a basic table structure using HTML

    //thead = table head group
    //tr = table row
    //th = table header cell 
    //td = table data
    return (
        <>
        <div class = "column">
            <div class = "row">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            </div>
        
            <div class = "row">
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
            </div>
        </div>
        </>
    )
}
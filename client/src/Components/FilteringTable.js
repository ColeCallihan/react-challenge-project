import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'

export const FilteringTable = () => {

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
        state, //Several properites, just need globalfilter
        setGlobalFilter,
    } = useTable({
        columns,
        data,
    }, 
    useFilters,
    useGlobalFilter
    )

    const { globalFilter } = state
    //Define a basic table structure using HTML

    //thead = table head group
    //tr = table row
    //th = table header cell 
    //td = table data
    return (

        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>

        <table { ...getTableProps()}>
            <thead>
                { 
                
                    headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        { 
                            headerGroup.headers.map( column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}
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
        </>
    )
}
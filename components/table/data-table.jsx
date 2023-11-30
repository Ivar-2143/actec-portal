"use client"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { MoreVerticalIcon } from "lucide-react"
import DataTablePagination from "./data-table-pagination"
import { fuzzyFilter } from "./data-table-functions"
import DataTableToolbar from "./data-table-toolbar"

export function DataTable({ columns, data, children,buttonSet}) {
const [globalFilter, setGlobalFilter] = useState("");
const [columnFilters, setColumnFilters] = useState([]);
const [rowSelection, setRowSelection] = useState({})
//! GET ROW SELECTION KEYS TO GET THE ID {1:true, 2:true} or alternative table.getFilteredSelectedRowModel().rows

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    state:{
        rowSelection,
        globalFilter,
        columnFilters
    },
    filterFns:{
      fuzzy: fuzzyFilter,
    },
    initialState:{
      columnVisibility: {"isArchived": false}
    }
  })
  
  console.log()

  const convertID = (userID) => {
    let id = '';
    for(let i = 0; i < 7-userID.toString().length; i++) {
        id = id+'0';
    }
    id = id+userID;
    return id;
}

  return (
    <>
      
      <div className='sm:bg-white sm:rounded-md'>
        <DataTableToolbar className='pb-5' table={table} buttonSet={buttonSet} />
        <div className="hidden sm:block rounded-md border bg-white">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map(row =>{
                  
                  return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableCell key={cell.id}>
                        {
                          (cell.column.id === 'Applicant_ID')?
                          convertID(flexRender(row.getAllCells()[1].column.columnDef.cell, row.getAllCells()[1].getContext()).props.getValue())
                          :
                          flexRender(cell.column.columnDef.cell, cell.getContext())
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                )})
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* MOBILE TABLE */}
      <div className="sm:hidden border-gray border-l border-t rounded-md relative overflow-clip">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map(row =>{
            // * Renders each row
            return (
            <div 
                className="border-gray border-b border-r relative "
                key={row.id} data-state={row.getIsSelected() && "selected"}>
                  <div className="flex justify-between bg-[#d9d9d9] px-2 items-center">
                        {/* Renders the ID, Select Button, and Actions */}
                        <div className="flex items-center gap-2 px-2 py-1">
                          {flexRender(row.getAllCells()[0].column.columnDef.cell, row.getAllCells()[0].getContext())}
                          {convertID(flexRender(row.getAllCells()[1].column.columnDef.cell, row.getAllCells()[1].getContext()).props.getValue())}
                        </div>
                        {flexRender(row.getAllCells()[7].column.columnDef.cell, row.getAllCells()[7].getContext())}
                    </div>
                <div className="flex flex-col gap-2 px-4 py-2 bg-white">
                  {row.getVisibleCells().map(cell =>{
                    
                    // * Skips the cells of the ID, select, and actions
                    if(cell.column.id === 'Applicant_ID' || cell.column.id === "select" || cell.column.id === "actions"){
                      return null;
                    }
                    
                    // * Renders all the other data in the row with header on the left
                    return(
                    <div key={cell.id} className="flex justify-between">
                      <span className="text-gray">
                        {cell.column.columnDef.header}
                      </span>
                      <span className="line-clamp-1 w-1/2 text-end">
                        {flexRender(cell.column.columnDef.cell,cell.getContext())}
                      </span>
                    </div>
                  )})

                  }
                </div>
            </div>
          )})
        ):(
          <span className="flex justify-center py-2 border-b border-r border-gray relative"> No Results. </span>
        )}
      </div>
      <div className="h-16 sm:hidden"></div>
      <DataTablePagination table={table} />
    </>
  )
}

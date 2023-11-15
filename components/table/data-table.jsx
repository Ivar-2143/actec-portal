"use client"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
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

export function DataTable({ columns, data }) {
const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state:{
        rowSelection
    },
  })

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
                        <MoreVerticalIcon />
                    </div>
                <div className="flex flex-col gap-2 px-4 py-2 bg-white">
                  {row.getVisibleCells().map(cell =>{
                    
                    // * Skips the cells of the ID, select, and actions
                    if(cell.column.id === 'Applicant_ID' || cell.column.id === "select"){
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
          <span> No Results. </span>
        )}
      </div>
      <div className="h-16 sm:hidden"></div>
      <div className="fixed bottom-0 left-0 w-full px-6 flex justify-between items-center bg-white shadow-[0px_-4px_6px_-1px_rgba(0,0,0,0.1)]
      sm:relative sm:shadow-none sm:bg-transparent sm:px-0
      ">
        <div className="flex text-sm text-muted-foreground sm:ml-4 py-2">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          </div>
      </div>
    </>
  )
}

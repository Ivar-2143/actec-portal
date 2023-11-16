"use client"

import { Button } from "../ui/button"

export default function DataTablePagination({table}) {
  return (
    <div className="fixed bottom-0 left-0 w-full px-6 flex justify-between items-center bg-white shadow-[0px_-4px_6px_-1px_rgba(0,0,0,0.1)]
      sm:relative sm:shadow-none sm:bg-transparent sm:px-0
      ">
        <div className="flex text-sm text-muted-foreground sm:ml-4 py-2">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
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
  )
}

"use client"

import DataTableRowActions from "@/components/table/data-table-row-actions"
import { Checkbox } from "@/components/ui/checkbox"

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={value => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
      accessorKey: "Applicant_ID",
      header: "Applicant ID",
    },
    {
      accessorKey: "Student_Name",
      header: "Student Name"
    },
    {
      accessorKey: "Strand_Course",
      header: "Course"
    },
    {
      accessorKey: "Student_Type",
      header: "Student Type"
    },
    {
      accessorKey: "Progress",
      header: "Progress"
    },{
      id: "actions",
      cell: ({row}) => <DataTableRowActions row={row} />
    }
  ]
  
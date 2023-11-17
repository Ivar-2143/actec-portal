"use client"



import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { MoreVerticalIcon } from "lucide-react"

export default function DataTableRowActions({row}){
    const {toast} = useToast();
    const isArchived = row.original.isArchived ?? false;

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
                    <MoreVerticalIcon  />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className="w-[160px]">
                <DropdownMenuItem>View</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                {!isArchived && (
                    <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={()=> {toast({description: "Item has been moved to Archived list."})}}>Archive</DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
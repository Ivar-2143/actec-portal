"use client"

import { FilterIcon, Table } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { toast } from "../ui/use-toast";
import { cn } from "@/lib/utils";

export function DataTableTabs({title, options,className}){
    return (
        <Popover>
            <PopoverTrigger asChild className={cn(className)}>
                <Button variant="ghost" size="icon" className="h-8 border-dashed">
                    <FilterIcon className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {options.map(option => {
                                return(
                                    <CommandItem
                                        key={option.value}
                                        onSelect={()=>{
                                            toast({
                                                title: 'Switching Table...',
                                                description: `${option.label} is selected.`
                                            })
                                        }}
                                    >
                                    <span>{option.label}</span>
                                    {
                                      //! INSERT DATA COUNT HERE
                                    }
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
"use client"

import { FilterIcon, Table } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { toast } from "../ui/use-toast";
import { cn } from "@/lib/utils";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export function DataTableTabs({title, options,className}){
    const searchParams = useSearchParams();
    const data = searchParams.get('data') ?? 'all';
    const router = useRouter();

    const handleClick = (value) => {
        router.push(`?${new URLSearchParams({data:value})}`)
    }
    


    return (
        <>
            <Popover>
                <PopoverTrigger asChild className={cn('sm:hidden',className)}>
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
            <div className='hidden sm:flex w-full border-b border-plat border-collapse'>
                {options.map(option => (
                    <div 
                    key={option.value}
                    className={cn('py-2 px-4 border-primary', option.value == data && 'border-b-2'  )}
                    onClick={()=>{
                        toast({
                            title: 'Switching Table...',
                            description: `${option.label} is selected`
                        })
                        handleClick(option.value);
                    }}
                    >
                        <span>{option.label}</span>
                        {
                            //! INSERT DATA COUNT HERE
                        }
                    </div>
                ))}
            </div>
        </>
    )
}
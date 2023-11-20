'use client'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'
import { ArchiveIcon, CheckIcon, CircleMinusIcon, FilledRemoveIcon } from '@/public/assets/icons'
import { MoreHorizontal } from 'lucide-react'

export default function ManageRequestButtons() {
    const options =[{
        value: 'deny',
        label: 'Deny Documents',
        icon: FilledRemoveIcon,
        onClick: ()=>{
            toast({
                title: 'Status Changed',
                description: 'Denied selected documents'
            })
        }
    },{
        value: 'hold',
        label: 'Hold Document',
        icon: CircleMinusIcon,
        onClick: ()=>{
            toast({
                title: 'Status Changed',
                descripton: 'Holding Documents...'
            })
        }
    }]

    const onArchive = () =>{
        toast({
            description: 'Archiving selected data...'
        })
    }

    return (
        <>
            <Button
                variant='default'
                size='sm'
                className='
                rounded-sm w-full
                sm:rounded-full'
                onClick={()=>
                    toast({
                    title: 'Status Changed',
                    description:'Releasing Documents'})}
            >
                <CheckIcon className='text-white w-4 h-4 mr-2' />
                Release Document
            </Button>
            <Button
                variant='secondary'
                className='hidden sm:inline-flex rounded-full'
                size='sm'
                onClick={()=>
                    toast({
                        title: 'Status Changed',
                        description: 'Denying Documents'
                    })
                }
            >
                Deny
            </Button>
            <Button
                variant='destructive'
                size='sm'
                className='hidden sm:inline-flex rounded-full '
                onClick={()=>
                    toast({
                        description: 'Moving Data to Archived list.... '
                    })
                }
            >
                Archive
            </Button>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 border-dashed">
                        <MoreHorizontal className="h-4 w-4" />
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
                                            onSelect={option.onClick}
                                        >
                                        {option.icon && (
                                            <option.icon className='w-4 h-4 mr-2'  />
                                        )}
                                        <span>{option.label}</span>
                                        {
                                        //! INSERT DATA COUNT HERE
                                        }
                                        </CommandItem>
                                    )
                                })}
                                <Separator className='bg-muted h-px my-1' />
                                <CommandItem
                                    onSelect={onArchive}
                                    className='text-gray'
                                >
                                    <ArchiveIcon className='w-4 h-4 mr-2' />
                                    <span> Archive </span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    )
}

import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '../ui/button'
import { ArchiveIcon } from '@/public/assets/icons'

export default function BulkActionsPopover({options,onArchive}) {

  return (
    <Popover>
                <PopoverTrigger asChild className='sm:hidden'>
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
  )
}

'use client'
import { Button } from '@/components/ui/button'

import { toast } from '@/components/ui/use-toast'
import { ArchiveIcon, CheckIcon, CircleMinusIcon, FilledRemoveIcon } from '@/public/assets/icons'
import BulkActionsPopover from '../bulk-actions-popover'

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
            <BulkActionsPopover options={options} onArchive={onArchive}/>
            <div
            className='w-9/12
            max-[370px]:w-full sm:w-auto sm:inline-flex gap-x-2
            sm:ml-4'>
                <Button
                    variant='default'
                    size='sm'
                    className='
                    rounded-sm w-full
                    sm:rounded-full sm:w-auto'
                    onClick={()=>
                        toast({
                        title: 'Status Changed',
                        description:'Releasing Documents'})}
                >
                    <CheckIcon className='text-white w-4 h-4 mr-2' />
                    Release Document
                </Button>
                <Button
                    variant='outline'
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
            </div>

            
        </>
    )
}

"use client"
import { PenUnderlineIcon } from '@/public/assets/icons'
import BulkActionsPopover from '../bulk-actions-popover'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'

export default function ManageGradeButtons() {
    const options =[{
        value: 'bulk-edit',
        label: 'Bulk edit',
        icon: PenUnderlineIcon,
        onClick: ()=>{
            toast({
                title: 'Bulk Edit',
                description: 'Editing items...'
            })
        }
    }]

    const onArchive = () => {
        toast({
            description: 'Archiving selected data....'
        })
    }

  return (
    <>
        <BulkActionsPopover options={options} onArchive={onArchive} />
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
                    description:'Adding Grade'})}
            >
                <PlusIcon className='text-white w-4 h-4 mr-2' />
                Add Grades
            </Button>
            <Button
                variant='strong'
                className='hidden sm:inline-flex rounded-full'
                size='sm'
                onClick={()=>
                    toast({
                        description: 'Bulk editing...'
                    })
                }
            >
                <PenUnderlineIcon className='w-4 h-4 mr-2'/>
                Bulk Edit
            </Button>
            <Button
                variant='strong'
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

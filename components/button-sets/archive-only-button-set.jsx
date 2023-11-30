"use client"
import { ArchiveIcon } from '@/public/assets/icons'
import { Button } from '../ui/button'

export default function ArchiveOnlyButtonSet() {
  return (
    <>
        <Button
            variant='secondary'
            size='sm'
            className='
            rounded-sm bg-gray text-white
            sm:rounded-full w-10/12
            max-[370px]:w-full sm:w-auto'
            onClick={()=>{
                
            }}
        >
            <ArchiveIcon className='w-4 h-4 mr-2' />
            Archive
        </Button>
    </>
  )
}

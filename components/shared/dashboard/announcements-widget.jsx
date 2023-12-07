import { cn } from '@/lib/utils'
import React from 'react'

export default function AnnouncementWidget({className}) {
  return (
    <div className={cn('w-full relative h-full',className)}>
        <h2 className='text-lg font-medium'> Announcements </h2>
        <div className='flex flex-col h-[calc(100%-28px)] gap-2 w-full mt-1'>
          <div className='bg-company w-full rounded-md lg:h-[136px]' />
          <div className='bg-white w-full rounded-md lg:h-[136px]' />
          <div className='bg-white w-full rounded-md lg:h-[136px]' />
        </div>

    </div>
  )
}

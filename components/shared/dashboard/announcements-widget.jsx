import React from 'react'

export default function AnnouncementWidget() {
  return (
    <div className='w-full relative h-full'>
        <h2 className='text-lg font-medium'> Announcements </h2>
        <div className='flex flex-col h-[calc(100%-28px)] gap-2 w-full'>
          <div className='bg-company w-full rounded-md h-1/2' />
          <div className='bg-white w-full rounded-md h-1/2' />
        </div>

    </div>
  )
}

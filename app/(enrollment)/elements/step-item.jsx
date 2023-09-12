import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function StepItem({title}) {
  return (
    <div className='flex flex-row gap-4 items-center 
                my-auto mx-6
                sm:flex-col sm:w-[136px] sm:min-w-[136px] sm:mx-1 sm:gap-2 sm:items-start
                sm:my-2
                '>
        <div className='flex sm:w-full gap-2 justify-start items-center'>
            <div className=" bg-company w-[56px] h-[56px] rounded-full
                sm:w-[32px] sm:h-[32px]
            " />
            <div className='invisible w-0 sm:visible bg-company sm:w-[calc(100%-40px)] sm:h-[6px]' />
        </div>
        <div className="step-title 
        flex flex-col text-xl font-medium sm:text-base">
            <span className='text-xs sm:text-[10px] text-gray'>Step {0}/9</span>
            {title}
        </div>
        <Badge className='invisible sm:visible text-[10px]' variant='default'>Completed</Badge>
    </div>
  )
}

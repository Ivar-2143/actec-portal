import { Progress } from '@/components/ui/progress'
import React from 'react'
import StepItem from './step-item'

export default function NavHead() {
  return (

    <>
      {/* Tablets */}
      <div className='hidden sm:max-lg:flex gap-2 w-full overflow-hidden min-h-144px'>
        <StepItem title='Student Type' />
        <StepItem title='Program' />
        <StepItem title='About You' />
        <StepItem title='Address' />
        <StepItem title='Contact Info' />
        {/* <StepItem title='Education' />
        <StepItem title='Documents' />
        <StepItem title='Summary' />
        <StepItem title='Create Account' /> */}
      </div>

      {/* mobile */}
      <div className='flex flex-col justify-between w-full bg-white h-[88px] sm:hidden'>
          <div className='h-3/4 my-auto w-full'>
            <StepItem title='Student Type' />
            </div>
          <Progress className='rounded-none h-2' value={10}/>
      </div>
      
    </>
  )
}

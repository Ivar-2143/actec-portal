"use client"

import { Progress } from '@/components/ui/progress'
import React from 'react'
import StepItem from './step-item'
import { useSearchParams } from 'next/navigation';
import { PageStepTitles } from '@/lib/form-data';

export default function NavHead() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page');

  

  return (

    <>
      {/* Tablets */}
      <div className='hidden sm:max-lg:flex gap-2 w-full overflow-hidden'>
        <StepItem title='Student Type' step={1}/>
        <StepItem title='Program' step={2}/>
        <StepItem title='About You' step={3}/>
        <StepItem title='Address' step={4}/>
        <StepItem title='Contact Info' step={5}/>
        {/* <StepItem title='Education' />
        <StepItem title='Documents' />
        <StepItem title='Summary' />
        <StepItem title='Create Account' /> */}
      </div>

      {/* mobile */}
      <div className='flex flex-col justify-between w-full bg-white h-[88px] sm:hidden'>
          <div className='h-3/4 my-auto w-full'>
            <StepItem title={PageStepTitles[(currentPage-1)]} step={currentPage} />
            </div>
          <Progress className='rounded-none h-2' value={((currentPage/9)*100)}/>
      </div>
      
    </>
  )
}

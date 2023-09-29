
import { Progress } from '@/components/ui/progress'
import StepItem from './ui/step-item';
import { PageStepTitles } from '@/lib/form-data';

export default function FormStepper({page}) {


  return (
    <nav className='relative mb-4   bg-white
    sm:h-[144px] sm:my-4 sm:mx-6 sm:px-4 sm:max-lg:rounded-md sm:overflow-hidden
    lg:left-0 lg:top-0 lg:mx-0 lg:my-0 lg:w-[480px] lg:max-w-[640px] sm:min-h-[144px] '>
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
            <StepItem title={PageStepTitles[(page-1)]} step={page} />
            </div>
          <Progress className='rounded-none h-2' value={((page/9)*100)}/>
      </div>
      
    </nav>
  )
}

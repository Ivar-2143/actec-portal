

import { Progress } from '@/components/ui/progress'
import StepItem, { Step } from './ui/step-item';
import { PageStepTitles } from '@/lib/form-data';
import { RightArrowIcon } from '@/public/assets/icons';

export default function FormStepper({page}) {


  return (
    <nav className='relative mb-4   bg-white
    sm:h-[144px] sm:my-4 sm:mx-6 sm:px-4 sm:max-lg:rounded-md sm:overflow-hidden
    lg:left-0 lg:top-0 lg:mx-0 lg:my-0 lg:w-[480px] lg:min-w-[300px] lg:h-screen sm:min-h-[144px] '>
      {/* Desktops */}
      <div className='hidden lg:flex flex-col relative h-full w-full px-6 '>
        <h2 className="text-primary text-4xl font-extrabold my-4 actec-logo-media-handler">
          ACTEC
        </h2>
        <div className='flex flex-col mt-[72px] gap-[clamp(20px,40px,64px)] side-stepper'>
          <Step title='Student Type' step={1} page={page} />
          <Step title='Program' step={2} page={page} />
          <Step title='Personal Details' step={3} page={page}>
            <div className={`flex justify-between ${page == 3? '' : ''}`}>
              <span className={`${page == 3? '' : 'text-gray'} font-medium`}>About You</span>
              {page == 3 && (<RightArrowIcon className='text-gray text-lg'/>)}
            </div>
            <div className={`flex justify-between ${page == 4? '' : ''}`}>
              <span className={`${page == 4? '' : 'text-gray'} font-medium`}>Address</span>
              {page == 4 && (<RightArrowIcon className='text-gray text-lg'/>)}
            </div>
            <div className={`flex justify-between ${page == 5? '' : ''}`}>
              <span className={`${page == 5? '' : 'text-gray'} font-medium`}>Contact Information</span>
              {page == 5 && (<RightArrowIcon className='text-gray text-lg'/>)}
            </div>
            <div className={`flex justify-between ${page == 6? '' : ''}`}>
              <span className={`${page == 6? '' : 'text-gray'} font-medium`}>Education</span>
              {page == 6 && (<RightArrowIcon className='text-gray text-lg'/>)}
            </div>
          </Step>
          <Step title='Documents' step={4} page={(page-3)} />
          <Step title='Summary' step={5} page={(page-3)} />
          <Step title='Finish' step={6} page={(page-3)} />
        </div>
        
      </div>
      <svg className='invisible lg:visible absolute bottom-0 left-0 max-h-[175px] min-h-[120px]'  xmlns="http://www.w3.org/2000/svg">
        <path d="M8.14823e-06 73.7891C24.7309 41.2219 64.0803 34.4014 64.0803 34.4014C97.0581 27.2248 132.433 69.3024 149.521 96.7242C166.609 124.146 182.095 70.2995 214.669 59.3308C247.243 48.3621 256.855 112.679 326.275 122.152C395.696 131.625 479 0 479 0V160.044H8.14823e-06V73.7891Z" fill="#D8E8FC"/>
        <path d="M0 88.7455C24.7309 56.1783 64.0803 49.3578 64.0803 49.3578C97.0581 42.1811 132.433 84.2588 149.521 111.681C166.609 139.102 182.095 85.2559 214.669 74.2872C247.243 63.3185 256.855 127.635 326.275 137.108C395.696 146.581 479 14.9564 479 14.9564V175H0V88.7455Z" fill="#95C1F8"/>
        </svg>
      {/* Tablets */}
      <div className='hidden sm:max-lg:flex gap-2 w-full overflow-hidden'>
        {PageStepTitles.map((title, index) => (
          <StepItem key={title} title={title} step={(index+1)} page={page}/>
        ))}
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

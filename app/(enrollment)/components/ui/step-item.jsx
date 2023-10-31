import { Badge } from '@/components/ui/badge'
import { CheckIcon, RightArrowIcon } from '@/public/assets/icons'

export default function StepItem({title, step, page=null}) {
  const active = (page == step);
  const completed = (page > step);

  return (
    <div className={`flex flex-row gap-4 items-center 
                my-auto mx-6
                sm:flex-col sm:w-[136px] sm:min-w-[136px] sm:mx-1 sm:gap-2 sm:items-start
                sm:my-2
                ${(page - step) > 2? 'hidden' : ''}`}>
        <div className='flex sm:w-full gap-2 justify-start items-center'>
            <div className={`bg-company ${active? 'sm:bg-company': completed? 'sm:bg-betterGreen' : 'sm:bg-gray'} w-[56px] h-[56px] rounded-full
                sm:w-[32px] sm:h-[32px]
            `}/>
            {/* <div className='invisible w-0 sm:visible bg-company sm:w-[calc(100%-40px)] sm:h-[6px]' /> */}
            
            {/* 
              THIS IS THE LINE
             */}
            <div className={`invisible w-0 sm:visible sm:w-[calc(100%-40px)] sm:h-[6px] ${active? 'bg-company': completed? 'bg-betterGreen' : 'bg-gray'}`} />
        </div>
        <div className="step-title 
        flex flex-col text-xl font-medium sm:text-base">
            <span className='text-xs sm:text-[10px] text-gray'>Step {step}/9</span>
            {title}
        </div>
        <Badge className='invisible sm:visible text-[10px]' variant={`${active? 'default': completed? 'green' : 'secondary'}`}>
          {active? 'In Progress': completed? 'Completed' : 'To Complete'}
        </Badge>
    </div>
  )
}

export function Step({title, step, page,children}) {
  if(children != null && page < 7 && page > 2){
    page = 3
  }
  let active = (step == page);
  const completed = (page > step);
  

  return(
    <div className='flex flex-col w-full'>
        <div className='step-icon flex w-full justify-between items-center'>
          <div className='flex justify-center items-center gap-2'>
            <h4 className={`px-2 py-0 rounded-full border-[3px] h-[32px] align-middle font-bold
              ${
              active? ' border-company text-company': 
              completed? ' hidden':  
              'border-gray text-gray'}
            `}>{step}</h4>
            {completed && (
              <CheckIcon className='text-3xl' />
            )}
            <span className={
              `uppercase font-bold 
              ${active? 'text-company':
              completed? 'text-plat':'text-gray'}`
            }>{title}</span>
          </div>
          {/* *Cursor */}
          {(!children && active) && (
            <RightArrowIcon className='text-gray text-lg' />
          )}
        </div>
        {(children && active)&& (
          <div className={`${children? 'ml-10 mt-6 flex flex-col gap-4' : ''}`}>
            {children}
          </div>
        )}
    </div>
  )
}

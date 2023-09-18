import React from 'react'
import PageHeader from '../elements/page-header'
import FormFooterButtons from '../elements/form-footer'
import SelectFormElement from '../elements/drop-down-select'
import { educationLevels } from '@/lib/form-data'
import FormElement from '../elements/form-item'

export default function Page6({style}) {
  const title = "🎓 Level Completed"
  const body = "Every level has a different difficulty, right? This is to assess what boss level you’ve defeated. An important question is, Are you ready for the next battle?"
  
  return (
    <section className={`${style} relative h-[calc(100vh-264px)] sm:h-[calc(100vh-384px)] lg:h-[calc(100vh-236px)]`}>
      <div className='onboard-content h-full'>
        <PageHeader
          title={title}
          body={body}
        />
        
        <div className='my-10'>
          <SelectFormElement data={educationLevels} accessorKey='highest_educational_attainment' label='Highest Educational Attainment' placeholder='your highest attainment'/>
          <FormElement accesoryKey='last_school_attended' fieldName='last school attended' hint='' />
          <FormElement accesoryKey='year_completed' fieldName='year completed' hint='' style='sm:w-1/2' />
        </div>
      </div>
      <FormFooterButtons page={7} style='absolute bottom-0'/>
      
    </section>
  )
}

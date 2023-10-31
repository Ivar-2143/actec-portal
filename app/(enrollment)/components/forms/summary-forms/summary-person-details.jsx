import React from 'react'
import EditingDialog from './section-dialog-and-buttons'
import { Button } from '@/components/ui/button'
import { SectionAboutYou, SectionAddress, SectionContactInfo, SectionEducation} from './section-forms'

export default function SummaryPersonalDetails({className,data}) {

  return (
    <>
      <SectionAboutYou data={data} className={className}/>
      <SectionAddress data={data} className={className}/>
      <SectionContactInfo data={data} className={className}/>
      <SectionEducation data={data} className={className}/>
    </>
  )
}
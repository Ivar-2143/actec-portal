import Image from "next/image";
import { SectionForm } from "./section-forms";


export default function SummaryDocs({data, className}) {


  const formName = 'form_documents'
  return (
    <SectionForm sectionTitle='Birth Certificate' formName={formName} className={className}>
      {data.fieldValues['birth-certificate'] && 
        (<Image
          src={data.fieldValues['birth-certificate'][0].preview}
          alt='image'
          width={50}
          height={50}
          />)
      }
    </SectionForm>
  )
}

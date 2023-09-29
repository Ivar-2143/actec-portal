import { formHeaders } from "@/lib/form-data"

export default function PageHeader({page}) {
  
  const {title,subTitle,body} = formHeaders[page-1]

  return (
    <div className='w-full sm:max-lg:px-4'>
        <h2 className='text-2xl font-medium'>{title}</h2>
        <h4 className='text-lg'>{subTitle}</h4>
        <p className='text-sm my-4 whitespace-pre-line '>{body}</p>
    </div>
  )
}

import React from 'react'
import PageHeader from '../elements/page-header'
import StudentTypeCard from '../elements/student-card'
import { Button } from '@/components/ui/button'
import { useStudentTypeContext } from '@/lib/form-contexts'
import { RightArrowIcon } from '@/public/assets/icons'
import { useRouter } from 'next/navigation'
import { studentTypes } from '@/lib/form-data'

export default function Page1({style,form}) {
    const title = "Welcome to ACTEC!"
    const subTitle = "Tell us about yourself."
    const body = "We warmly welcome Junior high school completers, senior high school graduates, college transferees, and foreign applicants to our campuses.\n\n" +

    "Kindly fill-out the online application form for a fast and efficient admission process."

    
        
    const {studentType} = useStudentTypeContext();
    const router = useRouter();

  return (
    <section className={style}>
        <div className='onboard-content'>
            <PageHeader
                title={ title }
                subTitle={subTitle }
                body={body}
            />
        
            <div className='my-6'>
                <h4 className='text-lg font-bold text-company my-2'>What kind of student are you?</h4>
                <div className='flex flex-col gap-2 w-full relative
                    sm:flex-row md:gap-6
                '>
                    {studentTypes.map(student =>{
                        return (
                            <StudentTypeCard 
                                form={form}
                                key={student.value}
                                style={`flex flex-row justify-between items-center gap-2
                                px-4 py-2 bg-white w-full rounded-md relative
                                h-[120px]
                                sm:h-[auto] sm:pb-[16px]
                                sm:flex-col sm:gap-4
                                `}
                                value={student.value}
                                img={student.img}
                                title={student.title}
                                desc={student.desc}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='onboard-content onboard-footer justify-end '>
            <Button
                className='md:h-10 md:px-4 md:py-2 
                lg:text-base lg:h-11 lg:rounded-md lg:px-8'
                variant="default"
                size="sm"
                onClick={() => router.push('?page=2') }
                disabled={studentType == null || studentType == ''}
            >Next <RightArrowIcon className='ml-2 h-4 w-4 lg:ml-4 lg:h-5 lg:w-5'/></Button>
        </div>
    </section>
  )
}

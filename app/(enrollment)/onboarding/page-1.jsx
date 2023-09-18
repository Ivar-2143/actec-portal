import React from 'react'
import PageHeader from '../elements/page-header'
import StudentTypeCard from '../elements/student-card'
import { useStudentTypeContext } from '@/lib/form-contexts'
import { studentTypes } from '@/lib/form-data'
import FormFooterButtons from '../elements/form-footer'

export default function Page1({style}) {
    const title = "👋 Welcome to ACTEC!"
    const subTitle = "Tell us about yourself."
    const body = "We warmly welcome Junior high school completers, senior high school graduates, college transferees, and foreign applicants to our campuses.\n\n" +

    "Kindly fill-out the online application form for a fast and efficient admission process."

    const {studentType} = useStudentTypeContext();
    const disable = !studentType;

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
        <FormFooterButtons withPrev={false} disable={disable} page={2}/>
    </section>
  )
}

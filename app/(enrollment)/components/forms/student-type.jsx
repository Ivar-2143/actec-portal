"use client"

import StudentTypeCard from '../ui/student-card'
import { studentTypes } from '@/lib/form-data'
import FormFooterButtons from '../form-footer'
import { useFormData, usePagerData } from '@/lib/form-contexts'
import { useRouter, useSearchParams } from 'next/navigation'


export default function StudentType({style}) {
    // const [studentType, setStudentType] = useState(null);
    const router = useRouter();
    const {setFormValues} = useFormData();
    const searchParams = useSearchParams();
    const currentPage = searchParams.get('page');
    const studentType = searchParams.get('type')

    const handleClick = (value) =>{
        router.replace(`?${new URLSearchParams({page:currentPage,type:value})}`)
        
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        
        setFormValues({
            isCompleted:true,
            value:1
        },
        {student_type: studentType})

        router.push(`?${new URLSearchParams({page:parseInt(currentPage)+1})}`);
    }


    return (
        <section className={`my-6 ${style}`}>
            <h4 className='text-lg font-bold text-company my-2'>What kind of student are you?</h4>
            <form onSubmit={handlesubmit}>
                <div className='flex flex-col gap-2 w-full relative
                    sm:flex-row md:gap-6 
                    lg:flex-col xl:flex-row
                    lg:gap-2 xl:gap-6
                '>  
                    {studentTypes.map(student =>{
                        return (
                            <StudentTypeCard
                                key={student.value}
                                style={`flex flex-row justify-between items-center gap-2
                                px-4 py-2 bg-white w-full rounded-md relative
                                h-[120px] min-[1100px]:min-w-[182px]
                                sm:h-[auto] sm:pb-[16px]
                                sm:flex-col sm:gap-4
                                lg:flex-row
                                xl:flex-col
                                `}
                                student={student}
                                click={handleClick}
                                selected={studentType}
                            />
                        )
                    })}
                </div>
                <FormFooterButtons withPrev={false} disable={!studentType}>
                    Next
                </FormFooterButtons>
            </form>
        </section>
    )
}

"use client"
import FormFooterButtons from '../form-footer'
import SelectFormElement from '../ui/drop-down-select'
import { educationLevels } from '@/lib/form-data'
import FormElement from '../ui/form-item'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { EducationSchema } from '@/lib/validation-schema'
import { useFormData } from '@/lib/form-contexts'


export default function EducationAttainment({style}) {
  const form = useForm({
    resolver: zodResolver(EducationSchema)
  });
  const router = useRouter();
  const {setFormValues} = useFormData();

  const onSubmit = (formData) => {
    console.log(formData);
  
    setFormValues({
      isCompleted: true,
      value: 6
    },
    formData)
    router.push(`?${new URLSearchParams({page:7})}`);

  }

  return (
    // <section className={`${style} relative h-[calc(100vh-264px)] sm:h-[calc(100vh-384px)] lg:h-[calc(100vh-236px)]`}>
    //   <div className='onboard-content h-full'></div>
    <section className={`${style} relative my-6`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SelectFormElement data={educationLevels} accessorKey='highest_educational_attainment' label='Highest Educational Attainment' placeholder='your highest attainment'/>
          <FormElement accesoryKey='last_school_attended' fieldName='last school attended' hint='' />
          <FormElement accesoryKey='year_completed' fieldName='year completed' hint='' style='sm:w-1/2' />
          <FormFooterButtons>
            Next
          </FormFooterButtons>
        </form>
      </Form>
    </section>
  )
}

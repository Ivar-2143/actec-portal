"use client"

import { PenIcon } from '@/public/assets/icons'
import FormFooterButtons from '../form-footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useForm, useWatch } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useRouter } from 'next/navigation'



export default function Summary({style}) {
  const form = useForm();
  const router = useRouter();
  //const data = useWatch({});
  const data = '';
  const onSubmit = (formData) => {
    console.log(formData);
    router.push(`?${new URLSearchParams({page:9})}`)

  }

  const styles= {
    accordion : 'bg-[#d9d9d9] rounded-sm px-4 data-[state=open]:bg-white data-[state=open]:border-[#D9D9D9] data-[state=open]:border-2 sm:border-none',
    editButton: 'text-company hover:border-b-2 hover:no-underline border-company rounded-none py-0 px-1 h-auto',
    heading: 'text-muted-foreground font-semibold',
    section: 'space-y-4',
    section_header: 'flex justify-between',
    section_content: '',
    input_field:'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"',
  }

  const formFields = {
    program:{
      student_type:['student_type'],
      branch_program:['branch','course','referral code','scholarship code','items']
    },
    personal_details: {
      about_you:['first name','middle name','last name','age','date of birth','citizenship',
      'civil status','religion'],
      address:['house number','street',
      'floor/Unit/Room number','barangay','district','municipality','zip code'],
      contact_info:{
        personal:['mobile number','telephone number','contact_email',],
        guardian:['guardian_email','guardian_fName','guardian_lName','guardian_mobile','guardian_tel',]
      },
      education:['highest_educational_attainment','last_school_attended','year_completed'],
    },
    document: ['birth-certificate']
  }
  const fieldNames = [
    'age',
    'barangay',
    'branch',
    'citizenship',
    'civil status',
    'confirm_password',
    'contact_email',
    'course',
    'date of birth',
    'district',
    'email',
    'facebook',
    'first name',
    'floor/Unit/Room number',
    'guardian_email',
    'guardian_fName',
    'guardian_lName',
    'guardian_mobile',
    'guardian_tel',
    'highest_educational_attainment',
    'house number',
    'last name',
    'last_school_attended',
    'middle name',
    'mobile number',
    'municipality',
    'password',
    'referral code',
    'religion',
    'scholarship code',
    'sex',
    'street',
    'telephone number',
    'year_completed',
    'zip code'
  ];



  return (
    <section className={`${style} my-6`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Accordion className='space-y-1' type="single"  defaultValue='item-1'>
            <AccordionItem className={styles.accordion} value="item-1">
              <AccordionTrigger>Program</AccordionTrigger>
              <AccordionContent>
                <section className={styles.section}>
                  <div className={styles.section_header}>
                    <h6 className={styles.heading}>Student Type</h6>
                    <Button className={styles.editButton} variant='link'><PenIcon /> Edit Section </Button>
                  </div>
                  <div className={styles.section_content}>
                    {/* {console.log(formFields.program.student_type[0])}
                    {data[formFields.program.student_type[0]]} */}
                  </div>
                  <div className={styles.section_header}>
                    <h6 className={styles.heading}>Branch Program</h6>
                    <Button className={styles.editButton} variant='link'><PenIcon /> Edit Section </Button>
                  </div>
                  <div className={styles.section_content}>
                      {
                        formFields.program.branch_program.map(field=>
                          (
                          <p key={field}>
                            {data[field]}
                          </p>
                          )
                        )
                      }
                    
                  </div>
                </section>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={styles.accordion} value="item-2">
              <AccordionTrigger>Personal Details</AccordionTrigger>
              <AccordionContent>
              <section className={styles.section}>
                  <div className={styles.section_header}>
                    <h6 className={styles.heading}>Student Type</h6>
                    <Button className={styles.editButton} variant='link'><PenIcon /> Edit Section </Button>
                  </div>
                  <div className={styles.section_content}>
                    {/* {console.log(formFields.program.student_type[0])}
                    {data[formFields.program.student_type[0]]} */}
                  </div>
                </section>
                <section className={styles.section}>
                  <div className={styles.section_header}>
                    <h6 className={styles.heading}>Branch Program</h6>
                    <Button className={styles.editButton} variant='link'><PenIcon /> Edit Section </Button>
                  </div>
                  <div className={styles.section_content}>
                      {
                        formFields.program.branch_program.map(field=>
                          (
                          <input className={`gap-y-2 ${styles.input_field}`} key={field} defaultValue={data[field]} disabled  />
                          )
                        )
                      }
                    
                  </div>
                </section>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className={styles.accordion} value="item-3">
              <AccordionTrigger>Documents</AccordionTrigger>
              <AccordionContent>
              <section className={styles.section}>
                  <div className={styles.section_header}>
                    <h6 className={styles.heading}>Student Type</h6>
                    <Button className={styles.editButton} variant='link'><PenIcon /> Edit Section </Button>
                  </div>
                  <div className={styles.section_content}>
                    {/* {console.log(formFields.program.student_type[0])}
                    {data[formFields.program.student_type[0]]} */}
                  </div>
                </section>
                <section className={styles.section}>
                  <div className={styles.section_header}>
                    <h6 className={styles.heading}>Branch Program</h6>
                    <Button className={styles.editButton} variant='link'><PenIcon /> Edit Section </Button>
                  </div>
                  <div className={styles.section_content}>
                      {
                        formFields.program.branch_program.map(field=>
                          (
                          <p key={field}>
                            {data[field]}
                          </p>
                          )
                        )
                      }
                    
                  </div>
                </section>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <FormFooterButtons>
            Next
          </FormFooterButtons>
        </form>
      </Form>
    </section>
  )
}

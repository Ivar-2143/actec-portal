"use client"

import { PenIcon } from '@/public/assets/icons'
import FormFooterButtons from '../form-footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import { AccordionStateProvider, EditingStateProvider, useAccordionState, useEditingState, useFormData } from '@/lib/form-contexts'
import Image from 'next/image'
import { SummaryDocs, SummaryPersonalDetails, SummaryProg } from './summary-forms'
import EditingDialog from './summary-forms/section-dialog-and-buttons'
import { useState } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'



export default function Summary({style}) {
  const form = useForm();
  const router = useRouter();
  //const data = useWatch({});
  const {data} = useFormData();
  const {value, setValue, handleStateChange} = useAccordionState();
  const {isEditing} = useEditingState();
  const [open, setOpen] = useState(false);

  const handleEditingForm = (item) => {
    (isEditing) ? setOpen(true) : setValue(item);
  }

  const onSubmit = (formData) => {
    console.log(formData);
    router.push(`?${new URLSearchParams({page:9})}`)

  }

  const styles= {
    accordion : 'bg-[#d9d9d9] rounded-sm px-4 data-[state=open]:bg-white data-[state=open]:border-[#D9D9D9] data-[state=open]:border-2 sm:border-none',
    editButton: 'text-company hover:border-b-2 hover:no-underline border-company rounded-none py-0 px-1 h-auto',
    heading: 'text-foreground font-semibold',
    section: 'space-y-4',
    section_header: 'flex justify-between my-4',
    section_content: '',
    input_field:'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"',
  }
  

  return (
      <section className={`${style} my-6`}>
        
              <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger/>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Unsaved Changes?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You have to save your changes first or discard it.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>Okay, Thanks!</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Accordion className='space-y-1' type="single" value={value} onValueChange={handleEditingForm}>

                <AccordionItem className={styles.accordion} value="item-1">
                  <AccordionTrigger>Program</AccordionTrigger>
                  <AccordionContent>
                    <SummaryProg data={data}
                    className={{
                      section:styles.section.header,
                      section_header:styles.section_header,
                      heading: styles.heading,
                      section_content: styles.section_content,
                      editButton: styles.editButton
                      }}
                      
                      />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className={styles.accordion} value="item-2">
                  <AccordionTrigger>Personal Details</AccordionTrigger>
                  <AccordionContent className='overflow-visible'>
                    <SummaryPersonalDetails data={data}
                      className={{
                        section:styles.section.header,
                        section_header:styles.section_header,
                        heading: styles.heading,
                        section_content: styles.section_content,
                        editButton: styles.editButton
                        }}
                    />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem className={styles.accordion} value="item-3">
                  <AccordionTrigger>Documents</AccordionTrigger>
                  <AccordionContent>
                    <SummaryDocs 
                      data={data}
                      className={{
                        section:styles.section.header,
                        section_header:styles.section_header,
                        heading: styles.heading,
                        section_content: styles.section_content,
                        editButton: styles.editButton
                        }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormFooterButtons disable={isEditing}>
              Next
            </FormFooterButtons>
           </form>
        </Form> 
      </section>
  )
}

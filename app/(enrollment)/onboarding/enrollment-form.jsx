"use client"

import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import Page1 from "./page-1"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod";
import Page2 from "./page-2"
import Page3 from "./page-3"
import Page4 from "./page-4"
import Page5 from "./page-5"
import Page6 from "./page-6"
import Page7 from "./page-7"
import Page8 from "./page-8"
import Page9 from "./page-9"
import { FormSchema } from "@/lib/valibot-schema"
import { StudentTypeContext } from "@/lib/form-contexts"

function onSubmit(){
    console.log("submit");
}

export default function EnrollmentForm() {
    const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        items: []
      }
    });
    const searchParams = useSearchParams();
    const currentPage = searchParams.get('page');
    const endPage = 9;
    const startPage = 1;
    const [studentType, setStudentType] = useState('');
    //const [date, setDate] = useState('');

    // console.log(studentType);
    console.log('current page: '+currentPage);
  return (
    <Form {...form}>
      <StudentTypeContext.Provider
        value={{
            studentType,
            setStudentType
        }}
      >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Page1 form={form} style={currentPage!=1? 'hidden' : ''}/>
          <Page2 form={form} style={currentPage!=2? 'hidden' : 'mt-0'}/>
          <Page3 form={form} style={currentPage!=3? 'hidden' : 'mt-0'}/>
          <Page4 form={form} style={currentPage!=4? 'hidden' : 'mt-0'}/>
          <Page5 form={form} style={currentPage!=5? 'hidden' : 'mt-0'}/>
          <Page6 form={form} style={currentPage!=6? 'hidden' : 'mt-0'}/>
          <Page7 form={form} style={currentPage!=7? 'hidden' : 'mt-0'}/>
          <Page8 form={form} style={currentPage!=8? 'hidden' : 'mt-0'}/>
          <Page9 form={form} style={currentPage!=9? 'hidden' : 'mt-0'}/>
        </form>
      </StudentTypeContext.Provider>
    </Form>
  )
}

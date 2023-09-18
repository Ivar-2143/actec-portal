"use client"

import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import Page1 from "./page-1"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Page2 from "./page-2"
import Page3 from "./page-3"
import Page4 from "./page-4"
import Page5 from "./page-5"
import Page6 from "./page-6"
import Page7 from "./page-7"
import Page8 from "./page-8"
import Page9 from "./page-9"
import {zodResolver} from '@hookform/resolvers/zod'
import { FormSchema } from "@/lib/valibot-schema"
import { StudentTypeContext } from "@/lib/form-contexts"

function onSubmit(){
    console.log("submit");
}

export default function EnrollmentForm() {
    const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues:{
        items: []
      }

    });
    const searchParams = useSearchParams();
    const currentPage = searchParams.get('page');
    const endPage = 9;
    const startPage = 1;
    const [studentType, setStudentType] = useState('');

    //console.log(studentType);
    console.log("current page: " + currentPage);
  return (
      <Form {...form}>
        <StudentTypeContext.Provider
          value={{
              studentType,
              setStudentType
          }}
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <Page1 style={currentPage!=1? 'hidden' : 'lg:my-16'}/>
            <Page2 style={currentPage!=2? 'hidden' : 'lg:my-16'}/>
            <Page3 style={currentPage!=3? 'hidden' : 'lg:my-16'}/>
            <Page4 style={currentPage!=4? 'hidden' : 'lg:my-16'}/>
            <Page5 style={currentPage!=5? 'hidden' : 'lg:my-16'}/>
            <Page6 style={currentPage!=6? 'hidden' : 'lg:my-16'}/>
            <Page7 style={currentPage!=7? 'hidden' : 'lg:my-16'}/>
            <Page8 style={currentPage!=8? 'hidden' : 'lg:my-16'}/>
            <Page9 style={currentPage!=9? 'hidden' : 'lg:my-16'}/>
          </form>
        </StudentTypeContext.Provider>
      </Form>
  )
}

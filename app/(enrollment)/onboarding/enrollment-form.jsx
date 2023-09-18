"use client"

import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import Page1 from "./page-1"
import { createContext, useContext, useState } from "react"
import { useSearchParams } from "next/navigation"
import Page2 from "./page-2"
import Page3 from "./page-3"
import Page4 from "./page-4"
import Page5 from "./page-5"
import Page6 from "./page-6"
import Page7 from "./page-7"
import Page8 from "./page-8"
import Page9 from "./page-9"

export const StudentTypeContext = createContext(null);

export function useStudentTypeContext() {
    const context = useContext(StudentTypeContext);
    if(!context) {
        throw new Error("useStudentTypeContext must be used within a ThemeContextProvider");
    }

    return context;

}

function onSubmit(){
    console.log("submit");
}

export default function EnrollmentForm() {
    const form = useForm();
    const searchParams = useSearchParams();
    const currentPage = searchParams.get('page');
    const endPage = 9;
    const startPage = 1;
    const [studentType, setStudentType] = useState('');

    console.log(studentType);
    console.log(currentPage);
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
          <Page2 form={form} style={currentPage!=2? 'hidden' : ''}/>
          <Page3 style={currentPage!=3? 'hidden' : ''}/>
          <Page4 style={currentPage!=4? 'hidden' : ''}/>
          <Page5 style={currentPage!=5? 'hidden' : ''}/>
          <Page6 style={currentPage!=6? 'hidden' : ''}/>
          <Page7 style={currentPage!=7? 'hidden' : ''}/>
          <Page8 style={currentPage!=8? 'hidden' : ''}/>
          <Page9 style={currentPage!=9? 'hidden' : ''}/>
        </form>
      </StudentTypeContext.Provider>
    </Form>
  )
}

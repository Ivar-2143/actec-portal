"use client"

import FormElement from "../ui/form-item";
import FormFooterButtons from "../form-footer";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function ContactInfo({style}) {
  const form = useForm();
  const router = useRouter();

  const onSubmit = (formData) =>{
    console.log(formData);

    router.push(`?${new URLSearchParams({page:6})}`);
  }

  return (
    <section className={`${style} my-6`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="my-8">
            <h4 className='text-lg text-gray font-medium my-2'>Personal</h4>
            <div className="w-full sm:flex gap-4">
              <FormElement fieldName="mobile number" hint='9#########' />
              <FormElement fieldName="telephone number"hint='' />
            </div>
            <FormElement accesoryKey="contact_email" fieldName="email" hint='' />
            <FormElement fieldName="facebook" hint='https://facebook.com/username' />
          </div>
          <div className="my-6">
            <h4 className='text-lg text-gray font-medium my-2'>Parent/Guardian</h4>
            <div className="w-full sm:flex gap-4">
              <FormElement accesoryKey="guardian_fName" fieldName="first name" hint='' />
              <FormElement accesoryKey="guardian_lName" fieldName="last name" hint='' />
            </div>
            <div className="w-full sm:flex gap-4">
              <FormElement accesoryKey="guardian_mobile" fieldName="mobile number" hint='9#########' />
              <FormElement accesoryKey="guardian_tel" fieldName="telephone number"hint='' />
            </div>
            <FormElement accesoryKey="guardian_email" fieldName="email" hint='' />
          </div>
          <FormFooterButtons>
            Next
          </FormFooterButtons>
        </form>
      </Form>
        
    </section>
  )
}

"use client"

import FormElement from "../ui/form-item";
import { useForm } from "react-hook-form";
import FormFooterButtons from "../form-footer";
import { Form } from "@/components/ui/form";
import { useFormData } from "@/lib/form-contexts";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressSchema } from "@/lib/validation-schema";

export default function Address({style}) {
  const form = useForm({
    resolver: zodResolver(AddressSchema),
  });
  const router = useRouter();
  const {setFormValues} = useFormData();

  const onSubmit = (formData) => {
    console.log(formData);
    
    setFormValues({
      isCompleted: true,
      value:4
    },
    {address:{...formData}})

    router.push(`?${new URLSearchParams({page:5})}`);
  }

  return (
    <section className={`${style} my-6`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full relative sm:flex gap-4">
            <FormElement fieldName='house number' hint='House No.'/>
            <FormElement fieldName='street' hint='Street Name'/>
          </div>
          <FormElement fieldName='floor/Unit/Room number' optional={true} hint=''/>
          <FormElement fieldName='barangay' hint='Barangay'/>
          <FormElement fieldName='district' hint=''/>
          <FormElement fieldName='municipality' hint=''/>
          <FormElement fieldName='zip code' hint='3-4 digits' style="sm:w-1/2"/>
          <FormFooterButtons>
            Next
          </FormFooterButtons>
        </form>
      </Form>
    </section>
  )
}

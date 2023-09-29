"use client"

import FormElement from '../ui/form-item'
import FormFooterButtons from '../form-footer'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { RightArrowIcon } from '@/public/assets/icons'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

export default function CreateAccount({style}) {
  const form = useForm();
  const router = useRouter();

  const onSubmit = (formData) =>{
    console.log(formData);
  }

  return (
    <section className={`${style} relative my-10 h-full`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormElement accesoryKey='email' fieldName='Email' hint='' />
          <FormElement accesoryKey='password' fieldName='password' hint=''/>
          <FormElement accesoryKey='confirm_password' fieldName='confirm password' />
          <div className="items-top flex space-x-2 mt-4 sm:mt-10">
            <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
          
          </div>
          
          <div className='mt-10 sm:hidden text-sm'>
            <p className=''>
              “The people who are really great are not those who try to belittle your ambitions but those who make you feel that you too can become great.”
            </p>
            <p><span className='font-bold'>Mark Twain</span>, Author of Huckleberry Finn</p>
          </div>
          
          <FormFooterButtons>
            Get Started
              {/* <RightArrowIcon className='ml-2 h-4 w-4 lg:ml-4 lg:h-5 lg:w-5'/> */}
          </FormFooterButtons>
          <div className='hidden sm:block mt-24 sm:w-3/5 lg:w-1/2'>
            <p className='text-sm'>
              “The people who are really great are not those who try to belittle your ambitions but those who make you feel that you too can become great.”
            </p>
            <p><span className='font-bold'>Mark Twain</span>, Author of Huckleberry Finn</p>
          </div>
        </form>
      </Form>
    </section>
  )
}

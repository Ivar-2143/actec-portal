"use client"

import FormFooterButtons from '../form-footer'
import Dropzone from '../ui/dropzone'
import { IdeaBulbIcon } from '@/public/assets/icons'
import Image from 'next/image'
import { useForm} from 'react-hook-form'
import { captureImageInstructions } from '@/lib/form-data'
import { Form } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import { useFormData } from '@/lib/form-contexts'

export default function Documents({style}) {
  
  const form = useForm();
  const router = useRouter();
  const {setFormValues} = useFormData();
  //const image = useWatch({name: 'birth-certificate'})
  const card = 'flex flex-col gap-2 relative'
  const image = form.watch('birth-certificate');

  const onSubmit = (formData) =>{
    setFormValues({
      isCompleted: true,
      value: 7
    }, formData);

    router.push(`?${new URLSearchParams({page:8})}`)
  }

  return (
    <section className={`${style} my-6`}>
      
      <Form {...form}>
        <form  onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <div className={card}>
              <h4 className='leading-10'>Birth Certificate</h4>
              <Dropzone className='
              flex justify-center items-center
              w-full bg-white px-8 py-4
              sm:w-[288px] sm:h-[376px] sm:py-0
              border-2 rounded border-dashed  border-[rgba(14,14,14,0.2)]
              ' />
            </div>
            <div className={card}>
              <div className='flex items-center gap-2 h-[40px]'>
                {image? (
                    <h4>Preview</h4>
                ): (
                    <>
                      <IdeaBulbIcon className='text-4xl'/> 
                      <h4>How to take an image</h4>
                    </>
                )}
              </div>
              <div className='
              flex justify-center items-center  
            bg-white px-0 py-4 w-full relative
              sm:w-[288px] h-[376px] sm:py-0
              border-2 rounded  border-[rgba(14,14,14,0.2)]
              '> 
              {image? (
                  <Image src={image[0].preview} className='py-2 px-2 object-cover' fill alt='uploaded image' />
              ) : (
                <ul className='space-y-4 w-full px-8'>
                  {captureImageInstructions.map((instruction)=> (
                      <li className='border-l-4 border-gray pl-4 text-base py-2 sm:text-sm sm:py-0' key={instruction}> {instruction} </li>
                    )
                  )}
                </ul>
              )}
              </div>
            </div> 
          </div>
          <FormFooterButtons disable={!image}>
              Next
          </FormFooterButtons>
        </form>
      </Form>
    </section>
  )
}

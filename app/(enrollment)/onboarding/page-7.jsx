
import FormFooterButtons from '../elements/form-footer'
import PageHeader from '../elements/page-header'
import Dropzone from '../elements/dropzone'
import { IdeaBulbIcon } from '@/public/assets/icons'
import Image from 'next/image'
import { useFormContext, useWatch } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { captureImageInstructions } from '@/lib/form-data'

export default function Page7({style}) {
  const title = "🚦 Verification"
  const body = "You’ve reached this far... We hope that you’re not a robot or an alien, right? We might need some documents to verify your identity. We just love to be true and be real with what we do and share it with real people like you!"
  const card = 'flex flex-col gap-2 relative'
  const form = useFormContext();
  const image = useWatch({name: 'birth-certificate'})

  return (
    <section className={style}>
      <div className="onboard-content">
        <PageHeader
          title={title}
          body={body}
        />

        <div className="my-6
        flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
      <FormFooterButtons page={8} />
    </section>
  )
}

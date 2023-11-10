"use client"

import SelectFormElement from "@/app/(enrollment)/components/ui/drop-down-select";
import Dropzone from "@/app/(enrollment)/components/ui/dropzone";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import { useForm } from "react-hook-form";


export default function ReqForm() {
    const form = useForm();
    const card = 'flex flex-col gap-0 relative'
    const image = ''
    const documents = [{
        value: 'birth-certificate',
        label: 'Birth Certificate'
    },{
        value: 'passport-id',
        label: '1x1 and 2x2'
    },{
        value: 'form-138',
        label: 'Form 138'
    },{
        value: 'form-137',
        label: 'Form 137'
    },{
        value: 'psa-marriage-certificate',
        label: 'PSA/Marriage Certificate'
    }]
    

    return (
    <>
        <Form {...form} >
            <form className="flex flex-col p-6 gap-2">
                <SelectFormElement accessorKey='documents' data={documents} placeholder='a Document' label='Requirements' />
                
                <div className='flex flex-col sm:flex-row gap-2 justify-center my-4'>
                    <div className={card}>
                        <Dropzone
                        fieldName="document"
                        className='
                        flex justify-center items-center
                        w-full bg-white px-8 py-4
                        sm:w-[288px] sm:h-[376px] sm:py-0
                        border-2 rounded border-dashed  border-[rgba(14,14,14,0.2)]
                        ' />
                    </div>
                    {image? (
                        <div className={card}>
                            <div className='flex items-center gap-2 h-[40px]'>
                                {image? (
                                    <h4>Preview</h4>
                                ): null}
                            </div>
                            <div className='
                            flex justify-center items-center  
                            bg-white px-0 py-4 w-full relative
                            sm:w-[288px] h-[376px] sm:py-0
                            border-2 rounded  border-[rgba(14,14,14,0.2)]
                            '> 
                            {image? (
                                <Image src={image[0].preview} className='py-2 px-2 object-cover' fill alt='uploaded image' />
                            ) : null}
                            </div>
                        </div> 
                    ):null}
                </div>
            </form>
        </Form>
    </>
  )
}

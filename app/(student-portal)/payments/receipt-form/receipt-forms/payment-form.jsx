"use client"
import SelectFormElement from "@/app/(enrollment)/components/ui/drop-down-select";
import Dropzone from "@/app/(enrollment)/components/ui/dropzone";
import FormElement from "@/app/(enrollment)/components/ui/form-item";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { IdeaBulbIcon, WarningIcon } from "@/public/assets/icons";
import Image from "next/image";
import { useForm } from "react-hook-form";


export default function PaymentForm() {
    const form = useForm();
    const image = form.watch('receipt-image')
    const onSubmit = () => {
        console.log('Payment Submitted')    
        try{

        }catch(e){

        }
    }
    const card = 'flex flex-col gap-0 relative'
    const paymentMethods = [{
        value:'gcash',
        label:'Gcash',
    },{
        value:'cash',
        label:'Cash'
    },{
        value:'bank transfer via online banking',
        label:'Bank Transfer via Online Banking'
    },{
        value:'bank transfer via gcash',
        label:'Bank Transfer via Gcash'
    }]
    const modeOfPayment = [{
        value:'full payment',
        label:'Full Payment'
    },{
        value:'installment',
        label:'Installment'
    }]


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <SelectFormElement 
                data={paymentMethods}
                accessorKey='payment_methods'
                placeholder='Select Payment Method'
                label='Payment Method'
            />
            <SelectFormElement 
                data={modeOfPayment}
                accessorKey='payment_terms'
                placeholder='Select Payment Terms'
                label='Payment Term'
            />
            
            <div className='flex flex-col sm:flex-row gap-2 justify-center my-4'>
                <div className={card}>
                    <Dropzone
                    fieldName="receipt-image"
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
            <FormElement
                accesoryKey='payment_amount'
                fieldName='Amount'
                label='Amount'
                hint='Enter Amount'
            />


            <div className="mt-4 flex flex-col gap-2 text-muted-foreground">
                <div className="flex gap-1">
                    <WarningIcon className='text-lg mt-1' />
                    All submissions will be subject for reviewing.
                </div>
                <div className="flex justify-between">
                    <Button onClick={()=> {}} variant='secondary'> Go Back </Button>
                    <Button type='submit'> Submit </Button>
                </div>

            </div>
        </form>
    </Form>
  )
}

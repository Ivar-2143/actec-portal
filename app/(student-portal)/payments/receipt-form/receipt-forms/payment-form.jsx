"use client"
import SelectFormElement from "@/app/(enrollment)/components/ui/drop-down-select";
import FormElement from "@/app/(enrollment)/components/ui/form-item";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";


export default function PaymentForm() {
    const form = useForm();
    const onSubmit = () => {
        console.log('Payment Submitted')
        try{

        }catch(e){

        }
    }
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

            <FormElement
                accesoryKey='payment_amount'
                fieldName='Amount'
                label='Amount'
                hint='Enter Amount'

            />
        </form>
    </Form>
  )
}

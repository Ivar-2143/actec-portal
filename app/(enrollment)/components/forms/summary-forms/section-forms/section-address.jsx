import React from 'react'
import SectionForm from './section-form';
import { Form } from '@/components/ui/form';
import FormElement from '../../../ui/form-item';
import { useForm } from 'react-hook-form';
import { useEditingState } from '@/lib/form-contexts';
import { fieldKeys } from '@/lib/form-data';


export default function SectionAddress({className, data}) {
  const form = useForm();
  const {isEditing,formID,handleEditing} = useEditingState();
  const formName = 'form_address'

  console.log(formID)
  const onSubmit = (formData) => {
    console.log(formData);
    console.log('submitting', formName)

    handleEditing(null)
  }

  return (
    <SectionForm className={className} formName={formName} sectionTitle='Address'>
      {(isEditing && formID===formName)?(
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2" id={formName}>
            {fieldKeys.personal_details.address.map(field => (
              field.type === 'input' && (
                <FormElement className={{item:'mx-2'}} key={field.key} accesoryKey={field.key} fieldName={field.title} 
                  hint={field.placeholder} type={field.input_type} value={data.fieldValues.address[field.key]}
                />
              )
            ))}
          </form>
        </Form>
      ): (
        <div className="grid grid-cols-2 gap-2">
            {fieldKeys.personal_details.address.map(({title, key})=>
                (
                <div key={key}>
                <span className='summary-title'>{title}</span>
                <p className='summary-value'>
                    {data.fieldValues.address[key] || null}
                </p>
                </div>
                )
            )}
        </div>
      )}
    </SectionForm>
  )
}

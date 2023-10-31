import { Form } from "@/components/ui/form";
import SectionForm from "./section-form";
import { useForm } from "react-hook-form";
import { useEditingState } from "@/lib/form-contexts";
import { fieldKeys } from "@/lib/form-data";
import FormElement from "../../../ui/form-item";
import { addHours } from "date-fns";


export default function SectionAboutYou({className,data}) {
  const form = useForm();
  const {isEditing,formID,handleEditing} = useEditingState();
  const formName = 'form_about you'

  console.log(formID)
  const onSubmit = (formData) => {
    console.log(formData);
    console.log('submitting', formName)

    handleEditing(null)
  }

  return (
    <SectionForm className={className} formName={formName} sectionTitle='About You'>
      {(isEditing && formID===formName)?(
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2" id={formName}>
            {fieldKeys.personal_details.about_you.map(field => (
              field.type === 'input' && (
                <FormElement className={{item:'mx-2'}} key={field.key} accesoryKey={field.key} fieldName={field.title} 
                  hint={field.placeholder} type={field.input_type} value={data.fieldValues[field.key]}
                />
              )
            ))}
          </form>
        </Form>
      ): (
        <div className="grid grid-cols-2 gap-2">
            {fieldKeys.personal_details.about_you.map(({title, key,input_type})=>
                (
                <div key={key}>
                <span className='summary-title'>{title}</span>
                <p className="summary-value">
                    {input_type === 'date' ? console.log('Birth date: ',addHours(new Date(data.fieldValues[key]),8)) : null}
                    {input_type === 'date' ? 
                    new Date(data.fieldValues[key]).toLocaleDateString()
                    :
                    data.fieldValues[key]}
                </p>
                </div>
                )
            )}
        </div>
      )}
    </SectionForm>
  )
}

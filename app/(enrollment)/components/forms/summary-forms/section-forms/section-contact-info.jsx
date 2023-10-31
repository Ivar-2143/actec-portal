import { Form } from "@/components/ui/form";
import SectionForm from "./section-form";
import { useForm } from "react-hook-form";
import { useEditingState } from "@/lib/form-contexts";
import { fieldKeys } from "@/lib/form-data";
import FormElement from "../../../ui/form-item";


export default function SectionContactInfo({className,data}) {
  
  const form = useForm();
  const {isEditing,formID,handleEditing} = useEditingState();
  const formName = 'form_contact info'

  console.log(formID)
  const onSubmit = (formData) => {
    console.log(formData);
    console.log('submitting', formName)

    handleEditing(null)
  }

  return (
    <SectionForm className={className} formName={formName} sectionTitle='Contact Information'>
      {(isEditing && formID===formName)?(
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="" id={formName}>
            {Object.keys(fieldKeys.personal_details.contact_info).map(key =>{
                    console.log(key)
                return (

                    <div key={key} className="">
                        <h6 className='mt-4 mb-2 capitalize font-medium text-muted-foreground'>{key}</h6>
                        <div className="grid grid-cols-2 gap-2">
                            {fieldKeys.personal_details.contact_info[key].map(field => (
                                field.type === 'input' && (
                                        <FormElement className={{item:'mx-2'}} key={field.key} accesoryKey={field.key} fieldName={field.title} 
                                        hint={field.placeholder} type={field.input_type} value={data.fieldValues[field.key]}
                                    />
                                )
                            ))}
                        </div>
                    </div>
            )})}
          </form>
        </Form>
      ): (
        <>
            {Object.keys(fieldKeys.personal_details.contact_info).map(key => {

                console.log(key)
                return (
                    <>
                        <h6 className="mt-4 mb-2 capitalize font-medium text-muted-foreground">{key}</h6>
                        <div key={key} className="grid grid-cols-2 gap-2">
                            
                                {fieldKeys.personal_details.contact_info[key].map(field => (
                                    <div key={field.key}>
                                        <span className='summary-title'>{field.title}</span>
                                        <p className="summary-value">
                                            {data.fieldValues[field.key]}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </>

                )
            })}

                    {/* <div key={key}>
                        <h6>  </h6>
                        {values.map(({title, key}) => (
                            <div key={key}>
                                <span className='capitalize font-semibold'>{title}</span>
                                <p>
                                    {data.fieldValues[key]}
                                </p>
                            </div>
                        ))}
                    </div> */}
        </>
      )}
    </SectionForm>
  )
}

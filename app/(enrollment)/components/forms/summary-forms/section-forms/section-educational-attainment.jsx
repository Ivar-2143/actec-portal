import SectionForm from './section-form';
import { Form } from '@/components/ui/form';
import FormElement from '../../../ui/form-item';
import { useForm } from 'react-hook-form';
import { useEditingState } from '@/lib/form-contexts';
import { fieldKeys } from '@/lib/form-data';
import SelectFormElement from '../../../ui/drop-down-select';


export default function SectionEducation({className, data}) {
  const defaults = new Map()
  const dataMap = fieldKeys.personal_details.education.reduce( (obj,{key}) => {
    obj[key] = data.fieldValues[key]
    return obj
  },{})
  console.log(dataMap)

  const form = useForm({
    defaultValues:{...dataMap}
  });
  const {isEditing,formID,handleEditing} = useEditingState();
  const formName = 'form_education'

  console.log(formID)
  const onSubmit = (formData) => {
    console.log(formData);
    console.log('submitting', formName)

    handleEditing(null)
  }

  return (
    <SectionForm className={className} formName={formName} sectionTitle='Education'>
      {(isEditing && formID===formName)?(
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2" id={formName}>
            {fieldKeys.personal_details.education.map(field => (
              field.type === 'input' ? (
                <FormElement className={{item:'mx-2'}} key={field.key} accesoryKey={field.key} fieldName={field.title} 
                  hint={field.placeholder} type={field.input_type} value={data.fieldValues[field.key]}
                />
              ) : field.type === 'select' ? (
                <SelectFormElement className={{item:'mx-2',label:'capitalize font-semibold'}} data={field.data} 
                accessorKey={field.key} label={field.title} defaultValue={data.fieldValues[field.key]}/>
              ) : null
              
            ))}
          </form>
        </Form>
      ): (
        <div className="grid grid-cols-2 gap-2">
            {fieldKeys.personal_details.education.map(({title, key})=>
                (
                <div key={key}>
                  <span className='summary-title'>{title}</span>
                  <p className='summary-value'>
                      {data.fieldValues[key]}
                  </p>
                </div>
                )
            )}
        </div>
      )}
    </SectionForm>
  )
}

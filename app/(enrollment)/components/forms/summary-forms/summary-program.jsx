import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { branches, fieldKeys } from "@/lib/form-data"
import { studentTypes } from "@/lib/form-data";
import { PenIcon } from "@/public/assets/icons";
import { useForm } from "react-hook-form";
import SelectFormElement from "../../ui/drop-down-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProgramSchema } from "@/lib/validation-schema";
import { z } from "zod";
import ComboBox from "../../ui/comboBox";
import FormElement from "../../ui/form-item";
import { Checkbox } from "@/components/ui/checkbox";
import EditingDialog from "./section-dialog-and-buttons";
import { useEditingState } from "@/lib/form-contexts";
import { useConfirmRedirectIfDirty } from "@/lib/hooks/confirm-redirect";

export default function SummaryProg({data,className}) {
    const {isEditing, formID, handleEditing} = useEditingState()
    console.log(data)
    const Schema = ProgramSchema.extend({
        student_type: z.string()
    });
    
    const form = useForm({
        //resolver: zodResolver(Schema),
        defaultValues: {
            student_type: data.fieldValues[fieldKeys.program.student_type.key],
            branch: data.fieldValues[fieldKeys.program.branch_program[0].key],
        }
    });

    const student = studentTypes.findIndex(type =>{
        return type.value === data.fieldValues[fieldKeys.program.student_type.key];
    })

    const onSubmit = (formData) =>{
        
        console.log(formData);
        console.log('submitted\n form: form_program');
        handleEditing(null)
    }
    
    const formParent = 'form_program'


    return (
        <section className={className.section}>
            <div className={className.section_header}>
                <EditingDialog className={className} parent={formParent} />
            </div>
            <div className={`${className.section_content} `}>
                
                {(isEditing && formID === formParent)? (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} id={formParent} className={`grid grid-cols-2 gap-2 `}>
                            <SelectFormElement className={{item:'mx-2',label:'capitalize font-semibold'}} 
                                data={studentTypes} 
                                accessorKey={fieldKeys.program.student_type.key} 
                                label={fieldKeys.program.student_type.title} 
                                defaultValue={data.fieldValues[fieldKeys.program.student_type.key]}
                            />
                            {/* <SelectFormElement className={{item:'mx-2',label:'capitalize font-semibold'}} data={branches} accessorKey={fieldKeys.program.branch_program[0].key} label={fieldKeys.program.branch_program[0].title} defaultValue={data.fieldValues[fieldKeys.program.branch_program[0].key]}/> */}
                            {fieldKeys.program.branch_program.map(fields => (
                                // console.log(field);
                                    <>
                                        {console.log('creating ' + fields.title)}
                                        {console.log('data of ' + fields.data)}
                                        {fields.type === 'select'&&(
                                            <SelectFormElement className={{item:'mx-2',label:'capitalize font-semibold'}} data={fields.data} 
                                            accessorKey={fields.key} label={fields.title} defaultValue={data.fieldValues[fields.key]}/>
                                            
                                        )}
                                        {fields.type === 'combobox' && console.log(data.fieldValues[fields.key])}
                                        {fields.type === 'combobox' && (
                                            <ComboBox className={{item:'mx-2',label:'capitalize font-semibold'}}
                                            data={fields.data} fieldName={fields.key} value={data.fieldValues[fields.key]}/>
                                        )}
                                        {fields.type === 'input' && (
                                            <FormElement className={{item:'mx-2',label:'capitalize font-semibold'}}
                                            accessorKey={fields.key} fieldName={fields.title} hint='' defaultValue={data.fieldValues[fields.key]}/>
                                        )}
                                        {fields.type === 'checkbox-group' && (
                                            <FormField
                                            control={form.control}
                                            name={fields.key}
                                            render={() => (
                                                <FormItem>
                                                    <div className="mb-4">
                                                    <FormDescription>
                                                    Just curious... <FormLabel className=" text-darkGray font-bold">{fields.title}</FormLabel>
                                                    </FormDescription>
                                                    </div>
                                                    {fields.data.map((item) => (
                                                    <FormField
                                                        key={item.id}
                                                        control={form.control}
                                                        name="items"
                                                        render={({ field }) => {
                                                        return (
                                                            <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0 py-1"
                                                            >
                                                            <FormControl>
                                                                <Checkbox
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item.id
                                                                        )
                                                                        )
                                                                }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                {item.label} {item.id=='others' && (
                                                                <> <span classname="font-light text-  ">(Please specify): </span><input type="text" className="outline-none border-b border-darkGray bg-transparent"/> </>
                                                                )}
                                                            </FormLabel>
                                                            </FormItem>
                                                        )
                                                        }}
                                                    />
                                                    ))}
                                                    <FormMessage />
                                                </FormItem>
                                                )}
                                            />
                                        )}
                                        {fields.type === 'checkbox-group' && form.setValue(fields.key, data.fieldValues['items'])}
                                    </>
                                )
                            )}

                        </form>
                    </Form>
                ) : (
                    <div className="grid grid-cols-2 gap-2">
                        <div className='flex flex-col'>
                            <span className='capitalize font-medium text-darkGray'> student type </span>
                            {console.log(student)}
                            <span> {student > 0? studentTypes[student].title : null} </span> 
                        </div>
                        {fieldKeys.program.branch_program.map(({title, key})=>
                            (
                            <div key={key}>
                            <span className='summary-title'>{title}</span>
                            <p className="summary-value">
                                {data.fieldValues[key]}
                            </p>
                            </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </section>
  )
}

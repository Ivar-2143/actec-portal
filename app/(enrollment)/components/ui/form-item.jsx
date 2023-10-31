import { FormItem, FormField, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addHours } from "date-fns/esm";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";

export default function FormElement({accesoryKey='', fieldName, label='', hint, desc='', style='w-full', optional=false, disable=false, type='text', className={}, value=''}) {
  const form = useFormContext();

  if(value != '' && value != undefined && value != null) {
    accesoryKey ? 
      form.setValue(accesoryKey, value) 
    : form.setValue(fieldName, value)
    
    console.log('CALLED?')
    
    

  }
  if(type === 'date') {
    const normalize = new Date(value);
    var date = addHours(normalize,8);
    console.log(date.toISOString());
    
    accesoryKey ?
      form.setValue(accesoryKey, new Date(date).toISOString().substring(0,10))
      : form.setValue(fieldName, date.toISOString().substring(0,10))
  
  }

  return (
    <FormField
          control={form.control}
          name={!accesoryKey? fieldName: accesoryKey }
          render={({ field }) => (
            <FormItem className={className.item || style}>
                <FormLabel className={`capitalize ${className.label}`}>{fieldName} {optional && (<span className="text-gray font-light"> (Optional) </span>)}</FormLabel>
                <FormControl>
                    <Input placeholder={hint}  disabled={disable} type={type} {...field} />
                </FormControl>
                <FormDescription>
                    {desc}
                </FormDescription>
                <FormMessage />
            </FormItem>
          )}
        />
  )
}

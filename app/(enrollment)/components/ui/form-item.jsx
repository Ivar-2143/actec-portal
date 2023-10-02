import { FormItem, FormField, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form";

export default function FormElement({accesoryKey='', fieldName, label='', hint, desc='', style='w-full', optional=false, disable=false, type='text'}) {
  const form = useFormContext();
  return (
    <FormField
          control={form.control}
          name={!accesoryKey? fieldName: accesoryKey }
          render={({ field }) => (
            <FormItem className={style}>
                <FormLabel className='capitalize'>{fieldName} {optional && (<span className="text-gray font-light"> (Optional) </span>)}</FormLabel>
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

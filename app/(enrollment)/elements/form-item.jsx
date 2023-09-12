import { FormItem, FormField, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function FormElement({control, fieldName, hint, desc=''}) {
  return (
    <FormField
          control={control}
          name={fieldName}
          render={({ field }) => (
            <FormItem>
                <FormLabel className='uppercase'>{fieldName}</FormLabel>
                <FormControl>
                    <Input placeholder={hint} {...field} />
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

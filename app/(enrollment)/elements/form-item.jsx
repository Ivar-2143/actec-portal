import { FormItem, FormField, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function FormElement({control, fieldName, hint, desc='', style='w-full'}) {
  return (
    <FormField
          control={control}
          name={fieldName}
          render={({ field }) => (
            <FormItem className={style}>
                <FormLabel className='capitalize'>{fieldName}</FormLabel>
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

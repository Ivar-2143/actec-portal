import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "react-hook-form";


export default function SelectFormElement({data,accessorKey,label,placeholder,defaultValue = undefined,className = {}}) {
    const form = useFormContext(); 

  return (
    
    <FormField
        control={form.control}
        name={accessorKey}
        render={({ field }) => (
            <FormItem className={className.item}>
                
                <FormLabel className={className.label}>{label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={defaultValue || field.value}>
                <FormControl>
                    <SelectTrigger>
                    <SelectValue placeholder={`Select ${placeholder}`} />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {data.map( item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label || item.title}
                        </SelectItem>
                    )
                    )}
                </SelectContent>
                </Select>
                <FormDescription>
                </FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />
  )
}

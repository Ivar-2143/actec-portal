import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "react-hook-form";


export default function SelectFormElement({data,accessorKey,label,placeholder}) {
    const form = useFormContext(); 
    

  return (
    <FormField
        control={form.control}
        name={accessorKey}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                    <SelectTrigger>
                    <SelectValue placeholder={`Select ${placeholder}`} />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {data.map( item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
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

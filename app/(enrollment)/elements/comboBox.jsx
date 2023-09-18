import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { useFormContext } from "react-hook-form"


/*
 * DATA COMPOSITION 
    -- should consist of label and value 
    *EXAMPLE
    const data = [
        { label: "English", value: "en" },
        { label: "French", value: "fr" },
        { label: "German", value: "de" },
        { label: "Spanish", value: "es" },
        { label: "Portuguese", value: "pt" },
        { label: "Russian", value: "ru" },
        { label: "Japanese", value: "ja" },
        { label: "Korean", value: "ko" },
        { label: "Chinese", value: "zh" },
        
*/
export default function ComboBox({fieldName, desc='',data}) {
    const label = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    const form = useFormContext();

  return (
    <FormField
        control={form.control}
        name={fieldName}
        render={({ field }) => (
            <FormItem className="flex flex-col">
                <FormLabel>{label}</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                                variant="outline"
                                role="combobox"
                                className={cn(
                                "w-full justify-between",
                                !field.value && "text-muted-foreground"
                                )}
                            >
                                <span className="truncate">
                                {field.value
                                    ? data.find(
                                        (data) => data.value === field.value
                                    )?.label
                                    : `Select a ${fieldName}`}
                                </span>
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder={`Search ${label}s...`} />
                            <CommandEmpty>No {label} found.</CommandEmpty>
                            <CommandGroup>
                            {data.map((data) => (
                                <CommandItem
                                value={data.label}
                                key={data.value}
                                onSelect={() => {
                                    form.clearErrors(fieldName)
                                    form.setValue(fieldName, data.value)
                                }}
                                >
                                <Check
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    data.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                />
                                {data.label}
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
                <FormDescription>
                    {desc}
                </FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />
  )
}

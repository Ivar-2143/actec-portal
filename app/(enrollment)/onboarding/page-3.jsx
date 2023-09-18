
import FormElement from '../elements/form-item'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { CalendarIcon, RightArrowIcon } from '@/public/assets/icons'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { years } from '@/lib/form-data';
import { format } from 'date-fns';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useRouter } from 'next/navigation'
import PageHeader from '../elements/page-header'

export default function Page3({form,style}) {
  const title = "A few things to start out"
  const body = "These information will help us classify you more and assign you to a proper place to learn."

  const router = useRouter();

  return (
    <section className={style}> 
      <div className='onboard-content'>
        <PageHeader
          title={title}
          body={body}
        />
        <div className='my-6'>
          <FormElement control={form.control} fieldName='first name' hint='First Name'/>
          <div className='w-full sm:flex gap-4'>
            <FormElement control={form.control} fieldName='middle name' hint='Middle Name'/>
            <FormElement control={form.control} fieldName='last name' hint='Last Name'/>
          </div>
          <div className='w-5/5 sm:flex gap-4'>
            <FormElement control={form.control} fieldName='age' hint='Age' style='w-full sm:w-1/5'/>
            <FormField
              control={form.control}
              name="date of birth"
              render={({ field }) => (
                <FormItem className="w-full sm:w-4/5 flex flex-col">
                  <FormLabel className='py-[5px]' >Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick your birth date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>                                   
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        fromYear={1900}
                        toYear={2023}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
          
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
        </div>
        <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem className="space-y-2 mb-4">
                <FormLabel>Sex</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="male" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Male
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormElement control={form.control} fieldName='civil status' hint='ex. Married or Single'/>
          <FormElement control={form.control} fieldName='citizenship' hint=''/>
          <FormElement control={form.control} fieldName='religion' hint=''/>
        </div>
        <div className='onboard-content onboard-footer justify-between'>

          <Button
                className='md:h-10 md:px-4 md:py-2 
                lg:text-base lg:h-11 lg:rounded-md lg:px-8'
                variant="ghost"
                size="sm"
                onClick={() => router.back() }
            >Previous Step</Button>
            <Button
                className='md:h-10 md:px-4 md:py-2 
                lg:text-base lg:h-11 lg:rounded-md lg:px-8'
                variant="default"
                size="sm"
                disabled={form.getValues('course') === undefined || form.getValues('branch') === undefined || form.getValues('items').length < 1} 
                onClick={() => router.push('?page=4') }
                // disabled={studentType == null || studentType == ''}
            >Next <RightArrowIcon className='ml-2 h-4 w-4 lg:ml-4 lg:h-5 lg:w-5'/></Button>
      </div>
    </section>
  )
}

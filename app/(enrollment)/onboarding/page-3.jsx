
import FormElement from '../elements/form-item'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { CalendarIcon} from '@/public/assets/icons'
import { format } from 'date-fns';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import PageHeader from '../elements/page-header'
import { useFormContext } from 'react-hook-form'
import FormFooterButtons from '../elements/form-footer'

export default function Page3({style}) {
  const title = "A bit about you."
  const body = "We need your personal data to complete your learner’s profile."

  const form = useFormContext();


  return (
    <section className={style}> 
      <div className='onboard-content'>
        <PageHeader
          title={title}
          body={body}
        />
        <div className='my-6'>
          <FormElement fieldName='first name' hint='First Name'/>
          <div className='w-full sm:flex gap-4'>
            <FormElement fieldName='middle name' hint='Middle Name'/>
            <FormElement fieldName='last name' hint='Last Name'/>
          </div>
          <div className='w-5/5 sm:flex gap-4'>
            <FormElement fieldName='age' hint='Age' style='w-full sm:w-1/5'/>
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
          <FormElement fieldName='civil status' hint='ex. Married or Single'/>
          <FormElement fieldName='citizenship' hint=''/>
          <FormElement fieldName='religion' hint=''/>
        </div>
      </div>
      <FormFooterButtons page={4}/>
    </section>
  )
}

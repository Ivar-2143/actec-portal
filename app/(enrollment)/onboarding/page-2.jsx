import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import PageHeader from "../elements/page-header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ComboBox from "../elements/comboBox"
import FormElement from "../elements/form-item"
import { Checkbox } from "@/components/ui/checkbox"
import { checkGroupData } from "@/lib/form-data"
import { useFormContext } from "react-hook-form"
import FormFooterButtons from "../elements/form-footer"

export default function Page2({ style}) {
  const title = "A few things to start out"
  const body = "These information will help us classify you more and assign you to a proper place to learn."

  const comboBoxData = [
    {label:'Caregiving', value:'cg'},
    {label:'Information and Communication Technology', value:'ict'}
  ];

  const form = useFormContext();
  const disable = !form.getValues('course') || !form.getValues('branch')|| form.getValues('items').length < 1;

  return (
    <section className={style}>
      <div className="onboard-content">
        <PageHeader
                  title={ title }
                  body={body}
              />

        <div className="my-6">
          <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Branch</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a branch" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="caloocan">Caloocan</SelectItem>
                      <SelectItem value="apalit">Apalit</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
          />
          <ComboBox data={comboBoxData} fieldName='course'/>
          <div className="w-full relative sm:flex gap-4">
            <FormElement fieldName='scholarship code' hint='0x000' />
            <FormElement fieldName='referral code' hint='02-000-XXXXXX' />
          </div>
          <div className="my-10 sm:my-16">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                
                <FormItem>
                  <div className="mb-4">
                    <FormDescription>
                    Just curious... <FormLabel className=" text-darkGray font-bold">How did you know ACTEC?</FormLabel>
                    </FormDescription>
                  </div>
                  {checkGroupData.map((item) => (
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
          </div>
        </div>
      </div>
      <FormFooterButtons disable={disable} page={3}/>
    </section>
  )
}

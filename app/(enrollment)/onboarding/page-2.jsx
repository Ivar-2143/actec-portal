import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import PageHeader from "../elements/page-header"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ComboBox from "../elements/comboBox"

export default function Page2({form, style}) {
  const title = "A few things to start out"
  const body = "These information will help us classify you more and assign you to a proper place to learn."

  const comboBoxData = [
    {label:'Caregiving', value:'cg'},
    {label:'Information and Communication Technology', value:'ict'}
  ];

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
          <ComboBox data={comboBoxData} form={form} fieldName='course'/>

        </div>
            
      </div>

    </section>
  )
}

import { Calendar } from "@/components/ui/calendar";
import getDayToString from "@/lib/functions/get-day-to-string";
import { format } from "date-fns";


export default function CalendarWidget() {
  return (
    <div className="rounded-lg border bg-white flex justify-center ">
        <Calendar
        disableNavigation
            mode="single"
            className='scale-100 invisible lg:visible'
            classNames={{
                caption_label:'block',
                day_today:'bg-primary text-primary-foreground'
            }}
            
    />
    </div>
  )
}

export function MobileCalendar(){
  return(
    <div className="lg:hidden">
      <h6>Today is {getDayToString(new Date().getDay())},</h6>
      <h4>{format(new Date(),"PPP")}</h4>
    </div>
  )
}

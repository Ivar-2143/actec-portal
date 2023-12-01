import { Calendar } from "@/components/ui/calendar";
import getDayToString from "@/lib/functions/get-day-to-string";
import { cn } from "@/lib/utils";
import { format } from "date-fns";


export default function CalendarWidget({className}) {
  return (
    <div className={cn("rounded-lg border bg-white flex justify-center", className)}>
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

export function MobileCalendar({className}){
  const style = 'lg:hidden';
  return(
    <div className={cn(style,className)}>
      <h6>Today is {getDayToString(new Date().getDay())},</h6>
      <h4 className="font-medium text-xl">{format(new Date(),"PPP")}</h4>
    </div>
  )
}

import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import getDayToString from "@/lib/functions/get-day-to-string";
import { cn } from "@/lib/utils";
import { format } from "date-fns";


export default function CalendarWidget({className}) {
  return (
    <div className={cn("rounded-lg border bg-white flex justify-center py-2 px-2", className)}>
        <Calendar
        disableNavigation
            mode="single"
            className='scale-100 invisible lg:visible w-full'
            classNames={{
                caption_label:'block',
                day_today:'bg-primary text-primary-foreground',
                row: 'flex w-full mt-1 justify-between',
                cell: 'h-8 w-8 text-xl',
                day: cn(buttonVariants({variant: 'ghost'}),
                '"h-8 w-8 p-0 text-base font-normal aria-selected:opacity-100"'),
                head_cell: 'w-8',
                head_row: 'flex justify-between',
                caption: 'text-xl flex justify-center font-bold',
                months: 'w-full'
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

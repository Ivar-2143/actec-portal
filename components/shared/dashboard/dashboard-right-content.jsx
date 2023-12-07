import AnnouncementWidget from "./announcements-widget";
import CalendarWidget from "./calendar-widget";


export default function DashboardRightContent() {
  return (
    <div className='content-right flex flex-col lg:w-[392px] gap-4 h-full' >
        <CalendarWidget />
        <AnnouncementWidget />
      </div>
  )
}

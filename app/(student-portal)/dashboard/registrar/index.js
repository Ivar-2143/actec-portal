import Card from '@/components/shared/card'
import AnnouncementWidget from '@/components/shared/dashboard/announcements-widget'
import CalendarWidget from '@/components/shared/dashboard/calendar-widget'

export default function RegistrarPage() {
  return (
    <div className='grid grid-cols-[repeat(8,minmax(0,1fr))_300px] gap-6 relative w-full'>
        <Card className='col-span-3'>

        </Card>
        <Card className="col-span-5">

        </Card>
        <CalendarWidget />
        <Card className="col-span-4"></Card>
        <Card className="col-span-4"></Card>
        <AnnouncementWidget />
    </div>
  )
}

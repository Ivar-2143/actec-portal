import Card from '@/components/shared/card'
import { MobileCalendar } from '@/components/shared/dashboard/calendar-widget'
import './styles/style.css';
import CardTitle from '@/components/shared/card-title';
import Link from 'next/link';
import { ArrowIcon } from '@/public/assets/icons';
import { ChevronRight } from 'lucide-react';
import PaymentCard from '@/components/shared/dashboard/payment-card';
import GradesCard from '@/components/shared/dashboard/grades-card';


export default function StudentPage() {
  return (
    <>
        <main className='custom-grid'>
            <MobileCalendar className='calendar' />
            <Card className='schedule-card h-64 bg-lightCompany'>
              <CardTitle variant='small'>
                <Link href='#' className='flex items-center gap-1 font-semibold'>
                  Scheduled Classes <ChevronRight />
                </Link>
              </CardTitle>
            </Card>
            <GradesCard className='grades-card' />
            <PaymentCard className='payment-card'/>
            <div className='blogs-card mt-2'>
              <CardTitle variant='xs' className='flex justify-between px-4'>
                Latest Articles & Blogs <Link className='flex items-center text-primary text-xs uppercase font-medium' href='#'>View All <ChevronRight className='font-bold w-5 h-5'/></Link>
                </CardTitle>
                <Card className='h-64 mt-2'>

                </Card>
            </div>
        </main>
    </>
  )
}

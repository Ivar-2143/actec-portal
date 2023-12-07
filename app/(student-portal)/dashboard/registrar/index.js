import Card from '@/components/shared/card'
import AnnouncementWidget from '@/components/shared/dashboard/announcements-widget'
import CalendarWidget from '@/components/shared/dashboard/calendar-widget'
import CardTitle from '@/components/shared/card-title'
import DashboardRightContent from '@/components/shared/dashboard/dashboard-right-content'
import { cn } from '@/lib/utils'
import { ArrowUp, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function RegistrarPage({className}) {
  const students = [{
    type: 'Total',
    count: 1299,
    added: 49
  },{
    type: 'SHS',
    count: 351,
    added: 17
  },{
    type: 'Semestral',
    count: 349,
    added: 9
  },{
    type: 'Shortcourse',
    count: 599,
    added: 21
  }];


  return (
    <main className={cn('flex w-full gap-6',className)}>
     <div className='content-left w-10/12
            grid grid-rows-3 grid-cols-8 gap-6 max-h-[800px]'>
            <Card className='col-span-3 row-span-2'>
              <CardTitle>Students</CardTitle>
              <div className='flex flex-col gap-y-1 mt-4'>
                {students.map(student =>(
                  <StudentCountCard key={student.type} student={student} />
                ))}
              </div>
            </Card>
            <Card className='col-span-5 row-span-2'>
              <CardTitle>Admission</CardTitle>
            </Card>
            <Card className='col-span-4 row-span-1'>
              <CardTitle className='flex justify-between items-baseline'>
                Latest Requests <Link className='flex items-center text-primary text-sm uppercase font-semibold' href='#'>View All <ChevronRight className='font-bold w-6 h-6'/></Link>
              </CardTitle>
              <LatestRequests />
            </Card>
            <Card className='col-span-4 row-span-1'>
              <CardTitle className='flex justify-between items-baseline'>
                Documents <Link className='flex items-center text-primary text-sm uppercase font-semibold' href='#'>View All <ChevronRight className='font-bold w-6 h-6'/></Link>
              </CardTitle>
            </Card>
        </div>
        <DashboardRightContent />
    </main>
  )
}

// ! EXPORT THIS COMPONENT IN THE FUTURE
export function StudentCountCard({student, className}){
  const {type, count, added} = student;
  return (
    <div className={cn('rounded-sm py-[10px] px-4 overflow-x-auto',type === 'Total'? 'bg-company text-white' : 'bg-none',className)}>
      <span className={cn('lg:text-base  min-w-[144px] ', type != 'Total' ? 'text-gray lg:font-medium min-[1330px]:text-lg min-[1330px]:font-semibold' : 'font-medium')}>{type} Students</span>
      <div className='flex items-center justify-between lg:text-xl min-[1330px]:text-3xl font-semibold min-w-[144px]s'>
        <span>{count}</span>
        <span className={cn('flex items-center justify-center w-20 rounded-full py-1 px-1 lg:text-base min-[1330px]text-lg text-lightGreen',type === 'Total'? 'bg-[rgba(255,255,255,0.25)]' : 'bg-[rgba(165,255,55,0.25)]')}><ArrowUp className='w-6 h-6' /> {added}</span>
      </div>
      <span className={cn('uppercase lg:text-[8px] min-[1330px]:text-[10px] w-full min-w-[144px] font-light', type === 'Total'? 'text-[#d9d9d9]' : 'text-gray')}> from last enrollment</span>
    </div>
  )
}

export function LatestRequests({className}){
  const columns = [{
    Header: 'Name',
    accessorKey: 'full_name'
  },{
    Header: 'Documents',
    accessorKey: 'documents',
    style: 'flex justify-center'
  }];
  const data =[{
    id: 1001,
    full_name: 'Ky Angeles',
    documents: 1
  },{
    id: 1002,
    full_name: 'Adrian Jeluz',
    documents: 3
  }]

  return (
    <CustomTable className='mt-2' columns={columns} data={data}/>
  )

}

export function CustomTable({columns,data, className}){
  const celLStyle = 'py-2 px-2';

  return (
      <div className={cn('flex w-full', className)}>
        <table className=' w-full'>
          <thead className='border-b border-border'>
            <tr>
              {columns.map(column =>(
                <td 
                  key={column.accessorKey}
                  className={cn(column.style ?? column.style, celLStyle,'uppercase')}>
                  {column.Header}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(request => (
              <tr key={request.id}>
                {columns.map(column =>(
                  <td className={cn(column.style ?? column.style, celLStyle)} key={column.accessorKey}>{request[column.accessorKey]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export function OldPage(){
  return (
    <div className='grid grid-cols-[repeat(8,minmax(0,1fr))_300px] gap-6 relative w-full'>
        <Card className='col-span-3'>

        </Card>
        <Card className="col-span-5">

        </Card>
        <CalendarWidget />
        <Card className="col-span-4"></Card>
        <Card className="col-span-4"></Card>
        <AnnouncementWidget  />
    </div>
  )
}
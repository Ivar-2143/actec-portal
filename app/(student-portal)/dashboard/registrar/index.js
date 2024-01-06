import Card from '@/components/shared/card'
import AnnouncementWidget from '@/components/shared/dashboard/announcements-widget'
import CalendarWidget from '@/components/shared/dashboard/calendar-widget'
import CardTitle from '@/components/shared/card-title'
import DashboardRightContent from '@/components/shared/dashboard/dashboard-right-content'
import { cn } from '@/lib/utils'
import { ArrowUp, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'

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
            <Card className='col-span-5 row-span-2 w-full'>
              <CardTitle>Admission</CardTitle>
              <AdmissionBoard />
            </Card>
            <Card className='col-span-4 row-span-1'>
              <CardTitle className='flex justify-between items-baseline'>
                <span className="truncate">Latest Requests</span> <Link className='flex items-center text-primary text-sm uppercase font-semibold min-w-max ml-2' href='#'>View All <ChevronRight className='font-bold w-6 h-6'/></Link>
              </CardTitle>
              <LatestRequests />
            </Card>
            <Card className='col-span-4 row-span-1'>
              <CardTitle className='flex justify-between items-baseline'>
                <spanc className="truncate">Documents</spanc> <Link className='flex items-center text-primary text-sm uppercase font-semibold ml-2 min-w-max' href='#'>View All <ChevronRight className='font-bold w-6 h-6'/></Link>
              </CardTitle>
              <div className='flex space-x-2 mt-2'>
                <div className='flex flex-col justify-between gap-2 w-full'>
                  <span className='w-full text-[48px] text-white text-center font-semibold py-2 bg-zinc-700 rounded-md'>32</span>
                  <span>Students</span>
                  <Button>Remind </Button>
                </div>
                <div className='flex flex-col justify-between gap-2 w-full'>
                  <span className='w-full text-[48px] text-white text-center font-semibold py-2 bg-warning rounded-md'>7</span>
                  <span>Documents</span>
                  <Button>Review </Button>
                </div>
              </div>
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
    <div className={cn('rounded-sm py-[10px] px-4 overflow-x-auto truncate',type === 'Total'? 'bg-company text-white' : 'bg-none',className)}>
      <span className={cn('text-lg min-w-[144px] ', type != 'Total' ? 'text-gray  font-semibold' : 'font-medium')}>{type} Students</span>
      <div className='flex items-center justify-between lg:text-xl min-[1124px]:text-3xl font-semibold min-w-[144px]s'>
        <span>{count}</span>
        <span className={cn('flex items-center ml-2 max-w-max justify-center w-20 rounded-full py-1 px-2 lg:text-base min-[1330px]text-lg text-lightGreen',type === 'Total'? 'bg-[rgba(255,255,255,0.25)]' : 'bg-[rgba(165,255,55,0.25)]')}><ArrowUp className='w-6 h-6 mr-1  ' /> {added}</span>
      </div>
      <span className={cn('uppercase text-[10px] w-full min-w-[144px] font-light text-ellipsis overflow-hidden', type === 'Total'? 'text-[#d9d9d9]' : 'text-gray')}> from last enrollment</span>
    </div>
  )
}
export function AdmissionBoard({className}){
  const columns = [{
    Header: 'Name',
    accessorKey: 'full_name',
  },{
    Header: 'date',
    accessorKey: 'date',
    style: 'md:hidden lg:hidden min-[1330px]:table-cell'
  },{
    Header: 'Completion',
    accessorKey: 'completion',
    style: 'truncate max-w-[64px]'
  },{
    Header: 'Status',
    accessorKey: 'status'
  }]

  const data =[{
    full_name: 'Adrian Jeluz',
    date: '10/10/2023',
    completion: '70%',
    status: 'to review',
  },{
    full_name: 'Ky Angeles',
    date: '7/7/2023',
    completion: '100%',
    status: 'to enroll',
  },{
    full_name: 'Aries Maghanay',
    date: '6/6/2023',
    completion: '50',
    status: 'in progress',
  },{
    full_name: 'Popol and Kupa',
    date: '5/5/2023',
    completion: '30',
    status: 'in progress',
  }]

  return(<CustomTable columns={columns} data={data} className='mt-2' />)
}

export function LatestRequests({className}){
  const columns = [{
    Header: 'Name',
    accessorKey: 'full_name'
  },{
    Header: 'Documents',
    accessorKey: 'documents',
    style: 'flex justify-center truncate'
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
  const cellStyle = 'py-2 px-2 overflow-hidden text-ellipsis truncate';

  return (
      <div className={cn('flex w-full overflow-x-hidden', className)}>
        <table className='table-auto w-full'>
          <thead className='border-b border-border'>
            <tr>
              {columns.map(column =>(
                <td 
                  key={column.accessorKey}
                  className={cn(column.style ?? column.style, cellStyle,'uppercase w-max')}>
                  {column.Header}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(request => (
              <tr key={request.id} className='w-full'>
                {columns.map(column =>(
                  <td className={cn(column.style ?? column.style, cellStyle)} key={column.accessorKey}>{column.accessorKey == 'date' ? format(new Date(request[column.accessorKey]),'PP') : request[column.accessorKey] }</td>
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
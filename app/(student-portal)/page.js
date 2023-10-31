import { columns } from '../columns'
import { DataTable } from '@/components/ui/data-table'
import { Applicants } from '../_data/Applicants'
import { redirect } from 'next/navigation'

export default function Home() {

  return (
    <main className="mx-6 my-10
                    md:mr-16 md:ml-14">
      <div className="">
        <DataTable columns={columns} data={Applicants}/>
      </div>
    </main>
  )
}

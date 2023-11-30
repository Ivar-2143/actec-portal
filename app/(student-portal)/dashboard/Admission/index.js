import Card from "@/components/shared/card";
import ProgressCard from "./components/ProgressCard";
import CardTitle from "@/components/shared/card-title";
import DashboardRightContent from "@/components/shared/dashboard/dashboard-right-content";


export default function AdmissionPage() {
  return (
    <>
        <div className='content-left w-10/12
            grid grid-cols-8 gap-6 grid-rows-4'>
            <ProgressCard className='col-span-8 row-span-2' />
            <Card className='col-span-4 row-span-2'>
            <CardTitle variant='small'>Tasks</CardTitle>
            </Card>
            <Card className='col-span-4'>
            <CardTitle variant='xs'> Payment Updates </CardTitle>
            </Card>
            <Card className='col-span-4'>
            <CardTitle variant='xs'> Requirement Updates </CardTitle>
            </Card>
        </div>
        <DashboardRightContent />
    </>
  )
}

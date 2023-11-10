import Card from "@/components/shared/card"
import CardTitle from "@/components/shared/card-title"
import { currencyPhilippinePeso } from "@/lib/functions/currency-philippine-peso"
import { WarningIcon } from "@/public/assets/icons"
import { addDays, format } from "date-fns"
import Link from "next/link"


function Payments() {
  const scholarship = false;
  const breakdowns = [
    {
      label: 'downpayment',
      amount: 7000,
      due_date: '08/15/2024'
    },
    {
      label: '1st month',
      amount: 7394.95,
      due_date: '09/15/2024'
    },
    {
      label: '2nd month',
      amount: 7394.95,
      due_date: '10/15/2024'
    },
    {
      label: '3rd month',
      amount: 7394.95,
      due_date: '11/15/2024'
    }
  ]
  //* reduce params function(total, {amount}) , 0 initial value
  const totalAmount = breakdowns.reduce((total, {amount} )=>
  amount + total, 0)

  return (
    <main className="flex flex-col p-6 gap-2">
      <div className="flex gap-2">
        <WarningIcon className='text-2xl' />
        <span>Paid already? Don&#39;t forget to submit your payment receipt. Click <Link href='/payments/receipt-form' className="underline text-company">here</Link ></span>
      </div>
      <Card className='p-4 flex flex-col gap-4'>
        <CardTitle variant="small">Balance</CardTitle>
        <Card className='bg-warning flex flex-col p-2 gap-2'>
          <span><b>Due: </b>{format(addDays(new Date(),7),"PP")}</span>
          <span><b>Amount: </b>{currencyPhilippinePeso.format(5660.15)}</span>
        </Card>
        <Card className='flex flex-col gap-4 p-[0px]'>
          <div className="flex justify-between pt-1 pb-1 border-border border-b-2 px-2">
            <span className="text-sm uppercase">due date</span> 
            <span className="text-sm uppercase">amount</span>
          </div>
          {breakdowns.map(payment =>(
            <div className="flex justify-between px-2" key={payment.label}>
              <span className="">{format(new Date(payment.due_date),'PP')}</span>
              <span className="">{currencyPhilippinePeso.format(payment.amount)}</span>
            </div>
          ))}
        </Card>
        <Card className='p-[0px]'>
          {scholarship? <h2>You have a discount</h2>: null}
          <Card className='p-2 bg-[#E6E6E6]'>
            <span>
            <b>Total Balance: </b>
            {currencyPhilippinePeso.format(totalAmount)}
            </span>
          </Card>
        </Card>
      </Card>
    </main>
  )
}

export default Payments
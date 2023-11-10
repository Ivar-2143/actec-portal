
import Card from "@/components/shared/card";
import CardTitle from "@/components/shared/card-title";
import { currencyPhilippinePeso } from "@/lib/functions/currency-philippine-peso";
import { ArrowIcon } from "@/public/assets/icons";

export default function ReceiptForm() {
  return (
    <main className="flex flex-col p-6 gap-2">
      <Card>
        <CardTitle variant="xs">
          You are paying...
        </CardTitle>
        <Card className=' flex justify-between items-center text-white bg-primary py-2 px-4 mt-2'>
          <div>
            <h6 className="text-sm font-medium">Downpayment</h6>
            <span className="text-xs">Amount: {currencyPhilippinePeso.format(7000)}</span>
          </div>
          <ArrowIcon className='text-xl ' />
        </Card>
      </Card>
      <Card>
        <CardTitle variant="small">
          Payment
        </CardTitle>
      </Card>
    </main>
  )
}

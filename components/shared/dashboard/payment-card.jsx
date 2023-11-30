import { ChevronRight } from "lucide-react"
import Card from "../card"
import CardTitle from "../card-title"
import Link from "next/link"
import { cn } from "@/lib/utils"


export default function PaymentCard({className}) {
    const style = 'h-24'

    return (
    <>
        <Card className={cn(style,className)}>
            <CardTitle variant='xs' className='flex justify-between items-end'>Payment <Link className='flex items-center text-primary text-xs uppercase font-medium' href='#'>View All <ChevronRight className='font-bold w-5 h-5'/></Link></CardTitle>
        </Card>
    </>
  )
}

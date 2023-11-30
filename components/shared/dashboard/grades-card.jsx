import { cn } from "@/lib/utils"
import Card from "../card"
import CardTitle from "../card-title"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function GradesCard({className}) {
    const style = 'h-24'

    return (
    <>
        <Card className={cn(style,className)}>
            <CardTitle variant='xs' className='flex justify-between items-end'>
                Grades
                <Link className='flex items-center text-primary text-xs uppercase font-medium' href='#'>
                    View All <ChevronRight className='font-bold w-5 h-5'/>
                </Link>
            </CardTitle>
        </Card>
    </>
    )
}

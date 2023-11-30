import { cn } from "@/lib/utils"

export default function Card({className,children}) {

  const style = `bg-white rounded-md p-4 sm:p-6 relative
  ${className}  `

    return (
    <div className={cn(style,className)} >
        {children}
    </div>
  )
}

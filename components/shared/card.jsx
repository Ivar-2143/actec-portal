

export default function Card({className,children}) {



    return (
    <div className={` bg-white rounded-md p-6
            ${className}`} >
        {children}
    </div>
  )
}

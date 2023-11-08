"use client"

import { ArrowIcon } from "@/public/assets/icons";
import { usePathname } from "next/navigation";

export default function Crumbs() {
    const path = usePathname();
    const paths = path.split('/');
    console.log(paths)

  return (
    <div className='crumbs capitalize'>
        <h2 className="text-base md:text-xl font-bold text-darkGray">Student Portal</h2>
        
        {path === '/' ? 
        (<>
          <ArrowIcon className="text-sm" />
          Home
        </>) : null}
        {paths.map( path => {
          if(path != ''){
            return (
              <>
                <ArrowIcon className='text-sm'/>
                {path}
              </>
            )
          }
        })}
    </div>
  )
}

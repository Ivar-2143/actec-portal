"use client"

import { ArrowIcon } from "@/public/assets/icons";
import { usePathname } from "next/navigation";

export default function Crumbs() {
    const path = usePathname();


  return (
    <div className='crumbs'>
        <h2 className="text-base md:text-xl font-bold text-darkGray">Student Portal</h2>
        <ArrowIcon className="text-sm" />
        {path === '/' ? 'home' : path.split('/')}
    </div>
  )
}

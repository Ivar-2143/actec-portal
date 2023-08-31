import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function SideBarIcon({icon,label,link}) {
    const pathname = usePathname();

  return (
    <Link href={link}>
        <div className={`sidenav-icon text-[32px] ${pathname === link? 'active-link': ''}`}>
            {icon} 
            <span className='nav-icon-label'>
                    {label}
            </span> 
         </div>
    </Link>
  )
}

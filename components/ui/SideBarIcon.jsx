
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function SideBarIcon({icon,label,link}) {
  const pathname = usePathname()

  return (
    <Link href={link} >
        <div className={`sidenav-icon ${pathname === link? 'active-link': ''}`}>
            {icon} 
            <span className='nav-icon-label'>
              {label}
            </span> 
        </div>
    </Link>
  )
}

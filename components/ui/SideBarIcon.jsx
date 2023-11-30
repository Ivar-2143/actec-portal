
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function SideBarIcon({icon,label,link}) {
  const pathname = usePathname()
  let active = false;

  active = pathname === link;
  if(pathname.lastIndexOf('/') !== 0) {
    active = pathname.startsWith(link) && link.length > 1
  }
  
  return (
    <Link href={link} >
        <div className={`sidenav-icon ${active ? 'active-link': ''}`}>
            {icon} 
            <span className='nav-icon-label'>
              {label}
            </span> 
        </div>
    </Link>
  )
}

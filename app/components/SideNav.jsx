"use client"
import Link from 'next/link';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { HomeIcon, RibbonIcon, CalendarIcon, 
  DebitCardIcon, DropboxIcon, FolderIcon, 
  StudentIcon, UserIcon, SettingsIcon,
  MegaphoneIcon, ExitIcon, ArrowIcon } from '@/public/assets/icons';

export default function SideNav() {
  const [isCollpased, setCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const SideBarIcon = ({icon,label,link}) => (
    
    <Link href={link}>
        <div className={`sidenav-icon text-[32px] ${pathname === link? 'active-link': ''}`}>
            {icon} 
            <span className='nav-icon-label'>
                {label}
            </span> 
            {/* {!isCollpased && (
              
            )} */}
        </div>
    </Link>
  );
  
  return (
    <div className={`side-nav group/container ${isCollpased ? 'nav-collapsed': ''}`}>
      <button 
      className={`top-[64px] right-[-16px] absolute 
      w-8 h-8 text-white text-2xl
      rounded-3xl bg-darkGray
      ${isCollpased? 'rotate-0' : 'rotate-180' }
      `}
      onClick={()=>{
        setCollapsed(prev => (!prev));
      }}>
        <ArrowIcon className="mx-auto" />
      </button>

      <div className="portalLinks">
        <SideBarIcon icon={<HomeIcon />} label="Home" link="/"/>
        <SideBarIcon icon={<RibbonIcon />} label="Grades" link="/grades"/>
        <SideBarIcon icon={<CalendarIcon />} label="Schedule" link="/schedule"/>
        <SideBarIcon icon={<DebitCardIcon />} label="payments" link="/payments"/>
        <SideBarIcon icon={<DropboxIcon />} label="requests" link="/requests"/>
        <SideBarIcon icon={<FolderIcon />} label="documents" link="/documents"/>
        <SideBarIcon icon={<StudentIcon />} label="student information" link="/student-info"/>
      </div>
      <div className="accountLinks">
        <SideBarIcon icon={<UserIcon />} label="profile" link="/profile"/>
        <SideBarIcon icon={<SettingsIcon />} label="settings" link="/settings"/>
        <SideBarIcon icon={<MegaphoneIcon />} label="announcements" link="/announements" />
          
        <div className="
        flex items-center gap-4
        p-3 w-auto mx-5 rounded-md text-gray text-[32px] cursor-pointer
        group-[.nav-collapsed]/container:w-14
        ">
          <ExitIcon />
          {!isCollpased && (
              <span className='nav-icon-label text-black'>
                Logout
              </span>
            )}
        </div>
      </div>
    </div>
  )
}




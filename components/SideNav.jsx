"use client"

import { useState } from 'react';
import SideBarIcon from './ui/SideBarIcon';
import { HomeIcon, RibbonIcon, CalendarIcon, 
  DebitCardIcon, DropboxIcon, FolderIcon, 
  StudentIcon, UserIcon, SettingsIcon,
  MegaphoneIcon, ExitIcon, ArrowIcon, BurgerIcon, CloseIcon } from '@/public/assets/icons';
import { Button } from './ui/button';
import { XIcon } from 'lucide-react';





export default function SideNav() {
  const [isCollpased, setCollapsed] = useState(true);
  const [nav, setNav] = useState(false);

  const portalLinks = [{
    path: '/',
    icon: <HomeIcon />,
    label: 'home',
  },{
    path: '/grades',
    icon: <RibbonIcon />,
    label: 'grades',
  },{
    path: '/schedule',
    icon: <CalendarIcon />,
    label: 'schedule',
  },{
    path: '/payments',
    icon: <DebitCardIcon />,
    label: 'payments',
  },{
    path: '/requests',
    icon: <DropboxIcon />,
    label: 'requests',
  },{
    path: '/documents',
    icon: <FolderIcon />,
    label: 'documents',
  },{
    path: '/student-info',
    icon: <StudentIcon />,
    label: 'student information',
  }]


  
  return (

    //* Desktop Navigation

    <>
      <nav className={`side-nav group/container ${isCollpased ? 'nav-collapsed': ''}`}>
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
          <h2 className="text-primary text-2xl font-extrabold mx-auto my-4">
            ACTEC
          </h2>
          {portalLinks.map((link) =>{
            return(
              <SideBarIcon key={link.path} icon={link.icon} label={link.label} link={link.path}/>
            )
          })}
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
              <span className='nav-icon-label text-black'>
                Logout
              </span>
          </div>
        </div>
      </nav>

      
      {/* 
        Mobile Navigation
      */}
      
          <button
            onClick={()=>{
              setNav(prev => (!prev));
              console.log(nav)
            }}
            className='text-3xl text-white relative left-6 top-[24px]
            md:left-14 lg:hidden
            '
          >
            <BurgerIcon />
          </button>
        <nav className={`mobile-nav ${(nav)? 'visible': 'invisible'}`}>
          <button 
            onClick={()=>{
              setNav(prev => (!prev));
              console.log(nav)
            }}
            className='text-3xl my-6 mx-4'
          >
            <CloseIcon />
          </button>

          <div className='flex flex-col justify-between h-[calc(100%-96px)]'>
            <div className="portalLinks">
              {portalLinks.map((link) =>{
                return(
                  <SideBarIcon key={link.path} icon={link.icon} label={link.label} link={link.path}/>
                )
              })}
            </div>
            <div className="accountLinks">
              <SideBarIcon icon={<UserIcon />} label="profile" link="/profile"/>
              <SideBarIcon icon={<SettingsIcon />} label="settings" link="/settings"/>
              <SideBarIcon icon={<MegaphoneIcon />} label="announcements" link="/announements" />
                
              <div className="
              flex items-center gap-4
              p-3 w-auto mx-5 rounded-md text-gray text-2xl cursor-pointer
              group-[.nav-collapsed]/container:w-14
              ">
                <ExitIcon />
                  <span className='nav-icon-label text-black'>
                    Logout
                  </span>
              </div>
            </div>
          </div>
        </nav>
    </>
  
  )
}




import { CalendarIcon, DebitCardIcon, DropboxIcon, FolderIcon, HomeIcon, RibbonIcon, StudentIcon } from "@/public/assets/icons"
import SideBarIcon from "../ui/SideBarIcon"

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


export default function StudentNavigation() {
  return (
    <>
        {portalLinks.map((link) =>{
            return(
                <SideBarIcon key={link.path} icon={link.icon} label={link.label} link={link.path}/>
            )
        })}
    </>
  )
}

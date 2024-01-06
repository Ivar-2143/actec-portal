import { CalendarIcon, DebitCardIcon, DropboxIcon, EnrollmentIcon, FolderIcon, HomeIcon, RibbonIcon, StudentIcon } from "@/public/assets/icons"
import SideBarIcon from "../ui/SideBarIcon"

const portalLinks = [{
    path: '/',
    icon: <HomeIcon />,
    label: 'home',
  },{
    path: '/manage-grades',
    icon: <RibbonIcon />,
    label: 'grades',
  },{
    path: '/manage-schedules',
    icon: <CalendarIcon />,
    label: 'schedule',
  },{
    path: '/manage-enrollees',
    icon: <EnrollmentIcon />,
    label: 'payments',
  },{
    path: '/manage-requests',
    icon: <DropboxIcon />,
    label: 'requests',
  },{
    path: '/manage-requirements',
    icon: <FolderIcon />,
    label: 'requirements',
  },{
    path: '/student-informations',
    icon: <StudentIcon />,
    label: 'student information',
  }]


export default function RegistrarNavigation() {
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

import { DebitCardIcon, FolderIcon, HomeIcon } from "@/public/assets/icons"
import SideBarIcon from "../ui/SideBarIcon"


function EnrolleeNavigation() {
    const links = [{
        path: '/',
        icon: <HomeIcon />,
        label: 'home',
      },{
        path:'/payments',
        icon: <DebitCardIcon />,
        label:'payments',
      },{
        path:'/requirements',
        icon:<FolderIcon />,
        label:'requirements',
      }
    ]

  return (
    <>
        {links.map(link => (
            <SideBarIcon key={link.path} icon={link.icon} label={link.label} link={link.path}/>
        ))}
    </>
  )
}

export default EnrolleeNavigation
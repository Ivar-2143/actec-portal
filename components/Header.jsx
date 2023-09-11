
import { BellIcon, BurgerIcon } from "@/public/assets/icons";
import Crumbs from "./ui/Crumbs";


export default function Header() {
    

  return (
    <>
        <section className='header'>
            <div className="header-bar">
                <div className="left-side">
                    <span className="text-xl lg:hidden ml-10">ACTEC</span>
                    <div className="desktop-crumb hidden lg:block">
                        <Crumbs />
                    </div>
                </div>
                
                <div className='right-side'>
                    <BellIcon className="text-white lg:text-darkGray" />
                    <div className='user-header-btn'>
                        <div className="circle"></div>
                        <div className="circle-user-info">
                            Adrian Jeluz 
                            <span className="text-[10px]">Caloocan - Student</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-crumb flex lg:hidden">
                <Crumbs />
            </div>
            
        </section>
    </>
  )
}




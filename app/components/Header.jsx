import { BellIcon, BurgerIcon } from "@/public/assets/icons";
import Crumbs from "./ui/Crumbs";


export default function Header() {

  return (
    <>
        <section className='header'>
            <div className="header-bar">
                <div className="left-side">
                    <BurgerIcon className='md:hidden' />
                    <span className="text-xl md:hidden">ACTEC</span>
                    <div className="desktop-crumb hidden md:block">
                        <Crumbs />
                    </div>
                </div>
                
                <div className='right-side'>
                    <BellIcon className="text-white md:text-darkGray" />
                    <div className='user-header-btn'>
                        <div className="circle"></div>
                        <div className="circle-user-info">
                            Adrian Jeluz 
                            <span className="text-[10px]">Caloocan - Student</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-crumb flex md:hidden">
                <Crumbs />
            </div>
        </section>
    </>
  )
}




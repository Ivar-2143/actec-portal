import '@/app/globals.css';
import { Inter } from 'next/font/google'
import NavHead from './elements/nav-head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Actec',
  description: '',
}

export default function OnboardingLayout({ children }) {

  return (
    <html lang="en">
      <body className={` 
        flex flex-col gap-2 
        bg-white w-screen h-screen relative overflow-auto
        lg:flex-row
      sm:bg-plat 
        ${inter.className}
      `}>
        <div className='relative mb-4   bg-white
        sm:h-[144px] sm:my-4 sm:mx-6 sm:px-4 sm:max-lg:rounded-md sm:overflow-hidden
        lg:left-0 lg:top-0 lg:mx-0 lg:my-0 lg:w-[480px] lg:max-w-[640px] '>
          <NavHead />
        </div>
        <div className='w-full px-6 relative z-0
                lg:px-8'>
          {children}
        </div>
      </body>
    </html>
  )
}

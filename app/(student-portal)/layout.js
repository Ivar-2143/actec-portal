
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Actec Portal',
  description: '',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`
        flex bg-plat w-screen h-screen relative overflow-hidden
        ${inter.className}
      `}>
        <div className='nav-container z-50'>
          <SideNav />
        </div>
        <div className='w-full lg:w-[calc(100%-96px)] relative z-0 overflow-y-auto' id='main-screen'>
          <Header />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  )
}

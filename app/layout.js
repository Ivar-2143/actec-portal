
import Header from '../components/Header'
import SideNav from '@/components/SideNav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Actec Portal',
  description: '',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`
        flex bg-plat w-screen h-screen relative overflow-auto
        ${inter.className}
      `}>
        <div className='nav-container z-50'>
          <SideNav />
        </div>
        <div className='w-full lg:w-[calc(100%-96px)] relative z-0'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

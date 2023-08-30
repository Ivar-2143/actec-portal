import SideNav from './components/SideNav'
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
        flex bg-plat
        ${inter.className}
      `}>
        <div className='nav-container'>
          <SideNav />
        </div>
        {children}
        </body>
    </html>
  )
}

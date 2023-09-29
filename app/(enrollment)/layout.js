import '@/app/globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Actec',
  description: '',
}

export default function OnboardingLayout({ children }) {

  return (
    <html lang="en">
      <body className={`bg-white w-screen h-screen relative overflow-auto sm:bg-plat 
        ${inter.className}
      `}>
        {children}
      </body>
    </html>
  )
}

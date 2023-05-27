import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
    console.log('Recieved classname', className);
  return (
    <>
      <NavBar />
      <div className={`${className} ${inter.className}`}>{children}</div>
    </>
  )
}

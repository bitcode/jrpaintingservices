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
  return (
    <>
      <NavBar />
      <div className={`max-w-1800 mx-auto ${className} ${inter.className}`}>{children}</div>
    </>
  )
}

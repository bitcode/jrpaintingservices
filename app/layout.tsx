import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JR Painting Services',
  description: 'Professional painting company that provides high quality work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <div className={inter.className}>{children}</div>
    </>
  )
}

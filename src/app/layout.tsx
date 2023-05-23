
import Navbar from './components/Navbar'
import User from './components/User'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clone TWITCH',   // Titre onglet
  description: 'Projet de groupe React/Next JS : Clone de Twitch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />

        <User />    
    
        {children}
      </body>
    </html>
  )
}

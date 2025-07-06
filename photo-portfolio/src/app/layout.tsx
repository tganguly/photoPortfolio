import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Photo Portfolio',
  description: 'Professional photography portfolio showcasing stunning visuals and authentic emotions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* Navbar component can be included here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer content can be added here */}
        </footer>
      </body>
    </html>
  )
}

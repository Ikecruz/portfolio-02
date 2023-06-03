
import { MyCursor } from '@/components/AnimatedCursor/AnimatedCursor'
import './globals.css'
import { Mina } from 'next/font/google'

const mina = Mina({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Onyeka Ikedinobi',
  description: 'Portifolio of Ikedinobi Onyeka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mina.className}>
        <MyCursor>
          {children}
        </MyCursor>
      </body>
    </html>
  )
}

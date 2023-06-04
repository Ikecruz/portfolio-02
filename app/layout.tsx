
import { MyCursor } from '@/components/AnimatedCursor/AnimatedCursor'
import './globals.css'
import { Marcellus, Mina } from 'next/font/google'

const mina = Mina({ weight: "700", subsets: ['latin'] })
const marcellus = Marcellus({ weight: "400", subsets: ['latin'] })

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
      <body className={marcellus.className}>
        <MyCursor>
          {children}
        </MyCursor>
      </body>
    </html>
  )
}

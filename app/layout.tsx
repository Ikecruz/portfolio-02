
import { MyCursor } from '@/components/AnimatedCursor/AnimatedCursor'
import './globals.css'
import { Marcellus } from 'next/font/google'
import { Metadata } from 'next'

const marcellus = Marcellus({ weight: "400", subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ikecruz.dev/"),
  title: 'Onyeka Ikedinobi - Software Engineer',
  description: 'Explore the portfolio of Onyeka Ikedinobi, a skilled full-stack software engineer. Witness impressive projects and skills. Connect for collaborations and exciting software opportunities.',
  openGraph: {
    title: "Onyeka Ikedinobi - Software Engineer",
    description: 'Explore the portfolio of Onyeka Ikedinobi, a skilled full-stack software engineer. Witness impressive projects and skills. Connect for collaborations and exciting software opportunities.',
    siteName: "Onyeka Ikedinobi",
    url: "https://ikecruz.dev",
    locale: "en_US",
  },
  twitter: {
    title: "Onyeka Ikedinobi - Software Engineer",
    description: 'Explore the portfolio of Onyeka Ikedinobi, a skilled full-stack software engineer. Witness impressive projects and skills. Connect for collaborations and exciting software opportunities.',
    site: "Onyeka Ikedinobi",
    card: "summary_large_image" as "app",
    creator: "@ikxcrxz",
  }
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

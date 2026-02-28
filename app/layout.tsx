import type { Metadata } from 'next'
import {
  Inter,
  DM_Sans,
  Playfair_Display,
  Space_Grotesk,
  Merriweather,
  Raleway,
  Source_Serif_4,
  Work_Sans,
} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-merriweather' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif' })
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' })

const fontVars = [
  inter, dmSans, playfair, spaceGrotesk,
  merriweather, raleway, sourceSerif, workSans,
].map((f) => f.variable).join(' ')

export const metadata: Metadata = {
  title: 'Decoupled Examples',
  description: 'A growing collection of AI-generated example SPA websites built with reusable paragraph components.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontVars} ${inter.className}`}>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}

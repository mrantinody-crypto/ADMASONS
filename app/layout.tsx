import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Ad Masons | Digital Marketing Agency — Indore',
  description: 'Ad Masons is a performance-first digital marketing agency in Indore helping brands grow through social media, paid ads, SEO, and lead generation.',
  generator: 'v0.app',
  keywords: ['digital marketing agency Indore', 'social media marketing', 'performance ads', 'lead generation', 'Ad Masons'],
  icons: {
    icon: [
      {
        url: '/admasons-logo.png',
      },
    ],
    apple: '/admasons-logo.png',
  },
  openGraph: {
    title: 'Ad Masons | Digital Marketing Agency — Indore',
    description: 'Ad Masons is a performance-first digital marketing agency in Indore helping brands grow through social media, paid ads, SEO, and lead generation.',
    type: 'website',
    siteName: 'Ad Masons',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

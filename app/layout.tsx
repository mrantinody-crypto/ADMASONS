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
  title: 'The AdMasons | Premium Digital Marketing Agency',
  description: 'The AdMasons is a performance-first digital marketing agency helping brands grow through social media, paid ads, SEO, and lead generation.',
  generator: 'v0.app',
  keywords: ['digital marketing agency', 'social media marketing', 'performance ads', 'lead generation', 'The AdMasons'],
  icons: {
    icon: [
      {
        url: '/admasons-logo.jpeg',
      },
    ],
    apple: '/admasons-logo.jpeg',
  },
  openGraph: {
    title: 'The AdMasons | Premium Digital Marketing Agency',
    description: 'The AdMasons is a performance-first digital marketing agency helping brands grow through social media, paid ads, SEO, and lead generation.',
    type: 'website',
    siteName: 'The AdMasons',
  },
}

export const viewport: Viewport = {
  themeColor: '#08080C',
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

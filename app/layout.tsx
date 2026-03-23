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
  title: 'Ad Masons | Digital Marketing Agency',
  description: 'Ad Masons is a digital marketing agency helping brands grow with performance marketing, branding, and high-converting strategies.',
  generator: 'v0.app',
  keywords: ['digital marketing', 'performance marketing', 'branding', 'web design', 'social media marketing', 'lead generation', 'Ad Masons'],
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TC5sBptz2xofTBYYkvKa6AK7BdNzMu.png',
      },
    ],
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TC5sBptz2xofTBYYkvKa6AK7BdNzMu.png',
  },
  openGraph: {
    title: 'Ad Masons | Digital Marketing Agency',
    description: 'Ad Masons is a digital marketing agency helping brands grow with performance marketing, branding, and high-converting strategies.',
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

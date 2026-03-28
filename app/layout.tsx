import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'The AdMasons | Performance Marketing & Growth Consulting',
  description: 'We engineer growth systems for brands that sell online. Performance marketing, marketplace growth, and full-funnel brand architecture across Amazon, Google, Meta & Quick Commerce. Serving India, UAE, UK & USA.',
  keywords: ['performance marketing agency', 'amazon ads management', 'marketplace growth', 'google ads agency', 'meta ads agency', 'ecommerce growth', 'The AdMasons', 'digital marketing India', 'digital marketing UAE'],
  icons: {
    icon: [{ url: '/admasons-logo.jpeg' }],
    apple: '/admasons-logo.jpeg',
  },
  openGraph: {
    title: 'The AdMasons | Performance Marketing & Growth Consulting',
    description: 'We engineer growth systems for brands that sell online. Performance marketing, marketplace growth, and full-funnel brand architecture across Amazon, Google, Meta & Quick Commerce.',
    type: 'website',
    siteName: 'The AdMasons',
    url: 'https://www.admasons.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AdMasons | Performance Marketing & Growth Consulting',
    description: 'We engineer growth systems for brands that sell online.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1B2A4A',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The AdMasons",
              "description": "Performance marketing and growth consulting agency serving brands across India, UAE, UK & USA.",
              "url": "https://www.admasons.com",
              "telephone": "+91-7000-799-396",
              "email": "hello@admasons.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Indore",
                "addressCountry": "IN"
              },
              "areaServed": ["India", "UAE", "UK", "USA"],
              "serviceType": ["Performance Marketing", "Amazon Ads Management", "Google Ads", "Meta Ads", "Marketplace Growth"]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

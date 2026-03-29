import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteShell } from '@/components/site-shell'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.admasons.com'),
  title: 'The AdMasons | Performance Marketing & Growth Agency — India, UAE, UK, USA',
  description: 'We engineer growth systems for ambitious brands. Performance marketing, Amazon PPC, full-funnel strategy across India, UAE, UK & USA. 150+ campaigns, 5× avg ROI.',
  keywords: [
    'performance marketing agency',
    'amazon ads management',
    'marketplace growth',
    'google ads agency india',
    'meta ads agency',
    'ecommerce growth agency',
    'The AdMasons',
    'digital marketing Indore',
    'digital marketing UAE',
    'D2C growth agency',
  ],
  icons: {
    icon: [{ url: '/admasons-logo.jpeg' }],
    apple: '/admasons-logo.jpeg',
  },
  openGraph: {
    title: 'The AdMasons | Performance Marketing & Growth Agency',
    description: 'We engineer growth systems for ambitious brands. Performance marketing, Amazon PPC, full-funnel strategy across India, UAE, UK & USA.',
    type: 'website',
    siteName: 'The AdMasons',
    url: 'https://www.admasons.com',
    images: [{ url: '/admasons-logo.jpeg', width: 1200, height: 630, alt: 'The AdMasons — Performance Marketing & Growth Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The AdMasons | Performance Marketing & Growth Agency',
    description: 'We engineer growth systems for ambitious brands. 150+ campaigns, 5× avg ROI.',
    images: ['/admasons-logo.jpeg'],
  },
  alternates: {
    canonical: 'https://www.admasons.com',
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'The AdMasons',
              description: 'Performance marketing and growth consulting agency serving brands across India, UAE, UK & USA.',
              url: 'https://www.admasons.com',
              telephone: '+91-7770969267',
              email: 'theadmasons@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'ED-184, 3rd Floor, Scheme No. 94, Sector D, Khajrana Square',
                addressLocality: 'Indore',
                addressRegion: 'Madhya Pradesh',
                postalCode: '452016',
                addressCountry: 'IN',
              },
              areaServed: ['India', 'UAE', 'UK', 'USA'],
              serviceType: [
                'Performance Marketing',
                'Amazon Ads Management',
                'Google Ads',
                'Meta Ads',
                'Marketplace Growth',
                'Brand Strategy',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  )
}

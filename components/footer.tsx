'use client'

import Image from 'next/image'
import { Instagram, Linkedin, MessageCircle } from 'lucide-react'

const navCols = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home',      href: '#hero' },
      { label: 'Services',  href: '#services' },
      { label: 'Results',   href: '#results' },
      { label: 'About',     href: '#about' },
      { label: 'Pricing',   href: '#pricing' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Performance Ads',       href: '#services' },
      { label: 'Amazon & Marketplace',  href: '#services' },
      { label: 'Social Media',          href: '#services' },
      { label: 'Website Development',   href: '#services' },
      { label: 'Lead Generation',       href: '#services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'theadmasons@gmail.com', href: 'mailto:theadmasons@gmail.com' },
      { label: '+91 7770969267',         href: 'https://wa.me/917770969267' },
      { label: 'Indore, India',          href: 'https://maps.google.com/?q=ED-184+Scheme+No+94+Sector+D+Khajrana+Square+Indore' },
    ],
  },
]

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/admasons/', label: 'Instagram' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/company/admasons/', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/917770969267', label: 'WhatsApp' },
]

export function Footer() {
  const scrollTo = (href: string | null) => {
    if (!href) return
    if (href.startsWith('http') || href.startsWith('mailto')) {
      window.open(href, '_blank')
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0F1A2E] pt-16 pb-8">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/admasons-logo.jpeg"
              alt="The AdMasons"
              width={130}
              height={48}
              className="rounded mb-4 object-contain"
            />
            <p className="text-[13.5px] text-white/40 leading-relaxed max-w-[220px]">
              Engineered growth systems for ambitious brands across India, UAE, UK &amp; USA.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-[#F5C518] hover:border-[rgba(245,197,24,0.4)] transition-all duration-200"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/25 mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-[13.5px] text-white/45 hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <span className="text-[13.5px] text-white/45">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(245,197,24,0.3)] to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} The AdMasons. All rights reserved.
          </p>
          <div className="flex gap-4 text-[12px] text-white/25">
            <span>Serving brands across India, UAE, UK &amp; USA</span>
            <span className="text-white/15">·</span>
            <span>Crafted with intention in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

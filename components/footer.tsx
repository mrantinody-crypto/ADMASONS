"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageCircle, ArrowUp } from "lucide-react"

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <defs>
      <linearGradient id="ig-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="20%" stopColor="#fa7e1e" />
        <stop offset="45%" stopColor="#d62976" />
        <stop offset="70%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-gradient-footer)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const services = [
  "Social Media Marketing",
  "Performance Ads",
  "Website Design",
  "Branding",
  "Content Creation",
  "Lead Generation",
]

const socials = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/admasons",
    ariaLabel: "Visit AdMasons Instagram",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/admasons/",
    ariaLabel: "Visit AdMasons LinkedIn",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919203793966",
    ariaLabel: "Message AdMasons on WhatsApp",
  },
]

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-white/[0.06]">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center mb-6">
              <Image
                src="/admasons-logo.jpeg"
                alt="Ad Masons"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              A results-driven marketing agency helping brands grow faster through strategy, creativity, and performance.
            </p>
            <div className="flex gap-4">
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 bg-white/5 border border-white/[0.08] rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-violet-500/10 hover:border-violet-500/30 hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-violet-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s} className="text-muted-foreground text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-foreground">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:theadmasons@gmail.com" className="text-violet-400 text-sm hover:text-violet-300 transition-colors block">
                theadmasons@gmail.com
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ED-184, 3rd Floor, Scheme No. 94,<br />
                Sector D, Khajrana Square, Indore
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.06]">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Ad Masons. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with &hearts; in India
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-25% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(
      navRef.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: 2.2 }
    )
  }, [])

  useEffect(() => {
    const menu = mobileMenuRef.current
    if (!menu) return

    if (mobileOpen) {
      menu.style.display = 'flex'
      gsap.fromTo(menu, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
      const links = menu.querySelectorAll('.mobile-link')
      gsap.fromTo(links, { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.06, duration: 0.3, ease: 'power2.out', delay: 0.1 })
    } else {
      gsap.to(menu, {
        opacity: 0, y: -10, duration: 0.2, ease: 'power2.in',
        onComplete: () => { if (menu) menu.style.display = 'none' },
      })
    }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{ opacity: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-[#1B2A4A]/96 backdrop-blur-md shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
            <div className="relative overflow-hidden rounded-[4px] group-hover:shadow-[0_0_12px_rgba(245,197,24,0.5)] transition-shadow duration-300">
              <Image
                src="/admasons-logo.jpeg"
                alt="The AdMasons"
                width={130}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-link text-[13px] font-medium transition-colors duration-200 pb-0.5 ${
                    isActive ? 'text-[#F5C518]' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/917770969267"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:bg-[#FFD84D] hover:scale-[1.02] transition-all duration-200 group"
          >
            Let&apos;s Talk
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        style={{ display: 'none', opacity: 0 }}
        className="fixed inset-0 z-[99] bg-[#1B2A4A] flex-col items-start justify-center px-8 pt-24 pb-12 lg:hidden"
      >
        <div className="flex flex-col gap-6 w-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`mobile-link text-left text-2xl font-display font-semibold transition-colors duration-200 tracking-tight ${
                  isActive ? 'text-[#F5C518]' : 'text-white/80 hover:text-[#F5C518]'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 w-full">
          <a
            href="https://wa.me/917770969267"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F5C518] text-[#1B2A4A] font-semibold px-6 py-3 rounded-lg text-base w-full justify-center"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </a>
          <p className="mt-6 text-white/30 text-xs tracking-widest uppercase">theadmasons@gmail.com</p>
        </div>
      </div>
    </>
  )
}

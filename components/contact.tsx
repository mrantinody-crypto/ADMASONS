'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Check } from 'lucide-react'

export function Contact() {
  const sectionRef  = useRef<HTMLElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const formRef     = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [sending,   setSending]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)
  const [focused,   setFocused]   = useState<string | null>(null)
  const [values,    setValues]    = useState<Record<string, string>>({ name: '', email: '', message: '' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 85%', once: true } }
      )
      gsap.fromTo(formRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 85%', once: true }, delay: 0.15 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly at theadmasons@gmail.com')
    } finally {
      setSending(false)
    }
  }

  const inputBase = `w-full bg-transparent border-b-2 py-3 text-[15px] text-white placeholder:text-white/30
    focus:outline-none transition-colors duration-300`

  return (
    <section ref={sectionRef} id="contact" className="bg-[#1B2A4A] py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Top CTA block */}
        <div ref={ctaRef} className="text-center mb-20">
          <p className="label mb-4">Get In Touch</p>
          <h2 className="text-[clamp(32px,5vw,60px)] font-display font-bold text-white mb-5">
            Ready to Scale Your Business?
          </h2>
          <p className="text-[16px] text-white/55 max-w-[520px] mx-auto mb-10 leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll audit your current marketing
            and show you exactly where the growth is hiding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/917770969267"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[15px] px-8 py-4 rounded-lg hover:bg-[#FFD84D] hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-[rgba(245,197,24,0.25)]"
            >
              Get Started Now
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://wa.me/917770969267"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 text-white font-semibold text-[15px] px-8 py-4 rounded-lg hover:bg-white/8 transition-all duration-200"
            >
              <MessageCircle size={16} className="text-[#F5C518]" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[13px] text-white/40">
            {['No commitment', 'Free 30-min call', 'Results guaranteed'].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <Check size={12} className="text-[#F5C518]" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-[22px] text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail,    text: 'theadmasons@gmail.com',                    href: 'mailto:theadmasons@gmail.com' },
                  { icon: Phone,   text: '+91 7770969267',                            href: 'https://wa.me/917770969267' },
                  { icon: MapPin,  text: 'ED-184, 3rd Floor, Scheme No. 94, Sector D, Khajrana Square, Indore', href: 'https://maps.google.com/?q=ED-184+Scheme+No+94+Sector+D+Khajrana+Square+Indore' },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(245,197,24,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} strokeWidth={1.5} className="text-[#F5C518]" />
                    </div>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14.5px] text-white/60 hover:text-white transition-colors leading-relaxed"
                    >
                      {text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-[13px] text-white/30 uppercase tracking-[0.12em] font-semibold mb-4">Operating in</p>
              <div className="flex flex-wrap gap-2">
                {['India', 'UAE', 'UK', 'USA'].map((m) => (
                  <span key={m} className="text-[13px] font-medium text-[#F5C518] border border-[rgba(245,197,24,0.3)] px-3 py-1 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div ref={formRef} style={{ opacity: 0 }}>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.3)] flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-[#F5C518]" />
                  </div>
                  <h3 className="font-display font-bold text-[24px] text-white mb-2">Message sent!</h3>
                  <p className="text-[15px] text-white/50">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your full name' },
                  { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <label
                      htmlFor={field.id}
                      className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                        focused === field.id || values[field.id]
                          ? '-top-5 text-[11px] text-[#F5C518] font-semibold tracking-[0.08em] uppercase'
                          : 'top-3 text-[15px] text-white/30'
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      placeholder=""
                      onFocus={() => setFocused(field.id)}
                      onBlur={(e) => { setFocused(null); setValues(v => ({ ...v, [field.id]: e.target.value })) }}
                      onChange={(e) => setValues(v => ({ ...v, [field.id]: e.target.value }))}
                      className={`${inputBase} ${focused === field.id ? 'border-[#F5C518]' : 'border-white/15'}`}
                    />
                  </div>
                ))}

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-200 pointer-events-none ${
                      focused === 'message' || values.message
                        ? '-top-5 text-[11px] text-[#F5C518] font-semibold tracking-[0.08em] uppercase'
                        : 'top-3 text-[15px] text-white/30'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder=""
                    onFocus={() => setFocused('message')}
                    onBlur={(e) => { setFocused(null); setValues(v => ({ ...v, message: e.target.value })) }}
                    onChange={(e) => setValues(v => ({ ...v, message: e.target.value }))}
                    className={`${inputBase} resize-none ${focused === 'message' ? 'border-[#F5C518]' : 'border-white/15'}`}
                  />
                </div>

                {error && (
                  <p className="text-[13px] text-red-400 leading-relaxed">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex items-center gap-2 bg-[#F5C518] text-[#1B2A4A] font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:bg-[#FFD84D] hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                  {!sending && <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

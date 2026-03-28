"use client"

import { ScrollFade } from "@/components/scroll-fade"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { useState, type FormEvent } from "react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-[#1B2A4A] py-20 lg:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — CTA Copy */}
          <ScrollFade>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F5C518] mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
                Ready to Scale?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 max-w-md">
                Book a free 30-minute strategy call. No commitment. Just
                clarity on how to grow your brand online.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#F5C518] px-7 py-3.5 text-sm font-semibold text-[#1B2A4A] transition-colors hover:bg-[#F5C518]/90"
                >
                  Book a Call
                </a>
                <a
                  href="https://wa.me/917000799396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Mail size={16} className="text-[#F5C518]" />
                  hello@admasons.com
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Phone size={16} className="text-[#F5C518]" />
                  +91 7000-799-396
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin size={16} className="text-[#F5C518]" />
                  Indore, India
                </div>
              </div>
            </div>
          </ScrollFade>

          {/* Right — Contact Form */}
          <ScrollFade delay={0.15}>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-lg font-semibold text-white">
                    Thanks for reaching out!
                  </p>
                  <p className="mt-2 text-sm text-white/50">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-white/50 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518]/50 focus:outline-none focus:ring-1 focus:ring-[#F5C518]/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-white/50 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518]/50 focus:outline-none focus:ring-1 focus:ring-[#F5C518]/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-white/50 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#F5C518]/50 focus:outline-none focus:ring-1 focus:ring-[#F5C518]/50 resize-none"
                      placeholder="Tell us about your brand and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#F5C518] py-3 text-sm font-semibold text-[#1B2A4A] transition-colors hover:bg-[#F5C518]/90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  )
}

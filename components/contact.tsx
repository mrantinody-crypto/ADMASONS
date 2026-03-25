"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Send, MessageCircle } from "lucide-react"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const { ref: sectionRef, inView } = useInView(0.05)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setIsSuccess(false)
    try {
      await new Promise(res => setTimeout(res, 1200))
      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setIsSuccess(false)
    setError("")
  }

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-card/50 via-card/50 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/3 rounded-full blur-[120px]" />

      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Have a project in mind? Let''s discuss how we can help you achieve your business goals.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
          {/* Contact form */}
          <div className="bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-white/[0.08] rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type={isLoading ? "button" : "submit"}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 font-semibold py-4 text-lg rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 group"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className={`ml-2 w-5 h-5 ${isLoading ? "animate-spin" : "group-hover:translate-x-1 transition-transform"}`} />
              </button>
              {isSuccess && (
                <div className="text-emerald-400 font-medium text-center mt-2 text-sm">
                  Thank you! We''ll get back to you on WhatsApp or email within 24 hours.
                </div>
              )}
              {error && (
                <div className="text-red-400 font-medium text-center mt-2 text-sm">{error}</div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:theadmasons@gmail.com" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                      theadmasons@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Office</p>
                    <p className="text-muted-foreground">
                      ED-184, 3rd Floor, Scheme No. 94, Sector D, Khajrana Square, Indore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919203793966"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20 group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-lg">Chat on WhatsApp</p>
                <p className="text-white/80 text-sm">Get a free consultation - quick response</p>
              </div>
              <svg className="w-6 h-6 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Map embed */}
            <div className="bg-card/50 border border-white/[0.06] rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.234567890123!2d75.892456!3d22.719568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc7e8b8b8b9%3A0x7e8b8b8b8b8b8b8b!2sED-184%2C%20Scheme%20No%2094%2C%20Sector%20D%2C%20Khajrana%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="Ad Masons Indore Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

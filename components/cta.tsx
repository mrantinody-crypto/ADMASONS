"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

function useInView(threshold = 0.15) {
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

export function CTA() {
  const { ref: sectionRef, inView } = useInView(0.1)

  return (
    <section className="py-28 bg-gradient-to-b from-card/50 via-card/50 to-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] via-transparent to-blue-500/[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/5 rounded-full blur-[150px]" />

      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-violet-500/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">
            Ready to Scale Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Business?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Let&apos;s build something powerful together. Book a free strategy call
            and discover how we can help you dominate your market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 font-semibold px-10 py-4 text-lg group rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
              onClick={e => {
                e.preventDefault()
                const el = document.getElementById("contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/917770969267"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 text-foreground hover:bg-white/5 font-semibold px-10 py-4 text-lg rounded-xl flex items-center justify-center transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5"
            >
              Chat With Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free 30-minute strategy call
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Results guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

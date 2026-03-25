"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, LuxeCart",
    content: "We were burning money on ads with zero clarity. The AdMasons restructured our entire funnel and within 60 days our ROAS went from 1.2x to 4.5x. They don\u0027t just run ads - they build systems.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Priya Patel",
    role: "Founder, GlowUp Naturals",
    content: "Our product launch needed to make noise fast on a tight budget. The AdMasons got us 50K+ reach in the first week through influencer seeding and smart Meta ads. The brand finally felt real.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Amit Kumar",
    role: "Marketing Head, Skyline Realty",
    content: "Before The AdMasons, 70% of our leads were junk. They set up lead scoring, WhatsApp automation, and hyper-local targeting. Now our sales team closes more in a week than they used to in a month.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    name: "Sneha Reddy",
    role: "Owner, Spice Kitchen",
    content: "We opened a new restaurant with zero online presence. The AdMasons handled everything - Google listings, food photography, local ads. Our footfall tripled in 45 days. Worth every rupee.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Vikram Singh",
    role: "Co-founder, BrightMinds Academy",
    content: "Our Instagram was dead at 2K followers. The AdMasons built a reels strategy, ran lead-gen ads, and in 3 months we hit 25K followers with actual inquiries. Not vanity metrics - real business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
]

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

export function Testimonials() {
  const { ref: sectionRef, inView } = useInView(0.05)

  return (
    <section className="py-28 bg-gradient-to-b from-background via-background to-card/50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/3 rounded-full blur-[150px]" />

      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Hear from the brands and founders who have worked with us
            and seen real results.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/5 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${index * 120}ms` : "0ms" }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-violet-500/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-violet-400 fill-violet-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className="w-12 h-12 rounded-full overflow-hidden relative ring-2 ring-violet-500/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 testimonials centered */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group bg-card/50 backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/5 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${(index + 3) * 120}ms` : "0ms" }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-violet-500/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-violet-400 fill-violet-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className="w-12 h-12 rounded-full overflow-hidden relative ring-2 ring-violet-500/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

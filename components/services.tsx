"use client"

import { 
  Megaphone, 
  Target, 
  Globe, 
  Palette, 
  Camera, 
  TrendingUp 
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build a powerful social presence that engages your audience and drives conversions across all platforms.",
  },
  {
    icon: Target,
    title: "Performance Ads",
    description: "Data-driven Meta & Google advertising campaigns that maximize ROI and scale your business profitably.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "High-converting, beautifully designed websites that establish credibility and capture leads 24/7.",
  },
  {
    icon: Palette,
    title: "Branding & Identity Design",
    description: "Create a memorable brand identity that stands out from competitors and resonates with your audience.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Compelling visual and written content that tells your brand story and keeps audiences engaged.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Funnels",
    description: "Automated marketing funnels that capture, nurture, and convert leads into paying customers.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Comprehensive digital marketing solutions tailored to help your business 
            grow faster and dominate your market.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Golden glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-transparent transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                {/* Learn More button */}
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center text-primary font-medium text-sm border border-border px-6 py-3 rounded-md hover:bg-secondary transition-colors"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

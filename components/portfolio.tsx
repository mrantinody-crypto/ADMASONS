"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TechFlow Rebrand",
    category: "Branding",
    description: "Complete brand identity overhaul",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
  },
  {
    title: "E-Commerce Growth",
    category: "Performance Ads",
    description: "5x ROAS campaign strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "SaaS Platform Launch",
    category: "Website",
    description: "High-converting landing pages",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Startup Social Campaign",
    category: "Social Media",
    description: "Viral content strategy",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
  },
  {
    title: "Restaurant Chain",
    category: "Lead Generation",
    description: "Local marketing funnel",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    title: "Fashion Brand",
    category: "Content Creation",
    description: "Full visual identity system",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A showcase of our best projects and successful campaigns 
            that have helped brands achieve their goals.
          </p>
        </div>
        
        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="aspect-[4/3] bg-background relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-14 h-14 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300">
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

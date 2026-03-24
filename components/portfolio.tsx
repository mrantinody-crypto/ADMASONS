"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Brand Identity & Strategy",
    category: "Branding",
    description: "Comprehensive brand identity and positioning for a new e-commerce brand.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
  },
  {
    title: "Performance Marketing Campaign",
    category: "Performance Ads",
    description: "Multi-channel paid ads campaign for a real estate client.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "High-Converting Landing Page",
    category: "Website",
    description: "Landing page design and development for a healthcare provider.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Social Media Growth Campaign",
    category: "Social Media",
    description: "Organic and paid social media growth for an education startup.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
  },
  {
    title: "Local Business Lead Generation",
    category: "Lead Generation",
    description: "Lead funnel and automation for a hospitality business.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    title: "Visual Content & Branding",
    category: "Content Creation",
    description: "Visual content and branding for an FMCG product launch.",
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
                    <a href="#portfolio" className="font-semibold" onClick={e => { e.preventDefault(); const el = document.getElementById('portfolio'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>View Project</a>
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
                    <a href="#portfolio" className="font-semibold" onClick={e => { e.preventDefault(); const el = document.getElementById('portfolio'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>View Project</a>
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
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* View All Projects button */}
        <div className="mt-12 text-center">
          <a
            href="#portfolio"
            className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('portfolio');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Projects
          </a>
        </div>

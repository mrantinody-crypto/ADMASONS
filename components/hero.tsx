"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, BarChart3, Palette } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08080C] via-[#0d0d1a] to-[#08080C]" />

      {/* Soft ambient glows - purple-blue palette */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/6 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/4 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full animate-pulse" />
              Trusted by 100+ Growing Brands
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              We Build Brands That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 relative">
                Dominate
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="url(#hero-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8B5CF6" />
                      <stop offset="0.5" stopColor="#7C3AED" />
                      <stop offset="1" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              the Digital World
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Ad Masons helps businesses scale with performance marketing, branding,
              and high-converting digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/919203793966"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 font-semibold px-8 py-4 text-lg group rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:-translate-y-0.5"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="border border-white/15 text-foreground hover:bg-white/5 font-semibold px-8 py-4 text-lg group rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:-translate-y-0.5"
                onClick={e => {
                  e.preventDefault()
                  const el = document.getElementById("portfolio")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 mt-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">5x</p>
                <p className="text-sm text-muted-foreground mt-1">Average ROI</p>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-4 bg-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-violet-500/5">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Digital marketing team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-violet-500 to-blue-500 text-white p-4 rounded-xl shadow-lg shadow-violet-500/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* -- DUAL CTA PANELS -- */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 lg:mt-20">
          {/* CTA 1 - Performance / Professional - IMPROVED VISIBILITY */}
          <Link
            href="/performance-marketing"
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0e0e1a] p-8 md:p-10 transition-all duration-300 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 rounded-full blur-[80px] group-hover:bg-violet-500/15 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] group-hover:bg-blue-500/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-violet-500/40 transition-all">
                <BarChart3 className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Scale Your Brand
              </h3>
              <p className="text-muted-foreground mb-6">
                For D2C &amp; Performance-Driven Brands
              </p>
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-foreground font-semibold px-6 py-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300">
                Get Performance Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* CTA 2 - Creative / Funky */}
          <Link
            href="/creative-marketing"
            className="group relative overflow-hidden rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/15 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 30%, #a855f7 60%, #ec4899 100%)",
            }}
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-400/20 rounded-full blur-[50px]" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Build a Viral Brand
              </h3>
              <p className="text-white/80 mb-6">
                For Content-First &amp; Social Brands
              </p>
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg group-hover:bg-white group-hover:text-purple-700 transition-all duration-300">
                Explore Creative Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-violet-400 to-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

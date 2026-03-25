"use client"

import Link from "next/link"
import { ArrowRight, ArrowLeft, Sparkles, Instagram, Film, Pen, Megaphone, Heart, Eye } from "lucide-react"

const creativeServices = [
  {
    icon: Instagram,
    title: "Social Media Strategy",
    description: "Scroll-stopping content strategies for Instagram, YouTube, and emerging platforms.",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: Film,
    title: "Video & Reels Production",
    description: "Short-form content that captures attention and drives engagement in under 3 seconds.",
    gradient: "from-purple-500 to-blue-600",
  },
  {
    icon: Pen,
    title: "Brand Identity Design",
    description: "Logos, visual systems, and brand guidelines that make your brand instantly recognizable.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Strategic partnerships with creators who authentically connect with your audience.",
    gradient: "from-orange-500 to-pink-600",
  },
  {
    icon: Heart,
    title: "Community Building",
    description: "Turn followers into fans and fans into advocates with authentic engagement strategies.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Visual Storytelling",
    description: "Photography, graphics, and motion design that tell your brand story beautifully.",
    gradient: "from-violet-500 to-purple-600",
  },
]

const showcaseItems = [
  { label: "Brand Launches", value: "30+", color: "text-pink-400" },
  { label: "Content Pieces/Month", value: "500+", color: "text-purple-400" },
  { label: "Engagement Rate", value: "8.2%", color: "text-blue-400" },
  { label: "Viral Campaigns", value: "25+", color: "text-cyan-400" },
]

const brandPrinciples = [
  {
    title: "Bold, Not Boring",
    description: "We create content that stands out in cluttered feeds. No stock templates — everything is custom-crafted for your brand.",
  },
  {
    title: "Story-First Strategy",
    description: "Every campaign starts with a story. We find the narrative that connects your brand to your audience emotionally.",
  },
  {
    title: "Trend-Aware, Not Trend-Dependent",
    description: "We leverage trends when they fit but build lasting brand equity that doesn't expire when the trend does.",
  },
  {
    title: "Measure the Magic",
    description: "Creativity without data is art. We combine creative excellence with analytics to ensure every piece performs.",
  },
]

export default function CreativeMarketingPage() {
  return (
    <main className="min-h-screen bg-[#08080f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08080f]/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="https://wa.me/919203793966"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-[#08080f] to-pink-900/10" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-purple-300 mb-6 border border-purple-500/20 bg-purple-500/5">
              <Sparkles className="w-4 h-4" />
              Creative Marketing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              We Build Brands{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)' }}
              >
                People Remember
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mb-10">
              Your brand deserves more than templates. We craft bold, scroll-stopping creative 
              strategies that make audiences stop, engage, and remember.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919203793966"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg text-lg transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
              >
                Let&apos;s Build Your Brand
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Stats */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {showcaseItems.map((item) => (
              <div key={item.label} className="text-center">
                <p className={`text-4xl md:text-5xl font-bold ${item.color} mb-2`}>{item.value}</p>
                <p className="text-sm text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Services */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Creative{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
              >
                Services
              </span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              From strategy to execution — everything your brand needs to stand out and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeServices.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(236, 72, 153, 0.05))`,
                  }}
                />
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Storytelling / Brand Principles */}
      <section className="py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-pink-900/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Creative{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #3b82f6)' }}
              >
                Philosophy
              </span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              What makes our creative work different — and why it works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brandPrinciples.map((principle, i) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-3xl font-bold text-transparent bg-clip-text shrink-0"
                    style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{principle.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Creatives Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Content That{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
                >
                  Stops the Scroll
                </span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                We create social media content designed for the way people actually consume it — fast, 
                visual, and thumb-first. From Instagram carousels to YouTube Shorts, every piece is 
                engineered for engagement.
              </p>
              <div className="space-y-4">
                {["Platform-native content (not repurposed)", "Trend-aware creative production", "Consistent brand voice across channels", "Data-informed content calendars"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { bg: 'from-pink-500/20 to-purple-600/20', label: 'Instagram Reels' },
                { bg: 'from-blue-500/20 to-cyan-500/20', label: 'YouTube Shorts' },
                { bg: 'from-purple-500/20 to-pink-500/20', label: 'Brand Graphics' },
                { bg: 'from-orange-500/20 to-red-500/20', label: 'Motion Design' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`bg-gradient-to-br ${item.bg} border border-white/10 rounded-2xl p-6 aspect-square flex items-end hover:scale-[1.02] transition-transform`}
                >
                  <p className="text-sm font-semibold text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bold Typography Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <p className="text-lg text-white/40 mb-4 tracking-widest uppercase">Your brand is more than a logo</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-8">
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #ec4899, #3b82f6, #06b6d4)' }}
            >
              Make It
            </span>
            <br />
            <span className="text-white">Unforgettable.</span>
          </h2>
          <a
            href="https://wa.me/919203793966"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold px-10 py-5 rounded-lg text-lg transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
          >
            Let&apos;s Build Your Brand
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} The AdMasons. All rights reserved.</p>
          <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </main>
  )
}

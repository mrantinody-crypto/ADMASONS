
"use client";

import * as React from "react";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const services = [
  "Social Media Marketing",
  "Performance Ads",
  "Website Design",
  "Branding",
  "Content Creation",
  "Lead Generation",
]

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919203793966" },
]

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center mb-6">
              <img
                src="/admasons-logo.png"
                alt="Ad Masons"
                width={160}
                height={45}
                className="h-10 w-auto"
                style={{ width: 160, height: 45 }}
              />
            </a>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              A results-driven marketing agency helping brands grow faster through 
              strategy, creativity, and performance marketing.
            </p>
            <a 
              href="mailto:theadmasons@gmail.com" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              theadmasons@gmail.com
            </a>
            <div className="mt-2">
              <a href="https://wa.me/919203793966" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">Chat on WhatsApp</a>
            </div>
            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  {React.createElement(social.icon, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                export function Footer(): JSX.Element {
                  const scrollToTop = (): void => {
                    if (typeof window !== "undefined") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  };

                  return (
                    <footer className="bg-background border-t border-border">
                      {/* Main footer */}
                      <div className="container mx-auto px-4 lg:px-8 py-16">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                          {/* Brand column */}
                          <div className="lg:col-span-1">
                            <a href="#home" className="flex items-center mb-6">
                              <img
                                src="/admasons-logo.png"
                                alt="Ad Masons"
                                width={160}
                                height={45}
                                className="h-10 w-auto"
                                style={{ width: 160, height: 45 }}
                              />
                            </a>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              A results-driven marketing agency helping brands grow faster through 
                              strategy, creativity, and performance marketing.
                            </p>
                            <a 
                              href="mailto:theadmasons@gmail.com" 
                              className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                              theadmasons@gmail.com
                            </a>
                            <div className="mt-2">
                              <a href="https://wa.me/919203793966" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">Chat on WhatsApp</a>
                            </div>
                            {/* Social links */}
                            <div className="flex gap-4">
                              {socials.map((social) => (
                                <a
                                  key={social.name}
                                  href={social.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                                  aria-label={social.name}
                                >
                                  {React.createElement(social.icon, { className: "w-5 h-5" })}
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Quick links */}
                          <div>
                            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                              {quickLinks.map((link) => (
                                <li key={link.name}>
                                  <Link
                                    href={link.href}
                                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

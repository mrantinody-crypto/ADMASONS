"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Social Media Marketing",
  "Performance Ads",
  "Website Design",
  "Branding",
  "Content Creation",
  "Lead Generation",
];

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919203793966" },
];

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center mb-6">
              <Image
                src="/admasons-logo.jpeg"
                alt="Ad Masons"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </a>

            <p className="text-muted-foreground mb-4">
              A results-driven marketing agency helping brands grow faster.
            </p>

            <div className="flex gap-4 mt-4">
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <a href="mailto:theadmasons@gmail.com">
              theadmasons@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t">
        © {new Date().getFullYear()} Ad Masons
      </div>

      {/* Back to top */}
      <button onClick={scrollToTop} className="fixed bottom-6 right-6">
        <ArrowUp />
      </button>
    </footer>
  );
}
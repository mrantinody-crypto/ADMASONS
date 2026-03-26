import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"
import { WhyChooseUs } from "@/components/why-choose-us"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <WhyChooseUs />
      <About />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}

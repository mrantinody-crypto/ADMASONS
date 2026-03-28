import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Platforms } from "@/components/platforms"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { WhyChooseUs } from "@/components/why-choose-us"
import { About } from "@/components/about"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Platforms />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

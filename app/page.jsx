// app/page.jsx
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import PricingCard from './components/PricingCard'
import Testimonials from './components/Testimonials'
import CaseStudy from './components/CaseStudy'

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="SEO" description="Optimize your website for Google and increase traffic." />
            <ServiceCard title="PPC" description="Run high-converting Google Ads campaigns." />
            <ServiceCard title="Lead Generation" description="Generate qualified leads for your business." />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingCard />

      {/* Case Studies / Reviews */}
      <CaseStudy />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  )
}

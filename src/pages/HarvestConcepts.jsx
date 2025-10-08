import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FaqAccordion from '../components/FaqAccordion'
import { FiDownloadCloud, FiCheckCircle } from 'react-icons/fi'

const serviceLinks = [
  'Harvest Concepts',
  'Farming Products',
  'Soil Fertilization',
  'Fresh Vegetables',
  'Dairy Production',
  'Product Supplies',
  'Natural Carrots',
  'Nutrition Solutions',
  'Organic Vegetables',
]

export default function HarvestConcepts() {
  return (
    <>
      <Navbar />
      <Hero bg="/about.jpg" badge="Service" titleLine1="Harvest Concepts" titleLine2="" subtitle="" ctaLabel="" />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-200/60">
              <div className="font-semibold text-green-900 mb-3">Our Service</div>
              <div className="space-y-2">
                {serviceLinks.map((name, idx) => (
                  <a
                    key={name}
                    href={idx === 0 ? '/harvest' : '/services'}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm border ${idx === 0 ? 'bg-[#F6F7EE] text-green-900 border-green-200' : 'text-green-900 border-neutral-200/60 hover:bg-amber-50'}`}
                  >
                    <span>{name}</span>
                    <span className="text-amber-600">✳</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#F6F7EE] p-5">
              <div className="text-green-900 font-semibold">Innovative Solutions</div>
              <p className="text-sm text-neutral-700 mt-2">for agriculture</p>
              <p className="text-sm text-neutral-600 mt-3">We deliver data-driven practices to improve yield while preserving soil health and biodiversity.</p>
              <a href="#contact" className="inline-block mt-4 px-4 py-2 rounded-full bg-amber-300 text-green-900 font-semibold">Contact Us Now</a>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-200/60">
              <div className="font-semibold text-green-900 mb-3">Company Profile</div>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-green-900 text-white">
                <FiDownloadCloud /> Download .PDF File
              </button>
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 mt-3 rounded-xl bg-amber-300 text-green-900 font-semibold">
                <FiDownloadCloud /> Download Profile
              </button>
            </div>
          </aside>


          <section className="lg:col-span-8 space-y-10">
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <img src="/service1.png" alt="Harvest Concepts" className="w-full h-[280px] sm:h-[360px] object-cover" />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-900">Why Choose Our Services</h2>
              <p className="text-neutral-700">Our mission is to provide high-impact modern farming solutions, sustainably. We blend agronomic best practices with research-backed methods to maximize yields while protecting the land for future generations.</p>
              <div className="grid sm:grid-cols-3 gap-5 pt-2">
                {[1,2,3].map((n) => (
                  <div key={n} className="rounded-2xl bg-white p-5 shadow-sm border border-neutral-200/60">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-200 text-green-900">
                      <span className="font-semibold">{String(n).padStart(2,'0')}</span>
                    </div>
                    <div className="mt-3 font-semibold text-green-900">{n === 1 ? 'Schedule Your Experience' : n === 2 ? 'Get Professional Advice' : 'Meet Our Expert People'}</div>
                    <p className="text-sm text-neutral-600 mt-1">Consult with our experienced agronomists to plan, test, and implement tailored solutions across your fields.</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-green-900">Modern Technique Work Points</h3>
              <p className="mt-2 text-neutral-700">From soil science to precision irrigation and post-harvest handling, our practices are rooted in measurable outcomes.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm text-neutral-700">
                {[
                  'Make ridge design and mulching for moisture retention',
                  'Healthy cover crops that improve soil structure',
                  'Smart IoT-based farm sensors & analytics',
                  'Natural pest control & bio-fertilizers',
                  'Efficient fertigation with drip systems',
                  'Post-harvest cold chain best practices',
                  'Sustainable tillage & residue management',
                  'Knowledge sharing through field training',
                ].map((txt) => (
                  <div key={txt} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 text-green-700" />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            <FaqAccordion titleLeft="Frequently asked questions" titleRight="People also ask" />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

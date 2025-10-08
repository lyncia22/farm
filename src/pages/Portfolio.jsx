import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const images = [
  '/gallery1.jpg',
  '/about1.jpg',
  '/gallery3.jpg',
  '/blog1.jpg',
  '/spotlight.jpg',
  '/team6.jpg',
  '/about4.jpg',
  '/who.jpg',
  '/team5.jpg',
]

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero
        bg="/about.jpg"
        badge=""
        titleLine1="Portfolio Grid"
        titleLine2=""
        subtitle=""
        ctaLabel=""
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-sm bg-white">
              <img
                src={src}
                alt={`portfolio-${idx + 1}`}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

function SkillCircle({ label, value, size = 120, strokeWidth = 10 }) {
  const radius = (size / 2) - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);
  return (
    <div className="flex flex-col items-center text-green-900">
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F6C453"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
        />
      </svg>
      <div className="-mt-24 sm:-mt-24 text-center rotate-0">
        <div className="text-2xl font-semibold">{value}%</div>
        <div className="text-sm text-neutral-600 mt-1 max-w-[10rem]">{label}</div>
      </div>
    </div>
  )
}

export default function ClaraHenry() {
  return (
    <>
      <Navbar />
      <Hero bg="/about.jpg" badge="Team Member" titleLine1="Clara Henry" titleLine2="" subtitle="" ctaLabel="" />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header card with image + info */}
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
              <img src="/team2.jpg" alt="Clara Henry" className="w-full h-[260px] sm:h-[320px] object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-2xl bg-white shadow-sm border border-neutral-200/60 p-6">
              <div className="text-[11px] uppercase tracking-wide text-amber-700">Senior Professional</div>
              <h2 className="text-2xl md:text-3xl font-semibold text-green-900 mt-1">Clara Henry</h2>
              <p className="text-sm text-neutral-600 mt-2">Duis a arcu quis leo placerat gravida conubia venenatis.</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-green-900">
                <div className="flex items-center gap-2"><FiMapPin className="text-amber-700"/> Old Westbury, NY</div>
                <div className="flex items-center gap-2"><FiPhone className="text-amber-700"/> +1 (212) 255-511</div>
                <div className="flex items-center gap-2"><FiMail className="text-amber-700"/> info@agrimo.com</div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-green-900">
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-green-50"><FiFacebook /></a>
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-green-50"><FiLinkedin /></a>
                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-green-50"><FiInstagram /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Personal information */}
        <section className="mt-10 space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold text-green-900">Personal information</h3>
          <ul className="list-disc pl-5 text-neutral-700 space-y-2">
            <li>Organizes collaborative research and field trials with local farms to adopt climate-resilient practices.</li>
            <li>Expertise in crop rotation design, soil testing, and integrated pest management.</li>
            <li>Leads workshops for growers and agricultural students to transfer practical, modern techniques.</li>
          </ul>
        </section>

        {/* Skills + Awards */}
        <section className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-green-900">Professional Skills</h4>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <SkillCircle label="Analytical Skills" value={75} />
              <SkillCircle label="Farming Skills" value={80} />
              <SkillCircle label="Problem Solving" value={90} />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-green-900">Awards & Honors</h4>
            <ul className="mt-4 text-sm text-neutral-700 space-y-2">
              <li>2019 - 2021: Best of local agricultural farming award</li>
              <li>2021 - 2023: Agricultural excellence award</li>
              <li>2023 - 2024: National agricultural expert award</li>
            </ul>
          </div>
        </section>

        {/* Everything on our farm is grown */}
        <section className="mt-10">
          <h4 className="text-xl font-semibold text-green-900">Everything on our farm is grown</h4>
          <p className="mt-2 text-neutral-700">Sustainable methods ensure healthy soil, efficient water use, and resilient crops. Expert teams collaborate with growers to improve outcomes with smart planning and precise execution.</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>• Select disease-resistant varieties for higher yields and minimal chemical input.</li>
            <li>• Use crop rotation, mulching, and drip irrigation to conserve resources.</li>
            <li>• Optimize harvest timing and post-harvest handling for better shelf life.</li>
          </ul>
        </section>

        {/* Contact form */}
        <section className="mt-10">
          <h4 className="text-xl font-semibold text-green-900">Send a message</h4>
          <form className="mt-4 grid gap-4 bg-[#F6F7EE] p-5 rounded-2xl">
            <textarea className="w-full rounded-xl p-3 border border-neutral-300 min-h-28" placeholder="Message" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl p-3 border border-neutral-300" placeholder="Your Name" />
              <input className="rounded-xl p-3 border border-neutral-300" placeholder="Your Email" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl p-3 border border-neutral-300" placeholder="Subject" />
              <input className="rounded-xl p-3 border border-neutral-300" placeholder="Phone" />
            </div>
            <button type="button" className="self-start inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-300 text-green-900 font-semibold">Submit Now</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}

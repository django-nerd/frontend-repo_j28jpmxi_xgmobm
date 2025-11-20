import React from 'react'

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">About Us</h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              The Gurukulum School Varanasi is committed to providing holistic education rooted in culture, knowledge, and innovation.
              Our teaching philosophy blends traditional ethics with modern learning methods to prepare students for the future.
            </p>
            <h3 className="mt-8 text-xl font-bold text-slate-900">What we believe in</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
              <li className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">Strong academic foundation</li>
              <li className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">Skill-based learning</li>
              <li className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">Value-based education</li>
              <li className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">Child-friendly environment</li>
              <li className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">Personal attention to every learner</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 ring-1 ring-slate-200">
            <p className="text-lg font-semibold text-slate-800">Our Promise</p>
            <p className="mt-3 text-slate-700">
              We nurture curiosity, build confidence, and inspire excellence. With dedicated teachers and a supportive environment,
              every child receives the attention and guidance they need to thrive.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-3xl font-bold text-blue-600">1:30</p>
                <p className="text-sm text-slate-600">Teacher-Student Ratio</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-3xl font-bold text-blue-600">100%</p>
                <p className="text-sm text-slate-600">Board Prep Focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

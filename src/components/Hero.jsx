import React from 'react'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-300 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-4 text-xs font-semibold tracking-wider uppercase text-blue-600">Welcome to</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
              The Gurukulum School Varanasi
            </h1>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              A place where learning meets values, discipline, and modern education. We focus on developing
              confident, responsible, and academically strong students through a balanced approach of academics,
              co-curriculars, and character-building.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
                Explore Programs
              </a>
              <a href="#contact" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-blue-700 font-semibold shadow ring-1 ring-blue-200 hover:bg-blue-50 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white/70 ring-1 ring-slate-200 p-6 shadow-xl">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-blue-100 via-sky-100 to-cyan-100 flex items-center justify-center text-center">
                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold">Varanasi</p>
                  <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-800">Learn • Grow • Lead</p>
                  <p className="mt-3 text-slate-600 max-w-sm mx-auto">Shaping futures with strong academics, skills, and values in a caring environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

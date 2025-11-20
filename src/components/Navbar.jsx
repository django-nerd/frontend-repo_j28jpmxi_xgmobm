import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 ring-1 ring-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500" />
            <span className="font-extrabold text-slate-900">Gurukulum</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#programs" className="hover:text-blue-600">Programs</a>
            <a href="#facilities" className="hover:text-blue-600">Facilities</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href="#faqs" className="hover:text-blue-600">FAQs</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700">Enquire</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

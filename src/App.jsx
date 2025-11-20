import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Facilities from './components/Facilities'
import Contact from './components/Contact'
import FAQs from './components/FAQs'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Contact />
        <FAQs />
      </main>
      <footer className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} The Gurukulum School Varanasi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#programs" className="hover:text-blue-600">Programs</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

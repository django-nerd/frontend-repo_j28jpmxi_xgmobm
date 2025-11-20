import React from 'react'

const faqs = [
  {
    q: 'Do you offer admissions year-round?',
    a: 'Admissions open as per availability.'
  },
  {
    q: 'Do you provide transportation?',
    a: 'Yes, school transport is available in selected routes.'
  },
  {
    q: 'Are extracurricular activities available?',
    a: 'Yes — music, dance, arts, sports, personality development and more.'
  }
]

function FAQs() {
  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">FAQs</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200 open:bg-blue-50/40">
              <summary className="flex cursor-pointer items-center justify-between gap-2 font-medium text-slate-900">
                {item.q}
                <span className="ml-4 text-blue-600 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <p className="mt-3 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs

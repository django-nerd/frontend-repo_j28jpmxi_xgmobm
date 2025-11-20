import React from 'react'

export default function Location() {
  return (
    <section id="location" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">Location</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="space-y-2 text-slate-700">
            <p className="font-semibold text-slate-900">The Gurukulum School Varanasi</p>
            <p>(You can add exact address here.)</p>
            <p>Varanasi, Uttar Pradesh</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white h-64 flex items-center justify-center text-slate-500">
            Google Map embed can go here
          </div>
        </div>
      </div>
    </section>
  )
}

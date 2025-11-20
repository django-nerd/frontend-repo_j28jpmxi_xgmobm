import React from 'react'

const facilities = [
  'Smart classrooms',
  'Experienced & caring teachers',
  'Library & reading spaces',
  'Computer lab',
  'Sports & physical training',
  'Cultural & co-curricular activities',
  'Safe and disciplined campus',
]

function Facilities() {
  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Facilities</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">A safe, supportive, and well-resourced campus that enables effective learning and all-round development.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {facilities.map((item) => (
            <div key={item} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-slate-800">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities

import React from 'react'

const programs = [
  {
    title: 'Kindergarten (Pre-Primary)',
    points: [
      'Activity-based learning',
      'Motor skills development',
      'Safe and joyful environment',
    ],
  },
  {
    title: 'Primary School (Class 1–5)',
    points: [
      'Conceptual learning',
      'Interactive classes',
      'Regular assessments',
    ],
  },
  {
    title: 'Middle School (Class 6–8)',
    points: [
      'Subject-wise specialization',
      'Logical & analytical development',
      'Olympiad-oriented support',
    ],
  },
  {
    title: 'Senior Classes (Class 9–12)',
    points: [
      'Strong board exam preparation',
      'Stream-wise guidance',
      'Career counselling',
    ],
  },
]

function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Academic Programs</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">Structured learning pathways designed for each stage of growth, focusing on both academic excellence and holistic development.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div key={program.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                {program.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs

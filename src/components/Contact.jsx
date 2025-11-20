import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Contact Us</h2>
            <p className="mt-4 text-slate-700">Have questions or need admission details? Reach out to us.</p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-sm text-slate-600">Phone</p>
                <p className="text-lg font-semibold text-slate-900">(Add contact number)</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-sm text-slate-600">Email</p>
                <p className="text-lg font-semibold text-slate-900">(Add email ID)</p>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-sm text-slate-600">School Timings</p>
                <p className="text-lg font-semibold text-slate-900">8 AM – 2 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">Location</h3>
            <div className="mt-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <p className="text-lg font-semibold text-slate-800">The Gurukulum School Varanasi</p>
              <p className="text-slate-700">(You can add exact address here.)</p>
              <p className="text-slate-700">Varanasi, Uttar Pradesh</p>
              <div className="mt-4">
                <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-slate-600">
                  Map preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gray-900 py-20 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-start gap-6 text-left md:flex-row md:items-center md:justify-between md:text-center">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">Ship faster with a world‑class product team on subscription</h3>
              <p className="mt-2 text-white/80">Book a 20‑minute intro to see if we’re a fit. We’ll review your goals and share an actionable plan.</p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end md:w-auto">
              <a href="mailto:hello@yourteam.co" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow transition hover:opacity-90">
                Email Us
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Book Intro Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          CTO & Team as a Service
        </span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Everything your modern business needs to build, ship, and scale
        </h1>
        <p className="mt-5 max-w-2xl text-white/80">
          On-demand strategy, engineering, design, and growth — delivered as a single monthly subscription. We architect, build, and optimize products end‑to‑end.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow/50 transition hover:opacity-90"
          >
            See Pricing
          </a>
          <a
            href="#services"
            className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
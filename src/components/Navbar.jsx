import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-3 text-white backdrop-blur">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
            Flux CTO
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/90 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-lg bg-white px-4 py-2 text-xs font-semibold text-gray-900 sm:block">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
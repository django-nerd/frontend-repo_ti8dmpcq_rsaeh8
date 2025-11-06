import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t bg-white py-10 text-center text-sm text-gray-600">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} Flux CTO — CTO & Team as a Service</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import { Rocket, Code, Megaphone, Globe, Shield, Users } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'CTO Leadership',
    desc: 'Strategic roadmap, architecture decisions, and executive reporting — without hiring a full-time CTO.',
  },
  {
    icon: Code,
    title: 'Product & App Development',
    desc: 'Design, frontend, backend, and DevOps. From MVP to scale with clean, maintainable code.',
  },
  {
    icon: Megaphone,
    title: 'Growth & Marketing',
    desc: 'SEO, paid social, landing pages, and analytics — tightly integrated with your product funnel.',
  },
  {
    icon: Globe,
    title: 'Websites & CRO',
    desc: 'High‑performance websites, A/B testing, and conversion optimization to turn traffic into revenue.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Best practices, audits, and policies that earn trust and pass procurement.',
  },
  {
    icon: Users,
    title: 'Embedded Team',
    desc: 'Engineers, designers, and marketers who work as your integrated product team.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative z-10 w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything modern teams need</h2>
          <p className="mt-3 text-gray-600">One partner across strategy, build, and growth — unified under a single subscription.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';

const tiers = [
  {
    name: 'Single Plan',
    price: '$9,900/mo',
    highlight: 'Best for startups and scale-ups',
    features: [
      'CTO leadership & strategy',
      'Sprint-based product development',
      'Design, frontend, backend, DevOps',
      'Growth & CRO execution',
      'Weekly roadmap + reporting',
      'Unlimited requests, prioritized weekly',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple monthly pricing</h2>
          <p className="mt-3 text-gray-600">One plan. Flexible scope. Cancel anytime.</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10" />
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
                    {tier.highlight}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-gray-900">{tier.name}</h3>
                  <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0 text-center lg:text-right">
                  <div className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</div>
                  <p className="mt-1 text-sm text-gray-600">No surprises. Cancel anytime.</p>
                  <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-black">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
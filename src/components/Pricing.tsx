'use client';

const pricingTiers = [
  {
    name: 'Simple Systems',
    price: 'E5,000 - E10,000',
    description: 'Perfect for startups and small businesses',
    features: [
      'Booking forms',
      'Basic trackers',
      'Simple automation',
      'Mobile responsive',
      'Email notifications',
    ],
    examples: 'Online appointment booking, contact forms, basic inventory tracking',
    popular: false,
  },
  {
    name: 'Medium Systems',
    price: 'E10,000 - E20,000',
    description: 'For growing businesses with complex needs',
    features: [
      'Multi-user platforms',
      'Complex workflows',
      'Third-party integrations',
      'User authentication',
      'Custom dashboards',
      'Data exports',
    ],
    examples: 'Client portals, inventory management with suppliers, booking systems with payment',
    popular: true,
  },
  {
    name: 'Complex Systems',
    price: 'E20,000+',
    description: 'Enterprise-grade solutions',
    features: [
      'Advanced features',
      'Multiple integrations',
      'Custom analytics',
      'Role-based access',
      'API development',
      'Ongoing support',
    ],
    examples: 'Full SaaS platforms, marketplace systems, enterprise dashboards',
    popular: false,
  },
];

const included = [
  'Full code ownership',
  '30 days of bug fixes',
  'Deployment support',
  'Documentation',
  'Training session',
];

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-navy-950 to-navy-900 relative overflow-hidden grain">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-accent-400 text-sm font-semibold mb-6">
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Honest, Upfront Pricing
          </h2>
          <p className="text-xl text-navy-300 leading-relaxed">
            No hidden fees. No surprises. Choose the package that fits your needs, 
            or let's build a custom quote together.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover-lift ${
                tier.popular 
                  ? 'border-accent-500 lg:-mt-4 lg:mb-4' 
                  : 'border-white/10 hover:border-accent-400/50'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-accent-600 to-accent-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-navy-400 text-sm mb-4">{tier.description}</p>
                <div className="text-4xl font-display font-bold text-accent-400 mb-2">
                  {tier.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-navy-300">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Examples */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-navy-400 text-sm mb-2 font-semibold">Examples:</p>
                <p className="text-navy-400 text-sm leading-relaxed">{tier.examples}</p>
              </div>

              {/* CTA */}
              <a 
                href="#contact"
                className={`block text-center mt-8 px-6 py-3 rounded-xl font-semibold transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:scale-105 hover:shadow-xl hover:shadow-accent-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* What's included section */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
            All Projects Include
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {included.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-navy-200 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why transparent pricing */}
        <div className="mt-16 text-center">
          <p className="text-navy-400 mb-2 text-sm uppercase tracking-wider font-semibold">
            Why Transparent Pricing?
          </p>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">
            It filters out tire-kickers, builds trust from day one, and speeds up the sales cycle. 
            You know what to expect before our first call.
          </p>
        </div>
      </div>
    </section>
  );
}

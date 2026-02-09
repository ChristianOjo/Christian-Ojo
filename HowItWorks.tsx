'use client';

const steps = [
  {
    number: '01',
    title: 'Discovery Call (Free)',
    description: 'We discuss your problem, current workflow, and what success looks like. No commitment required.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Proposal & Timeline',
    description: 'I send you a detailed proposal with scope, price, and timeline. Usually 2-4 weeks for delivery.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Build & Launch',
    description: 'I build your system, keep you updated weekly, and launch when you\'re ready. You get the code and full ownership.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-accent-50"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed">
            From first call to launch, the process is transparent, collaborative, and designed to get you results fast.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent-300 to-accent-200 -translate-x-1/2 z-0"></div>
                )}

                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border-2 border-navy-100 hover:border-accent-400 transition-all duration-300 hover-lift z-10">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center text-white mb-6">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-navy-950 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-16 bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-12 text-center grain">
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-navy-300 text-lg mb-8 max-w-2xl mx-auto">
              Book a free 30-minute call to discuss your project. No pressure, no commitment – 
              just a conversation about how I can help your business.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-500 text-white font-semibold text-lg rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/50 transition-all"
            >
              Schedule Free Discovery Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

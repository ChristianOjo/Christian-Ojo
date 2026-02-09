'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-navy-50"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-6">
            Let's Talk
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-950 mb-6 leading-tight">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-navy-600 leading-relaxed">
            Schedule a free 30-minute discovery call or reach out via email. 
            I respond within 24 hours.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left column - Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-navy-950 mb-6">
                  Get In Touch
                </h3>
                
                {/* Email */}
                <div className="bg-white rounded-2xl p-6 border-2 border-navy-100 hover:border-accent-400 transition-all hover-lift mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-950 mb-1">Email</h4>
                      <a href="mailto:ojo.christian@yahoo.com" className="text-accent-600 hover:text-accent-700 transition-colors">
                        ojo.christian@yahoo.com
                      </a>
                      <p className="text-sm text-navy-600 mt-1">Response time: 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="bg-white rounded-2xl p-6 border-2 border-navy-100 hover:border-accent-400 transition-all hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-950 mb-1">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/christian-ojo-90a9483a7" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 transition-colors">
                        linkedin.com/in/christian-ojo-90a9483a7
                      </a>
                      <p className="text-sm text-navy-600 mt-1">Let's connect professionally</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 text-white grain">
                <h4 className="text-xl font-display font-bold mb-4">What to Expect on the Call</h4>
                <ul className="space-y-3">
                  {[
                    'We discuss your business challenge and current workflow',
                    'I ask questions to understand your specific needs',
                    'We explore potential solutions and technical approaches',
                    'You get honest feedback on timeline and feasibility',
                    'No sales pressure – just a helpful conversation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-navy-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column - Calendly embed */}
            <div>
              <div className="bg-white rounded-2xl p-8 border-2 border-navy-100 shadow-xl">
                <h3 className="text-2xl font-display font-bold text-navy-950 mb-6 text-center">
                  Schedule Your Free Call
                </h3>
                
                {/* Calendly embed */}
                <div className="bg-white rounded-xl overflow-hidden border-2 border-navy-100 shadow-sm">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/ojo-christian?hide_landing_page_details=1&hide_gdpr_banner=1" 
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </div>

                <p className="text-sm text-navy-600 text-center mt-6">
                  <strong>Prefer email?</strong> Reach me at{' '}
                  <a href="mailto:ojo.christian@yahoo.com" className="text-accent-600 hover:text-accent-700 font-semibold">
                    ojo.christian@yahoo.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

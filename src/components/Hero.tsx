'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 grain">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-navy-600/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-white/80 font-medium">Available for Micro SaaS projects</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-accent-400">Christian Ojo</span>. I build{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Micro SaaS</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 4 150 4 198 10" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f97316"/>
                    <stop offset="1" stopColor="#ea580c"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            Solutions.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-navy-200 mb-12 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I specialize in building MVPs, automation tools, and niche platforms like compliance trackers and price comparison engines that{' '}
            <span className="text-accent-400 font-semibold">solve real problems</span> and{' '}
            <span className="text-accent-400 font-semibold">scale fast</span>.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-accent-600 to-accent-500 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/50"
            >
              <span className="relative z-10">Start Your Project</span>
              <svg className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            <a 
              href="#case-study" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all"
            >
              View My Work
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-accent-400 mb-2">2-4</div>
              <div className="text-navy-300 text-sm">Weeks to MVP</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-accent-400 mb-2">100%</div>
              <div className="text-navy-300 text-sm">Code Ownership</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-accent-400 mb-2">Clean</div>
              <div className="text-navy-300 text-sm">Architecture</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-accent-400 mb-2">∞</div>
              <div className="text-navy-300 text-sm">Scalability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

'use client';

export default function CaseStudy() {
  const projects = [
    {
      id: 'buildprice',
      title: 'BuildPrice',
      subtitle: 'Real-time construction material prices',
      description: 'A comprehensive platform for comparing construction material prices across multiple suppliers and locations in Eswatini and South Africa.',
      problem: 'Construction buyers wasted hours calling around for quotes, often missing better deals and delaying projects due to lack of price transparency.',
      solution: 'Built a real-time comparison engine where buyers generate instant quotes showing the cheapest materials at each location, saving time and costs.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      link: 'https://buildprice.vercel.app',
      outcome: 'Live system processing quotes across multiple locations, providing the industry with its first transparent pricing tool.'
    },
    {
      id: 'eswatvault',
      title: 'EswatVault',
      subtitle: 'Compliance & Tender Management',
      description: 'A specialized vault for Eswatini businesses to track compliance deadlines, manage tender documents, and receive automated alerts.',
      problem: 'Missing tax or labour compliance deadlines leads to heavy penalties and disqualification from lucrative government tenders.',
      solution: 'Developed an automated tracking system with smart alerts (30, 15, 7 days) and secure document storage pre-configured for Eswatini regulations.',
      tech: ['Next.js', 'Manus', 'Automation', 'Secure Storage'],
      link: 'https://eswatvault-klfcgkyx.manus.space',
      outcome: 'Streamlined compliance management for businesses, ensuring they never miss a deadline and stay tender-ready at all times.'
    }
  ];

  return (
    <section id="case-study" className="py-24 lg:py-32 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden grain">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-accent-400 text-sm font-semibold mb-6">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Micro SaaS Solutions Built for Impact
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              {/* Title */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-accent-400 text-lg font-medium">{project.subtitle}</p>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-navy-200 hover:text-white transition-colors group"
                  >
                    Visit Live Site
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Grid layout */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left column - Problem & Solution */}
                <div className="space-y-8">
                  {/* Problem */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-white mb-3">The Problem</h4>
                        <p className="text-navy-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-white mb-3">The Solution</h4>
                        <p className="text-navy-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Tech & Outcome */}
                <div className="space-y-8">
                  {/* Tech stack */}
                  <div className="bg-gradient-to-br from-accent-500/10 to-accent-600/10 backdrop-blur-sm rounded-2xl p-8 border border-accent-400/20">
                    <h4 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm text-navy-200 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-2xl font-display font-bold mb-3">The Outcome</h4>
                        <p className="text-white/90 leading-relaxed mb-6">
                          {project.outcome}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-3xl font-display font-bold mb-1">Live</div>
                            <div className="text-white/80 text-sm">Production</div>
                          </div>
                          <div>
                            <div className="text-3xl font-display font-bold mb-1">Eswatini</div>
                            <div className="text-white/80 text-sm">Market Focus</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
          <p className="text-navy-300 text-lg mb-4">
            Want to see how a custom Micro SaaS solution could transform your business?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-500 transition-all hover:scale-105"
          >
            Let's Build Your MVP
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

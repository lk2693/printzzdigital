"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState("alle");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const filters = [
    { id: "alle", label: "Alle Projekte", count: 3 },
    { id: "webseiten", label: "Webseiten", count: 2 },
    { id: "software", label: "Software", count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: "Moderne Architektur Webseite",
      category: "webseiten",
      description: "Elegante Onepager-Website mit modernem Design, Portfolio-Galerie und Kontaktformular.",
      image: "/images/friseur-demo.jpg",
      tags: ["Responsive", "SEO", "Portfolio"],
      link: "#architektur-demo",
      techStack: ["Next.js", "Tailwind", "Vercel"],
      features: ["Mobile First", "Fast Loading", "Contact Form"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Rizzi Haus - Vereinswebseite",
      category: "webseiten", 
      description: "SEO-optimierte Vereinswebseite mit Mitgliederverwaltung, Event-Kalender und Google Maps Integration.",
      image: "/images/sanitaer-demo.jpg",
      tags: ["SEO", "CMS", "Integration"],
      link: "#rizzi-demo",
      techStack: ["WordPress", "PHP", "MySQL"],
      features: ["Member Portal", "Event Management", "Local SEO"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Digitales Zollsystem",
      category: "software",
      description: "Maßgeschneiderte Software für Zollverwaltung mit Wechselkurs-API, Dokumentenmanagement und Reporting.",
      image: "/images/crm-demo.jpg", 
      tags: ["Custom", "API", "Dashboard"],
      link: "#zoll-demo",
      techStack: ["React", "Node.js", "PostgreSQL"],
      features: ["Real-time Data", "Document Management", "Analytics"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const filteredProjects = activeFilter === "alle" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="showcase" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            ERFOLGREICHE PROJEKTE
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Unsere
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Referenzen{" "}
            </span>
            sprechen für sich
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Von einfachen Webseiten bis hin zu komplexen Softwarelösungen – entdecken Sie, 
            wie wir anderen KMUs zum digitalen Erfolg verholfen haben.
          </p>
        </div>

        {/* Interactive Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md border border-gray-200'
              }`}
            >
              <span className="relative z-10">
                {filter.label}
                <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id 
                    ? 'bg-white/20' 
                    : 'bg-gray-100'
                }`}>
                  {filter.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{animationDelay: `${index * 200}ms`}}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 h-64">
                {/* Dynamic SVG Mockups */}
                {project.id === 1 && (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-white flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                      <rect width="400" height="300" fill="url(#arch-gradient)"/>
                      <rect x="0" y="0" width="400" height="60" fill="white" fillOpacity="0.95"/>
                      <rect x="20" y="20" width="80" height="20" rx="4" fill="#1f2937"/>
                      <rect x="320" y="15" width="60" height="30" rx="15" fill="#3b82f6"/>
                      <rect x="50" y="100" width="300" height="40" rx="8" fill="white" fillOpacity="0.9"/>
                      <rect x="50" y="150" width="200" height="15" rx="4" fill="white" fillOpacity="0.7"/>
                      <rect x="50" y="175" width="250" height="15" rx="4" fill="white" fillOpacity="0.7"/>
                      <rect x="280" y="120" width="80" height="80" rx="8" fill="white" fillOpacity="0.8"/>
                      <defs>
                        <linearGradient id="arch-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f8fafc"/>
                          <stop offset="100%" stopColor="#e2e8f0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                
                {project.id === 2 && (
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                      <rect width="400" height="300" fill="url(#rizzi-gradient)"/>
                      <rect x="0" y="0" width="400" height="50" fill="#1e40af"/>
                      <rect x="20" y="15" width="100" height="20" rx="4" fill="white"/>
                      <rect x="300" y="10" width="80" height="30" rx="15" fill="white" fillOpacity="0.2"/>
                      <circle cx="80" cy="120" r="40" fill="white" fillOpacity="0.9"/>
                      <rect x="140" y="100" width="150" height="15" rx="4" fill="#1e40af"/>
                      <rect x="140" y="125" width="200" height="10" rx="4" fill="#64748b"/>
                      <rect x="140" y="145" width="180" height="10" rx="4" fill="#64748b"/>
                      <rect x="50" y="200" width="100" height="60" rx="8" fill="white" fillOpacity="0.9"/>
                      <rect x="170" y="200" width="100" height="60" rx="8" fill="white" fillOpacity="0.9"/>
                      <rect x="290" y="200" width="80" height="60" rx="8" fill="white" fillOpacity="0.9"/>
                      <defs>
                        <linearGradient id="rizzi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#dbeafe"/>
                          <stop offset="100%" stopColor="#bfdbfe"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                
                {project.id === 3 && (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                      <rect width="400" height="300" fill="url(#zoll-gradient)"/>
                      <rect x="0" y="0" width="60" height="300" fill="#0f172a"/>
                      <rect x="80" y="20" width="300" height="40" rx="8" fill="white" fillOpacity="0.1"/>
                      <rect x="80" y="80" width="140" height="100" rx="8" fill="#22c55e" fillOpacity="0.2"/>
                      <rect x="240" y="80" width="140" height="100" rx="8" fill="#3b82f6" fillOpacity="0.2"/>
                      <rect x="80" y="200" width="300" height="80" rx="8" fill="white" fillOpacity="0.1"/>
                      
                      {/* Dashboard elements */}
                      <rect x="90" y="90" width="50" height="30" rx="4" fill="#22c55e"/>
                      <rect x="90" y="130" width="30" height="8" rx="2" fill="white" fillOpacity="0.7"/>
                      <rect x="90" y="145" width="40" height="8" rx="2" fill="white" fillOpacity="0.5"/>
                      
                      <rect x="250" y="90" width="60" height="20" rx="4" fill="#3b82f6"/>
                      <rect x="250" y="120" width="80" height="40" rx="4" fill="white" fillOpacity="0.1"/>
                      
                      {/* Sidebar icons */}
                      <circle cx="30" cy="40" r="8" fill="#64748b"/>
                      <circle cx="30" cy="70" r="8" fill="#64748b"/>
                      <circle cx="30" cy="100" r="8" fill="#3b82f6"/>
                      <circle cx="30" cy="130" r="8" fill="#64748b"/>
                      
                      <defs>
                        <linearGradient id="zoll-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e293b"/>
                          <stop offset="100%" stopColor="#0f172a"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full`}>
                    {project.category === 'webseiten' ? 'Webseite' : 'Software'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Live Demo
                  </a>
                  
                  <button className="px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Bereit für Ihr eigenes Projekt?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen. 
                Von der ersten Idee bis zur erfolgreichen Umsetzung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Projekt besprechen</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="tel:+49123456789"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Direkt anrufen</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group:hover .group-hover\\:scale-110 {
          animation: slideInUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
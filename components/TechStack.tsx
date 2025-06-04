"use client";

import React, { useState, useEffect } from "react";
import { Code2, Database, Wrench, Shield, Sparkles, TrendingUp, CheckCircle, Star } from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const categories = [
    {
      name: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      description: "Moderne Benutzeroberflächen"
    },
    {
      name: "Backend", 
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      description: "Robuste Server-Architekturen"
    },
    {
      name: "Tools & Services",
      icon: Wrench,
      color: "from-purple-500 to-pink-500", 
      description: "Entwicklung & Deployment"
    },
    {
      name: "Security & DevOps",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      description: "Sicherheit & Infrastruktur"
    }
  ];

  type Tech = {
    name: string;
    description: string;
    benefit: string;
    color: string;
    emoji: string;
  };
  
  const techStack: Record<number, Tech[]> = {
    0: [ // Frontend
      { 
        name: "React", 
        description: "Schnelle und moderne Webseiten",
        benefit: "Bessere Benutzererfahrung",
        color: "#61DAFB",
        emoji: "⚛️"
      },
      { 
        name: "Next.js", 
        description: "Blitzschnelle Website-Performance",
        benefit: "Höhere Google-Rankings", 
        color: "#000000",
        emoji: "🚀"
      },
      { 
        name: "TypeScript", 
        description: "Fehlerfreie Programmierung",
        benefit: "Weniger Bugs und Ausfälle", 
        color: "#3178C6",
        emoji: "📘"
      },
      { 
        name: "Tailwind CSS", 
        description: "Professionelles Design-System",
        benefit: "Einheitliches Markendesign",
        color: "#06B6D4", 
        emoji: "🎨"
      },
      { 
        name: "Vue.js", 
        description: "Benutzerfreundliche Oberflächen",
        benefit: "Intuitive Bedienung",
        color: "#4FC08D",
        emoji: "💚"
      },
      { 
        name: "HTML5 & CSS3", 
        description: "Moderne Web-Standards",
        benefit: "Zukunftssicher und barrierefrei",
        color: "#E34F26",
        emoji: "🌐"
      }
    ],
    1: [ // Backend
      { 
        name: "Node.js", 
        description: "Leistungsstarke Server-Technologie",
        benefit: "Schnelle Antwortzeiten",
        color: "#339933",
        emoji: "🟢"
      },
      { 
        name: "Python", 
        description: "Vielseitige Automatisierung",
        benefit: "Intelligente Geschäftsprozesse", 
        color: "#3776AB",
        emoji: "🐍"
      },
      { 
        name: "PostgreSQL", 
        description: "Sichere Datenspeicherung",
        benefit: "Ihre Daten sind geschützt",
        color: "#336791",
        emoji: "🐘"
      },
      { 
        name: "MongoDB", 
        description: "Flexible Datenbank-Lösung",
        benefit: "Wächst mit Ihrem Unternehmen",
        color: "#47A248",
        emoji: "🍃"
      },
      { 
        name: "Express.js", 
        description: "Robuste Server-Architektur",
        benefit: "Zuverlässige Verfügbarkeit",
        color: "#000000",
        emoji: "⚡"
      },
      { 
        name: "Django", 
        description: "Sichere Web-Anwendungen",
        benefit: "Schutz vor Hackerangriffen",
        color: "#092E20",
        emoji: "🎯"
      }
    ],
    2: [ // Tools & Services
      { 
        name: "Docker", 
        description: "Einfache Software-Verteilung",
        benefit: "Kostengünstige Updates",
        color: "#2496ED",
        emoji: "🐳"
      },
      { 
        name: "Git & GitHub", 
        description: "Professionelle Code-Verwaltung",
        benefit: "Sichere Entwicklung ohne Datenverlust",
        color: "#F05032",
        emoji: "📦"
      },
      { 
        name: "Vercel", 
        description: "Globale Website-Bereitstellung",
        benefit: "Weltweite Erreichbarkeit",
        color: "#000000",
        emoji: "▲"
      },
      { 
        name: "Figma", 
        description: "Professionelles Design",
        benefit: "Ansprechendes Corporate Design",
        color: "#F24E1E",
        emoji: "🎨"
      },
      { 
        name: "Postman", 
        description: "API-Schnittstellen-Entwicklung",
        benefit: "Nahtlose System-Integration",
        color: "#FF6C37",
        emoji: "📡"
      },
      { 
        name: "Stripe", 
        description: "Sichere Online-Zahlungen",
        benefit: "Vertrauensvolle Kaufabwicklung",
        color: "#635BFF",
        emoji: "💳"
      }
    ],
    3: [ // Security & DevOps
      { 
        name: "AWS Cloud", 
        description: "Professionelle Server-Infrastruktur",
        benefit: "99.9% Verfügbarkeit garantiert",
        color: "#FF9900",
        emoji: "☁️"
      },
      { 
        name: "SSL-Verschlüsselung", 
        description: "Sichere Datenübertragung",
        benefit: "Kundenvertrauen durch Sicherheit",
        color: "#008000",
        emoji: "🔒"
      },
      { 
        name: "Benutzer-Authentifizierung", 
        description: "Sichere Anmelde-Systeme",
        benefit: "Geschützte Kundenbereiche",
        color: "#000000",
        emoji: "🛡️"
      },
      { 
        name: "DSGVO-Compliance", 
        description: "Datenschutz-konforme Lösungen",
        benefit: "Rechtssichere Website",
        color: "#0066CC",
        emoji: "⚖️"
      },
      { 
        name: "System-Monitoring", 
        description: "24/7 Überwachung",
        benefit: "Sofortige Fehlerbehebung",
        color: "#FF6B6B",
        emoji: "📊"
      },
      { 
        name: "Automatische Backups", 
        description: "Tägliche Datensicherung",
        benefit: "Nie wieder Datenverlust",
        color: "#4ECDC4",
        emoji: "💾"
      }
    ]
  };

  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 6000);

    const animationInterval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 1500);

    return () => {
      clearInterval(categoryInterval);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
        
        {/* Floating Code Elements */}
        <div className={`absolute top-20 right-20 text-2xl transition-all duration-1000 ${animationPhase === 0 ? 'opacity-20' : 'opacity-10'}`}>{"<>"}</div>
        <div className={`absolute bottom-32 left-16 text-xl transition-all duration-1000 ${animationPhase === 1 ? 'opacity-20' : 'opacity-10'}`}>{"{ }"}</div>
        <div className={`absolute top-1/2 right-1/3 text-lg transition-all duration-1000 ${animationPhase === 2 ? 'opacity-20' : 'opacity-10'}`}>{"</>"}</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200 shadow-lg">
            <Sparkles className="w-4 h-4 animate-spin" style={{animationDuration: '4s'}} />
            <span>MODERNSTE TECHNOLOGIEN</span>
            <Code2 className="w-4 h-4" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8">
            Unser
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              {" "}Tech-Stack
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Wir setzen auf bewährte und innovative Technologien, um leistungsstarke, 
            skalierbare und zukunftssichere Lösungen für Ihr Unternehmen zu entwickeln.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Modernste Technologien</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Immer auf dem neuesten Stand</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>Bewährte Lösungen</span>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-110`
                  : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:shadow-lg hover:scale-105 border border-white/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <category.icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-bold text-sm">{category.name}</div>
                  <div className={`text-xs ${activeCategory === index ? 'text-white/80' : 'text-gray-500'}`}>
                    {category.description}
                  </div>
                </div>
              </div>
              
              {activeCategory === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 rounded-xl"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {techStack[activeCategory]?.map((tech, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-sm p-6 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredTech === index
                  ? 'border-blue-300 shadow-2xl transform scale-105 -translate-y-2'
                  : 'border-white/50 hover:border-blue-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
              style={{animationDelay: `${index * 100}ms`}}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Animated Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
                style={{backgroundColor: tech.color}}
              />

              <div className="relative z-10">
                {/* Tech Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{tech.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
                  </div>
                </div>

                {/* Benefit */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl border border-green-100">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-green-800">{tech.benefit}</span>
                  </div>
                </div>

                {/* Visual Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{backgroundColor: tech.color}}
                    ></div>
                    <span className="text-xs text-gray-500">In Verwendung</span>
                  </div>
                  
                  <div className={`transition-all duration-300 ${hoveredTech === index ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-xs text-blue-600 font-medium">Details ansehen →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className={`relative bg-gradient-to-r ${categories[activeCategory].color} rounded-3xl p-8 md:p-12 text-white overflow-hidden`}>
            <div className="absolute inset-0 bg-black/10"></div>
            
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 right-8 text-2xl opacity-20 animate-bounce">⚛️</div>
              <div className="absolute bottom-6 left-8 text-xl opacity-20 animate-pulse">🚀</div>
              <div className="absolute top-1/2 right-1/4 text-lg opacity-20 animate-bounce" style={{animationDelay: '1s'}}>🐍</div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                {React.createElement(categories[activeCategory].icon, { className: "w-8 h-8" })}
                <h3 className="text-3xl font-bold">
                  Die richtige Technologie für Ihren Erfolg
                </h3>
              </div>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Sie müssen kein Technik-Experte sein! Wir wählen für Sie die beste Technologie aus, 
                die perfekt zu Ihrem Unternehmen und Ihren Zielen passt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  <span>Kostenlose Beratung sichern</span>
                </a>
                
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  📋 Unverbindlich anfragen
                </button>
              </div>

              <div className="mt-6 text-sm text-white/80">
                💡 Verständliche Beratung • Keine Fachbegriffe • Maßgeschneidert für Sie
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
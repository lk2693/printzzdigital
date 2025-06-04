"use client";

import React, { useState, useEffect } from "react";
import { Code2, Bot, Database, ShieldCheck, SearchCheck, Users, ArrowRight, TrendingUp, Sparkles } from "lucide-react";

export default function Projects() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const services = [
    {
      title: "Webentwicklung",
      subtitle: "Moderne Webseiten & Online-Shops",
      description: "Professionelle Webseiten und Online-Shops für moderne Unternehmen.",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
      features: ["Responsive Design", "SEO-optimiert", "Schnelle Ladezeiten"],
      benefit: "300% mehr Leads"
    },
    {
      title: "KI-Automatisierung",
      subtitle: "Intelligente Prozessoptimierung", 
      description: "Prozesse automatisieren, wiederkehrende Aufgaben eliminieren und Zeit sparen.",
      icon: Bot,
      color: "from-purple-500 to-pink-600",
      features: ["Chatbots", "Dokumentenverarbeitung", "E-Mail Automation"],
      benefit: "85% Zeitersparnis"
    },
    {
      title: "CRM & Software",
      subtitle: "Maßgeschneiderte Businesslösungen",
      description: "Individuelle Tools und Plattformen für Kundenverwaltung und Geschäftsprozesse.",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
      features: ["Kundenverwaltung", "Reporting", "API-Integration"],
      benefit: "Bessere Organisation"
    },
    {
      title: "SEO & Marketing",
      subtitle: "Online-Sichtbarkeit maximieren",
      description: "Suchmaschinenoptimierung für mehr Reichweite, Sichtbarkeit und qualifizierte Besucher.",
      icon: SearchCheck,
      color: "from-orange-500 to-red-600",
      features: ["Local SEO", "Content-Strategie", "Performance-Tracking"],
      benefit: "250% mehr Traffic"
    },
    {
      title: "Social Media",
      subtitle: "Digitale Präsenz aufbauen",
      description: "Strategie, Contentplanung & Präsenzaufbau auf Instagram, LinkedIn & Co.",
      icon: Users,
      color: "from-pink-500 to-rose-600",
      features: ["Content-Planung", "Community Management", "Analytics"],
      benefit: "400% mehr Reichweite"
    },
    {
      title: "IT-Security",
      subtitle: "Rundum-Schutz für Ihr Unternehmen",
      description: "Schutz vor Cyberangriffen, DSGVO-konforme Systeme und Sicherheitskonzepte.",
      icon: ShieldCheck,
      color: "from-slate-500 to-gray-600",
      features: ["Vulnerability Scans", "DSGVO-Compliance", "Backup-Strategien"],
      benefit: "100% Datenschutz"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            INNOVATIVE DIGITALLÖSUNGEN
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Digitale Lösungen
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}die funktionieren
            </span>
          </h2>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Von der ersten Idee bis zur erfolgreichen Umsetzung – wir digitalisieren Ihr Unternehmen 
            mit modernen Technologien und bewährten Strategien.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg">
                    {React.createElement(services[activeService].icon, { className: "w-12 h-12" })}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">
                    {services[activeService].title}
                  </h4>
                </div>
              </div>
              
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 w-fit">
                  {React.createElement(services[activeService].icon, { className: "w-4 h-4" })}
                  {services[activeService].title}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[activeService].subtitle}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">{services[activeService].benefit}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <span>Demo ansehen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-300">
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer"
              style={{
                borderColor: activeService === index ? '#3b82f6' : '#e5e7eb',
                boxShadow: activeService === index ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : hoveredCard === index ? '0 10px 25px -3px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                transform: activeService === index ? 'scale(1.05)' : hoveredCard === index ? 'translateY(-4px)' : 'translateY(0px)'
              }}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-4 mb-5">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform duration-300"
                  style={{
                    background: `linear-gradient(to right, ${service.color.includes('blue') ? '#3b82f6, #1e40af' : 
                      service.color.includes('purple') ? '#8b5cf6, #7c3aed' : 
                      service.color.includes('emerald') ? '#10b981, #047857' : 
                      service.color.includes('orange') ? '#f97316, #ea580c' : 
                      service.color.includes('pink') ? '#ec4899, #db2777' : '#64748b, #475569'})`,
                    transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span 
                  className="text-sm font-semibold"
                  style={{
                    background: `linear-gradient(to right, ${service.color.includes('blue') ? '#3b82f6, #1e40af' : 
                      service.color.includes('purple') ? '#8b5cf6, #7c3aed' : 
                      service.color.includes('emerald') ? '#10b981, #047857' : 
                      service.color.includes('orange') ? '#f97316, #ea580c' : 
                      service.color.includes('pink') ? '#ec4899, #db2777' : '#64748b, #475569'})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {activeService === index ? 'Aktiv' : 'Details ansehen'}
                </span>
                <ArrowRight 
                  className="w-4 h-4 text-gray-400 transition-all duration-300"
                  style={{
                    transform: hoveredCard === index ? 'translateX(4px)' : 'translateX(0px)',
                    color: hoveredCard === index ? '#3b82f6' : '#9ca3af'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Unverbindliches Beratungsgespräch
          </a>
        </div>
      </div>
    </section>
  );
}
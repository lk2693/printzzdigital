"use client";

import { useState, useEffect } from "react";
import { MessageCircle, FileText, PenTool, MonitorSmartphone, RefreshCw, Rocket, Clock, CheckCircle, Sparkles, ArrowRight, Users, Star } from "lucide-react";

export default function WebseitenAblauf() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      title: "Kostenloses Erstgespräch",
      subtitle: "Wir lernen uns kennen",
      description: "In einem unverbindlichen Gespräch klären wir Ihre Ziele, Wünsche und Rahmenbedingungen für die neue Website.",
      details: ["Analyse Ihrer aktuellen Situation", "Definition der Zielgruppe", "Klärung des Budgetrahmens", "Erste Ideensammlung"],
      icon: MessageCircle,
      duration: "30-45 Min.",
      color: "from-blue-500 to-cyan-500",
      emoji: "💬"
    },
    {
      title: "Individuelles Angebot",
      subtitle: "Transparente Planung",
      description: "Sie erhalten ein maßgeschneidertes Angebot inklusive Leistungsbeschreibung, Zeitplan und Preis – transparent und fair.",
      details: ["Detaillierte Kostenkalkulation", "Projektplan mit Meilensteinen", "Technische Spezifikationen", "Vertragsentwurf"],
      icon: FileText,
      duration: "2-3 Tage",
      color: "from-emerald-500 to-teal-500",
      emoji: "📋"
    },
    {
      title: "Projektstart & Vertrag",
      subtitle: "Offizieller Startschuss",
      description: "Nach Ihrer Zusage starten wir gemeinsam durch. Alle Punkte werden schriftlich festgehalten – für maximale Klarheit.",
      details: ["Vertragsunterzeichnung", "Projektteam-Einführung", "Kommunikationskanäle", "Kick-off Meeting"],
      icon: PenTool,
      duration: "1 Tag",
      color: "from-purple-500 to-pink-500",
      emoji: "✍️"
    },
    {
      title: "Design & Entwicklung",
      subtitle: "Ihre Vision wird Realität",
      description: "Wir gestalten ein modernes, zielgruppengerechtes Design und setzen die Seite technisch mit bewährten Technologien um.",
      details: ["Wireframes & Mockups", "Corporate Design Integration", "Responsive Programmierung", "Content-Management-System"],
      icon: MonitorSmartphone,
      duration: "2-4 Wochen",
      color: "from-orange-500 to-red-500",
      emoji: "🎨"
    },
    {
      title: "Review & Optimierung",
      subtitle: "Perfektion im Detail",
      description: "Sie erhalten einen Vorschau-Link, geben Feedback, und wir optimieren die Seite bis alles perfekt passt.",
      details: ["Beta-Version online", "Ihr Feedback einarbeiten", "Funktionstest", "Performance-Optimierung"],
      icon: RefreshCw,
      duration: "1 Woche",
      color: "from-pink-500 to-rose-500",
      emoji: "🔍"
    },
    {
      title: "Go-Live & Support",
      subtitle: "Ihr digitaler Erfolg startet",
      description: "Die Website geht live – auf Wunsch mit Hosting, Wartung und langfristiger Betreuung für nachhaltigen Erfolg.",
      details: ["Domain & Hosting Setup", "Google Analytics", "SEO-Grundausstattung", "Schulung & Dokumentation"],
      icon: Rocket,
      duration: "Laufend",
      color: "from-violet-500 to-purple-600",
      emoji: "🚀"
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-tr from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        
        {/* Floating Timeline Elements */}
        <div className="absolute top-32 left-16 text-6xl opacity-5 animate-bounce">1</div>
        <div className="absolute bottom-32 right-16 text-6xl opacity-5 animate-bounce" style={{animationDelay: '1s'}}>6</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-200 shadow-lg">
            <Clock className="w-4 h-4" />
            <span>UNSER BEWÄHRTER PROZESS</span>
            <CheckCircle className="w-4 h-4" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-8">
            Von der Idee zur
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              {" "}perfekten Website
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unser bewährter 6-Schritte-Prozess sorgt für eine reibungslose Zusammenarbeit 
            und garantiert, dass Ihre Website genau Ihren Vorstellungen entspricht.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>100% transparenter Prozess</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Über 50 erfolgreiche Projekte</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span>Persönliche Betreuung</span>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
              style={{height: `${((activeStep + 1) / steps.length) * 100}%`}}
            ></div>

            {/* Timeline Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    index <= activeStep ? 'opacity-100' : 'opacity-50'
                  }`}
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Content Side */}
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16 lg:col-start-2'}`}>
                      <div 
                        className={`inline-block p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                          activeStep === index 
                            ? 'bg-white shadow-2xl scale-105 border-2 border-blue-200' 
                            : 'bg-white/70 hover:bg-white hover:shadow-xl hover:scale-102'
                        }`}
                        onClick={() => setActiveStep(index)}
                        onMouseEnter={() => setHoveredStep(index)}
                        onMouseLeave={() => setHoveredStep(null)}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${
                            hoveredStep === index ? 'scale-110 rotate-3' : ''
                          }`}>
                            <step.icon className="w-8 h-8" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {step.title}
                            </h3>
                            <p className="text-blue-600 font-medium">{step.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed text-left">
                          {step.description}
                        </p>

                        {/* Details Expansion */}
                        <div className={`transition-all duration-500 overflow-hidden text-left ${
                          activeStep === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="border-t border-gray-200 pt-4 mb-4">
                            <h4 className="font-semibold text-gray-800 mb-3">Das erwartet Sie:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {step.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  {detail}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Duration & Status */}
                        <div className="flex items-center justify-between text-left">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">Dauer: {step.duration}</span>
                          </div>
                          <div className={`transition-all duration-300 ${
                            activeStep === index ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                              Aktiver Schritt
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual Side */}
                    <div className={`flex justify-center ${index % 2 === 0 ? 'lg:justify-start lg:pl-16' : 'lg:justify-end lg:pr-16 lg:col-start-1'}`}>
                      <div className={`relative transition-all duration-700 ${
                        activeStep === index ? 'scale-110' : 'scale-100'
                      }`}>
                        <div className="text-8xl opacity-20 font-bold text-gray-300">
                          {index + 1}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-4xl animate-bounce">{step.emoji}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div 
                      className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-500 cursor-pointer ${
                        index <= activeStep 
                          ? `bg-gradient-to-r ${step.color} shadow-lg` 
                          : 'bg-gray-300'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      {index <= activeStep && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-20"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            
            {/* Floating Success Icons */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-6 right-12 text-2xl opacity-20 animate-bounce">🎯</div>
              <div className="absolute bottom-8 left-12 text-xl opacity-20 animate-pulse">✨</div>
              <div className="absolute top-1/2 right-1/4 text-lg opacity-20 animate-bounce" style={{animationDelay: '1s'}}>🚀</div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">
                Bereit für Ihre neue Website?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Starten wir gemeinsam in Schritt 1! In einem kostenlosen Erstgespräch 
                besprechen wir Ihre Ziele und entwickeln eine maßgeschneiderte Strategie.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  <span>Kostenloses Erstgespräch</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                
                <a
                  href="tel:+49123456789"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  📞 Sofort anrufen
                </a>
              </div>

              <div className="mt-8 text-sm text-blue-200">
                ⏱️ Innerhalb von 24 Stunden antworten wir garantiert
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { 
  Lightbulb, Sparkles, Building2, AlertTriangle, Users, Wifi, Target, Rocket, 
  BarChart3, Monitor, ChevronRight, Shield, Clock, CheckCircle, TrendingDown,
  DollarSign, Phone, Mail, Calendar, ShoppingCart, Search, Eye, Brain,
  Zap, Smartphone, Globe, MousePointer, ArrowUp, ArrowDown, PieChart,
  TrendingUp, Star, Award, Briefcase, HeartHandshake, Bot, Wrench, LineChart,
  X, User, Building, MessageSquare, Send
} from "lucide-react";

export default function DigitalTransformation() {
  const [activeTab, setActiveTab] = useState("problems");
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("marketing");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: ''
  });
  const [animatedStats, setAnimatedStats] = useState({
    oldConversion: 0,
    newConversion: 0,
    oldReach: 0,
    newReach: 0
  });

  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        oldConversion: 1.8,
        newConversion: 4.2,
        oldReach: 150,
        newReach: 450
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  // Handle project consultation request
  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setFormData(prev => ({
      ...prev,
      projectType: `${project.title} - ${project.industry}`,
      message: `Ich interessiere mich für ein ähnliches Projekt wie "${project.title}". ${project.challenge}`
    }));
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Formular-Übermittlung erfolgen
    console.log('Formular gesendet:', formData);
    alert('Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.');
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      projectType: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const problemCategories = {
    marketing: {
      title: "Online-Sichtbarkeit",
      icon: Eye,
      color: "red",
      problems: [
        {
          icon: Search,
          title: "Nicht bei Google gefunden",
          description: "Potenzielle Kunden suchen online, finden aber die Konkurrenz",
          impact: "Kunden gehen zur Konkurrenz",
          cost: "Entgangene Aufträge täglich"
        },
        {
          icon: Building2,
          title: "Unprofessioneller Eindruck",
          description: "Veraltete oder fehlende Website wirkt unseriös",
          impact: "Vertrauen geht verloren",
          cost: "Imageschaden schwer messbar"
        },
        {
          icon: Users,
          title: "Nur Mundpropaganda",
          description: "Abhängigkeit von Empfehlungen begrenzt Wachstum",
          impact: "Langsames Wachstum",
          cost: "Verpasste Chancen"
        }
      ]
    },
    efficiency: {
      title: "Prozesse & Effizienz",
      icon: Zap,
      color: "orange",
      problems: [
        {
          icon: Phone,
          title: "Termine nur telefonisch",
          description: "Kunden rufen außerhalb der Geschäftszeiten an",
          impact: "Termine gehen verloren",
          cost: "Zusätzlicher Telefonaufwand"
        },
        {
          icon: Mail,
          title: "Papierbasierte Prozesse",
          description: "Angebote per Post, Rechnungen per Hand",
          impact: "Langsame Bearbeitung",
          cost: "Mehr Zeitaufwand"
        },
        {
          icon: Calendar,
          title: "Keine Online-Services",
          description: "Kunden erwarten digitale Lösungen",
          impact: "Kunden wechseln ab",
          cost: "Service-Nachteile"
        }
      ]
    },
    competition: {
      title: "Wettbewerbsfähigkeit",
      icon: TrendingDown,
      color: "purple",
      problems: [
        {
          icon: ShoppingCart,
          title: "Kein Online-Verkauf",
          description: "Nur vor Ort Verkauf limitiert Reichweite",
          impact: "Begrenzte Kundenbasis",
          cost: "Zusätzliche Verkaufschancen"
        },
        {
          icon: Smartphone,
          title: "Nicht handy-optimiert",
          description: "Website funktioniert auf Smartphones schlecht",
          impact: "Hohe Absprungrate",
          cost: "Potenzielle Kunden springen ab"
        },
        {
          icon: Star,
          title: "Keine Bewertungen",
          description: "Fehlende Online-Bewertungen schaffen Misstrauen",
          impact: "Kunden sind unsicher",
          cost: "Weniger Vertrauen"
        }
      ]
    }
  };

  const innovativeSolutions = {
    marketing: [
      {
        icon: Brain,
        title: "Professionelle SEO-Optimierung",
        description: "Suchmaschinenoptimierung nach aktuellen Google-Standards",
        innovation: "Keyword-Recherche + technische Optimierung",
        result: "Bessere Auffindbarkeit bei Google"
      },
      {
        icon: Target,
        title: "Moderne Website-Gestaltung",
        description: "Zeitgemäßes Design mit Fokus auf Benutzerfreundlichkeit",
        innovation: "Mobile-First Design + schnelle Ladezeiten",
        result: "Professioneller Eindruck"
      },
      {
        icon: Rocket,
        title: "Content-Management-System",
        description: "Einfache Verwaltung von Inhalten und Neuigkeiten",
        innovation: "Intuitive Bedienung ohne Programmierkenntnisse",
        result: "Aktuelle Inhalte selbst pflegen"
      }
    ],
    efficiency: [
      {
        icon: Bot,
        title: "Online-Terminbuchung",
        description: "Kunden können rund um die Uhr Termine buchen",
        innovation: "Kalender-Integration + automatische Bestätigung",
        result: "Weniger Telefonanrufe, mehr Termine"
      },
      {
        icon: Calendar,
        title: "Digitale Formulare",
        description: "Anfragen und Aufträge direkt online erfassen",
        innovation: "Automatische E-Mail-Weiterleitung",
        result: "Schnellere Bearbeitung"
      },
      {
        icon: Wrench,
        title: "Workflow-Automatisierung",
        description: "Automatische Abläufe von Anfrage bis Rechnung",
        innovation: "Verbindung verschiedener Tools",
        result: "Weniger manuelle Arbeit"
      }
    ],
    competition: [
      {
        icon: ShoppingCart,
        title: "Online-Shop Integration",
        description: "Verkauf von Produkten und Services über die Website",
        innovation: "Sichere Zahlungsabwicklung integriert",
        result: "Zusätzlicher Verkaufskanal"
      },
      {
        icon: Smartphone,
        title: "Mobile-optimierte Website",
        description: "Perfekte Darstellung auf allen Geräten",
        innovation: "Responsive Design + Touch-Optimierung",
        result: "Alle Kunden erreichen"
      },
      {
        icon: HeartHandshake,
        title: "Bewertungssystem",
        description: "Sammlung und Darstellung von Kundenbewertungen",
        innovation: "Automatische Bewertungsanfragen",
        result: "Mehr Vertrauen schaffen"
      }
    ]
  };

  const useCases = [
    {
      title: "Bäckerei Müller",
      industry: "Lebensmittel",
      challenge: "Nur wenige Kunden wussten von den Spezialitäten",
      solution: "Website mit Online-Vorbestellung und Öffnungszeiten",
      result: "30% mehr Vorbestellungen, weniger Wartezeit",
      timeline: "2 Wochen",
      icon: "🥖",
      beforeAfter: {
        before: { visitors: 0, orders: 0, revenue: "Nur Laufkundschaft" },
        after: { visitors: 250, orders: 12, revenue: "Planbare Umsätze" }
      }
    },
    {
      title: "Autowerkstatt Schmidt",
      industry: "Automotive",
      challenge: "Terminvergabe nur telefonisch, häufige Missverständnisse",
      solution: "Online-Terminbuchung mit Service-Übersicht",
      result: "Weniger Telefonate, klarere Absprachen",
      timeline: "1 Woche",
      icon: "🚗",
      beforeAfter: {
        before: { visitors: 80, orders: 8, revenue: "Telefonaufwand hoch" },
        after: { visitors: 200, orders: 15, revenue: "Effizientere Abläufe" }
      }
    },
    {
      title: "Rechtsanwaltskanzlei Weber",
      industry: "Dienstleistung",
      challenge: "Neue Mandanten nur durch Empfehlungen",
      solution: "Professionelle Website mit Fachgebieten und Kontaktformular",
      result: "50% mehr Erstberatungen, jüngere Mandanten",
      timeline: "3 Wochen",
      icon: "⚖️",
      beforeAfter: {
        before: { visitors: 0, orders: 3, revenue: "Nur Empfehlungen" },
        after: { visitors: 180, orders: 8, revenue: "Direktanfragen online" }
      }
    }
  ];

  const transformationSteps = [
    {
      step: 1,
      title: "Problem-Analyse",
      description: "Kostenloser 60-Min Digital-Check Ihres Unternehmens",
      time: "1 Tag",
      icon: BarChart3,
      details: ["Konkurrenz-Analyse", "SEO-Check", "Website-Audit", "Potenzial-Bewertung"]
    },
    {
      step: 2,
      title: "Maßgeschneiderte Lösung", 
      description: "Entwicklung Ihrer individuellen Digitalstrategie",
      time: "1-3 Wochen",
      icon: Monitor,
      details: ["Custom Design", "Branchen-Features", "Mobile-First", "SEO-Integration"]
    },
    {
      step: 3,
      title: "Launch & Erfolg",
      description: "Go-Live mit Erfolgsgarantie und laufender Optimierung",
      time: "1 Tag + Support",
      icon: Rocket,
      details: ["24h-Launch", "Schulung", "3 Monate Support", "Erfolgs-Tracking"]
    }
  ];

  const renderBeforeAfterChart = (data: any) => (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl">
      <div className="grid grid-cols-2 gap-6">
        {/* Before */}
        <div className="text-center">
          <h5 className="text-sm font-medium text-red-600 mb-3">VORHER</h5>
          <div className="space-y-3">
            <div>
              <div className="text-2xl font-bold text-gray-900">{data.before.visitors}</div>
              <div className="text-xs text-gray-500">Besucher/Monat</div>
            </div>
            <div>
              <div className="text-lg font-bold text-red-600">{data.before.orders}</div>
              <div className="text-xs text-gray-500">Anfragen</div>
            </div>
            <div className="bg-red-50 px-3 py-2 rounded-lg">
              <div className="text-sm font-bold text-red-700">{data.before.revenue}</div>
            </div>
          </div>
        </div>

        {/* After */}
        <div className="text-center">
          <h5 className="text-sm font-medium text-green-600 mb-3">NACHHER</h5>
          <div className="space-y-3">
            <div>
              <div className="text-2xl font-bold text-gray-900">{data.after.visitors}</div>
              <div className="text-xs text-gray-500">Besucher/Monat</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">{data.after.orders}</div>
              <div className="text-xs text-gray-500">Anfragen</div>
            </div>
            <div className="bg-green-50 px-3 py-2 rounded-lg">
              <div className="text-sm font-bold text-green-700">{data.after.revenue}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Growth Arrow */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">
            +{Math.round(((data.after.orders - data.before.orders) / data.before.orders) * 100)}% Wachstum
          </span>
        </div>
      </div>
    </div>
  );

  // Contact Modal Component
  const ContactModal = () => {
    if (!isModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Kostenlose Projektberatung</h3>
                <p className="text-blue-100">
                  {selectedProject ? `Ähnlich wie: ${selectedProject.title}` : 'Lassen Sie uns über Ihr Projekt sprechen'}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
            {/* Project Reference */}
            {selectedProject && (
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{selectedProject.icon}</span>
                  <div>
                    <h4 className="font-semibold text-blue-900">{selectedProject.title}</h4>
                    <p className="text-blue-600 text-sm">{selectedProject.industry}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Herausforderung:</strong> {selectedProject.challenge}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Lösung:</strong> {selectedProject.solution}
                  </p>
                  <p className="text-sm text-green-700 font-medium">
                    <strong>Ergebnis:</strong> {selectedProject.result}
                  </p>
                </div>
              </div>
            )}

            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Ihr Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Unternehmen
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Firma GmbH"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  E-Mail Adresse *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="max@firma.de"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="0531 123 456"
                />
              </div>
            </div>

            {/* Project Type (hidden if selected) */}
            {!selectedProject && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Art des Projekts
                </label>
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="z.B. Neue Website, Online-Shop, Terminbuchung..."
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Ihre Nachricht
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Beschreiben Sie uns kurz Ihre Situation und Ihre Ziele..."
              />
            </div>

            {/* Benefits */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Das erwartet Sie:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-green-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Kostenlose Erstberatung (60 Min)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Konkrete Lösungsvorschläge
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Unverbindliches Angebot
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Rückmeldung in 24h
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Kostenlose Beratung anfragen
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
              >
                Abbrechen
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <ContactModal />
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium mb-8 animate-bounce">
            <Lightbulb className="w-4 h-4" />
            DIGITAL TRANSFORMATION
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ihr
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600"> Digitalisierungs-Partner </span>
            für praktische Lösungen
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Wir analysieren Ihre konkreten Herausforderungen und entwickeln 
            <strong> passende digitale Lösungen</strong>, die wirklich funktionieren und 
            <strong> schnell umgesetzt</strong> werden können.
          </p>
        </div>

        {/* Problem Categories Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex flex-wrap gap-2">
              {Object.entries(problemCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Problems vs Solutions Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex">
              <button
                onClick={() => setActiveTab("problems")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "problems"
                    ? "bg-red-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                🔍 Herausforderungen
              </button>
              <button
                onClick={() => setActiveTab("solutions")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "solutions"
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                💡 Unsere Lösungen
              </button>
            </div>
          </div>
        </div>

        {/* Problem/Solution Content */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeTab === "problems" 
                ? `🔍 ${problemCategories[activeCategory as keyof typeof problemCategories].title} - Typische Herausforderungen` 
                : `💡 ${problemCategories[activeCategory as keyof typeof problemCategories].title} - Praktische Lösungen`
              }
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {activeTab === "problems" 
                ? "Diese Herausforderungen kennen viele Unternehmen:"
                : "So unterstützen wir Sie mit bewährten Lösungen:"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activeTab === "problems" ? (
              problemCategories[activeCategory as keyof typeof problemCategories].problems.map((problem, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-red-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                    <problem.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h4>
                  <p className="text-gray-600 mb-4">{problem.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="text-xs font-medium text-red-600 uppercase tracking-wide mb-1">AUSWIRKUNG</div>
                      <div className="text-red-700 font-semibold text-sm">{problem.impact}</div>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <div className="text-xs font-medium text-orange-600 uppercase tracking-wide mb-1">KOSTET SIE</div>
                      <div className="text-orange-700 font-bold">{problem.cost}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              innovativeSolutions[activeCategory as keyof typeof innovativeSolutions].map((solution, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h4>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">INNOVATION</div>
                      <div className="text-blue-700 font-semibold text-sm">{solution.innovation}</div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-xs font-medium text-green-600 uppercase tracking-wide mb-1">IHR GEWINN</div>
                      <div className="text-green-700 font-bold">{solution.result}</div>
                    </div>
                  </div>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => {
                        setSelectedProject(null);
                        setFormData(prev => ({
                          ...prev,
                          projectType: solution.title,
                          message: `Ich interessiere mich für die Lösung "${solution.title}". ${solution.description}`
                        }));
                        setIsModalOpen(true);
                      }}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg font-semibold"
                    >
                      Mehr über diese Lösung
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Visual Stats Comparison */}
        <div className="mb-20 bg-white/60 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Typische Verbesserungen durch unsere Lösungen
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Before Chart */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h4 className="text-xl font-bold text-red-700 mb-6 text-center">Ausgangssituation</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Website-Conversion</span>
                    <span className="font-bold text-red-600">{animatedStats.oldConversion}%</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-3">
                    <div 
                      className="bg-red-500 h-3 rounded-full transition-all duration-2000 ease-out"
                      style={{width: `${animatedStats.oldConversion * 8}%`}}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Monatliche Anfragen</span>
                    <span className="font-bold text-red-600">{animatedStats.oldReach}</span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-3">
                    <div 
                      className="bg-red-500 h-3 rounded-full transition-all duration-2000 ease-out"
                      style={{width: `${(animatedStats.oldReach / 600) * 100}%`}}
                    ></div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="text-2xl font-bold text-red-600">📊</div>
                  <div className="text-red-700 font-medium">Aktueller Stand</div>
                </div>
              </div>
            </div>

            {/* After Chart */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-green-700 mb-6 text-center">Nach Optimierung</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Website-Conversion</span>
                    <span className="font-bold text-green-600">{animatedStats.newConversion}%</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-2000 ease-out delay-500"
                      style={{width: `${animatedStats.newConversion * 8}%`}}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Monatliche Anfragen</span>
                    <span className="font-bold text-green-600">{animatedStats.newReach}</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-2000 ease-out delay-500"
                      style={{width: `${(animatedStats.newReach / 600) * 100}%`}}
                    ></div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <div className="text-2xl font-bold text-green-600">📈</div>
                  <div className="text-green-700 font-medium">Mögliche Verbesserung</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full">
              <ArrowUp className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-700">Typische Verbesserungen unserer Kunden</span>
            </div>
          </div>
        </div>

        {/* Enhanced Success Stories */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Konkrete Projekte unserer Kunden
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group"
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{useCase.icon}</span>
                    <div>
                      <h4 className="font-bold text-xl">{useCase.title}</h4>
                      <span className="text-blue-100 text-sm">{useCase.industry}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs font-medium text-blue-100 uppercase tracking-wide mb-1">CHALLENGE</div>
                    <div className="text-white text-sm">{useCase.challenge}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">Lösung</span>
                      <p className="text-gray-700 text-sm mt-1">{useCase.solution}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <span className="text-xs font-medium text-green-600 uppercase tracking-wide">Ergebnis</span>
                      <p className="text-green-800 font-bold text-lg mt-1">{useCase.result}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 text-sm font-medium">Umsetzung: {useCase.timeline}</span>
                      </div>
                    </div>

                    {/* Before/After Chart */}
                    {hoveredCase === index && (
                      <div className="animate-fadeIn">
                        {renderBeforeAfterChart(useCase.beforeAfter)}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button 
                      onClick={() => openProjectModal(useCase)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Beratung für ähnliches Projekt
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Transformation Process */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            So schnell geht Ihre digitale Transformation
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Unser bewährter 3-Schritt-Prozess bringt Sie garantiert zum Erfolg
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {transformationSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-gray-900">{step.title}</h4>
                    <span className="text-blue-600 text-sm font-medium">{step.time}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{step.description}</p>

                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {detail}
                    </div>
                  ))}
                </div>

                {/* Arrow (except for last item) */}
                {index < transformationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 z-10">
                    <ChevronRight className="w-8 h-8 text-blue-400 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative">
                <h4 className="text-3xl font-bold mb-6">
                  Lassen Sie uns über Ihre Digitalisierung sprechen
                </h4>
                <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                  Gemeinsam finden wir heraus, welche digitalen Lösungen 
                  für Ihr Unternehmen sinnvoll sind. 
                  <strong> Kostenlose Erstberatung</strong> - 
                  wir analysieren Ihre Situation und zeigen konkrete Verbesserungsmöglichkeiten.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      setFormData(prev => ({
                        ...prev,
                        projectType: 'Allgemeine Digitalisierungsberatung',
                        message: 'Ich interessiere mich für eine kostenlose Beratung zur Digitalisierung meines Unternehmens.'
                      }));
                      setIsModalOpen(true);
                    }}
                    className="bg-white text-orange-600 font-bold px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Kostenlose Beratung vereinbaren
                  </button>
                  <a
                    href="tel:+4953112345678"
                    className="border-2 border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Direkt anrufen: 0531 123 456
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-orange-100">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Unverbindlich</div>
                      <div className="text-xs">Kostenlose Beratung</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Schnelle Umsetzung</div>
                      <div className="text-xs">1-3 Wochen je nach Umfang</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Erfahrung</div>
                      <div className="text-xs">Viele zufriedene Kunden</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
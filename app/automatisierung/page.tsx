"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Bot, Zap, TrendingUp, Clock, DollarSign, Brain, 
  CheckCircle, Star, ArrowRight, Sparkles, Users, Phone, Mail,
  MessageSquare, Calendar, Bell, Award, Shield, Building2,
  ChevronRight, Play, Pause, LineChart, PieChart, Settings,
  Database, Workflow, UserCheck, Eye, MousePointer, FileText,
  Send, Heart, Lightbulb, Rocket, AlertCircle, X, Menu,
  ArrowUp, ArrowDown, Plus, Minus, Search, Filter, Download,
  RefreshCw, Share2, Globe, Smartphone, Laptop, Monitor,
  MapPin, Coffee, Store, Factory, Briefcase, Calculator,
  Cpu, Code, Layers, Target, BarChart3, Mic, Camera,
  ShoppingCart, CreditCard, Truck, Package, Headphones
} from "lucide-react";

export default function KIAutomatisierungPage() {
  const [activeDemo, setActiveDemo] = useState("chatbot");
  const [isKIProcessRunning, setIsKIProcessRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState("einzelhandel");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [aiROIInputs, setAiROIInputs] = useState({
    employees: 25,
    hourlyWage: 35,
    processTime: 120, // minutes per day
    errorRate: 15, // percentage
    customerInquiries: 50 // per day
  });

  // KI Demo Schritte
  const kiSteps = [
    { title: "Anfrage erkannt", content: "🤖 Kunde fragt: 'Haben Sie das Produkt in Blau?'", action: "KI analysiert Anfrage" },
    { title: "Inventar geprüft", content: "📦 Lagerbestand: 15 Stück in Blau verfügbar", action: "Automatische Datenbankabfrage" },
    { title: "Antwort generiert", content: "💬 'Ja, wir haben 15 Stück in Blau vorrätig!'", action: "Personalisierte Antwort erstellt" },
    { title: "Cross-Selling", content: "🎯 'Passt dazu: Matching-Accessoires'", action: "KI schlägt Ergänzungen vor" },
    { title: "Lead erfasst", content: "📊 Interesse dokumentiert & CRM aktualisiert", action: "Automatische Weiterleitung" }
  ];

  // Auto-advance KI Demo
  useEffect(() => {
    if (isKIProcessRunning) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % kiSteps.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isKIProcessRunning]);

  const kiDemos = {
    chatbot: {
      title: "Intelligenter Kundenservice",
      icon: MessageSquare,
      color: "from-blue-500 to-purple-500",
      description: "24/7 Kundenbetreuung mit KI-Chatbots",
      beforeAfter: {
        before: { time: "4h täglich", cost: "3.500€/Monat", satisfaction: "72%" },
        after: { time: "30 Min täglich", cost: "299€/Monat", satisfaction: "94%" }
      },
      features: ["Natürliche Sprachverarbeitung", "Mehrsprachiger Support", "CRM-Integration", "Lernfähige KI"]
    },
    kundenanalyse: {
      title: "Intelligente Kundenanalyse",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      description: "KI analysiert Kundenverhalten und deckt Umsatzpotenziale auf",
      beforeAfter: {
        before: { insights: "Oberflächlich", segmente: "3 Basic", churn: "25%" },
        after: { insights: "360° Deep", segmente: "12 Intelligent", churn: "8%" }
      },
      features: ["Customer Journey Mapping", "Predictive Churn Analysis", "Micro-Segmentierung", "Lifetime Value Prognose"]
    },
    umsatzoptimierung: {
      title: "Data-Driven Umsatzwachstum",
      icon: DollarSign,
      color: "from-emerald-500 to-green-500",
      description: "KI identifiziert neue Umsatzquellen und optimiert Preise",
      beforeAfter: {
        before: { revenue: "Stagnierend", pricing: "Statisch", opportunities: "Unentdeckt" },
        after: { revenue: "+35% Growth", pricing: "Dynamic AI", opportunities: "KI-erkannt" }
      },
      features: ["Revenue Opportunity Mining", "Dynamic Pricing AI", "Cross-Sell Optimization", "Market Gap Analysis"]
    },
    workflow: {
      title: "Workflow Automation",
      icon: Workflow,
      color: "from-violet-500 to-purple-500",
      description: "Komplette Geschäftsprozesse intelligent automatisieren",
      beforeAfter: {
        before: { manual: "85%", errors: "12%", speed: "Langsam" },
        after: { manual: "15%", errors: "1.2%", speed: "10x schneller" }
      },
      features: ["No-Code Automation", "Multi-System Integration", "Intelligente Entscheidungen", "Real-time Monitoring"]
    },
    dokumenten: {
      title: "Automatische Dokumentenverarbeitung", 
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      description: "Rechnungen, Verträge & E-Mails automatisch verarbeiten",
      beforeAfter: {
        before: { time: "6h täglich", cost: "4.200€/Monat", accuracy: "87%" },
        after: { time: "15 Min täglich", cost: "199€/Monat", accuracy: "99.2%" }
      },
      features: ["OCR-Texterkennung", "Automatische Kategorisierung", "Workflow-Integration", "Compliance-Prüfung"]
    },
    verkauf: {
      title: "KI-gestützter Verkauf",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500", 
      description: "Intelligente Lead-Bewertung und Verkaufsprognosen",
      beforeAfter: {
        before: { conversion: "12%", forecast: "±45%", time: "8h/Woche" },
        after: { conversion: "28%", forecast: "±8%", time: "1h/Woche" }
      },
      features: ["Predictive Analytics", "Lead Scoring", "Cross-Selling Empfehlungen", "Automatische Follow-ups"]
    },
    produktion: {
      title: "Smart Manufacturing",
      icon: Factory,
      color: "from-purple-500 to-pink-500",
      description: "Vorausschauende Wartung und Qualitätskontrolle",
      beforeAfter: {
        before: { downtime: "12%", defects: "5.2%", maintenance: "Reaktiv" },
        after: { downtime: "2.1%", defects: "0.8%", maintenance: "Prädiktiv" }
      },
      features: ["IoT-Sensoren", "Predictive Maintenance", "Qualitäts-KI", "Optimierung in Echtzeit"]
    }
  };

  const kmuUseCases = {
    einzelhandel: {
      name: "Einzelhandel & E-Commerce",
      icon: "🛍️",
      color: "from-blue-500 to-purple-500",
      examples: [
        {
          title: "Intelligente Lageroptimierung",
          description: "KI analysiert Verkaufsmuster und optimiert automatisch Bestellungen",
          savings: "25% weniger Lagerkosten",
          icon: Package
        },
        {
          title: "Personalisierte Produktempfehlungen", 
          description: "Kunden erhalten maßgeschneiderte Vorschläge basierend auf Kaufhistorie",
          savings: "40% höhere Conversion",
          icon: Target
        },
        {
          title: "Automatisierte Preisanpassung",
          description: "Dynamic Pricing basierend auf Nachfrage und Konkurrenz",
          savings: "15% mehr Gewinn",
          icon: DollarSign
        }
      ]
    },
    handwerk: {
      name: "Handwerk & Service",
      icon: "🔧", 
      color: "from-orange-500 to-red-500",
      examples: [
        {
          title: "Intelligente Terminplanung",
          description: "KI optimiert Routen und plant Termine basierend auf Expertise",
          savings: "30% mehr Termine/Tag",
          icon: Calendar
        },
        {
          title: "Automatische Kostenvoranschläge",
          description: "KI erstellt präzise Angebote basierend auf Fotos und Beschreibung",
          savings: "85% weniger Aufwand",
          icon: Calculator
        },
        {
          title: "Prädiktive Wartung",
          description: "Vorhersage von Reparaturbedarf bei Kundengeräten",
          savings: "60% weniger Notfälle",
          icon: Cpu
        }
      ]
    },
    gastronomie: {
      name: "Gastronomie & Hotels",
      icon: "🍽️",
      color: "from-green-500 to-emerald-500", 
      examples: [
        {
          title: "Nachfrageprognose",
          description: "KI sagt Gästezahlen vorher und optimiert Einkauf & Personal",
          savings: "20% weniger Food Waste",
          icon: BarChart3
        },
        {
          title: "Intelligente Speisekarte",
          description: "Dynamic Menu basierend auf Zutaten, Wetter und Trends",
          savings: "35% höhere Marge",
          icon: Brain
        },
        {
          title: "Automatisierte Bewertungsantworten",
          description: "KI antwortet professionell auf Online-Bewertungen",
          savings: "90% weniger Zeitaufwand",
          icon: MessageSquare
        }
      ]
    },
    beratung: {
      name: "Beratung & Kanzleien",
      icon: "⚖️",
      color: "from-purple-500 to-pink-500",
      examples: [
        {
          title: "Intelligente Dokumentenanalyse",
          description: "KI extrahiert relevante Informationen aus Verträgen und Akten",
          savings: "70% schnellere Bearbeitung",
          icon: Search
        },
        {
          title: "Automatisierte Recherche",
          description: "KI findet relevante Urteile und Präzedenzfälle",
          savings: "80% weniger Recherchezeit",
          icon: Database
        },
        {
          title: "Mandantenklassifizierung",
          description: "Automatische Bewertung von Erfolgsaussichten neuer Fälle",
          savings: "45% höhere Erfolgsquote",
          icon: UserCheck
        }
      ]
    }
  };

  const implementierungsSchritte = [
    {
      phase: "Analyse",
      duration: "1-2 Wochen",
      description: "Prozessanalyse und KI-Potenzial-Assessment",
      icon: Search,
      deliverables: ["Ist-Analyse", "KI-Roadmap", "ROI-Prognose"]
    },
    {
      phase: "Pilot-Projekt",
      duration: "2-4 Wochen", 
      description: "Implementierung eines ersten KI-Use-Cases",
      icon: Rocket,
      deliverables: ["MVP-System", "Training der KI", "Performance-Tests"]
    },
    {
      phase: "Rollout",
      duration: "4-8 Wochen",
      description: "Vollständige Integration und Skalierung",
      icon: Layers,
      deliverables: ["Produktivsystem", "Mitarbeiter-Schulung", "Monitoring"]
    },
    {
      phase: "Optimierung",
      duration: "Ongoing",
      description: "Kontinuierliche Verbesserung und Erweiterung",
      icon: TrendingUp,
      deliverables: ["Performance-Reports", "KI-Updates", "Feature-Erweiterungen"]
    }
  ];

  const calculateAIROI = () => {
    const { employees, hourlyWage, processTime, errorRate, customerInquiries } = aiROIInputs;
    
    // Current costs
    const dailyProcessHours = (processTime / 60);
    const currentDailyCost = employees * dailyProcessHours * hourlyWage;
    const currentAnnualCost = currentDailyCost * 250; // 250 Arbeitstage
    
    // Error costs (15% current error rate)
    const errorCostPerIncident = 50; // Average cost per error
    const currentErrorCosts = (customerInquiries * 250 * errorRate / 100) * errorCostPerIncident;
    
    // With AI
    const aiEfficiencyGain = 0.8; // 80% efficiency improvement
    const newDailyCost = currentDailyCost * (1 - aiEfficiencyGain);
    const newAnnualCost = newDailyCost * 250;
    
    // AI reduces errors to 2%
    const newErrorRate = 2;
    const newErrorCosts = (customerInquiries * 250 * newErrorRate / 100) * errorCostPerIncident;
    
    const aiSystemCost = employees * 199 * 12; // AI subscription cost
    
    const totalCurrentCosts = currentAnnualCost + currentErrorCosts;
    const totalNewCosts = newAnnualCost + newErrorCosts + aiSystemCost;
    const totalSavings = totalCurrentCosts - totalNewCosts;
    const roi = ((totalSavings - aiSystemCost) / aiSystemCost) * 100;
    
    return {
      currentCosts: totalCurrentCosts,
      newCosts: totalNewCosts,
      savings: totalSavings,
      aiInvestment: aiSystemCost,
      roi: roi,
      paybackMonths: Math.ceil(aiSystemCost / (totalSavings / 12)),
      timesSaved: (processTime * aiEfficiencyGain) // minutes per day
    };
  };

  const aiROI = calculateAIROI();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-2xl animate-bounce"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-3 rounded-full text-sm font-bold mb-8 animate-bounce">
                <Bot className="w-5 h-5" />
                <span>KI-AUTOMATISIERUNG FÜR KMUS</span>
                <Sparkles className="w-5 h-5" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="block">Ihr Unternehmen wird</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 block animate-pulse">
                  KI-intelligent
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Mit Künstlicher Intelligenz automatisieren KMUs bis zu <strong className="text-purple-600">80% ihrer Routine-Aufgaben</strong>, 
                sparen <strong className="text-pink-600">15+ Stunden pro Woche</strong> und steigern die <strong className="text-indigo-600">Effizienz um 400%</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button 
                  onClick={() => setIsKIProcessRunning(!isKIProcessRunning)}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-3 group"
                >
                  <Brain className="w-6 h-6 group-hover:animate-pulse" />
                  KI-Demo jetzt erleben
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all">
                  Kostenlose KI-Analyse
                </button>
              </div>

              {/* Interactive KI Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { value: "80%", label: "Weniger Routine", icon: Zap, color: "text-purple-600" },
                  { value: "15h", label: "Gespart/Woche", icon: Clock, color: "text-pink-600" },
                  { value: "400%", label: "Mehr Effizienz", icon: TrendingUp, color: "text-indigo-600" },
                  { value: "24/7", label: "KI arbeitet", icon: Bot, color: "text-emerald-600" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 bg-white/70 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all cursor-pointer border border-white/50 hover:shadow-xl group"
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:animate-bounce`} />
                    <div className={`text-3xl font-bold ${stat.color} ${hoveredBenefit === index ? 'animate-pulse' : ''}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Live KI Demo */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Erleben Sie KI live in Aktion
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Ihr digitaler Mitarbeiter
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Sehen Sie, wie KI komplexe Kundenanfragen in Sekunden intelligent bearbeitet
              </p>

              <div className="flex justify-center items-center gap-6 mb-12">
                <button
                  onClick={() => setIsKIProcessRunning(!isKIProcessRunning)}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg font-semibold group"
                >
                  {isKIProcessRunning ? (
                    <Pause className="w-5 h-5 group-hover:animate-pulse" />
                  ) : (
                    <Play className="w-5 h-5 group-hover:animate-pulse" />
                  )}
                  KI-Demo {isKIProcessRunning ? 'pausieren' : 'starten'}
                </button>
                <span className="text-sm text-gray-600">
                  Schritt {currentStep + 1} / {kiSteps.length}
                </span>
              </div>
            </div>

            {/* KI Demo Interface */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto border-4 border-gradient-to-r from-purple-200 to-pink-200">
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 animate-pulse" />
                    <span className="font-bold text-lg">KI-Assistant: SmartBot Pro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live & Lernend</span>
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-8">
                {/* Current KI Step */}
                <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 rounded-2xl border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center flex items-center justify-center gap-3">
                    <Bot className="w-6 h-6 text-purple-600 animate-bounce" />
                    KI-Prozess: {kiSteps[currentStep]?.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-sm text-gray-600 mb-2">INPUT</div>
                      <div className="text-lg font-bold text-blue-600">{kiSteps[currentStep]?.content}</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-sm text-gray-600 mb-2">KI-VERARBEITUNG</div>
                      <div className="text-lg font-bold text-purple-600">{kiSteps[currentStep]?.action}</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-sm text-gray-600 mb-2">ERGEBNIS</div>
                      <div className="text-lg font-bold text-green-600">✓ Automatisiert</div>
                    </div>
                  </div>
                </div>

                {/* KI Capabilities */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { title: "Spracherkennung", value: "99.2%", icon: Mic, color: "text-blue-600" },
                    { title: "Antwortzeit", value: "< 2s", icon: Zap, color: "text-yellow-600" },
                    { title: "Genauigkeit", value: "97.8%", icon: Target, color: "text-green-600" },
                    { title: "Lernfortschritt", value: "+12%", icon: TrendingUp, color: "text-purple-600" }
                  ].map((metric, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                      <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                      <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.title}</div>
                    </div>
                  ))}
                </div>

                {/* Progress Visualization */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">KI-Lernfortschritt in Echtzeit</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Verarbeitungsgeschwindigkeit</span>
                    <span className="text-sm font-bold text-purple-600">
                      {Math.round(((currentStep + 1) / kiSteps.length) * 100)}% optimiert
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${((currentStep + 1) / kiSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full">
                <Brain className="w-5 h-5 text-purple-600" />
                <span className="font-bold text-purple-800">
                  KI lernt kontinuierlich und wird täglich intelligenter
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* KI Demo Tabs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                KI-Lösungen für jeden Bereich
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entdecken Sie, wie KI Ihre spezifischen Geschäftsprozesse revolutioniert
              </p>
            </div>

            {/* Demo Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(kiDemos).map(([key, demo]) => (
                <button
                  key={key}
                  onClick={() => setActiveDemo(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-3 ${
                    activeDemo === key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  <demo.icon className="w-5 h-5" />
                  {demo.title}
                </button>
              ))}
            </div>

            {/* Active Demo Details */}
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-6xl mx-auto">
              {Object.entries(kiDemos).map(([key, demo]) => {
                if (key !== activeDemo) return null;
                
                return (
                  <div key={key} className="space-y-8">
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${demo.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                        <demo.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{demo.title}</h3>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{demo.description}</p>
                    </div>

                    {/* Before/After Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                        <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                          <X className="w-5 h-5" />
                          Ohne KI
                        </h4>
                        <div className="space-y-3">
                          {Object.entries(demo.beforeAfter.before).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize">{key}:</span>
                              <span className="font-bold text-red-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                        <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Mit KI
                        </h4>
                        <div className="space-y-3">
                          {Object.entries(demo.beforeAfter.after).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize">{key}:</span>
                              <span className="font-bold text-green-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {demo.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                        {demo.title} implementieren
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Data-Driven Revenue Intelligence */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Data-Driven Revenue Intelligence
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                  KI entdeckt verstecktes Umsatzpotenzial
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unsere KI analysiert Ihre Daten und deckt neue Umsatzquellen auf, die Sie nie vermutet hätten
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Customer Analytics Dashboard */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-emerald-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">360° Kundenanalyse</h3>
                    <p className="text-gray-600">KI erkennt Verhaltensmuster</p>
                  </div>
                </div>

                {/* Customer Segments */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-900">Intelligente Kundensegmente:</h4>
                  {[
                    { segment: "High-Value Loyalisten", size: "23%", value: "€8.500 LTV", growth: "+45%", color: "emerald" },
                    { segment: "Price-Sensitive Buyer", size: "34%", value: "€2.100 LTV", growth: "+12%", color: "blue" },
                    { segment: "Trend-Early Adopters", size: "18%", value: "€5.800 LTV", growth: "+89%", color: "purple" },
                    { segment: "At-Risk Kunden", size: "15%", value: "€3.200 LTV", growth: "-23%", color: "red" }
                  ].map((customer, index) => (
                    <div key={index} className={`p-4 rounded-xl border-l-4 border-${customer.color}-500 bg-${customer.color}-50`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-gray-900">{customer.segment}</div>
                          <div className="text-sm text-gray-600">{customer.size} Ihrer Kunden</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold text-${customer.color}-600`}>{customer.value}</div>
                          <div className={`text-sm ${customer.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {customer.growth}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Predictive Insights */}
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-4 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    KI-Vorhersagen (nächste 30 Tage):
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-emerald-600 font-medium">Churn Risiko:</div>
                      <div className="text-red-600 font-bold">12 Kunden (€34.500)</div>
                    </div>
                    <div>
                      <div className="text-emerald-600 font-medium">Upsell Ready:</div>
                      <div className="text-green-600 font-bold">28 Kunden (€67.200)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Opportunities */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-cyan-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Umsatz-Opportunities</h3>
                    <p className="text-gray-600">KI-entdeckte Potenziale</p>
                  </div>
                </div>

                {/* Revenue Opportunities List */}
                <div className="space-y-4 mb-6">
                  {[
                    {
                      opportunity: "Cross-Sell Automation",
                      description: "KI erkennt Kaufbereitschaft für Zusatzprodukte",
                      potential: "€125.000/Jahr",
                      confidence: "92%",
                      timeframe: "2 Monate",
                      icon: Target
                    },
                    {
                      opportunity: "Dynamic Pricing",
                      description: "Nachfragebasierte Preisoptimierung",
                      potential: "€89.000/Jahr", 
                      confidence: "87%",
                      timeframe: "3 Wochen",
                      icon: TrendingUp
                    },
                    {
                      opportunity: "Churn Prevention",
                      description: "Früherkennung & automatische Retention",
                      potential: "€156.000/Jahr",
                      confidence: "94%",
                      timeframe: "1 Monat",
                      icon: Shield
                    },
                    {
                      opportunity: "New Market Segments",
                      description: "KI identifiziert unentdeckte Zielgruppen",
                      potential: "€234.000/Jahr",
                      confidence: "79%",
                      timeframe: "4 Monate",
                      icon: Users
                    }
                  ].map((opp, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-xl border border-cyan-200 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <opp.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-900">{opp.opportunity}</h4>
                            <div className="text-right">
                              <div className="font-bold text-emerald-600">{opp.potential}</div>
                              <div className="text-xs text-gray-500">{opp.timeframe}</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{opp.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500">KI-Konfidenz: {opp.confidence}</div>
                            <button className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full hover:bg-emerald-200 transition-all">
                              Implementieren
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Potential */}
                <div className="bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-xl p-4 border-2 border-emerald-300">
                  <div className="text-center">
                    <div className="text-sm text-emerald-600 font-medium mb-1">GESAMTES KI-UMSATZPOTENZIAL</div>
                    <div className="text-3xl font-bold text-emerald-700">€604.000/Jahr</div>
                    <div className="text-sm text-gray-600">Bei 87% durchschnittlicher Erfolgswahrscheinlichkeit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Growth Timeline */}
            <div className="mt-16 bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                📈 KI-Revenue Roadmap: Ihr Wachstumsplan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    month: "Monat 1-2",
                    focus: "Customer Intelligence",
                    revenue: "+€35k",
                    actions: ["Kundensegmentierung", "Churn-Analyse", "LTV-Berechnung"],
                    color: "emerald"
                  },
                  {
                    month: "Monat 3-4", 
                    focus: "Cross-Sell Automation",
                    revenue: "+€67k",
                    actions: ["Recommendation Engine", "Automated Upselling", "Behavior Tracking"],
                    color: "cyan"
                  },
                  {
                    month: "Monat 5-6",
                    focus: "Dynamic Pricing",
                    revenue: "+€89k", 
                    actions: ["Price Optimization", "Demand Forecasting", "Competitor Analysis"],
                    color: "blue"
                  },
                  {
                    month: "Monat 7+",
                    focus: "New Markets",
                    revenue: "+€234k",
                    actions: ["Market Expansion", "Product Innovation", "Channel Optimization"],
                    color: "purple"
                  }
                ].map((phase, index) => (
                  <div key={index} className={`p-6 rounded-2xl border-2 border-${phase.color}-200 bg-${phase.color}-50 hover:shadow-lg transition-all`}>
                    <div className="text-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600 rounded-full flex items-center justify-center mx-auto mb-2`}>
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="font-bold text-gray-900">{phase.month}</div>
                      <div className={`text-lg font-bold text-${phase.color}-600`}>{phase.revenue}</div>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-3 text-center">{phase.focus}</h4>
                    
                    <div className="space-y-2">
                      {phase.actions.map((action, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className={`w-4 h-4 text-${phase.color}-500`} />
                          <span className="text-gray-700">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Automation Deep Dive */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Intelligente Workflow Automation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  Komplette Prozesse ohne manuellen Eingriff
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Von der Kundenanfrage bis zur Rechnung - KI orchestriert Ihre gesamten Geschäftsprozesse
              </p>
            </div>

            {/* Workflow Examples */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* E-Commerce Workflow */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-violet-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">E-Commerce Automation</h3>
                    <p className="text-gray-600">Von Bestellung bis Lieferung</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      action: "Bestellung eingeht",
                      trigger: "Kunde bestellt online",
                      automation: "KI prüft Lagerbestand & Betrug",
                      result: "Automatische Bestellbestätigung",
                      time: "< 30s"
                    },
                    {
                      step: 2,
                      action: "Lager-Management",
                      trigger: "Bestellung bestätigt",
                      automation: "KI reserviert Waren & plant Kommissionierung",
                      result: "Optimierte Picking-Route generiert",
                      time: "< 2 Min"
                    },
                    {
                      step: 3,
                      action: "Versand-Optimierung",
                      trigger: "Waren kommissioniert",
                      automation: "KI wählt optimalen Versandweg",
                      result: "Versandetikett & Tracking erstellt",
                      time: "< 1 Min"
                    },
                    {
                      step: 4,
                      action: "Kunden-Updates",
                      trigger: "Paket unterwegs",
                      automation: "KI sendet proaktive Updates",
                      result: "Kunde erhält Lieferprognose",
                      time: "Echtzeit"
                    },
                    {
                      step: 5,
                      action: "Follow-up & Upsell",
                      trigger: "Lieferung bestätigt",
                      automation: "KI analysiert Zufriedenheit & Kaufverhalten",
                      result: "Personalisierte Produktempfehlungen",
                      time: "24h später"
                    }
                  ].map((flow, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {flow.step}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1">{flow.action}</div>
                          <div className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Trigger:</span> {flow.trigger}
                          </div>
                          <div className="text-sm text-violet-700 mb-2">
                            <span className="font-medium">KI-Action:</span> {flow.automation}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-green-600">
                              <span className="font-medium">Result:</span> {flow.result}
                            </div>
                            <div className="bg-violet-100 text-violet-700 px-2 py-1 rounded-full text-xs font-medium">
                              {flow.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-300">
                  <div className="text-center">
                    <div className="text-sm text-green-600 font-medium mb-1">EFFIZIENZ-STEIGERUNG</div>
                    <div className="text-2xl font-bold text-green-700">95% weniger manueller Aufwand</div>
                    <div className="text-sm text-gray-600">Von 4h auf 12 Min pro Bestellung</div>
                  </div>
                </div>
              </div>

              {/* Service Business Workflow */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-purple-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Service-Business Automation</h3>
                    <p className="text-gray-600">Von Anfrage bis Abrechnung</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      action: "Kundenanfrage",
                      trigger: "E-Mail/Telefon/Chat",
                      automation: "KI klassifiziert Anfrage & Priorität",
                      result: "Automatische Ticket-Erstellung",
                      impact: "100% Erfassung"
                    },
                    {
                      step: 2,
                      action: "Experten-Routing",
                      trigger: "Ticket erstellt",
                      automation: "KI wählt optimalen Techniker basierend auf Skills & Standort",
                      result: "Automatische Zuweisung & Terminvorschlag",
                      impact: "40% schneller"
                    },
                    {
                      step: 3,
                      action: "Kostenvoranschlag",
                      trigger: "Termin bestätigt",
                      automation: "KI analysiert ähnliche Fälle & erstellt Kostenschätzung",
                      result: "Automatischer Kostenvoranschlag per E-Mail",
                      impact: "85% Zeitersparnis"
                    },
                    {
                      step: 4,
                      action: "Auftrags-Abwicklung",
                      trigger: "Auftrag bestätigt",
                      automation: "KI plant Ressourcen, bestellt Material, blockiert Kalender",
                      result: "Vollständige Auftragsplanung",
                      impact: "60% effizienter"
                    },
                    {
                      step: 5,
                      action: "Abrechnung & Follow-up",
                      trigger: "Auftrag abgeschlossen",
                      automation: "KI erstellt Rechnung, sendet Zufriedenheitsumfrage, plant Wartung",
                      result: "Automatische Rechnung & Kundenbindung",
                      impact: "Sofortige Abrechnung"
                    }
                  ].map((flow, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {flow.step}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1">{flow.action}</div>
                          <div className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Trigger:</span> {flow.trigger}
                          </div>
                          <div className="text-sm text-purple-700 mb-2">
                            <span className="font-medium">KI-Automation:</span> {flow.automation}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-green-600">
                              <span className="font-medium">Result:</span> {flow.result}
                            </div>
                            <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                              {flow.impact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border-2 border-blue-300">
                  <div className="text-center">
                    <div className="text-sm text-blue-600 font-medium mb-1">BUSINESS IMPACT</div>
                    <div className="text-2xl font-bold text-blue-700">3x mehr Aufträge bewältigt</div>
                    <div className="text-sm text-gray-600">Bei gleichem Personalbestand</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Builder Preview */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-gradient-to-r from-violet-200 to-purple-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🛠️ No-Code Workflow Builder
                </h3>
                <p className="text-gray-600">Erstellen Sie intelligente Automatisierungen ohne Programmierung</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Trigger */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">1. Trigger definieren</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 p-2 rounded border border-green-200">E-Mail eingeht</div>
                    <div className="bg-green-50 p-2 rounded border border-green-200">Formular ausgefüllt</div>
                    <div className="bg-green-50 p-2 rounded border border-green-200">Termin gebucht</div>
                    <div className="bg-green-50 p-2 rounded border border-green-200">+ 50 weitere</div>
                  </div>
                </div>

                {/* KI Processing */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">2. KI-Verarbeitung</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-violet-50 p-2 rounded border border-violet-200">Text analysieren</div>
                    <div className="bg-violet-50 p-2 rounded border border-violet-200">Sentiment erkennen</div>
                    <div className="bg-violet-50 p-2 rounded border border-violet-200">Kategorie bestimmen</div>
                    <div className="bg-violet-50 p-2 rounded border border-violet-200">Priorität setzen</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">3. Automatische Aktionen</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 p-2 rounded border border-blue-200">E-Mail senden</div>
                    <div className="bg-blue-50 p-2 rounded border border-blue-200">Ticket erstellen</div>
                    <div className="bg-blue-50 p-2 rounded border border-blue-200">Termin buchen</div>
                    <div className="bg-blue-50 p-2 rounded border border-blue-200">CRM aktualisieren</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  Workflow Builder ausprobieren
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* KMU Use Cases */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                KI-Innovation für Ihre Branche
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Konkrete KI-Anwendungen mit messbaren Ergebnissen für KMUs
              </p>
            </div>

            {/* Industry Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(kmuUseCases).map(([key, industry]) => (
                <button
                  key={key}
                  onClick={() => setSelectedIndustry(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-3 ${
                    selectedIndustry === key
                      ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <span className="text-xl">{industry.icon}</span>
                  {industry.name}
                </button>
              ))}
            </div>

            {/* Selected Industry Examples */}
            {Object.entries(kmuUseCases).map(([key, industry]) => {
              if (key !== selectedIndustry) return null;
              
              return (
                <div key={key} className="space-y-8">
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${industry.color} text-white px-6 py-3 rounded-full text-lg font-bold`}>
                      <span className="text-2xl">{industry.icon}</span>
                      {industry.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industry.examples.map((example, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-105">
                        <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse`}>
                          <example.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{example.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{example.description}</p>
                        
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <div className="text-sm text-green-600 font-medium mb-1">MESSBARER NUTZEN</div>
                          <div className="text-lg font-bold text-green-700">{example.savings}</div>
                        </div>

                        <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-all">
                          Mehr Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Von der Idee zur KI-Lösung
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  in nur 4 Phasen
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unser bewährter Prozess für die erfolgreiche KI-Implementierung
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full hidden md:block"></div>
              
              <div className="space-y-12">
                {implementierungsSchritte.map((schritt, index) => (
                  <div key={index} className="relative flex items-start gap-8">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full items-center justify-center text-white font-bold text-lg relative z-10">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                            <schritt.icon className="w-6 h-6 text-purple-600" />
                            Phase {index + 1}: {schritt.phase}
                          </h3>
                          <p className="text-gray-600">{schritt.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                            {schritt.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {schritt.deliverables.map((deliverable, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm text-gray-700">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
                KI-Implementierung starten
              </button>
            </div>
          </div>
        </section>

        {/* AI ROI Calculator */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                KI-ROI Rechner
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Ihr Einsparpotenzial
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Berechnen Sie konkret, wie viel KI Ihrem Unternehmen spart
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ihre aktuellen Prozesse</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anzahl Mitarbeiter
                      </label>
                      <input
                        type="number"
                        value={aiROIInputs.employees}
                        onChange={(e) => setAiROIInputs(prev => ({...prev, employees: Number(e.target.value)}))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stundenlohn (€)
                      </label>
                      <input
                        type="number"
                        value={aiROIInputs.hourlyWage}
                        onChange={(e) => setAiROIInputs(prev => ({...prev, hourlyWage: Number(e.target.value)}))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minuten täglich für Routine-Aufgaben
                      </label>
                      <input
                        type="number"
                        value={aiROIInputs.processTime}
                        onChange={(e) => setAiROIInputs(prev => ({...prev, processTime: Number(e.target.value)}))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Aktuelle Fehlerrate (%)
                      </label>
                      <input
                        type="number"
                        value={aiROIInputs.errorRate}
                        onChange={(e) => setAiROIInputs(prev => ({...prev, errorRate: Number(e.target.value)}))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kundenanfragen pro Tag
                      </label>
                      <input
                        type="number"
                        value={aiROIInputs.customerInquiries}
                        onChange={(e) => setAiROIInputs(prev => ({...prev, customerInquiries: Number(e.target.value)}))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ihr KI-Potenzial</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                      <div className="text-sm text-purple-600 font-medium mb-2">JÄHRLICHE ERSPARNIS</div>
                      <div className="text-3xl font-bold text-purple-700">
                        {aiROI.savings.toLocaleString('de-DE')}€
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <div className="text-sm text-green-600 font-medium mb-2">GESPARTE ZEIT PRO TAG</div>
                      <div className="text-2xl font-bold text-green-700">
                        {Math.round(aiROI.timesSaved)} Minuten
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <div className="text-sm text-blue-600 font-medium mb-2">KI-SYSTEM KOSTEN/JAHR</div>
                      <div className="text-2xl font-bold text-blue-700">
                        {aiROI.aiInvestment.toLocaleString('de-DE')}€
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-6 border-2 border-emerald-300">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-sm text-gray-600 mb-1">ROI</div>
                          <div className="text-2xl font-bold text-emerald-700">
                            {Math.round(aiROI.roi)}%
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Amortisation</div>
                          <div className="text-2xl font-bold text-emerald-700">
                            {aiROI.paybackMonths} Mon.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      * Berechnung basiert auf durchschnittlichen KI-Implementierungen bei KMUs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                KI-Erfolgsgeschichten
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                So haben andere KMUs mit KI ihre Effizienz revolutioniert
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  company: "Autohaus Schmidt",
                  industry: "Automotive",
                  challenge: "Überlasteter Kundenservice, verpasste Anfragen",
                  solution: "KI-Chatbot + Terminbuchung-Automatisierung",
                  results: {
                    efficiency: "+320%",
                    customerSat: "+87%",
                    revenue: "+45.000€/Jahr",
                    timesSaved: "25h/Woche"
                  },
                  quote: "Der KI-Bot beantwortet 80% der Anfragen automatisch. Unser Team kann sich auf komplexe Beratung konzentrieren.",
                  person: "Michael Schmidt, GF",
                  icon: "🚗"
                },
                {
                  company: "Bäckerei Müller",
                  industry: "Food & Beverage", 
                  challenge: "Schwankende Nachfrage, Food Waste",
                  solution: "KI-Nachfrageprognose + Bestelloptimierung",
                  results: {
                    waste: "-65%",
                    profit: "+28%",
                    efficiency: "+40%",
                    satisfaction: "+92%"
                  },
                  quote: "Die KI sagt präzise vorher, was wir backen müssen. Food Waste ist praktisch eliminiert.",
                  person: "Anna Müller, Inhaberin",
                  icon: "🥖"
                },
                {
                  company: "TechService Plus",
                  industry: "IT Services",
                  challenge: "Manuelle Ticket-Bearbeitung, Wartezeiten",
                  solution: "KI-gestützte Störungserkennung + Auto-Routing",
                  results: {
                    responseTime: "-80%",
                    resolution: "+60%",
                    capacity: "+150%",
                    costs: "-35%"
                  },
                  quote: "KI löst 70% der Standard-Probleme automatisch. Kunden sind begeistert von der schnellen Hilfe.",
                  person: "Lars Weber, CTO",
                  icon: "💻"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{story.icon}</span>
                      <div>
                        <h3 className="font-bold text-xl">{story.company}</h3>
                        <span className="text-purple-100">{story.industry}</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-xs font-medium text-purple-100 uppercase tracking-wide mb-1">Challenge</div>
                      <div className="text-white text-sm">{story.challenge}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">KI-Lösung</span>
                        <p className="text-gray-700 text-sm mt-1">{story.solution}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-900 mb-3">KI-Impact</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {Object.entries(story.results).map(([key, value]) => (
                            <div key={key} className="flex flex-col">
                              <span className="text-gray-600 capitalize text-xs">
                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                              </span>
                              <span className="text-purple-600 font-bold text-lg">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <blockquote className="text-gray-700 text-sm mb-2 italic">
                          "{story.quote}"
                        </blockquote>
                        <cite className="text-purple-600 text-xs font-medium">
                          — {story.person}
                        </cite>
                      </div>

                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105">
                        Ähnliche KI-Lösung anfragen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                KI-as-a-Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Transparent & Skalierbar
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Starten Sie klein, skalieren Sie groß - ohne Risiko
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "KI Starter",
                  price: "199€",
                  priceUnit: "pro Monat", 
                  description: "Erste KI-Automatisierung für 1-2 Prozesse",
                  features: [
                    "1 KI-Bot (Chatbot oder Dokumenten-KI)",
                    "Bis zu 1.000 Anfragen/Monat",
                    "Standard-Integration",
                    "E-Mail Support",
                    "Analytics Dashboard",
                    "30 Tage Testphase"
                  ],
                  popular: false,
                  cta: "KI-Pilot starten"
                },
                {
                  name: "KI Business",
                  price: "599€", 
                  priceUnit: "pro Monat",
                  description: "Umfassende KI-Automatisierung für wachsende KMUs",
                  features: [
                    "3 KI-Bots parallel",
                    "Bis zu 10.000 Anfragen/Monat", 
                    "Custom-Integration",
                    "Telefon & Chat Support",
                    "Advanced Analytics",
                    "API-Zugang",
                    "Monatliche Optimierung"
                  ],
                  popular: true,
                  cta: "Vollautomatisierung starten"
                },
                {
                  name: "KI Enterprise",
                  price: "1.299€",
                  priceUnit: "pro Monat",
                  description: "Maßgeschneiderte KI-Lösungen für etablierte Unternehmen",
                  features: [
                    "Unbegrenzte KI-Bots",
                    "Unlimited Anfragen",
                    "Custom-Entwicklung",
                    "Dedicated KI-Engineer",
                    "White-Label Optionen", 
                    "On-Premise möglich",
                    "24/7 Premium Support"
                  ],
                  popular: false,
                  cta: "Enterprise KI anfragen"
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative ${
                    plan.popular ? 'ring-4 ring-purple-300 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                        🚀 BELIEBT BEI KMUS
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-1">{plan.price}</div>
                    <div className="text-gray-500 text-sm mb-2">{plan.priceUnit}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full font-semibold py-3 rounded-xl transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                      : 'border-2 border-purple-200 text-purple-700 hover:bg-purple-50'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🎯 Kostenlose KI-Potenzial-Analyse
                </h3>
                <p className="text-gray-600 mb-4">
                  Wir analysieren Ihre Prozesse und zeigen konkret auf, wo KI den größten Impact hat.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all">
                  Kostenlose Analyse buchen (60 Min)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full animate-ping"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-white rounded-full animate-pulse"></div>
              </div>

              <div className="relative">
                <h3 className="text-4xl sm:text-5xl font-bold mb-6">
                  Die Zukunft beginnt heute
                  <span className="block text-yellow-300">mit Ihrer KI</span>
                </h3>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Während Ihre Konkurrenz noch manuell arbeitet, automatisiert Ihr Unternehmen intelligent. 
                  <strong> Starten Sie jetzt</strong> und sichern Sie sich den Wettbewerbsvorsprung.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-white text-purple-600 font-bold px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                    <Brain className="w-6 h-6" />
                    KI-Revolution starten
                  </button>
                  <button className="border-2 border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    KI-Experte sprechen
                  </button>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-purple-100">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    <div className="text-center">
                      <div className="font-semibold">100% DSGVO-konform</div>
                      <div className="text-xs">Deutsche KI-Server</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    <div className="text-center">
                      <div className="font-semibold">Live in 14 Tagen</div>
                      <div className="text-xs">Schnelle Implementierung</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Brain className="w-5 h-5" />
                    <div className="text-center">
                      <div className="font-semibold">Deutsche KI-Experten</div>
                      <div className="text-xs">Persönliche Betreuung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search, TrendingUp, Target, Eye, BarChart3, Users, Globe, Smartphone,
  CheckCircle, Star, Clock, ArrowRight, Sparkles, MousePointer, Zap,
  Mail, MessageSquare, Calendar, Bell, Award, Shield, DollarSign,
  ChevronRight, ChevronLeft, Play, Pause, LineChart, PieChart,
  MapPin, Phone, Megaphone, Camera, Video, FileText, Image,
  ThumbsUp, Share2, Heart, BookOpen, Lightbulb, Rocket, Settings,
  AlertCircle, TrendingDown, X, Send, Building2, Store, Coffee
} from "lucide-react";

// Header Component (mobile responsive)
// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
//               <TrendingUp className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-lg font-bold text-gray-900">PrintzzDigital</span>
//           </div>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-6">
//             <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
//             <a href="#" className="text-gray-700 hover:text-green-600">Online-Präsenz</a>
//             <a href="#" className="text-gray-700 hover:text-green-600">Portfolio</a>
//             <a href="#" className="text-gray-700 hover:text-green-600">Kontakt</a>
//           </nav>
          
//           {/* Desktop CTA */}
//           <button className="hidden md:block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold">
//             Projekt starten
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : (
//               <div className="space-y-1">
//                 <div className="w-6 h-0.5 bg-gray-600"></div>
//                 <div className="w-6 h-0.5 bg-gray-600"></div>
//                 <div className="w-6 h-0.5 bg-gray-600"></div>
//               </div>
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t">
//             <nav className="flex flex-col space-y-4">
//               <a href="#" className="text-gray-700 hover:text-green-600 px-2 py-1">Home</a>
//               <a href="#" className="text-gray-700 hover:text-green-600 px-2 py-1">Online-Präsenz</a>
//               <a href="#" className="text-gray-700 hover:text-green-600 px-2 py-1">Portfolio</a>
//               <a href="#" className="text-gray-700 hover:text-green-600 px-2 py-1">Kontakt</a>
//               <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center mt-4">
//                 Projekt starten
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

export default function SEOMarketingPage() {
  const [activeStrategy, setActiveStrategy] = useState("seo");
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false);
  const [currentGoogleResult, setCurrentGoogleResult] = useState(0);
  const [isAnalyticsDemoPlaying, setIsAnalyticsDemoPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [roiInputs, setROIInputs] = useState({
    monthlyRevenue: 50000,
    avgOrderValue: 150,
    currentConversion: 2
  });

  // Simulate Google Search Results improvement
  const googleResults = [
    { position: "Seite 3", clicks: 12, visibility: "Sehr gering" },
    { position: "Seite 2", clicks: 45, visibility: "Gering" },
    { position: "Position 8", clicks: 120, visibility: "Sichtbar" },
    { position: "Position 3", clicks: 380, visibility: "Sehr gut" },
    { position: "Position 1", clicks: 850, visibility: "Optimal" }
  ];

  // Auto-advance Google demo
  useEffect(() => {
    if (isAnalyticsDemoPlaying) {
      const interval = setInterval(() => {
        setCurrentGoogleResult((prev) => (prev + 1) % googleResults.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isAnalyticsDemoPlaying]);

  const marketingStrategies = {
    seo: {
      title: "Suchmaschinenoptimierung (SEO)",
      subtitle: "Langfristig bei Google gefunden werden",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      timeframe: "3-6 Monate bis erste Erfolge",
      investment: "Mittel",
      sustainability: "Sehr hoch",
      description: "Optimierung Ihrer Website für bessere Google-Rankings",
      benefits: [
        "Kostenlose Klicks von Google",
        "Nachhaltiger Traffic-Aufbau", 
        "Vertrauen durch hohe Rankings",
        "24/7 neue Kundengewinnung"
      ],
      examples: [
        { term: "Steuerberater Braunschweig", monthly: 480, difficulty: "Mittel" },
        { term: "Handwerker Wolfsburg", monthly: 320, difficulty: "Niedrig" },
        { term: "Restaurant Hannover", monthly: 1200, difficulty: "Hoch" }
      ]
    },
    ads: {
      title: "Google Ads & Social Media Werbung",
      subtitle: "Sofort sichtbar und messbar",
      icon: Target,
      color: "from-blue-500 to-purple-500",
      timeframe: "Sofort Ergebnisse",
      investment: "Hoch",
      sustainability: "Mittel",
      description: "Bezahlte Anzeigen für sofortige Sichtbarkeit",
      benefits: [
        "Sofortige Sichtbarkeit",
        "Präzise Zielgruppenansprache",
        "Messbare Ergebnisse",
        "Flexibles Budget"
      ],
      examples: [
        { platform: "Google Ads", avgCPC: "2,50€", conversion: "3,5%" },
        { platform: "Facebook Ads", avgCPC: "0,80€", conversion: "2,1%" },
        { platform: "Instagram Ads", avgCPC: "1,20€", conversion: "2,8%" }
      ]
    },
    content: {
      title: "Content Marketing",
      subtitle: "Vertrauen durch wertvollen Inhalt aufbauen",
      icon: FileText,
      color: "from-orange-500 to-red-500",
      timeframe: "2-4 Monate",
      investment: "Niedrig bis mittel",
      sustainability: "Sehr hoch",
      description: "Regelmäßige, wertvolle Inhalte für Ihre Zielgruppe",
      benefits: [
        "Expertenstatus aufbauen",
        "Vertrauen schaffen",
        "SEO-Verbesserung",
        "Kundenbindung stärken"
      ],
      examples: [
        { type: "Blog-Artikel", frequency: "2x pro Woche", engagement: "Hoch" },
        { type: "Video-Content", frequency: "1x pro Woche", engagement: "Sehr hoch" },
        { type: "Social Media Posts", frequency: "Täglich", engagement: "Mittel" }
      ]
    },
    local: {
      title: "Local SEO & Google My Business",
      subtitle: "Für lokale Unternehmen unverzichtbar",
      icon: MapPin,
      color: "from-purple-500 to-pink-500",
      timeframe: "2-8 Wochen",
      investment: "Niedrig",
      sustainability: "Hoch",
      description: "Optimierung für lokale Suchanfragen",
      benefits: [
        "In Google Maps gefunden werden",
        "Lokale Suchanfragen abfangen",
        "Kundenbewertungen sammeln",
        "Öffnungszeiten & Kontakt zeigen"
      ],
      examples: [
        { search: "Restaurant in der Nähe", results: "95% nutzen Maps" },
        { search: "Apotheke Notdienst", results: "90% lokale Suche" },
        { search: "Friseur Braunschweig", results: "85% Mobile" }
      ]
    }
  };

  const successCases = [
    {
      company: "Zahnarztpraxis Dr. Weber",
      industry: "Gesundheit",
      challenge: "Nur wenige neue Patienten trotz guter Lage",
      strategy: "Local SEO + Google My Business Optimierung",
      timeline: "3 Monate",
      results: {
        before: { googleCalls: 8, appointments: 12, ranking: "Seite 3" },
        after: { googleCalls: 45, appointments: 38, ranking: "Position 2" }
      },
      roi: "280% mehr Terminanfragen",
      icon: "🦷"
    },
    {
      company: "Elektrotechnik Meyer GmbH", 
      industry: "Handwerk",
      challenge: "Aufträge nur durch Empfehlungen, keine Online-Präsenz",
      strategy: "SEO + Google Ads für Notdienst",
      timeline: "4 Monate",
      results: {
        before: { leads: 15, revenue: "18.000€", visibility: "0%" },
        after: { leads: 52, revenue: "48.000€", visibility: "Top 3" }
      },
      roi: "167% Umsatzsteigerung",
      icon: "⚡"
    },
    {
      company: "Mode-Boutique Fischer",
      industry: "Retail",
      challenge: "Online-Shop vorhanden, aber keine Besucher",
      strategy: "SEO + Social Media + Content Marketing",
      timeline: "6 Monate",
      results: {
        before: { visitors: 180, sales: 8, socialFollowers: 120 },
        after: { visitors: 1420, sales: 68, socialFollowers: 2400 }
      },
      roi: "750% mehr Online-Verkäufe",
      icon: "👗"
    }
  ];

  const marketingTools = [
    {
      category: "Analytics & Tracking",
      tools: [
        { name: "Google Analytics", purpose: "Website-Besucher verstehen", price: "Kostenlos" },
        { name: "Google Search Console", purpose: "SEO-Performance messen", price: "Kostenlos" },
        { name: "Hotjar", purpose: "User-Verhalten analysieren", price: "ab 89€/Monat" }
      ]
    },
    {
      category: "Content & Social Media",
      tools: [
        { name: "Canva Pro", purpose: "Professionelle Grafiken", price: "12€/Monat" },
        { name: "Buffer", purpose: "Social Media Planung", price: "15€/Monat" },
        { name: "Mailchimp", purpose: "E-Mail Marketing", price: "ab 25€/Monat" }
      ]
    },
    {
      category: "SEO & Ads",
      tools: [
        { name: "SEMrush", purpose: "Keyword-Recherche", price: "120€/Monat" },
        { name: "Google Ads", purpose: "Bezahlte Werbung", price: "Variable Kosten" },
        { name: "Facebook Business", purpose: "Social Media Ads", price: "Variable Kosten" }
      ]
    }
  ];

  const monthlyServices = [
    {
      package: "SEO Basis",
      price: "399€",
      description: "Grundlegende Suchmaschinenoptimierung",
      includes: [
        "Keyword-Monitoring", 
        "Technische SEO-Checks",
        "Content-Optimierung",
        "Monatlicher Report"
      ],
      bestFor: "Kleine Unternehmen, Praxen"
    },
    {
      package: "Marketing Plus", 
      price: "799€",
      description: "SEO + Content Marketing + Social Media",
      includes: [
        "Alles aus SEO Basis",
        "4 Blog-Artikel/Monat",
        "Social Media Management",
        "Google My Business Pflege"
      ],
      bestFor: "Mittelständische Unternehmen",
      popular: true
    },
    {
      package: "Full Service",
      price: "1299€", 
      description: "Komplette Marketing-Betreuung",
      includes: [
        "Alles aus Marketing Plus",
        "Google Ads Management",
        "E-Mail Marketing Kampagnen",
        "Detaillierte Analytics"
      ],
      bestFor: "Wachsende Unternehmen"
    }
  ];

  const calculateROI = () => {
    const { monthlyRevenue, avgOrderValue, currentConversion } = roiInputs;
    const monthlyOrders = monthlyRevenue / avgOrderValue;
    const monthlyVisitors = monthlyOrders / (currentConversion / 100);
    
    // Annahme: 50% mehr Traffic durch SEO, 1.5x bessere Conversion
    const newVisitors = monthlyVisitors * 1.5;
    const newConversion = currentConversion * 1.5;
    const newOrders = newVisitors * (newConversion / 100);
    const newRevenue = newOrders * avgOrderValue;
    
    return {
      additionalRevenue: newRevenue - monthlyRevenue,
      roiPercentage: ((newRevenue - monthlyRevenue) / 799) * 100 // Annahme: 799€ Marketing-Investment
    };
  };

  const roi = calculateROI();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">SEO & DIGITAL MARKETING</span>
                <span className="sm:hidden">SEO & MARKETING</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Mehr Kunden durch
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 block sm:inline"> intelligentes Marketing</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
                Von SEO über Google Ads bis Social Media - wir entwickeln die Marketing-Strategie, 
                die zu Ihrem Unternehmen und Budget passt. Messbar und transparent.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                  <span>Messbare Ergebnisse</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                  <span>Transparente Erfolgs-Reports</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                  <span>Monatliche Optimierung</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Rankings Demo */}
        <section className="py-16 sm:py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                So verbessern sich Ihre
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 block sm:inline"> Google-Rankings</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
                Sehen Sie live, wie sich bessere Rankings auf Ihre Klicks auswirken
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 sm:mb-12">
                <button
                  onClick={() => setIsAnalyticsDemoPlaying(!isAnalyticsDemoPlaying)}
                  className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 text-sm sm:text-base"
                >
                  {isAnalyticsDemoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="hidden sm:inline">SEO-Erfolg simulieren</span>
                  <span className="sm:hidden">Demo {isAnalyticsDemoPlaying ? 'pausieren' : 'starten'}</span>
                </button>
                <span className="text-xs sm:text-sm text-gray-600">
                  Monat {currentGoogleResult + 1} / {googleResults.length}
                </span>
              </div>
            </div>

            {/* Google Search Simulation */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              {/* Fake Google Header */}
              <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-b flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-700 text-sm sm:text-base">Google</span>
                </div>
                <div className="flex-1 bg-white rounded-full px-3 sm:px-4 py-2 border">
                  <span className="text-gray-600 text-xs sm:text-sm">Ihr Suchbegriff hier...</span>
                </div>
              </div>

              {/* Search Results */}
              <div className="p-4 sm:p-6">
                <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
                  Ungefähr 1.250.000 Ergebnisse (0,42 Sekunden)
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Your Result */}
                  <div className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                    currentGoogleResult >= 3 ? 'border-green-400 bg-green-50' : 
                    currentGoogleResult >= 2 ? 'border-yellow-400 bg-yellow-50' :
                    'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-blue-600 font-medium text-sm sm:text-base">Ihr Unternehmen</div>
                      <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                        currentGoogleResult >= 3 ? 'bg-green-100 text-green-700' :
                        currentGoogleResult >= 2 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {googleResults[currentGoogleResult]?.position}
                      </div>
                    </div>
                    <div className="text-green-700 text-xs sm:text-sm mb-1">www.ihr-unternehmen.de</div>
                    <div className="text-gray-600 text-xs sm:text-sm">
                      Professionelle Dienstleistungen in Ihrer Region. 
                      Seit Jahren vertrauen uns Kunden...
                    </div>
                  </div>

                  {/* Competitor Results */}
                  <div className="space-y-2 opacity-60">
                    <div className="p-2 sm:p-3 bg-gray-50 rounded">
                      <div className="text-blue-600 text-xs sm:text-sm">Konkurrent A</div>
                      <div className="text-gray-500 text-xs">Ähnliche Dienstleistungen...</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-gray-50 rounded">
                      <div className="text-blue-600 text-xs sm:text-sm">Konkurrent B</div>
                      <div className="text-gray-500 text-xs">Noch ein Mitbewerber...</div>
                    </div>
                  </div>
                </div>

                {/* Stats Display */}
                <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-green-600">
                        {googleResults[currentGoogleResult]?.clicks}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Klicks/Monat</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">
                        {googleResults[currentGoogleResult]?.position}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Google Position</div>
                    </div>
                    <div>
                      <div className="text-sm sm:text-2xl font-bold text-purple-600">
                        {googleResults[currentGoogleResult]?.visibility}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">Sichtbarkeit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="font-bold text-green-700 text-xs sm:text-sm">
                  <span className="hidden sm:inline">Von Position 15+ auf Position 1-3 in 3-6 Monaten</span>
                  <span className="sm:hidden">Position 15+ → Top 3 in 3-6 Monaten</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Strategies */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Welche Marketing-Strategie passt zu Ihnen?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
                Verschiedene Ansätze für verschiedene Ziele und Budgets
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
                {Object.entries(marketingStrategies).map(([key, strategy]) => (
                  <button
                    key={key}
                    onClick={() => setActiveStrategy(key)}
                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm ${
                      activeStrategy === key
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                    }`}
                  >
                    <strategy.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{strategy.title.split(' ')[0]}</span>
                    <span className="sm:hidden">{strategy.title.split(' ')[0].slice(0, 3)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Strategy Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 md:p-12 max-w-6xl mx-auto">
              {Object.entries(marketingStrategies).map(([key, strategy]) => {
                if (key !== activeStrategy) return null;
                
                return (
                  <div key={key} className="space-y-6 sm:space-y-8">
                    {/* Header */}
                    <div className="text-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${strategy.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4`}>
                        <strategy.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">{strategy.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">{strategy.subtitle}</p>
                      <p className="text-gray-600 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">{strategy.description}</p>
                    </div>

                    {/* Key Facts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                      <div className="text-center">
                        <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Zeitrahmen</div>
                        <div className="text-green-600 text-xs sm:text-sm">{strategy.timeframe}</div>
                      </div>
                      <div className="text-center">
                        <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Investment</div>
                        <div className="text-green-600 text-xs sm:text-sm">{strategy.investment}</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">Nachhaltigkeit</div>
                        <div className="text-green-600 text-xs sm:text-sm">{strategy.sustainability}</div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                        Ihre Vorteile
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {strategy.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-green-50 rounded-xl">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Examples/Data */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                        {key === 'seo' ? 'Beispiel Keywords' : key === 'ads' ? 'Plattform-Vergleich' : key === 'content' ? 'Content-Typen' : 'Lokale Suchen'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                        {strategy.examples.map((example, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4">
                            {key === 'seo' && 'term' in example && 'monthly' in example && 'difficulty' in example && (
                              <>
                                <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">"{example.term}"</div>
                                <div className="text-xs sm:text-sm text-gray-600 mb-1">
                                  {example.monthly} Suchanfragen/Monat
                                </div>
                                <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                                  example.difficulty === 'Niedrig' ? 'bg-green-100 text-green-700' :
                                  example.difficulty === 'Mittel' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-red-100 text-red-700'
                                }`}>
                                  {example.difficulty} Konkurrenz
                                </div>
                              </>
                            )}
                            
                            {key === 'ads' && 'platform' in example && 'avgCPC' in example && 'conversion' in example && (
                              <>
                                <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{example.platform}</div>
                                <div className="text-xs sm:text-sm text-gray-600 mb-1">
                                  Ø {example.avgCPC} pro Klick
                                </div>
                                <div className="text-xs sm:text-sm text-green-600 font-medium">
                                  {example.conversion} Conversion Rate
                                </div>
                              </>
                            )}
                        
                            {key === 'content' && 'type' in example && 'frequency' in example && 'engagement' in example && (
                              <>
                                <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{example.type}</div>
                                <div className="text-xs sm:text-sm text-gray-600 mb-1">
                                  {example.frequency}
                                </div>
                                <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                                  example.engagement === 'Hoch' || example.engagement === 'Sehr hoch' ? 'bg-green-100 text-green-700' :
                                  'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {example.engagement} Engagement
                                </div>
                              </>
                            )}
                        
                            {key === 'local' && 'search' in example && 'results' in example && (
                              <>
                                <div className="font-medium text-gray-900 mb-2 text-sm sm:text-base">"{example.search}"</div>
                                <div className="text-xs sm:text-sm text-green-600 font-medium">
                                  {example.results}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section className="py-16 sm:py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Messbare Erfolge unserer Kunden
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Konkrete Zahlen, echte Ergebnisse
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {successCases.map((case_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 sm:p-6 text-white">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">{case_.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg sm:text-xl">{case_.company}</h3>
                        <span className="text-green-100 text-sm">{case_.industry}</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-xs font-medium text-green-100 uppercase tracking-wide mb-1">Challenge</div>
                      <div className="text-white text-xs sm:text-sm">{case_.challenge}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">Strategie</span>
                        <p className="text-gray-700 text-xs sm:text-sm mt-1">{case_.strategy}</p>
                      </div>

                      {/* Before/After Comparison */}
                      <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Vorher / Nachher</h4>
                        <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                          <div>
                            <div className="text-gray-500 mb-2 text-xs">VORHER</div>
                            {Object.entries(case_.results.before).map(([key, value]) => (
                              <div key={key} className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <span className="text-gray-600 text-xs">{key}:</span>
                                <span className="text-red-600 font-medium text-xs">{value}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div className="text-gray-500 mb-2 text-xs">NACHHER</div>
                            {Object.entries(case_.results.after).map(([key, value]) => (
                              <div key={key} className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <span className="text-gray-600 text-xs">{key}:</span>
                                <span className="text-green-600 font-medium text-xs">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                          <span className="font-bold text-green-800 text-sm sm:text-base">{case_.roi}</span>
                        </div>
                        <div className="text-green-600 text-xs sm:text-sm mt-1">
                          Erreicht in {case_.timeline}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6">
                      <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base">
                        Ähnliche Strategie anfragen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          

        {/* Monthly Packages */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Unsere Marketing-Pakete
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Transparente Preise, messbare Leistungen
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {monthlyServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 relative ${
                    service.popular ? 'ring-2 ring-green-400 scale-105' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                        BELIEBT
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.package}</h3>
                    <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">{service.price}</div>
                    <div className="text-gray-500 text-sm">pro Monat</div>
                    <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">{service.description}</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {service.includes.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 sm:pt-6">
                    <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Ideal für: {service.bestFor}</div>
                    <button className={`w-full font-semibold py-2 sm:py-3 rounded-xl transition-all text-sm sm:text-base ${
                      service.popular 
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
                        : 'border-2 border-green-200 text-green-700 hover:bg-green-50'
                    }`}>
                      {service.popular ? 'Jetzt starten' : 'Mehr erfahren'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Unsicher welches Paket passt?
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Wir beraten Sie kostenlos und ehrlich über die beste Strategie für Ihr Unternehmen.
                </p>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-xl transition-all text-sm sm:text-base">
                  Kostenlose Marketing-Beratung
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  Bereit für mehr Kunden?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Lassen Sie uns gemeinsam Ihre Marketing-Strategie entwickeln. 
                  <strong> Kostenlose Analyse</strong> Ihrer aktuellen Online-Präsenz inklusive.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <button className="bg-white text-green-600 font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Kostenlose Marketing-Analyse</span>
                    <span className="sm:hidden">Kostenlose Analyse</span>
                  </button>
                  <a
                    href="tel:+4953112345678"
                    className="border-2 border-white/50 text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Direkt sprechen: 0531 123 456</span>
                    <span className="sm:hidden">Anrufen: 0531 123 456</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-green-100">
                  <div className="flex items-center justify-center gap-2">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="text-center">
                      <div className="font-semibold">Transparente Erfolgs-Reports</div>
                      <div className="text-xs">Monatliche Auswertungen</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="text-center">
                      <div className="font-semibold">Messbare Ergebnisse</div>
                      <div className="text-xs">ROI-fokussierte Strategien</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="text-center">
                      <div className="font-semibold">Keine Mindestlaufzeit</div>
                      <div className="text-xs">Monatlich kündbar</div>
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
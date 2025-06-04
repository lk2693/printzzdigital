"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ShoppingCart, CreditCard, Truck, Smartphone, Globe, Monitor, Zap, 
  CheckCircle, Star, Clock, ArrowRight, Sparkles, Eye, Target, TrendingUp,
  Package, Shield, BarChart3, Settings, Code, Wrench, Paintbrush, Search,
  Users, Heart, Award, MousePointer, ChevronRight, ChevronLeft, Play, Pause,
  Layers, Database, Palette, LineChart, DollarSign, Calendar, Bell, X, Send
} from "lucide-react";

export default function OnlineShopPage() {
  const [activeExample, setActiveExample] = useState(0);
  const [activeApproach, setActiveApproach] = useState("custom");
  const [isShopDemoPlaying, setIsShopDemoPlaying] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  // Auto-advance demo
  useEffect(() => {
    if (isShopDemoPlaying) {
      const interval = setInterval(() => {
        setCurrentFeature((prev) => (prev + 1) % shopFeatures.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isShopDemoPlaying]);

  const shopExamples = [
    {
      title: "Lokale Buchhandlung Meyer",
      category: "Retail",
      challenge: "Konkurrenz durch Amazon, wenig Laufkundschaft",
      solution: "Online-Shop mit Click & Collect, Buchempfehlungen",
      result: "40% mehr Umsatz, neue Kunden außerhalb der Stadt",
      approach: "Shopify + Anpassungen",
      timeline: "3 Wochen",
      features: ["Lokale Lieferung", "Reservierung", "Newsletter"],
      icon: "📚"
    },
    {
      title: "Handwerksbetrieb Schmidt",
      category: "B2B Services",
      challenge: "Materialbestellung nur per Telefon/Fax",
      solution: "B2B-Portal mit Kundenpreisen, Wiederholungsbestellungen",
      result: "60% weniger Telefonanrufe, präzisere Bestellungen",
      approach: "Custom Development",
      timeline: "6 Wochen",
      features: ["Kundenpreise", "Bestellhistorie", "Rechnungsintegration"],
      icon: "🔧"
    },
    {
      title: "Mode-Boutique Wagner",
      category: "Fashion",
      challenge: "Saisongeschäft, kleine Zielgruppe vor Ort",
      solution: "Stylischer Online-Shop mit Virtual Styling",
      result: "Deutschlandweite Kunden, ganzjährige Umsätze",
      approach: "WooCommerce + Custom Design",
      timeline: "4 Wochen",
      features: ["Größenberatung", "Styling-Service", "Retouren"],
      icon: "👗"
    }
  ];

  const developmentApproaches = {
    custom: {
      title: "Eigenentwicklung",
      subtitle: "Maßgeschneidert für Ihre Anforderungen",
      icon: Code,
      pros: [
        "100% individuelle Funktionen",
        "Perfekte Integration in bestehende Systeme", 
        "Vollständige Kontrolle über Design und Features",
        "Skalierbar für Unternehmenswachstum"
      ],
      cons: [
        "Höhere Anfangsinvestition",
        "Längere Entwicklungszeit"
      ],
      bestFor: "Unternehmen mit spezifischen Anforderungen, komplexen Produktkatalogen oder besonderen Workflow-Bedürfnissen",
      timeframe: "6-12 Wochen",
      costs: "Mittel bis hoch",
      examples: ["B2B-Portale", "Subscription-Services", "Multi-Vendor Plattformen"]
    },
    cms: {
      title: "CMS-basiert (WooCommerce, Magento)",
      subtitle: "Bewährte Plattformen, angepasst an Sie",
      icon: Layers,
      pros: [
        "Schnelle Umsetzung",
        "Große Community und Plugin-Ökosystem",
        "Regelmäßige Updates und Sicherheitspatches",
        "Kosteneffizient"
      ],
      cons: [
        "Begrenzte Anpassungsmöglichkeiten",
        "Abhängigkeit von Drittanbieter-Plugins"
      ],
      bestFor: "Standard-Retail, Fashion, Buchhandlungen und die meisten B2C-Shops",
      timeframe: "2-6 Wochen", 
      costs: "Niedrig bis mittel",
      examples: ["WooCommerce", "Magento", "PrestaShop"]
    },
    saas: {
      title: "SaaS-Baukästen (Shopify, Shopware)",
      subtitle: "Schnell online, professionell aussehen",
      icon: Zap,
      pros: [
        "Sehr schnelle Markteinführung",
        "Hosting und Wartung inklusive",
        "Bewährte Payment-Integration",
        "Mobile-optimiert von Beginn an"
      ],
      cons: [
        "Monatliche Gebühren",
        "Weniger Flexibilität bei Sonderwünschen"
      ],
      bestFor: "Startups, kleine bis mittlere Unternehmen, die schnell starten möchten",
      timeframe: "1-3 Wochen",
      costs: "Monatlich + Setup",
      examples: ["Shopify", "Shopware Cloud", "BigCommerce"]
    }
  };

  const shopFeatures = [
    {
      title: "Intelligenter Warenkorb",
      description: "Merkt sich Produkte, schlägt verwandte Artikel vor",
      visual: "🛒",
      benefit: "Höhere Warenkorbwerte"
    },
    {
      title: "Sichere Zahlungsabwicklung", 
      description: "PayPal, Stripe, Klarna - alle wichtigen Anbieter",
      visual: "💳",
      benefit: "Kundenvertrauen"
    },
    {
      title: "Automatisierte Bestellabwicklung",
      description: "Von der Bestellung bis zur Rechnung - alles automatisch",
      visual: "⚙️", 
      benefit: "Weniger Aufwand"
    },
    {
      title: "Mobile Shopping Experience",
      description: "70% der Kunden kaufen über Smartphone ein",
      visual: "📱",
      benefit: "Mehr Conversions"
    },
    {
      title: "SEO & Marketing Integration",
      description: "Google Shopping, Facebook Ads, Newsletter",
      visual: "📊",
      benefit: "Mehr Sichtbarkeit"
    }
  ];

  const businessBenefits = [
    {
      icon: TrendingUp,
      title: "24/7 Umsatz",
      description: "Ihre Kunden kaufen rund um die Uhr",
      metric: "Durchschnittlich 30% mehr Umsatz"
    },
    {
      icon: Globe,
      title: "Unbegrenzte Reichweite", 
      description: "Verkaufen Sie deutschlandweit oder international",
      metric: "Marktpotenzial x10"
    },
    {
      icon: BarChart3,
      title: "Datenbasierte Entscheidungen",
      description: "Sehen Sie, was Ihre Kunden wirklich wollen",
      metric: "Bessere Produktentscheidungen"
    },
    {
      icon: Zap,
      title: "Automatisierte Prozesse",
      description: "Weniger manuelle Arbeit, mehr Zeit für Ihr Business",
      metric: "50% Zeitersparnis"
    }
  ];

  const monthlyServices = [
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Monatliche Keyword-Analyse und Content-Optimierung",
      result: "Bessere Google-Rankings"
    },
    {
      icon: BarChart3,
      title: "Performance-Analyse",
      description: "Detaillierte Auswertung von Verkäufen und Kundenverhalten",
      result: "Datenbasierte Verbesserungen"
    },
    {
      icon: Settings,
      title: "Technische Wartung",
      description: "Updates, Backups, Sicherheitspatches",
      result: "Sicherer, stabiler Shop"
    },
    {
      icon: TrendingUp,
      title: "Conversion-Optimierung",
      description: "A/B-Tests, Checkout-Optimierung, UX-Verbesserungen",
      result: "Höhere Verkaufsraten"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-tr from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-8">
                <ShoppingCart className="w-4 h-4" />
                ONLINE-SHOPS & E-COMMERCE
                <Sparkles className="w-4 h-4" />
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
                Ihr
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Online-Shop </span>
                der verkauft
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                Ob Baukasten oder Eigenentwicklung - wir finden die perfekte E-Commerce-Lösung für Ihr Unternehmen. 
                Von der ersten Idee bis zur monatlichen Optimierung.
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Verschiedene Technologien
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Maßgeschneidert für Sie
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  1-12 Wochen je nach Ansatz
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Shop Demo */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                So funktioniert ein
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> moderner Online-Shop</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Entdecken Sie die wichtigsten Features interaktiv
              </p>

              <div className="flex justify-center items-center gap-4 mb-12">
                <button
                  onClick={() => setIsShopDemoPlaying(!isShopDemoPlaying)}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700"
                >
                  {isShopDemoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isShopDemoPlaying ? 'Demo pausieren' : 'Demo starten'}
                </button>
                <span className="text-sm text-gray-600">
                  {currentFeature + 1} / {shopFeatures.length}
                </span>
              </div>
            </div>

            {/* Shop Demo Visualization */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2">
                {/* Feature Description */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-blue-50">
                  <div className="text-6xl mb-6 text-center">
                    {shopFeatures[currentFeature].visual}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {shopFeatures[currentFeature].title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {shopFeatures[currentFeature].description}
                  </p>
                  <div className="bg-green-100 border border-green-300 rounded-xl p-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">
                        {shopFeatures[currentFeature].benefit}
                      </span>
                    </div>
                  </div>

                  {/* Feature Navigation */}
                  <div className="flex space-x-2 mt-8">
                    {shopFeatures.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentFeature ? 'bg-purple-600 w-8' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Visual Demo */}
                <div className="p-8 lg:p-12 bg-gray-50">
                  {currentFeature === 0 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-200 rounded"></div>
                          <div>
                            <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                            <div className="h-3 bg-gray-100 rounded w-16"></div>
                          </div>
                          <div className="ml-auto">
                            <ShoppingCart className="w-5 h-5 text-purple-600" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-purple-200">
                        <div className="text-sm text-purple-600 mb-2">💡 Kunden kauften auch:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-16 bg-purple-50 rounded"></div>
                          <div className="h-16 bg-purple-50 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentFeature === 1 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-sm font-medium mb-3">Zahlungsmethoden:</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-blue-100 p-3 rounded text-center text-sm">PayPal</div>
                          <div className="bg-green-100 p-3 rounded text-center text-sm">VISA</div>
                          <div className="bg-orange-100 p-3 rounded text-center text-sm">Klarna</div>
                          <div className="bg-gray-100 p-3 rounded text-center text-sm">Überweisung</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm">SSL-verschlüsselt & sicher</span>
                      </div>
                    </div>
                  )}

                  {currentFeature === 2 && (
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Bestellung eingegangen</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Automatische Bestätigung</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                          <span className="text-sm">Versandvorbereitung</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm opacity-50">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          <span className="text-sm">Versand & Tracking</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentFeature === 3 && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-center mb-4">
                          <Smartphone className="w-12 h-12 mx-auto text-purple-600 mb-2" />
                          <div className="text-sm text-gray-600">Mobile First Design</div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          <div className="h-8 bg-purple-100 rounded"></div>
                          <div className="h-6 bg-gray-100 rounded"></div>
                          <div className="h-10 bg-green-100 rounded flex items-center justify-center">
                            <span className="text-xs font-medium">Jetzt kaufen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentFeature === 4 && (
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Search className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium">Google Shopping</span>
                        </div>
                        <div className="h-2 bg-blue-100 rounded w-3/4"></div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium">Social Media</span>
                        </div>
                        <div className="h-2 bg-green-100 rounded w-2/3"></div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Bell className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium">Newsletter</span>
                        </div>
                        <div className="h-2 bg-orange-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Approaches */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcher Ansatz passt zu Ihnen?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Wir beraten Sie ehrlich über die beste Technologie für Ihre Situation
              </p>

              <div className="flex justify-center space-x-4 mb-12">
                {Object.entries(developmentApproaches).map(([key, approach]) => (
                  <button
                    key={key}
                    onClick={() => setActiveApproach(key)}
                    className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                      activeApproach === key
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-purple-50'
                    }`}
                  >
                    <approach.icon className="w-4 h-4" />
                    {approach.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Approach Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
              {Object.entries(developmentApproaches).map(([key, approach]) => {
                if (key !== activeApproach) return null;
                
                return (
                  <div key={key} className="space-y-8">
                    {/* Header */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <approach.icon className="w-10 h-10 text-purple-600" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                      <p className="text-lg text-purple-600 font-medium">{approach.subtitle}</p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Pros */}
                      <div>
                        <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Vorteile
                        </h4>
                        <ul className="space-y-3">
                          {approach.pros.map((pro, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Considerations */}
                      <div>
                        <h4 className="text-lg font-semibold text-orange-700 mb-4 flex items-center gap-2">
                          <Eye className="w-5 h-5" />
                          Zu beachten
                        </h4>
                        <ul className="space-y-3">
                          {approach.cons.map((con, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Facts */}
                    <div className="grid md:grid-cols-3 gap-6 bg-purple-50 rounded-2xl p-6">
                      <div className="text-center">
                        <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">Umsetzungszeit</div>
                        <div className="text-purple-600">{approach.timeframe}</div>
                      </div>
                      <div className="text-center">
                        <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">Investition</div>
                        <div className="text-purple-600">{approach.costs}</div>
                      </div>
                      <div className="text-center">
                        <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">Ideal für</div>
                        <div className="text-purple-600 text-sm">{approach.bestFor}</div>
                      </div>
                    </div>

                    {/* Examples */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Beispiel-Technologien:</h4>
                      <div className="flex flex-wrap gap-3">
                        {approach.examples.map((example, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Real Examples */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Erfolgreiche
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Online-Shops </span>
                unserer Kunden
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Verschiedene Branchen, verschiedene Ansätze - immer das richtige Ergebnis
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {shopExamples.map((example, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group ${
                    activeExample === index ? 'ring-2 ring-purple-400 scale-105' : 'hover:-translate-y-2'
                  }`}
                  onClick={() => setActiveExample(index)}
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{example.icon}</span>
                      <div>
                        <h3 className="font-bold text-xl">{example.title}</h3>
                        <span className="text-purple-100 text-sm">{example.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-medium text-red-600 uppercase tracking-wide">Herausforderung</span>
                        <p className="text-gray-700 text-sm mt-1">{example.challenge}</p>
                      </div>
                      
                      <div>
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">Lösung</span>
                        <p className="text-gray-700 text-sm mt-1">{example.solution}</p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4">
                        <span className="text-xs font-medium text-green-600 uppercase tracking-wide">Ergebnis</span>
                        <p className="text-green-800 font-bold text-lg mt-1">{example.result}</p>
                      </div>

                      {/* Technical Details */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <div className="text-xs text-gray-500">Technologie</div>
                            <div className="font-medium text-sm">{example.approach}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Umsetzung</div>
                            <div className="font-medium text-sm">{example.timeline}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-xs text-gray-500">Besondere Features:</div>
                          <div className="flex flex-wrap gap-2">
                            {example.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                        Ähnlichen Shop anfragen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Warum sich ein Online-Shop lohnt
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Die geschäftlichen Vorteile verstehen
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                    <benefit.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="text-purple-700 font-semibold text-sm">{benefit.metric}</div>
                  </div>

                  {hoveredBenefit === index && (
                    <div className="mt-4 text-xs text-gray-500 animate-fadeIn">
                      Basierend auf unseren Kundenprojekten
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Services */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Laufende Optimierung für nachhaltigen Erfolg
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ein Online-Shop ist nie "fertig" - wir optimieren kontinuierlich für bessere Ergebnisse
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {monthlyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-green-700 font-semibold text-sm flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      {service.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Monatliche Betreuung ab 299€
                </h3>
                <p className="text-gray-600 mb-6">
                  Je nach Umfang Ihres Shops und gewünschten Services. 
                  Transparente Preise, keine versteckten Kosten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all">
                    Betreuungspaket anfragen
                  </button>
                  <button className="border-2 border-purple-200 text-purple-700 font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-all">
                    Mehr Details erfahren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Bereit für Ihren eigenen Online-Shop?
                </h3>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Egal ob Baukasten oder Maßanfertigung - wir finden die perfekte Lösung für Sie. 
                  <strong> Kostenlose Beratung</strong> zu allen Technologien und Ansätzen.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-white text-purple-600 font-bold px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Shop-Beratung vereinbaren
                  </button>
                  <button className="border-2 border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5" />
                    Beispiele live ansehen
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-purple-100">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Ehrliche Beratung</div>
                      <div className="text-xs">Beste Lösung für Sie</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Settings className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Alle Technologien</div>
                      <div className="text-xs">Von Baukasten bis Custom</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">Laufende Optimierung</div>
                      <div className="text-xs">Für nachhaltigen Erfolg</div>
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
"use client";

import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  ShoppingCart,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Menu,
  X
} from 'lucide-react';

interface Demo {
  id: string;
  title: string;
  description: string;
  data: any[];
  type: 'bar' | 'line' | 'pie';
}

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

interface SuccessStory {
  id: string;
  company: string;
  industry: string;
  location: { x: number; y: number };
  size: 'small' | 'medium' | 'large';
  results: {
    metric: string;
    improvement: string;
    timeframe: string;
  };
  quote: string;
}

interface PredictionScenario {
  name: string;
  marketGrowth: number;
  efficiency: number;
  customerRetention: number;
}

const DataAnalyticsLanding: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>('sales');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    efficiency: 0,
    customers: 0
  });
  
  // Predictive Analytics State
  const [predictionParams, setPredictionParams] = useState({
    marketGrowth: 5,
    efficiency: 10,
    customerRetention: 85
  });
  
  // Success Stories State
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredStory, setHoveredStory] = useState<string | null>(null);
  
  // Before/After Slider State
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50);

  // Animation für die Statistiken
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        revenue: 35,
        efficiency: 60,
        customers: 40
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const demos: Demo[] = [
    {
      id: 'sales',
      title: 'Umsatz-Trends Analyse',
      description: 'Identifizieren Sie saisonale Muster und Wachstumschancen in Ihren Verkaufsdaten.',
      data: [
        { month: 'Jan', umsatz: 45000, vorjahr: 38000 },
        { month: 'Feb', umsatz: 52000, vorjahr: 41000 },
        { month: 'Mar', umsatz: 48000, vorjahr: 39000 },
        { month: 'Apr', umsatz: 61000, vorjahr: 45000 },
        { month: 'Mai', umsatz: 67000, vorjahr: 48000 },
        { month: 'Jun', umsatz: 73000, vorjahr: 52000 }
      ],
      type: 'bar'
    },
    {
      id: 'customers',
      title: 'Kundenverhalten Insights',
      description: 'Verstehen Sie, welche Produkte am besten performen und warum.',
      data: [
        { kategorie: 'Premium', anteil: 35, umsatz: 180000 },
        { kategorie: 'Standard', anteil: 45, umsatz: 145000 },
        { kategorie: 'Basic', anteil: 20, umsatz: 65000 }
      ],
      type: 'pie'
    },
    {
      id: 'efficiency',
      title: 'Effizienz-Optimierung',
      description: 'Finden Sie Engpässe in Ihren Prozessen und steigern Sie die Produktivität.',
      data: [
        { bereich: 'Lager', effizienz: 78, potential: 95 },
        { bereich: 'Vertrieb', effizienz: 85, potential: 92 },
        { bereich: 'Support', effizienz: 72, potential: 88 },
        { bereich: 'Marketing', effizienz: 68, potential: 85 }
      ],
      type: 'bar'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Maria Schmidt",
      company: "TechStart GmbH",
      role: "Geschäftsführerin",
      content: "Dank der Datenanalyse konnten wir unseren Umsatz um 40% steigern und ineffiziente Prozesse identifizieren.",
      rating: 5
    },
    {
      name: "Thomas Müller",
      company: "Handwerk Plus",
      role: "Betriebsleiter",
      content: "Die Insights haben uns geholfen, unsere Kundenzufriedenheit deutlich zu verbessern. Sehr empfehlenswert!",
      rating: 5
    },
    {
      name: "Sarah Wagner",
      company: "Retail Pro",
      role: "Marketing Leiterin",
      content: "Endlich verstehen wir unsere Kunden richtig. Die ROI-Verbesserung war bereits nach 3 Monaten spürbar.",
      rating: 5
    }
  ];

  const successStories: SuccessStory[] = [
    {
      id: 'munich',
      company: 'Bäckerei Goldkruste',
      industry: 'Einzelhandel',
      location: { x: 620, y: 520 }, // München
      size: 'small',
      results: {
        metric: 'Umsatz',
        improvement: '+45%',
        timeframe: '6 Monate'
      },
      quote: 'Wir wissen jetzt genau, welche Produkte wann am besten laufen!'
    },
    {
      id: 'hamburg',
      company: 'LogiTech Solutions',
      industry: 'IT-Services',
      location: { x: 480, y: 180 }, // Hamburg
      size: 'medium',
      results: {
        metric: 'Effizienz',
        improvement: '+60%',
        timeframe: '4 Monate'
      },
      quote: 'Unsere Projektlaufzeiten haben sich halbiert durch bessere Ressourcenplanung.'
    },
    {
      id: 'berlin',
      company: 'Fashion Forward GmbH',
      industry: 'E-Commerce',
      location: { x: 680, y: 280 }, // Berlin
      size: 'large',
      results: {
        metric: 'Conversion Rate',
        improvement: '+35%',
        timeframe: '3 Monate'
      },
      quote: 'Die Personalisierung hat unsere Verkäufe revolutioniert!'
    },
    {
      id: 'cologne',
      company: 'AutoService Pro',
      industry: 'Automotive',
      location: { x: 350, y: 340 }, // Köln
      size: 'medium',
      results: {
        metric: 'Kundenzufriedenheit',
        improvement: '+50%',
        timeframe: '5 Monate'
      },
      quote: 'Wir können Probleme vorhersagen, bevor sie auftreten!'
    },
    {
      id: 'frankfurt',
      company: 'FinTech Innovators',
      industry: 'Finanzdienstleistung',
      location: { x: 420, y: 380 }, // Frankfurt
      size: 'large',
      results: {
        metric: 'Risikoreduktion',
        improvement: '+70%',
        timeframe: '8 Monate'
      },
      quote: 'Unsere Kreditentscheidungen sind jetzt datengetrieben und präziser.'
    },
    {
      id: 'stuttgart',
      company: 'Manufacturing Excellence',
      industry: 'Produktion',
      location: { x: 480, y: 460 }, // Stuttgart
      size: 'large',
      results: {
        metric: 'Produktionseffizienz',
        improvement: '+40%',
        timeframe: '6 Monate'
      },
      quote: 'Predictive Maintenance spart uns Millionen an Ausfallkosten!'
    }
  ];

  const industries = [
    { id: 'all', name: 'Alle Branchen' },
    { id: 'Einzelhandel', name: 'Einzelhandel' },
    { id: 'IT-Services', name: 'IT-Services' },
    { id: 'E-Commerce', name: 'E-Commerce' },
    { id: 'Automotive', name: 'Automotive' },
    { id: 'Finanzdienstleistung', name: 'Finanzdienstleistung' },
    { id: 'Produktion', name: 'Produktion' }
  ];

  const filteredStories = activeFilter === 'all' 
    ? successStories 
    : successStories.filter(story => story.industry === activeFilter);

  // Predictive Analytics Calculations
  const calculatePrediction = () => {
    const baseRevenue = 250000;
    const months = [1, 2, 3, 4, 5, 6];
    
    return months.map(month => {
      const marketEffect = 1 + (predictionParams.marketGrowth / 100) * (month / 12);
      const efficiencyEffect = 1 + (predictionParams.efficiency / 100) * (month / 6);
      const retentionEffect = (predictionParams.customerRetention / 100);
      
      const predicted = baseRevenue * marketEffect * efficiencyEffect * retentionEffect;
      const conservative = predicted * 0.85;
      const optimistic = predicted * 1.15;
      
      return {
        month: `Monat ${month}`,
        conservative: Math.round(conservative),
        predicted: Math.round(predicted),
        optimistic: Math.round(optimistic)
      };
    });
  };

  const predictionData = calculatePrediction();

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "35% mehr Umsatz",
      description: "Durchschnittliche Umsatzsteigerung unserer KMU-Kunden im ersten Jahr"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "60% bessere Effizienz",
      description: "Prozessoptimierung durch datenbasierte Entscheidungen"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "40% höhere Kundenzufriedenheit",
      description: "Durch besseres Verständnis der Kundenbedürfnisse"
    }
  ];

  const features = [
    "Automatisierte Datensammlung aus allen Systemen",
    "Verständliche Dashboards ohne technisches Know-how",
    "Wöchentliche Insights und Handlungsempfehlungen",
    "Persönlicher Datenanalyst als Ansprechpartner",
    "ROI-Garantie oder Geld zurück",
    "Setup in unter 48 Stunden"
  ];

  const renderDemo = (demo: Demo) => {
    switch (demo.type) {
      case 'bar':
        if (demo.id === 'sales') {
          return (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">{demo.title}</h4>
              <div className="space-y-4">
                {demo.data.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="w-12 text-sm font-medium text-gray-600">{item.month}</span>
                    <div className="flex-1 flex space-x-2">
                      <div className="flex flex-col w-1/2">
                        <div className="bg-blue-200 h-6 rounded flex items-center">
                          <div 
                            className="bg-blue-600 h-6 rounded transition-all duration-1000 flex items-center justify-end pr-2"
                            style={{ width: `${(item.umsatz / 80000) * 100}%` }}
                          >
                            <span className="text-white text-xs font-medium">
                              €{(item.umsatz / 1000).toFixed(0)}k
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 mt-1">2024</span>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <div className="bg-gray-200 h-6 rounded flex items-center">
                          <div 
                            className="bg-gray-400 h-6 rounded transition-all duration-1000 flex items-center justify-end pr-2"
                            style={{ width: `${(item.vorjahr / 80000) * 100}%` }}
                          >
                            <span className="text-white text-xs font-medium">
                              €{(item.vorjahr / 1000).toFixed(0)}k
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 mt-1">2023</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      +{Math.round(((item.umsatz - item.vorjahr) / item.vorjahr) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Insight:</strong> Ihr Umsatz wächst konstant um 18% pro Monat. 
                  Der Mai-Trend deutet auf saisonale Spitze hin - perfekt für Marketingkampagnen!
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">{demo.title}</h4>
              <div className="space-y-4">
                {demo.data.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <span className="w-20 text-sm font-medium text-gray-600">{item.bereich}</span>
                    <div className="flex-1 flex space-x-2">
                      <div className="flex flex-col w-full">
                        <div className="bg-gray-200 h-6 rounded relative overflow-hidden">
                          <div 
                            className="bg-orange-400 h-6 rounded transition-all duration-1000"
                            style={{ width: `${item.effizienz}%` }}
                          />
                          <div 
                            className="bg-green-600 h-1 rounded absolute bottom-0 transition-all duration-1000 delay-500"
                            style={{ width: `${item.potential}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Aktuell: {item.effizienz}%</span>
                          <span>Potential: {item.potential}%</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      +{item.potential - item.effizienz}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Empfehlung:</strong> Marketing zeigt größtes Verbesserungspotential. 
                  Automatisierung der Lead-Qualifizierung könnte 17% Effizienzsteigerung bringen.
                </p>
              </div>
            </div>
          );
        }
      
      case 'pie':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">{demo.title}</h4>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="10"
                    strokeDasharray={`${(demo.data[0].anteil / 100) * 251.2} 251.2`}
                    strokeDashoffset="0"
                    className="transition-all duration-1000"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="10"
                    strokeDasharray={`${(demo.data[1].anteil / 100) * 251.2} 251.2`}
                    strokeDashoffset={`-${(demo.data[0].anteil / 100) * 251.2}`}
                    className="transition-all duration-1000"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="10"
                    strokeDasharray={`${(demo.data[2].anteil / 100) * 251.2} 251.2`}
                    strokeDashoffset={`-${((demo.data[0].anteil + demo.data[1].anteil) / 100) * 251.2}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">100%</div>
                    <div className="text-sm text-gray-600">Kunden</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {demo.data.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className={`w-4 h-4 rounded ${
                        index === 0 ? 'bg-blue-600' : 
                        index === 1 ? 'bg-green-600' : 'bg-yellow-600'
                      }`}
                    />
                    <span className="text-sm font-medium text-gray-700">{item.kategorie}</span>
                    <span className="text-sm text-gray-600">
                      {item.anteil}% (€{(item.umsatz / 1000).toFixed(0)}k)
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-800">
                <strong>Opportunity:</strong> Premium-Kunden generieren 46% des Umsatzes bei nur 35% Anteil. 
                Fokus auf Premium-Akquise könnte Gewinn um 25% steigern.
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section - adjust top padding to account for fixed header */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Verwandeln Sie Ihre Daten in 
                <span className="text-blue-600"> messbaren Erfolg</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Speziell für KMUs: Datenanalyse die sich auszahlt. Ohne komplizierte Technik. 
                Mit sofort umsetzbaren Insights. Garantierte ROI-Steigerung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                  <Play className="w-5 h-5 inline mr-2" />
                  Kostenlose Demo starten
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all">
                  Erfolgsgeschichten ansehen
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Live Demos Section */}
        <section id="demos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Live Demos: Sehen Sie Ihre Daten zum Leben erwachen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Echte Beispiele aus typischen KMU-Szenarien. Klicken Sie sich durch und 
                entdecken Sie, welche Insights in Ihren Daten schlummern.
              </p>
            </div>

            {/* Demo Tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-4">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeDemo === demo.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>

            {/* Active Demo */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 text-center">
                <p className="text-lg text-gray-600">
                  {demos.find(demo => demo.id === activeDemo)?.description}
                </p>
              </div>
              {renderDemo(demos.find(demo => demo.id === activeDemo)!)}
            </div>
          </div>
        </section>

        {/* Predictive Analytics Showcase */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Blick in die Zukunft: Was wäre wenn...?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spielen Sie mit den Parametern und sehen Sie, wie sich verschiedene Geschäftsentscheidungen 
                auf Ihren zukünftigen Erfolg auswirken könnten.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Parameter Controls */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Ihre Parameter</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Marktwachstum: {predictionParams.marketGrowth}% pro Jahr
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="20"
                        value={predictionParams.marketGrowth}
                        onChange={(e) => setPredictionParams(prev => ({
                          ...prev,
                          marketGrowth: parseInt(e.target.value)
                        }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Stagnation</span>
                        <span>Boom</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Effizienzsteigerung: {predictionParams.efficiency}% durch Optimierung
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={predictionParams.efficiency}
                        onChange={(e) => setPredictionParams(prev => ({
                          ...prev,
                          efficiency: parseInt(e.target.value)
                        }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Status Quo</span>
                        <span>Revolution</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kundenbindung: {predictionParams.customerRetention}%
                      </label>
                      <input
                        type="range"
                        min="50"
                        max="95"
                        value={predictionParams.customerRetention}
                        onChange={(e) => setPredictionParams(prev => ({
                          ...prev,
                          customerRetention: parseInt(e.target.value)
                        }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Problematisch</span>
                        <span>Exzellent</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Prognose für Monat 6:</h4>
                    <div className="text-2xl font-bold text-green-600">
                      €{(predictionData[5]?.predicted || 0).toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Das entspricht einem Wachstum von{' '}
                      <span className="font-semibold text-green-600">
                        +{Math.round(((predictionData[5]?.predicted || 250000) / 250000 - 1) * 100)}%
                      </span>
                    </p>
                  </div>
                </div>

                {/* Prediction Chart */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">6-Monats-Prognose</h3>
                  
                  <div className="space-y-4">
                    {predictionData.map((data, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <span className="w-16 text-sm font-medium text-gray-600">{data.month}</span>
                        <div className="flex-1 relative">
                          <div className="bg-gray-100 h-8 rounded-lg relative overflow-hidden">
                            {/* Conservative */}
                            <div
                              className="bg-red-300 h-8 rounded-lg absolute transition-all duration-500"
                              style={{ width: `${(data.conservative / 400000) * 100}%` }}
                            />
                            {/* Predicted */}
                            <div
                              className="bg-blue-500 h-6 rounded-lg absolute top-1 transition-all duration-500"
                              style={{ width: `${(data.predicted / 400000) * 100}%` }}
                            />
                            {/* Optimistic */}
                            <div
                              className="bg-green-400 h-4 rounded-lg absolute top-2 transition-all duration-500"
                              style={{ width: `${(data.optimistic / 400000) * 100}%` }}
                            />
                          </div>
                          <div className="absolute left-2 top-1 text-white text-xs font-medium">
                            €{(data.predicted / 1000).toFixed(0)}k
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-300 rounded"></div>
                      <span>Konservativ</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span>Wahrscheinlich</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded"></div>
                      <span>Optimistisch</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Detaillierte Prognose anfordern
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Erfolgsgeschichten aus ganz Deutschland
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entdecken Sie, wie Unternehmen in Ihrer Region bereits von Datenanalyse profitieren. 
                Bewegen Sie die Maus über die Markierungen für Details.
              </p>
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center mb-8 gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveFilter(industry.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out ${
                    activeFilter === industry.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
                {/* Germany Map SVG - Realistic outline */}
                <svg viewBox="0 0 800 600" className="w-full h-96 md:h-[500px]">
                  {/* More realistic Germany outline */}
                  <path
                    d="M 300 120 
                       L 320 100 L 350 105 L 380 100 L 420 110 L 450 105 L 480 115 L 520 120 L 550 110 L 580 115 L 610 125 L 640 130 L 670 140 L 690 160 L 700 180 L 710 200 L 720 230 L 715 260 L 705 290 L 695 320 L 685 350 L 675 380 L 665 410 L 650 440 L 630 460 L 610 475 L 580 485 L 550 490 L 520 485 L 490 480 L 460 475 L 430 470 L 400 460 L 370 450 L 350 440 L 330 420 L 320 400 L 310 380 L 305 360 L 300 340 L 295 320 L 290 300 L 285 280 L 280 260 L 275 240 L 270 220 L 275 200 L 280 180 L 285 160 L 290 140 L 295 130 Z"
                    fill="#f3f4f6"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                  
                  {/* Success Story Markers */}
                  {filteredStories.map((story) => (
                    <g key={story.id}>
                      <circle
                        cx={story.location.x}
                        cy={story.location.y}
                        r={story.size === 'large' ? 12 : story.size === 'medium' ? 10 : 8}
                        fill={
                          story.size === 'large' ? '#10b981' :
                          story.size === 'medium' ? '#3b82f6' : '#f59e0b'
                        }
                        stroke="white"
                        strokeWidth="3"
                        className="cursor-pointer transition-all duration-300 hover:scale-110 drop-shadow-lg"
                        onMouseEnter={() => setHoveredStory(story.id)}
                        onMouseLeave={() => setHoveredStory(null)}
                      />
                      
                      {/* Inner dot for better visibility */}
                      <circle
                        cx={story.location.x}
                        cy={story.location.y}
                        r={3}
                        fill="white"
                        className="pointer-events-none transition-all duration-300"
                      />
                      
                      {/* City label */}
                      <text
                        x={story.location.x}
                        y={story.location.y - (story.size === 'large' ? 20 : story.size === 'medium' ? 18 : 16)}
                        textAnchor="middle"
                        className="text-xs font-medium fill-gray-700 pointer-events-none opacity-80"
                      >
                        {story.id === 'munich' ? 'München' :
                         story.id === 'hamburg' ? 'Hamburg' :
                         story.id === 'berlin' ? 'Berlin' :
                         story.id === 'cologne' ? 'Köln' :
                         story.id === 'frankfurt' ? 'Frankfurt' :
                         story.id === 'stuttgart' ? 'Stuttgart' : ''}
                      </text>
                      
                      {/* Subtle pulse animation for hovered marker */}
                      {hoveredStory === story.id && (
                        <>
                          <circle
                            cx={story.location.x}
                            cy={story.location.y}
                            r={18}
                            fill="none"
                            stroke={
                              story.size === 'large' ? '#10b981' :
                              story.size === 'medium' ? '#3b82f6' : '#f59e0b'
                            }
                            strokeWidth="2"
                            opacity="0.4"
                            className="animate-pulse"
                          />
                          <circle
                            cx={story.location.x}
                            cy={story.location.y}
                            r={25}
                            fill="none"
                            stroke={
                              story.size === 'large' ? '#10b981' :
                              story.size === 'medium' ? '#3b82f6' : '#f59e0b'
                            }
                            strokeWidth="1"
                            opacity="0.2"
                            className="animate-pulse"
                            style={{ animationDelay: '0.5s' }}
                          />
                        </>
                      )}
                    </g>
                  ))}
                </svg>

                {/* Success Story Tooltip */}
                {hoveredStory && (
                  <div 
                    className="absolute bottom-8 left-8 right-8 bg-white rounded-lg shadow-xl p-6 border border-gray-200 z-10 fade-in-up"
                  >
                    {(() => {
                      const story = successStories.find(s => s.id === hoveredStory);
                      if (!story) return null;
                      return (
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-bold text-gray-800">{story.company}</h4>
                              <p className="text-sm text-gray-600">{story.industry}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">{story.results.improvement}</div>
                              <div className="text-sm text-gray-600">{story.results.metric}</div>
                            </div>
                          </div>
                          <p className="text-gray-700 italic mb-3">"{story.quote}"</p>
                          <div className="text-sm text-gray-500">
                            Erfolg nach: {story.results.timeframe}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span>Kleine Unternehmen (1-50 MA)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span>Mittlere Unternehmen (51-250 MA)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span>Große Unternehmen (250+ MA)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Slider */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Vorher vs. Nachher: Der Unterschied ist dramatisch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ziehen Sie den Schieberegler und erleben Sie die Transformation: 
                Von chaotischen Excel-Tabellen zu kristallklaren Insights.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  {/* Before State */}
                  <div 
                    className="absolute inset-0 transition-all duration-300 ease-in-out"
                    style={{ 
                      clipPath: `polygon(0 0, ${beforeAfterPosition}% 0, ${beforeAfterPosition}% 100%, 0 100%)` 
                    }}
                  >
                    <div className="w-full h-full bg-red-50 p-8 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-red-700 mb-2">VORHER: Daten-Chaos</h3>
                        <p className="text-red-600">Wie die meisten Unternehmen ihre Daten verwalten...</p>
                      </div>
                      
                      {/* Chaotic Excel representation */}
                      <div className="flex-1 space-y-4">
                        <div className="bg-white border-2 border-red-200 rounded p-4">
                          <div className="text-sm font-medium text-red-700 mb-2">Verkaufsdaten_final_v23_WIRKLICH_FINAL.xlsx</div>
                          <div className="grid grid-cols-4 gap-1 text-xs">
                            <div className="bg-red-100 p-1 border">Jan</div>
                            <div className="bg-red-100 p-1 border">45,3k€</div>
                            <div className="bg-red-100 p-1 border">???</div>
                            <div className="bg-red-100 p-1 border">#FEHLER</div>
                            <div className="bg-red-100 p-1 border">Feb</div>
                            <div className="bg-red-100 p-1 border">52k€</div>
                            <div className="bg-red-100 p-1 border">oder 51k?</div>
                            <div className="bg-red-100 p-1 border">????</div>
                            <div className="bg-red-100 p-1 border">Mär</div>
                            <div className="bg-red-100 p-1 border">48.000</div>
                            <div className="bg-red-100 p-1 border">unterschiedl Format</div>
                            <div className="bg-red-100 p-1 border">0</div>
                          </div>
                        </div>
                        
                        <div className="bg-white border-2 border-red-200 rounded p-4">
                          <div className="text-sm font-medium text-red-700 mb-2">Kundendaten_backup_kopie.xlsx</div>
                          <div className="text-xs text-red-600">
                            ⚠️ 15 verschiedene Versionen vorhanden<br/>
                            ⚠️ Dubletten nicht bereinigt<br/>
                            ⚠️ Verschiedene Mitarbeiter = verschiedene Formate
                          </div>
                        </div>

                        <div className="bg-yellow-100 border-2 border-yellow-300 rounded p-3">
                          <div className="text-sm font-bold text-yellow-700">Typische Probleme:</div>
                          <ul className="text-xs text-yellow-600 mt-1 space-y-1">
                            <li>• Stunden für simple Auswertungen</li>
                            <li>• Entscheidungen auf Bauchgefühl</li>
                            <li>• Verpasste Chancen durch späte Erkennung</li>
                            <li>• Inkonsistente Datenqualität</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* After State */}
                  <div 
                    className="absolute inset-0 transition-all duration-300 ease-in-out"
                    style={{ 
                      clipPath: `polygon(${beforeAfterPosition}% 0, 100% 0, 100% 100%, ${beforeAfterPosition}% 100%)` 
                    }}
                  >
                    <div className="w-full h-full bg-green-50 p-8 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-green-700 mb-2">NACHHER: Crystal-Clear Insights</h3>
                        <p className="text-green-600">Ihre Daten werden zu Ihrem Wettbewerbsvorteil</p>
                      </div>
                      
                      {/* Clean Dashboard representation */}
                      <div className="flex-1 space-y-4">
                        <div className="bg-white border-2 border-green-200 rounded p-4 shadow-sm">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold text-green-700">Umsatz Dashboard</h4>
                            <span className="text-xs text-green-600">Live • Automatisch aktualisiert</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600">€67.3k</div>
                              <div className="text-xs text-gray-600">Aktueller Monat</div>
                              <div className="text-xs text-green-600">↗ +18% vs Vormonat</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600">€234k</div>
                              <div className="text-xs text-gray-600">Quartal</div>
                              <div className="text-xs text-blue-600">🎯 97% des Ziels</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-purple-600">€89k</div>
                              <div className="text-xs text-gray-600">Prognose nächster Monat</div>
                              <div className="text-xs text-purple-600">📈 Trend positiv</div>
                            </div>
                          </div>
                          
                          {/* Mini chart */}
                          <div className="h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full flex items-end space-x-1 px-2">
                              {[45, 52, 48, 61, 67, 75].map((height, i) => (
                                <div
                                  key={i}
                                  className="bg-green-500 rounded-t flex-1 transition-all duration-1000"
                                  style={{ height: `${(height/75) * 100}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border-2 border-green-200 rounded p-4 shadow-sm">
                          <h4 className="font-semibold text-green-700 mb-2">Heute für Sie wichtig:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>Lagerbestand Produkt A wird in 3 Tagen kritisch</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>Kundengruppe "Premium" zeigt 15% höhere Aktivität</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>Marketing-Kampagne übertrifft ROI-Ziel um 23%</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-100 border-2 border-blue-300 rounded p-3">
                          <div className="text-sm font-bold text-blue-700">Ihre Vorteile:</div>
                          <ul className="text-xs text-blue-600 mt-1 space-y-1">
                            <li>• Entscheidungen in Sekunden statt Stunden</li>
                            <li>• Probleme erkennen bevor sie entstehen</li>
                            <li>• Automatische Alerts bei Abweichungen</li>
                            <li>• Datenqualität garantiert</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slider Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-20 flex items-center justify-center"
                    style={{ left: `${beforeAfterPosition}%` }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-1 h-4 bg-gray-400"></div>
                      <div className="w-1 h-4 bg-gray-400 ml-1"></div>
                    </div>
                  </div>

                  {/* Invisible slider input */}
                  <input
                    type="range"
                    min="10"
                    max="90"
                    value={beforeAfterPosition}
                    onChange={(e) => setBeforeAfterPosition(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                  />
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 z-30">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    VORHER
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-30">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NACHHER
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Ziehen Sie den Schieberegler um die Transformation zu erleben
                </p>
                <button className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                  Diese Transformation für mein Unternehmen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Alles was Sie brauchen, nichts was Sie nicht brauchen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir fokussieren uns auf das Wesentliche: Ihre Geschäftsergebnisse zu verbessern.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow-md">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Das sagen unsere Kunden
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Transparent. Fair. Ergebnisorientiert.
              </h2>
              <p className="text-xl text-gray-600">
                Keine versteckten Kosten. ROI-Garantie inklusive.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Starter Package */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Starter Paket</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  €1,990<span className="text-lg text-gray-600">/Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Bis zu 3 Datenquellen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Wöchentliche Reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Basic Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>30 Tage ROI-Garantie</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Starter wählen
                </button>
              </div>

              {/* Professional Package */}
              <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Beliebtestes Paket
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional Paket</h3>
                <div className="text-4xl font-bold mb-6">
                  €3,990<span className="text-lg opacity-80">/Monat</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Unbegrenzte Datenquellen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Tägliche Insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Advanced Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Persönlicher Analyst</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>90 Tage ROI-Garantie</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Prognose-Modelle</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Professional wählen
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Alle Pakete beinhalten Setup, Training und unsere ROI-Garantie
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Individuelle Lösung anfragen →
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für datengetriebenen Erfolg?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Starten Sie heute mit Ihrer kostenlosen Datenanalyse. 
              Wir zeigen Ihnen in 30 Minuten, welches Potential in Ihren Daten steckt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                Kostenlose Analyse buchen
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all">
                Rückruf vereinbaren
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              ✓ Keine Verpflichtung ✓ 30 Min. kostenfrei ✓ Sofortige Insights
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DataAnalyticsLanding;
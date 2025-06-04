"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, TrendingUp, Target, BarChart3, Clock, DollarSign,
  CheckCircle, Star, ArrowRight, Sparkles, Zap, Phone, Mail,
  MessageSquare, Calendar, Bell, Award, Shield, Building2,
  ChevronRight, Play, Pause, LineChart, PieChart, Settings,
  Database, Workflow, UserCheck, Eye, MousePointer, FileText,
  Send, Heart, Lightbulb, Rocket, AlertCircle, X, Menu,
  ArrowUp, ArrowDown, Plus, Minus, Search, Filter, Download,
  RefreshCw, Share2, Globe, Smartphone, Laptop, Monitor,
  MapPin, Coffee, Store, Factory, Briefcase, Calculator
} from "lucide-react";

// Branchen CRM Component
type BranchenCRMSectionProps = {
  openContactModal: (type: string) => void;
};
function BranchenCRMSection({ openContactModal }: BranchenCRMSectionProps) {
  type BrancheKey = "handwerk" | "praxis" | "anwalt" | "gastro" | "immobilien";
  const [activeBranche, setActiveBranche] = useState<BrancheKey>("handwerk");
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const [currentDemoStep, setCurrentDemoStep] = useState(0);

  const branchenCRM: Record<BrancheKey, {
    name: string;
    icon: string;
    target: string;
    price: string;
    color: string;
    features: string[];
    demoSteps: { title: string; content: string; action: string }[];
    stats: Record<string, string>;
  }> = {
    handwerk: {
      name: "HandwerkerCRM Pro",
      icon: "🔧",
      target: "Elektriker, Sanitär, Heizung, Maler",
      price: "89€/Monat",
      color: "from-orange-500 to-red-500",
      features: [
        "Terminplanung mit Anfahrtsrouten",
        "Kostenvoranschlag-Generator", 
        "Material-Kalkulator",
        "Foto-Dokumentation vor/nach",
        "DATEV-Export für Buchhaltung",
        "WhatsApp-Integration für Kunden",
        "Notdienst-Priorisierung"
      ],
      demoSteps: [
        { title: "Neuer Auftrag eingegangen", content: "🔔 Herr Müller - Heizung defekt, Notfall", action: "Automatisch priorisiert" },
        { title: "Route berechnet", content: "📍 Optimale Route: 15 Min Fahrzeit", action: "GPS-Navigation gestartet" },
        { title: "Vor-Ort Dokumentation", content: "📸 Fotos + Material erfasst", action: "Kostenvoranschlag erstellt" },
        { title: "Rechnung automatisch", content: "💰 Rechnung an DATEV übertragen", action: "Kunde per WhatsApp informiert" }
      ],
      stats: { efficiency: "+8h/Woche", revenue: "+28%", satisfaction: "98%" }
    },
    praxis: {
      name: "PraxisCRM Medical",
      icon: "🏥",
      target: "Arztpraxen, Physiotherapie, Zahnärzte",
      price: "149€/Monat", 
      color: "from-blue-500 to-purple-500",
      features: [
        "Online-Terminbuchung 24/7",
        "Patientenverwaltung DSGVO-konform", 
        "Recall-System für Vorsorge",
        "Wartelisten-Management",
        "Bewertungs-Anfragen automatisch",
        "Praxiszeiten-Integration",
        "Notfall-Slots Management"
      ],
      demoSteps: [
        { title: "Patient bucht online", content: "👤 Frau Schmidt - Kontrolltermin", action: "Automatisch in Kalender" },
        { title: "Recall-Erinnerung", content: "⏰ Vorsorge-Termin fällig", action: "SMS automatisch versendet" },
        { title: "Termin bestätigt", content: "✅ Patient hat bestätigt", action: "Warteliste aktualisiert" },
        { title: "Nach Behandlung", content: "💬 Bewertung angefragt", action: "Google-Bewertung erhalten" }
      ],
      stats: { efficiency: "+12h/Woche", satisfaction: "+89%", noshow: "-45%" }
    },
    anwalt: {
      name: "AnwaltsCRM Legal",
      icon: "⚖️",
      target: "Rechtsanwälte, Steuerberater, Notare",
      price: "199€/Monat",
      color: "from-green-500 to-blue-500", 
      features: [
        "Mandanten-Akten digital",
        "Fristen-Management mit Alerts",
        "Abrechnung nach RVG/BRAGO",
        "Dokumenten-Versionierung", 
        "Gerichtstermin-Synchronisation",
        "Verschlüsselte Kommunikation",
        "Zeit-Tracking für Abrechnungen"
      ],
      demoSteps: [
        { title: "Neue Mandantin", content: "👩‍💼 Scheidungsverfahren - Aktenanlage", action: "Digitale Akte erstellt" },
        { title: "Frist-Alert", content: "⚠️ Widerspruchsfrist in 3 Tagen", action: "E-Mail-Benachrichtigung" },
        { title: "Zeiterfassung", content: "⏱️ 2,5h Beratung dokumentiert", action: "Abrechnung vorbereitet" },
        { title: "Rechnung erstellt", content: "💰 Nach RVG automatisch", action: "An Mandantin versendet" }
      ],
      stats: { billing: "+25%", efficiency: "+15h/Woche", compliance: "100%" }
    },
    gastro: {
      name: "RestaurantCRM Gastro", 
      icon: "🍽️",
      target: "Restaurants, Cafés, Catering, Hotels",
      price: "119€/Monat",
      color: "from-purple-500 to-pink-500",
      features: [
        "Tischreservierung online",
        "Kundenpräferenzen speichern",
        "Event-Management für Feiern", 
        "Allergien & Diät-Tracker",
        "Bewertungsmanagement",
        "Stammkunden-Bonus-System",
        "Lieferservice-Integration"
      ],
      demoSteps: [
        { title: "Online-Reservierung", content: "🎂 Familie Weber - Geburtstag 8 Personen", action: "Tisch 12 reserviert" },
        { title: "Präferenzen geladen", content: "🥗 Vegetarische Optionen bevorzugt", action: "Menü-Empfehlungen" },
        { title: "Während des Besuchs", content: "⭐ Stammkunde erkannt - 10% Rabatt", action: "Bonus automatisch" },
        { title: "Nach dem Besuch", content: "📱 Bewertung erbeten", action: "5-Sterne Review erhalten" }
      ],
      stats: { reservations: "+40%", loyalty: "+65%", reviews: "+120%" }
    },
    immobilien: {
      name: "ImmobilienCRM Realty",
      icon: "🏘️", 
      target: "Immobilienmakler, Hausverwaltung",
      price: "179€/Monat",
      color: "from-indigo-500 to-blue-500",
      features: [
        "Objekt-Exposé Generator",
        "Besichtigungstermin-Buchung",
        "Interessenten-Matching", 
        "Verkaufsprozess-Pipeline",
        "Provision-Kalkulator",
        "Marktpreis-Analyse",
        "Vertragsvorlagen-Generator"
      ],
      demoSteps: [
        { title: "Neues Objekt", content: "🏠 3-Zi-Wohnung Hamburg-Eimsbüttel", action: "Exposé automatisch erstellt" },
        { title: "Interessent gefunden", content: "👥 Familie Möller - Budget passt", action: "Besichtigung terminiert" },
        { title: "Besichtigung positiv", content: "✅ Interesse bekundet", action: "Finanzierung geprüft" },
        { title: "Verkauf abgeschlossen", content: "🎉 Vertrag unterzeichnet", action: "Provision berechnet" }
      ],
      stats: { sales: "+35%", time: "-20 Tage", commission: "+18%" }
    }
  };

  // Auto-advance demo
  useEffect(() => {
    if (isDemoPlaying) {
      const interval = setInterval(() => {
        setCurrentDemoStep((prev) => (prev + 1) % branchenCRM[activeBranche].demoSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isDemoPlaying, activeBranche]);

  return (
    <div className="space-y-12">
      {/* Branchen-Auswahl */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-0">
        {Object.entries(branchenCRM).map(([key, branche]) => (
          <button
            key={key}
            onClick={() => {
              setActiveBranche(key as BrancheKey);
              setCurrentDemoStep(0);
              setIsDemoPlaying(false);
            }}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              activeBranche === key
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200 shadow-sm'
            }`}
          >
            <span className="text-base sm:text-xl">{branche.icon}</span>
            <span className="hidden sm:inline">{branche.name}</span>
            <span className="sm:hidden">{branche.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Aktuelle Branche Details */}
      {Object.entries(branchenCRM).map(([key, branche]) => {
        if (key !== activeBranche) return null;
        
        return (
          <div key={key} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r ${branche.color} p-4 sm:p-6 lg:p-8 text-white`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-0">
                  <span className="text-3xl sm:text-4xl">{branche.icon}</span>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{branche.name}</h3>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90">{branche.target}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold">{branche.price}</div>
                  <div className="text-xs sm:text-sm opacity-80">pro Betrieb</div>
                </div>
              </div>

              {/* Demo Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setIsDemoPlaying(!isDemoPlaying)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all w-full sm:w-auto justify-center sm:justify-start"
                >
                  {isDemoPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                  <span className="text-sm sm:text-base">{isDemoPlaying ? 'Demo pausieren' : 'Live Demo starten'}</span>
                </button>
                <span className="text-xs sm:text-sm opacity-80">
                  Schritt {currentDemoStep + 1} / {branche.demoSteps.length}
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Live Demo */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Live-Demo: Typischer Arbeitsablauf</h4>
                
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                      {currentDemoStep + 1}
                    </div>
                    <h5 className="font-bold text-gray-900 text-sm sm:text-base">
                      {branche.demoSteps[currentDemoStep]?.title}
                    </h5>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border-l-4 border-green-500">
                    <div className="text-gray-700 mb-2 text-sm sm:text-base">
                      {branche.demoSteps[currentDemoStep]?.content}
                    </div>
                    <div className="text-green-600 font-medium text-xs sm:text-sm">
                      ⚡ {branche.demoSteps[currentDemoStep]?.action}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentDemoStep + 1) / branche.demoSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {Object.entries(branche.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 sm:p-4 bg-blue-50 rounded-xl">
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Branche-spezifische Features</h4>
                
                <div className="space-y-2 sm:space-y-3">
                  {branche.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 sm:p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <button 
                    onClick={() => openContactModal('test')}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    {branche.name} 30 Tage kostenlos testen
                  </button>
                  <button 
                    onClick={() => openContactModal('demo')}
                    className="w-full border-2 border-green-600 text-green-600 py-2 sm:py-3 rounded-xl font-semibold hover:bg-green-50 transition-all text-sm sm:text-base"
                  >
                    Live-Demo vereinbaren
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Vergleichstabelle */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Alle Branchen-CRM-Lösungen im Vergleich
        </h3>
        
        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {Object.entries(branchenCRM).map(([key, branche]) => (
            <div key={key} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{branche.icon}</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{branche.name}</div>
                  <div className="text-sm text-gray-600">{branche.target}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">{branche.price}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Top-Feature:</span> {branche.features[0]}
              </div>
              <button 
                onClick={() => {
                  setActiveBranche(key as BrancheKey);
                  setIsDemoPlaying(true);
                  setCurrentDemoStep(0);
                }}
                className="w-full text-blue-600 hover:text-blue-800 font-medium text-sm bg-white rounded-lg py-2 border border-blue-200 hover:border-blue-300 transition-all"
              >
                Demo ansehen
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold">CRM-Lösung</th>
                <th className="text-center py-4 px-6 font-semibold">Zielgruppe</th>
                <th className="text-center py-4 px-6 font-semibold">Preis/Monat</th>
                <th className="text-center py-4 px-6 font-semibold">Top-Feature</th>
                <th className="text-center py-4 px-6 font-semibold">Demo</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(branchenCRM).map(([key, branche]) => (
                <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{branche.icon}</span>
                      <span className="font-medium">{branche.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-gray-600">
                    {branche.target}
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-green-600">
                    {branche.price}
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    {branche.features[0]}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button 
                      onClick={() => {
                        setActiveBranche(key as BrancheKey);
                        setIsDemoPlaying(true);
                        setCurrentDemoStep(0);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Demo ansehen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function CRMSystemsPage() {
  const [activeFeature, setActiveFeature] = useState("leads");
  const [isDashboardDemoPlaying, setIsDashboardDemoPlaying] = useState(false);
  const [currentKPI, setCurrentKPI] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState("demo"); // demo, test, consultation, custom
  const [roiInputs, setROIInputs] = useState({
    employees: 15,
    avgDealValue: 8500,
    monthlyLeads: 80,
    currentConversion: 12,
    hoursPerWeek: 10
  });
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
    preferredContact: "email", // email, phone, whatsapp
    urgency: "normal" // normal, urgent, planning
  });

  // KPI Demo Data
  const kpiData = [
    { metric: "Conversion Rate", before: "12%", after: "28%", improvement: "+133%" },
    { metric: "Lead Response Time", before: "4 Std", after: "15 Min", improvement: "-75%" },
    { metric: "Sales Cycle", before: "45 Tage", after: "28 Tage", improvement: "-38%" },
    { metric: "Customer Satisfaction", before: "3.2/5", after: "4.7/5", improvement: "+47%" },
    { metric: "Upselling Success", before: "8%", after: "24%", improvement: "+200%" }
  ];

  // Auto-advance KPI demo
  useEffect(() => {
    if (isDashboardDemoPlaying) {
      const interval = setInterval(() => {
        setCurrentKPI((prev) => (prev + 1) % kpiData.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isDashboardDemoPlaying]);

  const crmFeatures = {
    leads: {
      title: "Automatische Lead-Verwaltung",
      subtitle: "Nie wieder einen potenziellen Kunden verlieren",
      icon: Target,
      color: "from-green-500 to-emerald-500",
      description: "Automatische Erfassung, Bewertung und Verteilung von Leads",
      benefits: [
        "Leads automatisch aus allen Kanälen erfassen",
        "Intelligente Lead-Bewertung nach Potenzial",
        "Automatische Verteilung an passende Verkäufer",
        "Follow-up Erinnerungen & Eskalationen"
      ],
      stats: { before: "23% Conversion", after: "41% Conversion", timeframe: "3 Monate" }
    },
    automation: {
      title: "Prozess-Automatisierung",
      subtitle: "5-10 Stunden pro Woche einsparen",
      icon: Workflow,
      color: "from-blue-500 to-purple-500",
      description: "Wiederkehrende Aufgaben automatisch abarbeiten lassen",
      benefits: [
        "E-Mail Kampagnen automatisch versenden",
        "Termine automatisch vorschlagen",
        "Rechnungen automatisch erstellen",
        "Kundendaten automatisch synchronisieren"
      ],
      stats: { before: "10h/Woche manuell", after: "2h/Woche", timeframe: "Sofort" }
    },
    analytics: {
      title: "Intelligente Analytics",
      subtitle: "Datenbasierte Entscheidungen treffen",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      description: "Umfassende Berichte und Vorhersagen für bessere Geschäftsentscheidungen",
      benefits: [
        "Echtzeit Dashboard mit Key-Metrics",
        "Umsatz-Prognosen basierend auf Pipeline",
        "Verkäufer-Performance detailliert analysieren",
        "Kundenzufriedenheit kontinuierlich messen"
      ],
      stats: { before: "Keine Transparenz", after: "100% Übersicht", timeframe: "1 Woche" }
    },
    integration: {
      title: "Nahtlose Integration",
      subtitle: "Mit bestehenden Systemen verbinden",
      icon: RefreshCw,
      color: "from-purple-500 to-pink-500",
      description: "Verbindung zu Buchhaltung, E-Mail, Telefon und anderen Tools",
      benefits: [
        "DATEV/Lexware Integration",
        "Outlook/Gmail Synchronisation",
        "Telefonie-Integration für Click-to-Call",
        "Website-Formulare automatisch importieren"
      ],
      stats: { before: "5 getrennte Tools", after: "1 zentrale Lösung", timeframe: "2 Wochen" }
    }
  };

  const successStories = [
    {
      company: "Maschinenbau Weber GmbH",
      industry: "B2B Manufacturing",
      employees: 28,
      challenge: "Verlorene Leads, kein Überblick über Sales Pipeline",
      solution: "CRM mit Lead-Automation und Analytics",
      results: {
        leadConversion: "+156%",
        salesCycle: "-32 Tage",
        revenue: "+340.000€/Jahr",
        efficiency: "+8h/Woche"
      },
      quote: "Das CRM hat unseren Vertrieb revolutioniert. Wir verlieren keine Anfragen mehr.",
      person: "Thomas Weber, Geschäftsführer",
      icon: "🏭"
    },
    {
      company: "Rechtsanwaltskanzlei Schmidt",
      industry: "Professional Services",
      employees: 12,
      challenge: "Mandantenverwaltung chaotisch, viel manueller Aufwand",
      solution: "CRM mit Dokumentenmanagement und Terminplanung",
      results: {
        efficiency: "+12h/Woche",
        clientSatisfaction: "+89%",
        billing: "+25%",
        organization: "100% digital"
      },
      quote: "Endlich haben wir alle Mandanten-Informationen zentral und aktuell verfügbar.",
      person: "Dr. Maria Schmidt, Partnerin",
      icon: "⚖️"
    },
    {
      company: "IT-Consulting Müller",
      industry: "Technology Services",
      employees: 18,
      challenge: "Kunde-Projekt Zuordnung unübersichtlich, verpasste Upselling-Chancen",
      solution: "CRM mit Projektmanagement und Opportunity Tracking",
      results: {
        upselling: "+280%",
        projectMargin: "+18%",
        customerRetention: "+45%",
        teamProductivity: "+25%"
      },
      quote: "Unser Umsatz pro Kunde ist deutlich gestiegen durch bessere Opportunities.",
      person: "Stefan Müller, CEO",
      icon: "💻"
    }
  ];

  const crmPackages = [
    {
      name: "CRM Starter",
      price: "89€",
      priceUnit: "pro User/Monat",
      description: "Ideal für kleinere Teams bis 5 Mitarbeiter",
      features: [
        "Kontakt- & Lead-Verwaltung",
        "Basic Sales Pipeline",
        "E-Mail Integration",
        "Mobile App",
        "5 GB Speicher",
        "E-Mail Support"
      ],
      maxUsers: "5 User",
      popular: false,
      savings: "vs. 3 Tools: 180€/Monat gespart"
    },
    {
      name: "CRM Business", 
      price: "149€",
      priceUnit: "pro User/Monat",
      description: "Für wachsende Unternehmen bis 25 Mitarbeiter",
      features: [
        "Alles aus CRM Starter",
        "Marketing Automation",
        "Advanced Analytics & Reports",
        "Workflow Automation",
        "API-Integrationen",
        "50 GB Speicher",
        "Telefon Support"
      ],
      maxUsers: "25 User",
      popular: true,
      savings: "vs. 5 Tools: 400€/Monat gespart"
    },
    {
      name: "CRM Enterprise",
      price: "249€",
      priceUnit: "pro User/Monat", 
      description: "Für etablierte Unternehmen ab 25+ Mitarbeiter",
      features: [
        "Alles aus CRM Business",
        "KI-basierte Verkaufsprognosen",
        "Custom Dashboards",
        "White-Label Optionen",
        "Dedicated Account Manager",
        "Unlimited Speicher",
        "24/7 Premium Support"
      ],
      maxUsers: "Unlimited",
      popular: false,
      savings: "ROI: 340% nach 12 Monaten"
    }
  ];

  const calculateCRMROI = () => {
    const { employees, avgDealValue, monthlyLeads, currentConversion, hoursPerWeek } = roiInputs;
    
    // Current state
    const currentDeals = (monthlyLeads * currentConversion / 100);
    const currentRevenue = currentDeals * avgDealValue * 12;
    const currentTimeWasted = employees * hoursPerWeek * 50 * 35; // 35€/Stunde
    
    // With CRM improvements
    const newConversion = currentConversion * 1.8; // 80% improvement
    const newDeals = (monthlyLeads * 1.3 * newConversion / 100); // 30% more leads + better conversion
    const newRevenue = newDeals * avgDealValue * 12;
    const timeSaved = employees * (hoursPerWeek * 0.6) * 50 * 35; // 60% time savings
    
    const crmCost = employees * 149 * 12; // Business package
    const totalBenefit = (newRevenue - currentRevenue) + timeSaved;
    const roi = ((totalBenefit - crmCost) / crmCost) * 100;
    
    return {
      additionalRevenue: newRevenue - currentRevenue,
      timeSaved: timeSaved,
      totalBenefit: totalBenefit,
      crmInvestment: crmCost,
      roi: roi,
      paybackPeriod: Math.ceil(crmCost / ((totalBenefit) / 12))
    };
  };

  const roiCalculation = calculateCRMROI();

  const openContactModal = (type: string) => {
    setContactFormType(type);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setContactForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      message: "",
      preferredContact: "email",
      urgency: "normal"
    });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier würde die Form-Daten versendet werden
    console.log("Contact form submitted:", { ...contactForm, type: contactFormType });
    
    // Simuliere erfolgreiche Übermittlung
    alert("Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.");
    closeContactModal();
  };

  const getContactFormTitle = () => {
    switch(contactFormType) {
      case "demo": return "Live-Demo vereinbaren";
      case "test": return "30 Tage kostenlos testen";
      case "consultation": return "Kostenlose Beratung anfragen";
      case "custom": return "Individual-Entwicklung anfragen";
      default: return "Kontakt aufnehmen";
    }
  };

  const getContactFormDescription = () => {
    switch(contactFormType) {
      case "demo": return "Lassen Sie sich unser CRM-System in einer persönlichen Demo präsentieren.";
      case "test": return "Starten Sie Ihren kostenlosen 30-Tage Test ohne Risiko und Vertragsbindung.";
      case "consultation": return "Erhalten Sie eine kostenlose Analyse Ihrer aktuellen Prozesse.";
      case "custom": return "Besprechen Sie Ihre individuellen Anforderungen mit unseren Experten.";
      default: return "Wir freuen uns auf Ihre Nachricht!";
    }
  };

  // Contact Modal Component
  const ContactModal = () => {
    if (!isContactModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-start sm:items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto mt-2 sm:mt-0">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 sm:p-6 text-white rounded-t-2xl sm:rounded-t-3xl">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">{getContactFormTitle()}</h3>
                <p className="text-green-100 mt-1 text-sm sm:text-base">{getContactFormDescription()}</p>
              </div>
              <button
                onClick={closeContactModal}
                className="p-1 sm:p-2 hover:bg-white/20 rounded-full transition-all flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <form onSubmit={handleContactSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Persönliche Daten */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({...prev, name: e.target.value}))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({...prev, email: e.target.value}))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm(prev => ({...prev, phone: e.target.value}))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unternehmen *
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.company}
                  onChange={(e) => setContactForm(prev => ({...prev, company: e.target.value}))}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Ihr Unternehmen"
                />
              </div>
            </div>

            {/* Unternehmensgröße */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unternehmensgröße
              </label>
              <select
                value={contactForm.employees}
                onChange={(e) => setContactForm(prev => ({...prev, employees: e.target.value}))}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              >
                <option value="">Bitte wählen</option>
                <option value="1-5">1-5 Mitarbeiter</option>
                <option value="6-15">6-15 Mitarbeiter</option>
                <option value="16-50">16-50 Mitarbeiter</option>
                <option value="51-100">51-100 Mitarbeiter</option>
                <option value="100+">Über 100 Mitarbeiter</option>
              </select>
            </div>

            {/* Kontaktpräferenz */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Bevorzugter Kontaktweg
              </label>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                {[
                  { value: "email", label: "E-Mail", icon: Mail },
                  { value: "phone", label: "Telefon", icon: Phone },
                  { value: "whatsapp", label: "WhatsApp", icon: MessageSquare }
                ].map(({ value, label, icon: Icon }) => (
                  <label key={value} className="flex items-center cursor-pointer flex-1 sm:flex-initial">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={value}
                      checked={contactForm.preferredContact === value}
                      onChange={(e) => setContactForm(prev => ({...prev, preferredContact: e.target.value}))}
                      className="sr-only"
                    />
                    <div className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full border-2 transition-all text-center w-full sm:w-auto ${
                      contactForm.preferredContact === value
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-300 text-gray-600 hover:border-green-300'
                    }`}>
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">{label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Dringlichkeit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Zeitrahmen
              </label>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                {[
                  { value: "urgent", label: "Dringend (diese Woche)", color: "red" },
                  { value: "normal", label: "Normal (2-4 Wochen)", color: "green" },
                  { value: "planning", label: "Planung (1-3 Monate)", color: "blue" }
                ].map(({ value, label, color }) => (
                  <label key={value} className="flex items-center cursor-pointer flex-1 sm:flex-initial">
                    <input
                      type="radio"
                      name="urgency"
                      value={value}
                      checked={contactForm.urgency === value}
                      onChange={(e) => setContactForm(prev => ({...prev, urgency: e.target.value}))}
                      className="sr-only"
                    />
                    <div className={`px-3 sm:px-4 py-2 rounded-full border-2 transition-all text-xs sm:text-sm font-medium text-center w-full ${
                      contactForm.urgency === value
                        ? `border-${color}-500 bg-${color}-50 text-${color}-700`
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}>
                      <span className="sm:hidden">{label.split(' ')[0]}</span>
                      <span className="hidden sm:inline">{label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Nachricht */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ihre Nachricht / Spezielle Anforderungen
              </label>
              <textarea
                rows={3}
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({...prev, message: e.target.value}))}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base"
                placeholder="Beschreiben Sie kurz Ihre aktuellen Herausforderungen oder spezielle Anforderungen..."
              />
            </div>

            {/* Info Box */}
            <div className="bg-green-50 border border-green-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-green-700">
                  <div className="font-medium mb-1">100% vertraulich & DSGVO-konform</div>
                  <div>Ihre Daten werden ausschließlich für die Kontaktaufnahme verwendet und nicht an Dritte weitergegeben.</div>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                Anfrage senden
              </button>
              <button
                type="button"
                onClick={closeContactModal}
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 text-gray-600 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-50 transition-all text-sm sm:text-base"
              >
                Abbrechen
              </button>
            </div>

            <div className="text-center text-xs sm:text-sm text-gray-500">
              Antwort innerhalb von 24 Stunden • Kostenlose Beratung • Keine Verpflichtung
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
        {/* Hero Section */}
        <section className="pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-medium mb-8">
                <Users className="w-4 h-4" />
                CRM-SYSTEME FÜR KMUS
                <Sparkles className="w-4 h-4" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                <span className="block">Ihr Unternehmen</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 block"> systematisch wachsen lassen</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0">
                Mit unserem CRM-System steigern KMUs ihren Umsatz um durchschnittlich <strong>34%</strong>, 
                sparen <strong>8 Stunden pro Woche</strong> und verlieren <strong>keine Leads</strong> mehr.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
                <button 
                  onClick={() => setIsDashboardDemoPlaying(!isDashboardDemoPlaying)}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Live CRM-Demo ansehen</span>
                  <span className="sm:hidden">Demo ansehen</span>
                </button>
                <button 
                  onClick={() => openContactModal('consultation')}
                  className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-green-50 transition-all w-full sm:w-auto"
                >
                  <span className="hidden sm:inline">ROI-Rechner testen</span>
                  <span className="sm:hidden">ROI-Rechner</span>
                </button>
              </div>

              {/* Key Stats für Geschäftsführer */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">340%</div>
                  <div className="text-sm text-gray-600">Durchschnittlicher ROI</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">8h</div>
                  <div className="text-sm text-gray-600">Gespart pro Woche</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">34%</div>
                  <div className="text-sm text-gray-600">Mehr Umsatz</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">3 Mon.</div>
                  <div className="text-sm text-gray-600">Payback-Zeit</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Dashboard Demo */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                So sieht Erfolg aus:
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 block sm:inline"> Live CRM-Dashboard</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
                Sehen Sie in Echtzeit, wie sich Ihre KPIs mit einem professionellen CRM entwickeln
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
                <button
                  onClick={() => setIsDashboardDemoPlaying(!isDashboardDemoPlaying)}
                  className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold w-full sm:w-auto justify-center"
                >
                  {isDashboardDemoPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                  <span className="text-sm sm:text-base">CRM-Dashboard Demo {isDashboardDemoPlaying ? 'pausieren' : 'starten'}</span>
                </button>
                <span className="text-xs sm:text-sm text-gray-600">
                  KPI {currentKPI + 1} / {kpiData.length}
                </span>
              </div>
            </div>

            {/* Dashboard Simulation */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 px-4 sm:px-6 py-3 sm:py-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-bold text-sm sm:text-lg">CRM Dashboard - Ihr Unternehmen</span>
                  </div>
                  <div className="text-xs sm:text-sm opacity-90">Live Update: vor 2 Min</div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Current KPI Highlight */}
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl border border-green-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    Aktueller Fokus: {kpiData[currentKPI]?.metric}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">VORHER</div>
                      <div className="text-xl sm:text-2xl font-bold text-red-600">{kpiData[currentKPI]?.before}</div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">VERBESSERUNG</div>
                      <div className="text-xl sm:text-2xl font-bold text-green-600">{kpiData[currentKPI]?.improvement}</div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-600 mb-1">NACHHER</div>
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">{kpiData[currentKPI]?.after}</div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Widgets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="bg-green-50 p-4 sm:p-6 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Neue Leads</h4>
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">127</div>
                    <div className="text-xs sm:text-sm text-green-600">+23% vs. letzter Monat</div>
                  </div>

                  <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Conversion Rate</h4>
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">28%</div>
                    <div className="text-xs sm:text-sm text-blue-600">+16% durch CRM</div>
                  </div>

                  <div className="bg-purple-50 p-4 sm:p-6 rounded-xl border border-purple-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Sales Pipeline</h4>
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">485k€</div>
                    <div className="text-xs sm:text-sm text-purple-600">+42% Volumen</div>
                  </div>

                  <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border border-orange-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Team Effizienz</h4>
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">94%</div>
                    <div className="text-xs sm:text-sm text-orange-600">+31% produktiver</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Intelligente Empfehlungen</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <div className="font-medium">3 heiße Leads</div>
                        <div className="text-gray-600">Benötigen Follow-up</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <div className="font-medium">12 Termine</div>
                        <div className="text-gray-600">Diese Woche geplant</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <div className="text-xs sm:text-sm">
                        <div className="font-medium">5 E-Mails</div>
                        <div className="text-gray-600">Auto-versendet heute</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full">
                <Eye className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-700">
                  100% Transparenz über Ihre Vertriebsaktivitäten
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Branchen-CRM Lösungen */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                Branchen-CRM-Lösungen von PrintzzDigital
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Maßgeschneiderte CRM-Systeme für Ihre Branche - entwickelt und betreut von uns
              </p>
            </div>
            <BranchenCRMSection openContactModal={openContactModal} />
          </div>
        </section>

        {/* Add-On Module */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                Erweitern Sie Ihr CRM mit Add-On Modulen
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Zusätzliche Features für noch mehr Effizienz und Automatisierung
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "WhatsApp Business API",
                  price: "+29€/Monat",
                  icon: MessageSquare,
                  color: "from-green-500 to-green-600",
                  description: "Direkte Kommunikation mit Kunden über WhatsApp",
                  features: ["Automatische Nachrichten", "Status-Updates", "Terminbestätigungen", "Rechnung-Versand"]
                },
                {
                  name: "KI-Chat für Website", 
                  price: "+49€/Monat",
                  icon: Users,
                  color: "from-blue-500 to-blue-600", 
                  description: "24/7 Kundenbetreuung mit intelligenten Chatbots",
                  features: ["Lead-Qualifizierung", "FAQ-Automatisierung", "Terminbuchung", "Mehrsprachig"]
                },
                {
                  name: "E-Mail Marketing Automation",
                  price: "+39€/Monat", 
                  icon: Mail,
                  color: "from-purple-500 to-purple-600",
                  description: "Automatisierte E-Mail-Kampagnen basierend auf Kundenverhalten",
                  features: ["Drip-Kampagnen", "Behavioral Triggers", "A/B Testing", "Analytics"]
                },
                {
                  name: "Social Media Management",
                  price: "+59€/Monat",
                  icon: Share2,
                  color: "from-pink-500 to-pink-600", 
                  description: "Zentrale Verwaltung aller Social Media Kanäle",
                  features: ["Content-Planung", "Multi-Platform Posting", "Engagement-Tracking", "Influencer-Tools"]
                },
                {
                  name: "Online-Terminbuchung Widget",
                  price: "+19€/Monat",
                  icon: Calendar,
                  color: "from-orange-500 to-orange-600",
                  description: "Nahtlose Integration in Ihre Website für automatische Terminbuchung", 
                  features: ["Kalender-Sync", "Verfügbarkeits-Check", "Reminder-System", "Customizable Design"]
                },
                {
                  name: "Multi-Location Management", 
                  price: "+79€/Monat",
                  icon: Building2,
                  color: "from-indigo-500 to-indigo-600",
                  description: "Verwaltung mehrerer Standorte in einem System",
                  features: ["Standort-übergreifende Reports", "Ressourcen-Verteilung", "Performance-Vergleich", "Zentrale Kontrolle"]
                }
              ].map((addon, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${addon.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                    <addon.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm">{addon.description}</p>
                  
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {addon.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold text-green-600">{addon.price}</span>
                    <button 
                      onClick={() => openContactModal('consultation')}
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:shadow-lg transition-all"
                    >
                      Hinzufügen
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  🎯 Maßgeschneiderte Entwicklung
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Benötigen Sie spezielle Features für Ihre Branche? Wir entwickeln individuelle 
                  CRM-Module genau nach Ihren Anforderungen.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
                  <button 
                    onClick={() => openContactModal('custom')}
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:shadow-xl transition-all text-sm sm:text-base"
                  >
                    Custom Development anfragen
                  </button>
                  <button 
                    onClick={() => openContactModal('consultation')}
                    className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-green-50 transition-all text-sm sm:text-base"
                  >
                    Beratungstermin buchen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standard CRM Features */}
        <section className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                Standard CRM-Features für alle Branchen
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Diese Grundfunktionen sind in allen unseren CRM-Lösungen enthalten
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
              {Object.entries(crmFeatures).map(([key, feature]) => (
                <button
                  key={key}
                  onClick={() => setActiveFeature(key)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                    activeFeature === key
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                  }`}
                >
                  <feature.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{feature.title.split(' ')[0]}</span>
                  <span className="sm:hidden">{feature.title.split(' ')[0].slice(0, 6)}</span>
                </button>
              ))}
            </div>

            {/* Feature Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto">
              {Object.entries(crmFeatures).map(([key, feature]) => {
                if (key !== activeFeature) return null;
                
                return (
                  <div key={key} className="space-y-6 sm:space-y-8">
                    <div className="text-center">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${feature.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                        <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                      <p className="text-base sm:text-lg text-gray-600 font-medium mb-3 sm:mb-4">{feature.subtitle}</p>
                      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">{feature.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                        <div>
                          <div className="text-xs sm:text-sm text-gray-600 mb-1">VORHER</div>
                          <div className="text-lg sm:text-xl font-bold text-red-600">{feature.stats.before}</div>
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm text-gray-600 mb-1">ZEITRAHMEN</div>
                          <div className="text-lg sm:text-xl font-bold text-blue-600">{feature.stats.timeframe}</div>
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm text-gray-600 mb-1">NACHHER</div>
                          <div className="text-lg sm:text-xl font-bold text-green-600">{feature.stats.after}</div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-xl">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                KMU-Erfolgsgeschichten
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Wie andere Geschäftsführer ihr Unternehmen mit CRM transformiert haben
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 sm:p-6 text-white">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">{story.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg sm:text-xl">{story.company}</h3>
                        <span className="text-green-100 text-sm">{story.industry}</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-xs font-medium text-green-100 uppercase tracking-wide mb-1">Challenge</div>
                      <div className="text-white text-xs sm:text-sm">{story.challenge}</div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">Lösung</span>
                        <p className="text-gray-700 text-xs sm:text-sm mt-1">{story.solution}</p>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm">Messbare Ergebnisse</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                          {Object.entries(story.results).map(([key, value]) => (
                            <div key={key} className="flex justify-between sm:flex-col sm:justify-start">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                              <span className="text-green-600 font-bold sm:text-lg">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                        <blockquote className="text-gray-700 text-xs sm:text-sm mb-2 italic">
                          "{story.quote}"
                        </blockquote>
                        <cite className="text-green-600 text-xs font-medium">
                          — {story.person}
                        </cite>
                      </div>

                      <button 
                        onClick={() => openContactModal('consultation')}
                        className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                      >
                        Ähnliche Lösung anfragen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 bg-white/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                CRM ROI-Rechner für Ihr Unternehmen
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
                Berechnen Sie den konkreten Nutzen für Ihr Unternehmen
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Ihre Unternehmensdaten</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Anzahl Mitarbeiter im Vertrieb/Kundenservice
                      </label>
                      <input
                        type="number"
                        value={roiInputs.employees}
                        onChange={(e) => setROIInputs(prev => ({...prev, employees: Number(e.target.value)}))}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Durchschnittlicher Auftragswert (€)
                      </label>
                      <input
                        type="number"
                        value={roiInputs.avgDealValue}
                        onChange={(e) => setROIInputs(prev => ({...prev, avgDealValue: Number(e.target.value)}))}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Leads pro Monat
                      </label>
                      <input
                        type="number"
                        value={roiInputs.monthlyLeads}
                        onChange={(e) => setROIInputs(prev => ({...prev, monthlyLeads: Number(e.target.value)}))}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Aktuelle Conversion Rate (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={roiInputs.currentConversion}
                        onChange={(e) => setROIInputs(prev => ({...prev, currentConversion: Number(e.target.value)}))}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stunden/Woche für manuelle CRM-Aufgaben pro Person
                      </label>
                      <input
                        type="number"
                        value={roiInputs.hoursPerWeek}
                        onChange={(e) => setROIInputs(prev => ({...prev, hoursPerWeek: Number(e.target.value)}))}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Ihr CRM-Potenzial</h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-200">
                      <div className="text-xs sm:text-sm text-green-600 font-medium mb-2">ZUSÄTZLICHER JAHRESUMSATZ</div>
                      <div className="text-2xl sm:text-3xl font-bold text-green-700">
                        +{roiCalculation.additionalRevenue.toLocaleString('de-DE')}€
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-200">
                      <div className="text-xs sm:text-sm text-blue-600 font-medium mb-2">EINGESPARTE ARBEITSKOSTEN/JAHR</div>
                      <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                        {roiCalculation.timeSaved.toLocaleString('de-DE')}€
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-200">
                      <div className="text-xs sm:text-sm text-purple-600 font-medium mb-2">GESAMTNUTZEN/JAHR</div>
                      <div className="text-xl sm:text-2xl font-bold text-purple-700">
                        {roiCalculation.totalBenefit.toLocaleString('de-DE')}€
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-orange-200">
                      <div className="text-xs sm:text-sm text-orange-600 font-medium mb-2">CRM-INVESTMENT/JAHR</div>
                      <div className="text-xl sm:text-2xl font-bold text-orange-700">
                        {roiCalculation.crmInvestment.toLocaleString('de-DE')}€
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-green-300">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                        <div>
                          <div className="text-xs sm:text-sm text-gray-600 mb-1">ROI</div>
                          <div className="text-xl sm:text-2xl font-bold text-green-700">
                            {Math.round(roiCalculation.roi)}%
                          </div>
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm text-gray-600 mb-1">Amortisation</div>
                          <div className="text-xl sm:text-2xl font-bold text-blue-700">
                            {roiCalculation.paybackPeriod} Mon.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      * Berechnung basiert auf durchschnittlichen Verbesserungen unserer KMU-Kunden
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CRM Packages */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
                CRM-Pakete für jede Unternehmensgröße
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Transparente Preise, sofortiger Nutzen - ohne versteckte Kosten
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {crmPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 relative ${
                    pkg.popular ? 'ring-2 ring-green-400 scale-105' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                        BELIEBT BEI KMUS
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{pkg.name}</h3>
                    <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">{pkg.price}</div>
                    <div className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{pkg.priceUnit}</div>
                    <div className="text-green-600 text-xs sm:text-sm font-medium">{pkg.savings}</div>
                    <p className="text-gray-600 mt-3 sm:mt-4 text-sm">{pkg.description}</p>
                  </div>

                  <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 sm:pt-6">
                    <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center">
                      Bis zu <strong>{pkg.maxUsers}</strong>
                    </div>
                    <button 
                      onClick={() => openContactModal(pkg.popular ? 'test' : 'demo')}
                      className={`w-full font-semibold py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all text-sm sm:text-base ${
                        pkg.popular 
                          ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg'
                          : 'border-2 border-green-200 text-green-700 hover:bg-green-50'
                      }`}
                    >
                      {pkg.popular ? '30 Tage kostenlos testen' : 'Demo vereinbaren'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Kostenloses CRM-Beratungsgespräch
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  Wir analysieren Ihre aktuellen Prozesse und zeigen konkrete Verbesserungsmöglichkeiten auf.
                </p>
                <button 
                  onClick={() => openContactModal('consultation')}
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-xl transition-all text-sm sm:text-base"
                >
                  Termin vereinbaren (30 Min, kostenlos)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Bereit Ihr Unternehmen zu transformieren?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                  Starten Sie noch heute mit unserem CRM-System. 
                  <strong> 30 Tage kostenlos testen</strong> - ohne Risiko, ohne Vertragsbindung.
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center mb-8 sm:mb-12">
                  <button 
                    onClick={() => openContactModal('test')}
                    className="bg-white text-green-600 font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
                  >
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">30 Tage kostenlos testen</span>
                  </button>
                  <button
                    onClick={() => openContactModal('consultation')}
                    className="border-2 border-white/50 text-white font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Persönliche Beratung anfragen</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-green-100">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="text-center">
                      <div className="font-semibold">100% DSGVO-konform</div>
                      <div className="text-xs">Deutsche Server</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="text-center">
                      <div className="font-semibold">Setup in 24h</div>
                      <div className="text-xs">Schnelle Implementierung</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="text-center">
                      <div className="font-semibold">Deutscher Support</div>
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
      
      {/* Contact Modal */}
      <ContactModal />
    </>
  );
}
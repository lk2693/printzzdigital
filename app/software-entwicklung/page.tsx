"use client";

import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Zap,
  Shield,
  Rocket,
  CheckCircle,
  Star,
  Play,
  Menu,
  X,
  ArrowRight,
  Monitor,
  Server,
  Cloud,
  Lock,
  Users,
  TrendingUp
} from 'lucide-react';

interface SoftwareDemo {
  id: string;
  title: string;
  description: string;
  type: 'web' | 'mobile' | 'api';
  tech: string[];
  features: string[];
}

interface ProjectStory {
  id: string;
  company: string;
  industry: string;
  location: { x: number; y: number };
  size: 'small' | 'medium' | 'large';
  project: {
    type: string;
    duration: string;
    impact: string;
  };
  quote: string;
}

interface TechStack {
  category: string;
  technologies: {
    name: string;
    icon: string;
    description: string;
    popularity: number;
  }[];
}

const CustomSoftwareLanding: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>('web');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    satisfaction: 0,
    timeToMarket: 0
  });
  
  // Tech Stack State
  const [activeTechCategory, setActiveTechCategory] = useState<string>('frontend');
  
  // Success Stories State
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredStory, setHoveredStory] = useState<string | null>(null);
  
  // Before/After Slider State
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50);

  // Animation für die Statistiken
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        projects: 150,
        satisfaction: 98,
        timeToMarket: 60
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const demos: SoftwareDemo[] = [
    {
      id: 'web',
      title: 'Enterprise Web Applications',
      description: 'Moderne, skalierbare Webanwendungen die Ihre Geschäftsprozesse digitalisieren.',
      type: 'web',
      tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
      features: [
        'Progressive Web App (PWA)',
        'Real-time Daten-Synchronisation',
        'Multi-Tenant Architektur',
        'Advanced User Management',
        'API-First Design',
        'Mobile-responsive Design'
      ]
    },
    {
      id: 'mobile',
      title: 'Native Mobile Apps',
      description: 'High-Performance Apps für iOS und Android mit nativer Benutzerererfahrung.',
      type: 'mobile',
      tech: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
      features: [
        'Cross-Platform Development',
        'Offline-First Funktionalität',
        'Push-Notifications',
        'Biometric Authentication',
        'Native Performance',
        'App Store Optimierung'
      ]
    },
    {
      id: 'api',
      title: 'Backend & API Services',
      description: 'Robuste Backend-Systeme und APIs die Ihre Systeme nahtlos verbinden.',
      type: 'api',
      tech: ['Node.js', 'Python', 'Docker', 'Kubernetes'],
      features: [
        'Microservices Architektur',
        'Auto-Scaling Infrastructure',
        'GraphQL & REST APIs',
        'Real-time WebSockets',
        'Database Optimization',
        'Security Best Practices'
      ]
    }
  ];

  const techStacks: TechStack[] = [
    {
      category: 'frontend',
      technologies: [
        { name: 'React', icon: '⚛️', description: 'Modern UI Framework', popularity: 95 },
        { name: 'Next.js', icon: '▲', description: 'Full-Stack React Framework', popularity: 90 },
        { name: 'TypeScript', icon: '🔷', description: 'Type-Safe JavaScript', popularity: 85 },
        { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-First CSS', popularity: 80 }
      ]
    },
    {
      category: 'backend',
      technologies: [
        { name: 'Node.js', icon: '🟢', description: 'JavaScript Runtime', popularity: 90 },
        { name: 'Python', icon: '🐍', description: 'Versatile Programming Language', popularity: 85 },
        { name: 'PostgreSQL', icon: '🐘', description: 'Advanced SQL Database', popularity: 80 },
        { name: 'Redis', icon: '🔴', description: 'In-Memory Data Store', popularity: 75 }
      ]
    },
    {
      category: 'cloud',
      technologies: [
        { name: 'AWS', icon: '☁️', description: 'Amazon Web Services', popularity: 90 },
        { name: 'Docker', icon: '🐳', description: 'Containerization Platform', popularity: 85 },
        { name: 'Kubernetes', icon: '⚙️', description: 'Container Orchestration', popularity: 75 },
        { name: 'Vercel', icon: '▲', description: 'Deployment Platform', popularity: 80 }
      ]
    }
  ];

  const projectStories: ProjectStory[] = [
    {
      id: 'munich',
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      location: { x: 620, y: 520 },
      size: 'medium',
      project: {
        type: 'Patienten-Management System',
        duration: '8 Monate',
        impact: '70% weniger Papierkram'
      },
      quote: 'Die Software hat unsere Praxis revolutioniert - alles läuft jetzt digital und effizient!'
    },
    {
      id: 'hamburg',
      company: 'LogiFlow GmbH',
      industry: 'Logistics',
      location: { x: 480, y: 180 },
      size: 'large',
      project: {
        type: 'Fleet Management App',
        duration: '12 Monate',
        impact: '40% Kosteneinsparung'
      },
      quote: 'Real-time Tracking und automatische Routenoptimierung - ein Gamechanger für unser Business!'
    },
    {
      id: 'berlin',
      company: 'EduTech Startup',
      industry: 'Education',
      location: { x: 680, y: 280 },
      size: 'small',
      project: {
        type: 'E-Learning Platform',
        duration: '6 Monate',
        impact: '10x mehr User'
      },
      quote: 'Von MVP zu marktführender Plattform in nur 6 Monaten - incredible!'
    },
    {
      id: 'cologne',
      company: 'RetailMax',
      industry: 'Retail',
      location: { x: 350, y: 340 },
      size: 'medium',
      project: {
        type: 'Inventory Management',
        duration: '5 Monate',
        impact: '30% weniger Überbestand'
      },
      quote: 'KI-gestütztes Bestandsmanagement - wir wissen immer genau, was wir brauchen!'
    },
    {
      id: 'frankfurt',
      company: 'FinanceFlow',
      industry: 'Finance',
      location: { x: 420, y: 380 },
      size: 'large',
      project: {
        type: 'Trading Platform',
        duration: '10 Monate',
        impact: 'Sub-second Trading'
      },
      quote: 'High-frequency Trading mit microsecond precision - technische Perfektion!'
    },
    {
      id: 'stuttgart',
      company: 'AutoInnovate',
      industry: 'Automotive',
      location: { x: 480, y: 460 },
      size: 'large',
      project: {
        type: 'IoT Production System',
        duration: '14 Monate',
        impact: '25% höhere Produktivität'
      },
      quote: 'Industry 4.0 in Perfektion - jede Maschine ist smart und vernetzt!'
    }
  ];

  const industries = [
    { id: 'all', name: 'Alle Branchen' },
    { id: 'Healthcare', name: 'Healthcare' },
    { id: 'Logistics', name: 'Logistik' },
    { id: 'Education', name: 'Bildung' },
    { id: 'Retail', name: 'Retail' },
    { id: 'Finance', name: 'Fintech' },
    { id: 'Automotive', name: 'Automotive' }
  ];

  const filteredStories = activeFilter === 'all' 
    ? projectStories 
    : projectStories.filter(story => story.industry === activeFilter);

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "60% schneller am Markt",
      description: "Agile Entwicklung mit MVP-Ansatz für schnelle Markteinführung"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Enterprise-Security",
      description: "Bank-Level Sicherheit mit modernsten Verschlüsselungsstandards"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Skalierbare Architektur",
      description: "Cloud-native Lösungen die mit Ihrem Business mitwachsen"
    }
  ];

  const features = [
    "Agile Entwicklung mit 2-Wochen Sprints",
    "Continuous Integration & Deployment",
    "24/7 Monitoring und Support",
    "Automatisierte Testing & QA",
    "Cloud-native & Container-ready",
    "GDPR-konforme Datenschutz-Architektur"
  ];

  const testimonials = [
    {
      name: "Dr. Andreas Weber",
      company: "MedTech Solutions",
      role: "CTO",
      content: "PrintzDigital hat unsere Vision in eine hochperformante Software umgesetzt. Die Qualität übertrifft alle Erwartungen.",
      rating: 5
    },
    {
      name: "Sandra Klein",
      company: "EduTech Startup",
      role: "Gründerin",
      content: "Von der ersten Idee bis zum fertigen Produkt - das Team hat uns durch jeden Schritt begleitet. Einfach genial!",
      rating: 5
    },
    {
      name: "Michael Torres",
      company: "LogiFlow GmbH",
      role: "Head of IT",
      content: "Komplexe Logistik-Algorithmen perfekt umgesetzt. Die App läuft seit Monaten ohne einen einzigen Ausfall.",
      rating: 5
    }
  ];

  const renderDemo = (demo: SoftwareDemo) => {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-bold">{demo.title}</h4>
            <div className="flex items-center space-x-2">
              {demo.type === 'web' && <Globe className="w-5 h-5" />}
              {demo.type === 'mobile' && <Smartphone className="w-5 h-5" />}
              {demo.type === 'api' && <Server className="w-5 h-5" />}
            </div>
          </div>
          
          {/* Mock Interface */}
          <div className="bg-black rounded-lg p-4 font-mono text-sm">
            {demo.type === 'web' && (
              <div className="space-y-2">
                <div className="text-blue-400">// React Component</div>
                <div className="text-white">const <span className="text-yellow-400">Dashboard</span> = () =&gt; {`{`}</div>
                <div className="text-white ml-4">const [data, setData] = <span className="text-green-400">useState</span>();</div>
                <div className="text-white ml-4">return (</div>
                <div className="text-white ml-8">&lt;<span className="text-red-400">div</span> className="<span className="text-green-400">dashboard</span>"&gt;</div>
                <div className="text-white ml-12">&lt;<span className="text-red-400">Chart</span> data={`{data}`} /&gt;</div>
                <div className="text-white ml-8">&lt;/<span className="text-red-400">div</span>&gt;</div>
                <div className="text-white ml-4">);</div>
                <div className="text-white">{`}`};</div>
              </div>
            )}
            
            {demo.type === 'mobile' && (
              <div className="space-y-2">
                <div className="text-blue-400">// React Native Screen</div>
                <div className="text-white">const <span className="text-yellow-400">HomeScreen</span> = () =&gt; {`{`}</div>
                <div className="text-white ml-4">return (</div>
                <div className="text-white ml-8">&lt;<span className="text-red-400">View</span> style={`{styles.container}`}&gt;</div>
                <div className="text-white ml-12">&lt;<span className="text-red-400">TouchableOpacity</span></div>
                <div className="text-white ml-16">onPress={`{handlePress}`}&gt;</div>
                <div className="text-white ml-16">&lt;<span className="text-red-400">Text</span>&gt;Native Button&lt;/<span className="text-red-400">Text</span>&gt;</div>
                <div className="text-white ml-12">&lt;/<span className="text-red-400">TouchableOpacity</span>&gt;</div>
                <div className="text-white ml-8">&lt;/<span className="text-red-400">View</span>&gt;</div>
                <div className="text-white ml-4">);</div>
                <div className="text-white">{`}`};</div>
              </div>
            )}
            
            {demo.type === 'api' && (
              <div className="space-y-2">
                <div className="text-blue-400">// Express.js API</div>
                <div className="text-white">app.<span className="text-yellow-400">get</span>('<span className="text-green-400">/api/users</span>', async (req, res) =&gt; {`{`}</div>
                <div className="text-white ml-4">const users = await <span className="text-yellow-400">User</span>.<span className="text-green-400">findAll</span>();</div>
                <div className="text-white ml-4">res.<span className="text-yellow-400">json</span>({`{ data: users }`});</div>
                <div className="text-white">{`}`});</div>
                <div className="text-gray-400 mt-2">// GraphQL Resolver</div>
                <div className="text-white">Query: {`{`}</div>
                <div className="text-white ml-4">users: () =&gt; <span className="text-yellow-400">UserService</span>.<span className="text-green-400">getAll</span>()</div>
                <div className="text-white">{`}`}</div>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{demo.description}</p>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-3">Technology Stack:</h5>
            <div className="flex flex-wrap gap-2">
              {demo.tech.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-3">Key Features:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {demo.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Entwicklungszeit: <span className="font-semibold">8-16 Wochen</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Demo anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Ihre Vision wird zu
                <span className="text-blue-600"> innovativer Software</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Maßgeschneiderte Software-Lösungen für KMUs. Von der ersten Idee bis zur 
                fertigen Anwendung - wir entwickeln, was andere für unmöglich halten.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                  <Play className="w-5 h-5 inline mr-2" />
                  Projekt besprechen
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all">
                  Portfolio ansehen
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
                Von der Idee zum Code: Unsere Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Entdecken Sie unsere verschiedenen Entwicklungsbereiche. Jede Lösung wird 
                individuell auf Ihre Anforderungen zugeschnitten.
              </p>
            </div>

            {/* Demo Tabs */}
            <div className="flex flex-wrap justify-center mb-8 gap-4">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                    activeDemo === demo.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {demo.type === 'web' && <Globe className="w-5 h-5" />}
                  {demo.type === 'mobile' && <Smartphone className="w-5 h-5" />}
                  {demo.type === 'api' && <Server className="w-5 h-5" />}
                  <span>{demo.title}</span>
                </button>
              ))}
            </div>

            {/* Active Demo */}
            <div className="max-w-4xl mx-auto">
              {renderDemo(demos.find(demo => demo.id === activeDemo)!)}
            </div>
          </div>
        </section>

        {/* Industry Quick Wins Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Branchen-spezifische Quick Wins für Braunschweig & Region
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Messbare Erfolge in 30-90 Tagen. Jede Branche hat spezielle Herausforderungen - 
                wir liefern maßgeschneiderte Lösungen mit garantiertem ROI.
              </p>
            </div>

            {/* Industry Selector */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {[
                { id: 'handwerk', name: 'Handwerk', icon: '🔧', color: 'bg-orange-500' },
                { id: 'einzelhandel', name: 'Einzelhandel', icon: '🏪', color: 'bg-blue-500' },
                { id: 'gastronomie', name: 'Gastronomie', icon: '🍽️', color: 'bg-red-500' },
                { id: 'dienstleistung', name: 'Dienstleistung', icon: '🏥', color: 'bg-purple-500' }
              ].map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveFilter(industry.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeFilter === industry.id
                      ? `${industry.color} text-white shadow-xl transform scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-102 shadow-md'
                  }`}
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <span className="text-lg">{industry.name}</span>
                </button>
              ))}
            </div>

            {/* Quick Wins Content */}
            <div className="max-w-6xl mx-auto">
              {/* Handwerk */}
              {activeFilter === 'handwerk' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-300">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Terminbuchung-App</h3>
                      <div className="bg-orange-100 p-3 rounded-full">
                        <span className="text-2xl">📅</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">40% weniger</div>
                    <div className="text-gray-600 mb-4">Telefonate durch Selbstbuchung</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>24/7 Online-Terminbuchung</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Automatische SMS-Erinnerungen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Kalender-Synchronisation</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-orange-50 rounded-lg">
                      <div className="text-sm text-orange-800">
                        <strong>Beispiel:</strong> Elektro Müller spart 2h täglich am Telefon
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Material-Tracker</h3>
                      <div className="bg-green-100 p-3 rounded-full">
                        <span className="text-2xl">📦</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">20% weniger</div>
                    <div className="text-gray-600 mb-4">Materialkosten durch Optimierung</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Automatisches Bestandsmanagement</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Lieferanten-Preisvergleich</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Verschwendung vermeiden</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-800">
                        <strong>ROI:</strong> €1,200/Monat Einsparung
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Kunden-Portal</h3>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="text-2xl">👥</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">60% mehr</div>
                    <div className="text-gray-600 mb-4">Folgeaufträge durch Bindung</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Projekt-Status live verfolgen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Wartungserinnerungen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Digitale Rechnungen</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-blue-800">
                        <strong>Erfolg:</strong> Mehr Stammkunden, weniger Akquise
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Einzelhandel */}
              {activeFilter === 'einzelhandel' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-300">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Click & Collect</h3>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="text-2xl">🛒</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">30% mehr</div>
                    <div className="text-gray-600 mb-4">Umsatz durch Online-Verknüpfung</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Online bestellen, vor Ort abholen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Bestandscheck in Echtzeit</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Kontaktloser Service</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-blue-800">
                        <strong>Boost:</strong> Perfekt für lokale Geschäfte in BS
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Kunden-App</h3>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <span className="text-2xl">📱</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">50% mehr</div>
                    <div className="text-gray-600 mb-4">Stammkunden durch Bonusprogramm</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Digitale Treuepunkte</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Personalisierte Angebote</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Push-Benachrichtigungen</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                      <div className="text-sm text-purple-800">
                        <strong>Impact:</strong> Höhere Einkaufsfrequenz & Warenkörbe
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Inventory-KI</h3>
                      <div className="bg-green-100 p-3 rounded-full">
                        <span className="text-2xl">🤖</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">25% weniger</div>
                    <div className="text-gray-600 mb-4">Überbestand durch smarte Prognose</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>KI-Nachfrageprognose</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Automatische Bestellvorschläge</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Saisonale Anpassung</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-800">
                        <strong>Ersparnis:</strong> €5,000+ weniger totes Kapital
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gastronomie */}
              {activeFilter === 'gastronomie' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-300">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">QR-Menü Digital</h3>
                      <div className="bg-red-100 p-3 rounded-full">
                        <span className="text-2xl">📱</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">35% höher</div>
                    <div className="text-gray-600 mb-4">Gewinnmarge durch Direktbestellung</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Kontaktlose Bestellung</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Mehrsprachige Menüs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Upselling-Vorschläge</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-red-50 rounded-lg">
                      <div className="text-sm text-red-800">
                        <strong>Perfect für:</strong> TU-Campus & Innenstadt BS
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Eigene Lieferung</h3>
                      <div className="bg-green-100 p-3 rounded-full">
                        <span className="text-2xl">🚚</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">€500-1,500</div>
                    <div className="text-gray-600 mb-4">Gespart pro Monat (keine Lieferando-Gebühren)</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Eigene Liefer-App</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>GPS-Tracking für Kunden</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Optimierte Routen</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-800">
                        <strong>ROI:</strong> Amortisation in 3-6 Monaten
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Social Media Bot</h3>
                      <div className="bg-orange-100 p-3 rounded-full">
                        <span className="text-2xl">📸</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">3x mehr</div>
                    <div className="text-gray-600 mb-4">Online-Sichtbarkeit durch Automation</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Täglich automatische Posts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Instagram Stories Generator</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Review-Management</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-orange-50 rounded-lg">
                      <div className="text-sm text-orange-800">
                        <strong>Ziel:</strong> Mehr Walk-ins & Online-Bestellungen
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dienstleistung */}
              {activeFilter === 'dienstleistung' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in slide-in-from-bottom-4 duration-300">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Online-Termine</h3>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <span className="text-2xl">🗓️</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">50% weniger</div>
                    <div className="text-gray-600 mb-4">Admin-Aufwand durch Automatisierung</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>24/7 Online-Buchung</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Automatische Bestätigungen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>No-Show Reduktion</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                      <div className="text-sm text-purple-800">
                        <strong>Ideal für:</strong> Ärzte, Anwälte, Berater in BS
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Smart CRM</h3>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="text-2xl">🎯</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">40% mehr</div>
                    <div className="text-gray-600 mb-4">Upselling durch intelligente Analyse</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Kunden-Lifecycle Tracking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Automatische Empfehlungen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Cross-Selling Alerts</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm text-blue-800">
                        <strong>Ergebnis:</strong> Höherer Customer Lifetime Value
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Follow-Up Automation</h3>
                      <div className="bg-green-100 p-3 rounded-full">
                        <span className="text-2xl">✉️</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">25% mehr</div>
                    <div className="text-gray-600 mb-4">Kundenbindung durch intelligente Nachfass-Emails</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Automatische Zufriedenheits-Checks</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Terminerinnerungen</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Personalisierte Newsletter</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-green-800">
                        <strong>Benefit:</strong> Weniger verlorene Kunden
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Call to Action für Quick Wins */}
              <div className="text-center mt-12">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Bereit für Ihren Quick Win?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Kostenloses 30-Minuten Gespräch: Wir analysieren Ihr Business und zeigen 
                    Ihnen konkrete Verbesserungen, die Sie sofort umsetzen können.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                      🚀 Kostenlose Quick-Win Analyse
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      📞 Rückruf vereinbaren
                    </button>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    ✓ Keine Verpflichtung ✓ Sofort umsetzbare Tipps ✓ ROI-Garantie
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Showcase */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Modernste Technologien, bewährte Praktiken
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir nutzen die neuesten und stabilsten Technologien, um zukunftssichere 
                Software zu entwickeln, die mit Ihrem Business skaliert.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center mb-8 gap-4">
                {techStacks.map((stack) => (
                  <button
                    key={stack.category}
                    onClick={() => setActiveTechCategory(stack.category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                      activeTechCategory === stack.category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {stack.category}
                  </button>
                ))}
              </div>

              {/* Technology Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStacks
                  .find(stack => stack.category === activeTechCategory)
                  ?.technologies.map((tech, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      <div className="text-center">
                        <div className="text-4xl mb-3">{tech.icon}</div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{tech.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">{tech.description}</p>
                        
                        {/* Popularity Bar */}
                        <div className="mb-3">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Beliebtheit</span>
                            <span>{tech.popularity}%</span>
                          </div>
                          <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${tech.popularity}%` }}
                            />
                          </div>
                        </div>
                        
                        <div className="text-xs text-blue-600 font-medium">
                          {tech.popularity >= 90 ? 'Industry Standard' : 
                           tech.popularity >= 80 ? 'Sehr beliebt' : 'Emerging Tech'}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Erfolgreiche Projekte in ganz Deutschland
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Von Startups bis zu etablierten Unternehmen - entdecken Sie, wie wir 
                Visionen in erfolgreiche Software-Produkte verwandelt haben.
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
                {/* Germany Map SVG */}
                <svg viewBox="0 0 800 600" className="w-full h-96 md:h-[500px]">
                  {/* Germany outline */}
                  <path
                    d="M 300 120 L 320 100 L 350 105 L 380 100 L 420 110 L 450 105 L 480 115 L 520 120 L 550 110 L 580 115 L 610 125 L 640 130 L 670 140 L 690 160 L 700 180 L 710 200 L 720 230 L 715 260 L 705 290 L 695 320 L 685 350 L 675 380 L 665 410 L 650 440 L 630 460 L 610 475 L 580 485 L 550 490 L 520 485 L 490 480 L 460 475 L 430 470 L 400 460 L 370 450 L 350 440 L 330 420 L 320 400 L 310 380 L 305 360 L 300 340 L 295 320 L 290 300 L 285 280 L 280 260 L 275 240 L 270 220 L 275 200 L 280 180 L 285 160 L 290 140 L 295 130 Z"
                    fill="#f3f4f6"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                  
                  {/* Project Markers */}
                  {filteredStories.map((story) => (
                    <g key={story.id}>
                      <circle
                        cx={story.location.x}
                        cy={story.location.y}
                        r={story.size === 'large' ? 12 : story.size === 'medium' ? 10 : 8}
                        fill={
                          story.size === 'large' ? '#7c3aed' :
                          story.size === 'medium' ? '#3b82f6' : '#10b981'
                        }
                        stroke="white"
                        strokeWidth="3"
                        className="cursor-pointer transition-all duration-300 hover:scale-110 drop-shadow-lg"
                        onMouseEnter={() => setHoveredStory(story.id)}
                        onMouseLeave={() => setHoveredStory(null)}
                      />
                      
                      {/* Code icon overlay */}
                      <text
                        x={story.location.x}
                        y={story.location.y + 2}
                        textAnchor="middle"
                        className="text-xs fill-white pointer-events-none font-bold"
                      >
                        {'</>'}
                      </text>
                      
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
                      
                      {/* Hover animation */}
                      {hoveredStory === story.id && (
                        <>
                          <circle
                            cx={story.location.x}
                            cy={story.location.y}
                            r={18}
                            fill="none"
                            stroke={
                              story.size === 'large' ? '#7c3aed' :
                              story.size === 'medium' ? '#3b82f6' : '#10b981'
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
                              story.size === 'large' ? '#7c3aed' :
                              story.size === 'medium' ? '#3b82f6' : '#10b981'
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

                {/* Project Tooltip */}
                {hoveredStory && (
                  <div className="absolute bottom-8 left-8 right-8 bg-white rounded-lg shadow-xl p-6 border border-gray-200 z-10 fade-in-up">
                    {(() => {
                      const story = projectStories.find(s => s.id === hoveredStory);
                      if (!story) return null;
                      return (
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-bold text-gray-800">{story.company}</h4>
                              <p className="text-sm text-gray-600">{story.industry}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-blue-600">{story.project.type}</div>
                              <div className="text-sm text-gray-600">{story.project.duration}</div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {story.project.impact}
                            </span>
                          </div>
                          <p className="text-gray-700 italic">"{story.quote}"</p>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span>Startups & kleine Teams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span>Mittelständische Unternehmen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <span>Enterprise Kunden</span>
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
                Legacy vs. Modern: Sehen Sie den Unterschied
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Von veralteten, wartungsintensiven Systemen zu modernen, 
                skalierbaren Architekturen - erleben Sie die Transformation.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  {/* Before State - Legacy */}
                  <div 
                    className="absolute inset-0 transition-all duration-300 ease-in-out"
                    style={{ 
                      clipPath: `polygon(0 0, ${beforeAfterPosition}% 0, ${beforeAfterPosition}% 100%, 0 100%)` 
                    }}
                  >
                    <div className="w-full h-full bg-red-50 p-8 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-red-700 mb-2">VORHER: Legacy Software</h3>
                        <p className="text-red-600">Wartungsintensive, veraltete Systeme bremsen Ihr Business aus</p>
                      </div>
                      
                      {/* Legacy System representation */}
                      <div className="flex-1 space-y-4">
                        <div className="bg-white border-2 border-red-200 rounded p-4">
                          <div className="text-sm font-medium text-red-700 mb-2">Legacy Monolith (PHP 5.6)</div>
                          <div className="font-mono text-xs text-red-600 space-y-1">
                            <div>⚠️ Keine Updates seit 3 Jahren</div>
                            <div>⚠️ Sicherheitslücken bekannt</div>
                            <div>⚠️ Serverausfälle regelmäßig</div>
                            <div>⚠️ Mobile Version nicht existent</div>
                          </div>
                        </div>
                        
                        <div className="bg-white border-2 border-red-200 rounded p-4">
                          <div className="text-sm font-medium text-red-700 mb-2">Manuelle Prozesse</div>
                          <div className="text-xs text-red-600 space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>Excel-Listen für alles</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>Email-Chaos bei Updates</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>Backup? Was ist das?</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-100 border-2 border-yellow-300 rounded p-3">
                          <div className="text-sm font-bold text-yellow-700">Kostenexplosion:</div>
                          <ul className="text-xs text-yellow-600 mt-1 space-y-1">
                            <li>• €5,000/Monat für Server-Wartung</li>
                            <li>• 40% der Arbeitszeit für Bugfixes</li>
                            <li>• Neue Features unmöglich</li>
                            <li>• Kundenverlust durch schlechte UX</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* After State - Modern */}
                  <div 
                    className="absolute inset-0 transition-all duration-300 ease-in-out"
                    style={{ 
                      clipPath: `polygon(${beforeAfterPosition}% 0, 100% 0, 100% 100%, ${beforeAfterPosition}% 100%)` 
                    }}
                  >
                    <div className="w-full h-full bg-green-50 p-8 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-green-700 mb-2">NACHHER: Modern Architecture</h3>
                        <p className="text-green-600">Cloud-native, skalierbar und zukunftssicher</p>
                      </div>
                      
                      {/* Modern System representation */}
                      <div className="flex-1 space-y-4">
                        <div className="bg-white border-2 border-green-200 rounded p-4 shadow-sm">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-semibold text-green-700">Microservices Architecture</h4>
                            <span className="text-xs text-green-600">🟢 99.9% Uptime</span>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">React</div>
                              <div className="text-xs text-gray-600">Frontend</div>
                              <div className="text-xs text-green-600">✓ Mobile-First</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-600">Node.js</div>
                              <div className="text-xs text-gray-600">API Layer</div>
                              <div className="text-xs text-blue-600">✓ Auto-Scale</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">PostgreSQL</div>
                              <div className="text-xs text-gray-600">Database</div>
                              <div className="text-xs text-purple-600">✓ Encrypted</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border-2 border-green-200 rounded p-4 shadow-sm">
                          <h4 className="font-semibold text-green-700 mb-2">Automation & CI/CD:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span>Automated Testing (95% Coverage)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>Zero-Downtime Deployments</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span>24/7 Monitoring & Alerts</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span>Automatic Backup & Recovery</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-100 border-2 border-blue-300 rounded p-3">
                          <div className="text-sm font-bold text-blue-700">ROI-Explosion:</div>
                          <ul className="text-xs text-blue-600 mt-1 space-y-1">
                            <li>• 90% weniger Server-Kosten</li>
                            <li>• 10x schnellere Feature-Entwicklung</li>
                            <li>• 99.9% Uptime garantiert</li>
                            <li>• Mobile-First = mehr Kunden</li>
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
                      <Code2 className="w-4 h-4 text-gray-600" />
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
                    LEGACY
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-30">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    MODERN
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Ziehen Sie den Schieberegler um die technische Revolution zu erleben
                </p>
                <button className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                  Meine Software modernisieren
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Entwicklung die funktioniert, Support der überzeugt
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Von der ersten Codezeile bis zum langfristigen Support - 
                wir begleiten Sie durch den gesamten Software-Lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Das sagen unsere Entwicklungspartner
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
        <section id="pricing" className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Investition in Ihre digitale Zukunft
              </h2>
              <p className="text-xl text-gray-600">
                Transparente Preise, flexible Zahlungsmodelle, langfristige Partnerschaften.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* MVP Package */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">MVP Startup</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  €15,000<span className="text-lg text-gray-600"> - €30,000</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>MVP in 8-12 Wochen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Web oder Mobile App</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Core Features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Cloud Deployment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>3 Monate Support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  MVP planen
                </button>
              </div>

              {/* Enterprise Package */}
              <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Am beliebtesten
                </div>
                <h3 className="text-2xl font-bold mb-4">Business Solution</h3>
                <div className="text-4xl font-bold mb-6">
                  €50,000<span className="text-lg opacity-80"> - €150,000</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Full-Stack Application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Multi-Platform (Web + Mobile)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Advanced Features & Integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Enterprise Security</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>12 Monate Support & Updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Dedicated Developer</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Projekt besprechen
                </button>
              </div>

              {/* Enterprise Package */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise Scale</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">
                  Individual<span className="text-lg text-gray-600">preis</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Complex Enterprise Software</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Legacy System Migration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Custom Integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>Dedicated Team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span>24/7 Enterprise Support</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Enterprise anfragen
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Alle Pakete beinhalten: Code-Dokumentation, Testing, Deployment & Training
              </p>
              <button className="text-blue-600 font-semibold hover:underline">
                Kostenlose Beratung vereinbaren →
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihre Software-Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Idee besprechen. In einem kostenlosen Strategiegespräch 
              entwickeln wir gemeinsam den perfekten Entwicklungsplan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                <Code2 className="w-5 h-5 inline mr-2" />
                Kostenloses Strategiegespräch
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all">
                Portfolio & Referenzen
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              ✓ Unverbindlich ✓ 45 Min. Beratung ✓ Konkrete Roadmap ✓ Transparent pricing
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style jsx>{`
        /* Custom animations for smoother transitions */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.3s ease-out;
        }

        /* Smooth slider styling */
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }

        .slider::-moz-range-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default CustomSoftwareLanding;
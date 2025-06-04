'use client';

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
  ExternalLink,
  Github,
  ArrowRight,
  Monitor,
  Server,
  Cloud,
  Lock,
  Users,
  TrendingUp,
  Eye,
  Calendar,
  Target,
  Award,
  Filter,
  Search,
  ChevronDown,
  Heart,
  MessageCircle,
  Share2,
  X
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'api' | 'enterprise' | 'website' | 'ecommerce';
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  technologies: string[];
  timeline: string;
  team: string;
  featured: boolean;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    clientQuote: string;
    clientName: string;
    clientRole: string;
    beforeAfter: {
      before: string[];
      after: string[];
    };
  };
}

interface TechShowcase {
  name: string;
  icon: string;
  category: string;
  description: string;
  projects: number;
  expertise: number;
}

const PortfolioClient: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    success: 0,
    years: 0
  });

  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        projects: 7,
        clients: 6,
        success: 100,
        years: 1
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      id: 'medtech-platform',
      title: 'MedTech Solutions Platform',
      subtitle: 'Digitalisierung einer Arztpraxis',
      category: 'web',
      industry: 'Healthcare',
      description: 'Vollständige Digitalisierung einer Arztpraxis mit 2,000+ Patienten. Cloud-basierte Lösung mit Real-time Synchronisation und DSGVO-konformer Architektur.',
      challenge: 'Komplexe Papierprozesse, keine digitale Patientenakte, ineffiziente Terminverwaltung, hoher Zeitaufwand für administrative Tätigkeiten.',
      solution: 'Progressive Web App mit offline-Funktionalität, automatisierte Workflows, digitale Patientenakte und nahtlose Integration bestehender Systeme.',
      results: [
        { metric: 'Zeitersparnis', value: '60%', description: 'weniger Admin-Aufwand pro Tag' },
        { metric: 'Patientenzufriedenheit', value: '92%', description: 'positive Bewertungen' },
        { metric: 'Kostenreduktion', value: '€2,400', description: 'monatliche Einsparung' },
        { metric: 'Performance', value: '99.5%', description: 'System-Verfügbarkeit' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Vercel'],
      timeline: '4 Monate',
      team: '2 Entwickler',
      featured: true,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
      liveUrl: 'https://medtech-demo.printzonline.de',
      caseStudy: {
        clientQuote: 'PrintzDigital hat unsere Praxis komplett digitalisiert. Wir sparen täglich 2 Stunden und unsere Patienten lieben das neue System.',
        clientName: 'Dr. Andreas Weber',
        clientRole: 'Praxisinhaber MedTech Solutions',
        beforeAfter: {
          before: ['Papierbasierte Patientenakten', 'Manuelle Terminbuchung', 'Excel-Listen für Abrechnung', 'Keine Backup-Strategie'],
          after: ['Digitale Patientenakte mit Suchfunktion', '24/7 Online-Terminbuchung', 'Automatisierte Abrechnung', 'Cloud-basiert mit Auto-Backup']
        }
      }
    },
    {
      id: 'restaurant-system',
      title: 'Restaurant Management System',
      subtitle: 'Komplette Digitalisierung eines Restaurants',
      category: 'web',
      industry: 'Gastronomie',
      description: 'Vollständiges Restaurant-Management-System mit QR-Code Menüs, Online-Bestellungen, Küchen-Display und Kassensystem-Integration.',
      challenge: 'Papierkarten, chaotische Bestellungen, keine Online-Präsenz, hohe Personalkosten, Kommunikationsprobleme zwischen Service und Küche.',
      solution: 'QR-Code basierte digitale Speisekarte, Online-Bestellsystem, Küchen-Display-System und integrierte Kassenlösung mit Echtzeit-Synchronisation.',
      results: [
        { metric: 'Bestellungen', value: '+45%', description: 'mehr Online-Bestellungen' },
        { metric: 'Effizienz', value: '35%', description: 'schnellere Abwicklung' },
        { metric: 'Personalkosten', value: '€1,800', description: 'monatliche Einsparung' },
        { metric: 'Kundenzufriedenheit', value: '88%', description: 'positive Bewertungen' }
      ],
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'],
      timeline: '3 Monate',
      team: '2 Entwickler',
      featured: true,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&auto=format',
      liveUrl: 'https://restaurant-demo.printzonline.de',
      caseStudy: {
        clientQuote: 'Das System hat unser Restaurant revolutioniert. Weniger Stress, mehr Umsatz und glücklichere Gäste - was will man mehr?',
        clientName: 'Maria Rossi',
        clientRole: 'Inhaberin Ristorante Bella Vista',
        beforeAfter: {
          before: ['Papier-Speisekarten', 'Chaotische Bestellnotizen', 'Nur Vor-Ort Service', 'Hohe Fehlerquote'],
          after: ['QR-Code Digital-Menüs', 'Digitale Bestellübertragung', 'Online-Bestellungen & Lieferung', 'Fehlerfreie Kommunikation']
        }
      }
    },
    {
      id: 'anwaltskanzlei-website',
      title: 'Moderne Anwaltskanzlei-Website',
      subtitle: 'Vertrauenswürdige Online-Präsenz',
      category: 'website',
      industry: 'Rechtsberatung',
      description: 'Professionelle Website für eine Anwaltskanzlei mit Online-Terminbuchung, Mandantenportal und DSGVO-konformen Kontaktformularen.',
      challenge: 'Veraltete Website, keine Online-Terminbuchung, schlechte Mobile-Darstellung, wenig Vertrauen bei Neukunden.',
      solution: 'Modernes, vertrauenserweckendes Design mit Online-Terminbuchung, Mandantenbereich und SEO-Optimierung für lokale Suchanfragen.',
      results: [
        { metric: 'Anfragen', value: '+180%', description: 'mehr Kontaktanfragen' },
        { metric: 'Mobile Traffic', value: '78%', description: 'der Webseitenbesucher' },
        { metric: 'SEO Ranking', value: 'Top 3', description: 'bei Google für "Anwalt Braunschweig"' },
        { metric: 'Conversion Rate', value: '12%', description: 'von Besuchern zu Anfragen' }
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Google Analytics'],
      timeline: '3 Wochen',
      team: '1 Entwickler',
      featured: true,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&auto=format',
      liveUrl: 'https://anwaltskanzlei-demo.printzonline.de',
      caseStudy: {
        clientQuote: 'Seit dem Website-Relaunch haben wir dreimal so viele Anfragen. Das moderne Design vermittelt sofort Professionalität und Vertrauen.',
        clientName: 'Dr. Julia Schmidt',
        clientRole: 'Partnerin, Kanzlei Schmidt & Associates',
        beforeAfter: {
          before: ['Veraltetes Design aus 2015', 'Nicht mobiloptimiert', 'Keine Online-Terminbuchung', 'Schlechtes Google-Ranking'],
          after: ['Modernes, responsives Design', 'Mobile-First Ansatz', '24/7 Online-Terminbuchung', 'Top 3 Google-Ranking lokal']
        }
      }
    },
    {
      id: 'handwerker-website',
      title: 'Handwerker-Website mit Konfigurator',
      subtitle: 'Online-Kostenschätzung für Kunden',
      category: 'website',
      industry: 'Handwerk',
      description: 'Website für Elektroinstallationen mit interaktivem Kostenrechner, Projekt-Galerie und direkter WhatsApp-Integration.',
      challenge: 'Kunden wussten nie, was Arbeiten kosten würden. Viele Anfragen waren unqualifiziert. Telefon klingelte ständig.',
      solution: 'Interaktiver Kostenrechner für Standard-Arbeiten, Projekt-Galerie zur Vertrauensbildung und WhatsApp-Chat für schnelle Kommunikation.',
      results: [
        { metric: 'Qualifizierte Anfragen', value: '+250%', description: 'durch Kostenrechner' },
        { metric: 'Telefonanrufe', value: '-60%', description: 'weniger unqualifizierte Anrufe' },
        { metric: 'Conversion Rate', value: '18%', description: 'von Rechner-Nutzung zu Auftrag' },
        { metric: 'Auftragswert', value: '+35%', description: 'höhere durchschnittliche Aufträge' }
      ],
      technologies: ['React', 'Next.js', 'Framer Motion', 'WhatsApp API', 'Netlify'],
      timeline: '4 Wochen',
      team: '1 Entwickler',
      featured: false,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format',
      liveUrl: 'https://elektro-mueller-demo.printzonline.de',
      caseStudy: {
        clientQuote: 'Der Kostenrechner ist genial! Kunden kommen jetzt schon mit realistischen Vorstellungen zu mir. Spart mir täglich 2 Stunden am Telefon.',
        clientName: 'Thomas Müller',
        clientRole: 'Inhaber, Elektro Müller GmbH',
        beforeAfter: {
          before: ['Ständige Preisanfragen am Telefon', 'Unqualifizierte Anfragen', 'Einfache Visitenkarten-Website', 'Keine Projektbeispiele'],
          after: ['Automatischer Kostenrechner', 'Vorqualifizierte Interessenten', 'Professionelle Business-Website', 'Überzeugende Projekt-Galerie']
        }
      }
    },
    {
      id: 'restaurant-website',
      title: 'Restaurant-Website mit Online-Reservierung',
      subtitle: 'Digitale Tischreservierung & Menü',
      category: 'website',
      industry: 'Gastronomie',
      description: 'Ansprechende Restaurant-Website mit Online-Tischreservierung, digitaler Speisekarte und Integration zu Google Maps & Social Media.',
      challenge: 'Veraltete Website, keine Online-Reservierungen, Gäste mussten immer anrufen, schlechte Sichtbarkeit bei Google.',
      solution: 'Moderne Website mit appetitanregenden Bildern, Online-Reservierungssystem und lokaler SEO-Optimierung.',
      results: [
        { metric: 'Online-Reservierungen', value: '65%', description: 'aller Tischbuchungen' },
        { metric: 'Google-Aufrufe', value: '+320%', description: 'mehr Sichtbarkeit' },
        { metric: 'Neue Gäste', value: '+45%', description: 'durch Online-Präsenz' },
        { metric: 'Telefon-Entlastung', value: '70%', description: 'weniger Anrufe für Reservierungen' }
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Google Calendar API', 'Vercel'],
      timeline: '2 Wochen',
      team: '1 Entwickler',
      featured: false,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop&auto=format',
      liveUrl: 'https://ristorante-demo.printzonline.de',
      caseStudy: {
        clientQuote: 'Unsere Gäste lieben die Online-Reservierung! Wir haben viel mehr junge Kunden gewonnen und sind immer ausgebucht.',
        clientName: 'Giuseppe Rossi',
        clientRole: 'Inhaber, Ristorante Bella Vista',
        beforeAfter: {
          before: ['Nur telefonische Reservierungen', 'Veraltete Website', 'Wenig junge Gäste', 'Schlechte Google-Präsenz'],
          after: ['65% Online-Reservierungen', 'Moderne, ansprechende Website', 'Viele neue, junge Gäste', 'Top Google-Ranking lokal']
        }
      }
    },
    {
      id: 'startup-landingpage',
      title: 'SaaS Startup Landing Page',
      subtitle: 'Conversion-optimierte Produktpräsentation',
      category: 'website',
      industry: 'Technology',
      description: 'High-Converting Landing Page für ein SaaS-Startup mit A/B-Testing, Analytics-Integration und Lead-Magneten.',
      challenge: 'Neue Software brauchte überzeugende Online-Präsenz. Hohe Bounce-Rate, wenig Sign-ups, unklare Value Proposition.',
      solution: 'Conversion-optimierte Landing Page mit klarer Value Proposition, Social Proof und strategisch platzierten Call-to-Actions.',
      results: [
        { metric: 'Conversion Rate', value: '28%', description: 'von Besuchern zu Sign-ups' },
        { metric: 'Bounce Rate', value: '-65%', description: 'Verbesserung der Verweildauer' },
        { metric: 'Demo-Anfragen', value: '+400%', description: 'qualifizierte Interessenten' },
        { metric: 'Page Speed', value: '97/100', description: 'Google PageSpeed Score' }
      ],
      technologies: ['React', 'Next.js', 'Framer Motion', 'Analytics', 'Vercel'],
      timeline: '1 Woche',
      team: '1 Entwickler',
      featured: false,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
      liveUrl: 'https://startup-landing-demo.printzonline.de',
      caseStudy: {
        clientQuote: 'Die Landing Page hat unsere Sign-up Rate vervierfacht! Das Design ist clean und die Botschaft kommt klar rüber.',
        clientName: 'Lisa Chen',
        clientRole: 'Co-Founder, TechFlow SaaS',
        beforeAfter: {
          before: ['7% Conversion Rate', 'Hohe Bounce Rate', 'Unklare Botschaft', 'Langsame Ladezeiten'],
          after: ['28% Conversion Rate', 'Niedrige Bounce Rate', 'Kristallklare Value Prop', '97/100 PageSpeed Score']
        }
      }
    },
    {
      id: 'ecommerce-shop',
      title: 'Local E-Commerce Shop',
      subtitle: 'Online-Shop für lokales Geschäft',
      category: 'ecommerce',
      industry: 'Retail',
      description: 'Vollständiger Online-Shop für einen lokalen Buchladen mit Click & Collect, Lagerbestandssynchronisation und lokalem Lieferservice.',
      challenge: 'Corona-Lockdown bedrohte lokalen Buchladen. Keine Online-Verkäufe, Kunden wichen zu Amazon ab.',
      solution: 'Schneller Online-Shop mit Click & Collect, lokaler Lieferung am selben Tag und persönlicher Beratung via Chat.',
      results: [
        { metric: 'Online-Umsatz', value: '40%', description: 'des Gesamtumsatzes' },
        { metric: 'Kundenstamm', value: '+85%', description: 'neue Online-Kunden' },
        { metric: 'Lieferzeit', value: '2-4h', description: 'Same-Day Delivery lokal' },
        { metric: 'Stammkunden', value: '+60%', description: 'durch persönlichen Service' }
      ],
      technologies: ['Shopify', 'JavaScript', 'CSS', 'Payment APIs', 'Google Maps'],
      timeline: '3 Wochen',
      team: '1 Entwickler',
      featured: false,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&auto=format',
      liveUrl: 'https://buchhandlung-demo.printzonline.de',
      caseStudy: {
        clientQuote: 'Der Online-Shop hat uns gerettet! Wir verkaufen jetzt mehr Bücher als vor Corona und haben viele neue Stammkunden gewonnen.',
        clientName: 'Petra Wagner',
        clientRole: 'Inhaberin, Buchhandlung Wagner',
        beforeAfter: {
          before: ['Nur Ladenverkauf', 'Kunden gingen zu Amazon', 'Corona-bedingte Umsatzeinbrüche', 'Keine digitale Präsenz'],
          after: ['40% Online-Umsatz', 'Kunden bleiben lokal', 'Höhere Umsätze als vor Corona', 'Starke digitale Präsenz']
        }
      }
    }
  ];

  const techShowcase: TechShowcase[] = [
    { name: 'React', icon: '⚛️', category: 'Frontend', description: 'Modern UI Framework', projects: 4, expertise: 95 },
    { name: 'Next.js', icon: '▲', category: 'Framework', description: 'React Production Framework', projects: 5, expertise: 92 },
    { name: 'TypeScript', icon: '🔷', category: 'Language', description: 'Type-Safe Development', projects: 4, expertise: 90 },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling', description: 'Utility-First CSS', projects: 6, expertise: 95 },
    { name: 'Node.js', icon: '🟢', category: 'Backend', description: 'JavaScript Runtime', projects: 2, expertise: 88 },
    { name: 'Supabase', icon: '⚡', category: 'Backend', description: 'Backend as a Service', projects: 2, expertise: 85 }
  ];

  const categories = [
    { id: 'all', name: 'Alle Projekte', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'website', name: 'Websites', count: projects.filter(p => p.category === 'website').length },
    { id: 'ecommerce', name: 'E-Commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(p => p.featured);

  const scrollToFeatured = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                7 erfolgreiche Projekte mit 100% Kundenzufriedenheit
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Unser wachsendes
                <span className="text-blue-600"> Portfolio</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Von Software-Entwicklung bis Website-Design - entdecken Sie unsere 
                verschiedenen Projekte und zufriedene Kunden.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {animatedStats.projects}
                  </div>
                  <div className="text-gray-600">Projekte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {animatedStats.clients}
                  </div>
                  <div className="text-gray-600">Kunden</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {animatedStats.success}%
                  </div>
                  <div className="text-gray-600">Erfolgsrate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    {animatedStats.years}
                  </div>
                  <div className="text-gray-600">Jahr(e)</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToFeatured}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Eye className="w-5 h-5 inline mr-2" />
                  Featured Projekte ansehen
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Projekt besprechen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="featured-projects" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                🏆 Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unsere komplexesten und erfolgreichsten Projekte - von Software bis Website
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.category === 'web' ? 'bg-blue-500 text-white' :
                        project.category === 'website' ? 'bg-green-500 text-white' :
                        project.category === 'ecommerce' ? 'bg-purple-500 text-white' :
                        project.category === 'mobile' ? 'bg-orange-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {project.category === 'web' && <Globe className="w-4 h-4 inline mr-1" />}
                        {project.category === 'website' && <Monitor className="w-4 h-4 inline mr-1" />}
                        {project.category === 'ecommerce' && <TrendingUp className="w-4 h-4 inline mr-1" />}
                        {project.category === 'mobile' && <Smartphone className="w-4 h-4 inline mr-1" />}
                        {project.category === 'api' && <Server className="w-4 h-4 inline mr-1" />}
                        {project.category === 'enterprise' && <Shield className="w-4 h-4 inline mr-1" />}
                        {project.category === 'web' ? 'Web App' :
                         project.category === 'website' ? 'Website' :
                         project.category === 'ecommerce' ? 'E-Commerce' :
                         project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.liveUrl && (
                        <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                          <ExternalLink className="w-4 h-4 text-gray-700" />
                        </button>
                      )}
                      {project.githubUrl && (
                        <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                          <Github className="w-4 h-4 text-gray-700" />
                        </button>
                      )}
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm md:text-base opacity-90">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span className="bg-gray-100 px-2 py-1 rounded mr-3">{project.industry}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{project.timeline}</span>
                      <Users className="w-4 h-4 mr-1" />
                      <span>{project.team}</span>
                    </div>

                    <p className="text-gray-700 mb-6">{project.description}</p>

                    {/* Results */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {project.results.slice(0, 4).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-xs text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 6).map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Case Study ansehen
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Website Showcase Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Website-Projekte im Detail
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professionelle Websites, die verkaufen und überzeugen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.filter(p => p.category === 'website' || p.category === 'ecommerce').map((project) => (
                <div 
                  key={project.id}
                  className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        {project.industry}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-4 text-sm line-clamp-2">{project.description}</p>
                    
                    {/* Key Results */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{project.results[0]?.value}</div>
                        <div className="text-xs text-gray-600">{project.results[0]?.description}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{project.timeline}</div>
                        <div className="text-xs text-gray-600">Umsetzungszeit</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="text-blue-600 font-medium text-sm hover:underline">
                        Case Study lesen →
                      </button>
                      {project.liveUrl && (
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition-colors">
                          <ExternalLink className="w-3 h-3 inline mr-1" />
                          Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Website Services CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ihre Website-Idee umsetzen?
                </h3>
                <p className="text-gray-600 mb-6">
                  Von der einfachen Visitenkarten-Website bis zum komplexen E-Commerce-Shop - 
                  wir entwickeln Ihre perfekte Online-Präsenz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <Globe className="w-5 h-5 inline mr-2" />
                    Website-Projekt starten
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    Kostenlose Beratung
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Unsere Technologie-Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Die modernen Technologien, die wir für zukunftssichere Lösungen einsetzen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {techShowcase.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{tech.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{tech.name}</h3>
                        <p className="text-sm text-gray-600">{tech.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-600">{tech.projects > 2 ? '2' : tech.projects} Projekt{tech.projects > 1 ? 'e' : ''}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{tech.description}</p>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Expertise Level</span>
                      <span>{tech.expertise}%</span>
                    </div>
                    <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 group-hover:bg-blue-500"
                        style={{ width: `${tech.expertise}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Challenge</h3>
                    <p className="text-gray-700 mb-6">{selectedProject.challenge}</p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Solution</h3>
                    <p className="text-gray-700">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Results</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {selectedProject.results.map((result, idx) => (
                        <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-sm text-gray-600">{result.metric}</div>
                          <div className="text-xs text-gray-500 mt-1">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Transformation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-4">Vorher</h4>
                      <ul className="space-y-2">
                        {selectedProject.caseStudy.beforeAfter.before.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4">Nachher</h4>
                      <ul className="space-y-2">
                        {selectedProject.caseStudy.beforeAfter.after.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{selectedProject.caseStudy.clientQuote}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{selectedProject.caseStudy.clientName}</p>
                    <p className="text-sm text-gray-600">{selectedProject.caseStudy.clientRole}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  {selectedProject.liveUrl && (
                    <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo ansehen
                    </button>
                  )}
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Ähnliches Projekt anfragen
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für Ihr erstes Projekt mit uns?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Wir sind zwar noch jung, aber voller Leidenschaft und Können. 
              Lassen Sie uns gemeinsam Ihr nächstes digitales Projekt umsetzen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                <Code2 className="w-5 h-5 inline mr-2" />
                Kostenloses Erstgespräch
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all">
                <Calendar className="w-5 h-5 inline mr-2" />
                Beratungstermin buchen
              </button>
            </div>

            <div className="mt-8 text-sm text-blue-200">
              ✓ Kostenlose Erstberatung ✓ Ehrliche Machbarkeitsstudie ✓ Transparente Preise ✓ 100% Kundenzufriedenheit bisher
            </div>
          </div>
        </section>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioClient;
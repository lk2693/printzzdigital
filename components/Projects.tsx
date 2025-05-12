import { Code2, Bot, Database, ShieldCheck, SearchCheck, Users } from "lucide-react";

export default function Projects() {
  const services = [
    {
      title: "Webentwicklung",
      description: "Professionelle Webseiten und Online-Shops für moderne Unternehmen.",
      icon: Code2,
    },
    {
      title: "Automatisierung mit KI",
      description: "Prozesse automatisieren, wiederkehrende Aufgaben eliminieren und Zeit sparen.",
      icon: Bot,
    },
    {
      title: "CRM & Softwarelösungen",
      description: "Individuelle Tools und Plattformen für Kundenverwaltung und Geschäftsprozesse.",
      icon: Database,
    },
    {
      title: "SEO & Sichtbarkeit",
      description: "Suchmaschinenoptimierung für mehr Reichweite, Sichtbarkeit und qualifizierte Besucher.",
      icon: SearchCheck,
    },
    {
      title: "Social Media Beratung",
      description: "Strategie, Contentplanung & Präsenzaufbau auf Instagram, LinkedIn & Co.",
      icon: Users,
    },
    {
      title: "IT-Security & Datenschutz",
      description: "Schutz vor Cyberangriffen, DSGVO-konforme Systeme und Sicherheitskonzepte.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900">
            Unsere Leistungen
          </h2>
          
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Digitale Lösungen, die auf dein Unternehmen zugeschnitten sind.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 flex justify-end">
                <a 
                  href="#"
                  className="inline-flex items-center text-blue-500 font-medium text-sm hover:text-blue-600"
                >
                  Mehr erfahren
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
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
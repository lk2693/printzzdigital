export default function Showcase() {
  return (
    <section id="showcase" className="py-24 sm:py-32 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-medium tracking-tight text-gray-900">
          Projekte & Demos für KMUs
        </h2>
        
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Hier findest du Beispiele für Lösungen, die speziell auf kleine und mittlere 
          Unternehmen (KMUs) zugeschnitten sind.
        </p>

        <div className="mt-16 grid gap-8 md:gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {/* Showcase 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col">
            <div className="overflow-hidden">
              <img 
                src="/images/friseur-demo.jpg" 
                alt="Architektur Webseite Demo" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-medium text-gray-900">Architektur Webseite</h3>
              <p className="mt-2 text-gray-500">
                Moderne Onepager-Website.
              </p>
            </div>
            
            <div className="px-6 pb-6">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-500 font-medium text-sm hover:text-blue-600"
              >
                Projekt ansehen
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Showcase 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col">
            <div className="overflow-hidden">
              <img 
                src="/images/sanitaer-demo.jpg" 
                alt="Rizzi Haus Webseite Demo" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-medium text-gray-900">Rizzi Haus Webseite</h3>
              <p className="mt-2 text-gray-500">
                SEO-optimierte Webseite mit Mitgliedsformular, Google Maps Integration und lokalem Ranking.
              </p>
            </div>
            
            <div className="px-6 pb-6">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-500 font-medium text-sm hover:text-blue-600"
              >
                Webseite öffnen
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Showcase 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col">
            <div className="overflow-hidden">
              <img 
                src="/images/crm-demo.jpg" 
                alt="Individuelles Zollsystem Demo" 
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-medium text-gray-900">Individuelles Zollsystem</h3>
              <p className="mt-2 text-gray-500">
                Individuelle Software zur Verwaltung von Zöllen, Wechselkursen & digitalem Dokumentenhandling.
              </p>
            </div>
            
            <div className="px-6 pb-6">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-500 font-medium text-sm hover:text-blue-600"
              >
                Live-Demo ansehen
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Individuelle Anfrage stellen
          </a>
        </div>
      </div>
    </section>
  );
}
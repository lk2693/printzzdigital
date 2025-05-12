import { MessageCircle, FileText, PenTool, MonitorSmartphone, RefreshCw, Rocket } from "lucide-react";

export default function WebseitenAblauf() {
  const steps = [
    {
      title: "1. Kostenloses Erstgespräch",
      description: "In einem unverbindlichen Gespräch klären wir deine Ziele, Wünsche und Rahmenbedingungen für die neue Website.",
      icon: MessageCircle,
    },
    {
      title: "2. Individuelles Angebot",
      description: "Du erhältst ein maßgeschneidertes Angebot inklusive Leistungsbeschreibung, Zeitplan und Preis – transparent und fair.",
      icon: FileText,
    },
    {
      title: "3. Projektstart & Vertrag",
      description: "Nach deiner Zusage starten wir gemeinsam durch. Alle Punkte werden schriftlich festgehalten – für maximale Klarheit.",
      icon: PenTool,
    },
    {
      title: "4. Design & Umsetzung",
      description: "Wir gestalten ein modernes, zielgruppengerechtes Design und setzen die Seite technisch mit bewährten Technologien um.",
      icon: MonitorSmartphone,
    },
    {
      title: "5. Feedback & Korrekturen",
      description: "Du erhältst einen Vorschau-Link, gibst Feedback, und wir optimieren die Seite bis alles passt.",
      icon: RefreshCw,
    },
    {
      title: "6. Go-Live & Betreuung",
      description: "Die Website geht live – auf Wunsch mit Hosting, Wartung und langfristiger Betreuung.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-medium tracking-tight text-gray-900">
          So läuft die Zusammenarbeit ab
        </h2>
        
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Von der ersten Idee bis zur fertigen Website – einfach, transparent und zuverlässig.
        </p>

        <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {step.title}
                </h3>
              </div>
              
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
              
              {/* Progress line for connected steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-12 w-px bg-gradient-to-b from-blue-500 to-indigo-600 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Kostenloses Erstgespräch sichern
          </a>
        </div>
      </div>
    </section>
  );
}
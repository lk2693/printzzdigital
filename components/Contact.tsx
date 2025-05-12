export default function Contact() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium tracking-tight text-gray-900">
            Kontakt aufnehmen
          </h2>
          
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Du hast Interesse an einer Zusammenarbeit? Schreib mir eine Nachricht.
          </p>
        </div>
        
        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                Dein Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="Max Mustermann"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
                Deine E-Mail
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                placeholder="max@beispiel.de"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
              Deine Telefonnummer (optional)
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="+49 123 4567890"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 ml-1">
              Deine Nachricht
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder="Beschreibe dein Projekt oder deine Anfrage..."
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input
              id="privacy"
              type="checkbox"
              className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-500">
              Ich stimme der <a href="#" className="text-blue-500 hover:text-blue-600">Datenschutzerklärung</a> zu
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Nachricht senden
          </button>
        </form>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Oder kontaktiere uns direkt:</p>
          <p className="mt-2">
            <a href="mailto:info@printzz.de" className="text-blue-500 hover:text-blue-600">info@printzz.de</a>
            {' • '}
            <a href="tel:+491234567890" className="text-blue-500 hover:text-blue-600">+49 123 456 7890</a>
          </p>
        </div>
      </div>
    </section>
  );
}
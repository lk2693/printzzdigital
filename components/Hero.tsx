"use client";

// import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Subtil gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      
      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-gray-500 mb-6 tracking-wide">LÖSUNGEN FÜR UNTERNEHMEN</p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-gray-900 max-w-3xl">
            Digitale Geschäftsprozesse
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              {" "}automatisieren.
            </span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-500 max-w-2xl">
            Wir entwickeln individuelle Weblösungen, die Unternehmen dabei unterstützen, 
            Prozesse zu digitalisieren und KI-gestützt zu automatisieren.
          </p>
        </div>

        {/* Main Product Image with 3D effect */}
        <div className="relative mx-auto">
          <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto bg-white p-1">
            <Image
              src="/images/hero-img.svg"
              alt="Digitale Lösungen für Unternehmen"
              width={400}  // Reduziert von 600
              height={200} // Reduziert von 300
              className="w-full rounded-xl"
            />
          </div>
          
          {/* Floating interface elements */}
          <div className="absolute -top-6 -right-6 md:top-12 md:-right-8 bg-white rounded-xl shadow-lg p-4 z-30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Automatisierung</p>
                <p className="font-medium">+85% Effizienz</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-8 bg-white rounded-xl shadow-lg p-4 z-30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Digitalisierung</p>
                <p className="font-medium">Skalierbare Lösungen</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Kostenloses Erstgespräch sichern
          </a>
          
          <a
            href="#projects"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center"
          >
            Projekte entdecken
            <svg className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
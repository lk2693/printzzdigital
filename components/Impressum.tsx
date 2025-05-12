"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-4">
              PrintzzDigital GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Kontakt</h2>
            <p className="mb-4">
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@printzzdigital.de
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Vertreten durch</h2>
            <p className="mb-4">
              Max Mustermann<br />
              Geschäftsführer
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Handelsregister</h2>
            <p className="mb-4">
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Umsatzsteuer-ID</h2>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-4">
              Max Mustermann<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/" className="text-indigo-600 hover:underline">Zurück zur Startseite</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
"use client";

import Header from "./Header";
import Footer from "./Footer";
import ProfessionalDashboardSystem from "./ProfessionalDashboardSystem";

export default function DashboardDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow bg-gray-50 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Demo: Business Intelligence Dashboard
          </h1>

          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Dieses interaktive Dashboard zeigt, wie Unternehmen ihre wichtigsten Kennzahlen 
            in Echtzeit überwachen und analysieren können - für fundierte Geschäftsentscheidungen.
          </p>

          <p className="text-center text-sm text-gray-500 mb-12">
            <a href="/" className="text-indigo-600 hover:underline">Zurück zur Startseite</a>
          </p>

          <ProfessionalDashboardSystem />
        </div>
      </section>
      <Footer />
    </div>
  );
}
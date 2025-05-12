// app/demos/daten-analyse/page.tsx
"use client";

import DataAnalysisDemo from "../../../components/DemoAnalysis";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DatenAnalysePage() {
  return (
    <>
      <Header />
      <div className="pt-24 max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">KI-gestützte Geschäftsdatenanalyse</h1>
        <p className="text-lg text-gray-600 mb-8">
          Nutzen Sie künstliche Intelligenz, um wertvolle Erkenntnisse aus Ihren Unternehmensdaten
          zu gewinnen und datenbasierte Entscheidungen zu treffen.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <DataAnalysisDemo />
        </div>
      </div>
      <Footer />
    </>
  );
}
// app/demos/dokument-analyse/page.tsx
"use client";

import DocumentAnalysis from "../../../components/DocumentAnalysis";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DokumentAnalysePage() {
  return (
    <>
      <Header />
      <div className="pt-24 max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">KI-gestützte Dokumentenanalyse</h1>
        <p className="text-lg text-gray-600 mb-8">
          Laden Sie ein Dokument hoch und lassen Sie die KI wichtige Informationen extrahieren,
          Risiken identifizieren und Handlungsempfehlungen geben.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <DocumentAnalysis />
        </div>
      </div>
      <Footer />
    </>
  );
}
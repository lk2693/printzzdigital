// app/demos/ki-chatbot/page.tsx
"use client";

import AIDemo from "../../../components/AIDemo";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function KIChatbotPage() {
  return (
    <>
      <Header />
      <div className="pt-24 max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">KI-Chatbot für Kundenservice und Automation</h1>
        <p className="text-lg text-gray-600 mb-8">
          Entdecken Sie, wie künstliche Intelligenz Ihre Kundenkommunikation optimieren 
          und automatisieren kann. Testen Sie die Demo mit verschiedenen Szenarien.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <AIDemo />
        </div>
      </div>
      <Footer />
    </>
  );
}
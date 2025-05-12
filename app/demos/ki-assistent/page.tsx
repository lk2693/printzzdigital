// app/demos/ki-assistent/page.tsx
"use client";

import KIAssistentDemo from "../../../components/KIAssistentDemo";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function KIAssistentPage() {
  return (
    <>
      <Header />
      <div className="pt-24 max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">KI-Assistent für Ihr Unternehmen</h1>
        <p className="text-lg text-gray-600 mb-8">
          Unser KI-Assistent vereint verschiedene intelligente Funktionen, um Ihre Geschäftsprozesse zu optimieren 
          und Ihnen wertvolle Zeit zu sparen. Entdecken Sie alle KI-Funktionen in einer umfassenden Demo.
        </p>
        
        <KIAssistentDemo />
      </div>
      <Footer />
    </>
  );
}
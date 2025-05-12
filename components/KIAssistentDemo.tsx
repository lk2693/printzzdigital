// components/KIAssistentDemo.tsx
import React, { useState } from 'react';
import { Brain, FileSearch, BarChart4, MessageCircle, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import AIDemo from '@/components/AIDemo';
import DocumentAnalysis from './DocumentAnalysis';
import DataAnalysisDemo from './DataAnalysisDemo';

type DemoType = 'chatbot' | 'document' | 'data' | 'overview';

const KIAssistentDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<DemoType>('overview');

  // Funktion zur Umschaltung zwischen den verschiedenen Demo-Typen
  const switchDemo = (demoType: DemoType) => {
    setActiveDemo(demoType);
    // Scroll nach oben beim Umschalten der Demo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Rendering der aktiven Demo-Komponente
  const renderActiveDemo = () => {
    switch (activeDemo) {
      case 'chatbot':
        return <AIDemo />;
      case 'document':
        return <DocumentAnalysis />;
      case 'data':
        return <DataAnalysisDemo />;
      case 'overview':
      default:
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">KI-Lösungen für kleine und mittlere Unternehmen</h2>
            <p className="text-lg text-gray-600 mb-8">
              Entdecken Sie, wie künstliche Intelligenz Ihr Unternehmen unterstützen und Ihre Geschäftsprozesse optimieren kann. 
              Wählen Sie eine der Demo-Optionen, um die Möglichkeiten unserer KI-Lösungen zu erleben.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div 
                className="bg-indigo-50 rounded-lg p-6 cursor-pointer hover:shadow-md transition border border-indigo-100"
                onClick={() => switchDemo('chatbot')}
              >
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-indigo-800">KI-Chatbot</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Automatisieren Sie die Beantwortung von Kundenanfragen und generieren Sie Inhalte mit Hilfe eines intelligenten Chatbots.
                </p>
                <button 
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    switchDemo('chatbot');
                  }}
                >
                  Demo starten <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div 
                className="bg-indigo-50 rounded-lg p-6 cursor-pointer hover:shadow-md transition border border-indigo-100"
                onClick={() => switchDemo('document')}
              >
                <div className="flex items-center mb-4">
                  <FileSearch className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-indigo-800">Dokumentenanalyse</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Extrahieren Sie automatisch wichtige Informationen aus Dokumenten und identifizieren Sie Risiken und Chancen.
                </p>
                <button 
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    switchDemo('document');
                  }}
                >
                  Demo starten <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div 
                className="bg-indigo-50 rounded-lg p-6 cursor-pointer hover:shadow-md transition border border-indigo-100"
                onClick={() => switchDemo('data')}
              >
                <div className="flex items-center mb-4">
                  <BarChart4 className="w-8 h-8 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-indigo-800">Datenanalyse</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Gewinnen Sie wertvolle Insights aus Ihren Geschäftsdaten und treffen Sie datenbasierte Entscheidungen.
                </p>
                <button 
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    switchDemo('data');
                  }}
                >
                  Demo starten <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Vorteile von KI für Ihr Unternehmen</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Zeitersparnis</h4>
                    <p className="text-gray-600 text-sm">
                      Automatisieren Sie repetitive Aufgaben und sparen Sie bis zu 30% Ihrer wertvollen Zeit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Kostenreduktion</h4>
                    <p className="text-gray-600 text-sm">
                      Senken Sie Betriebskosten durch optimierte Prozesse und verbesserte Effizienz.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Verbesserte Kundenerfahrung</h4>
                    <p className="text-gray-600 text-sm">
                      Bieten Sie Ihren Kunden schnelleren und personalisierten Service durch KI-gestützte Kommunikation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Datenbasierte Entscheidungen</h4>
                    <p className="text-gray-600 text-sm">
                      Treffen Sie fundierte Geschäftsentscheidungen mit Hilfe von KI-generierten Insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bereit für die KI-Revolution?</h3>
                  <p className="opacity-90 mb-4 md:mb-0">
                    Kontaktieren Sie uns für eine individuelle Beratung zu KI-Lösungen für Ihr Unternehmen.
                  </p>
                </div>
                <a 
                  href="/#kontakt" 
                  className="bg-white text-indigo-600 px-5 py-2 rounded-md font-medium inline-flex items-center hover:bg-gray-100 transition"
                >
                  Beratungsgespräch vereinbaren <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {/* Header der aktiven Demo */}
      {activeDemo !== 'overview' && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {activeDemo === 'chatbot' && (
                <>
                  <Brain className="w-6 h-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-800">KI-Chatbot Demo</h2>
                </>
              )}
              {activeDemo === 'document' && (
                <>
                  <FileSearch className="w-6 h-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-800">Dokumentenanalyse Demo</h2>
                </>
              )}
              {activeDemo === 'data' && (
                <>
                  <BarChart4 className="w-6 h-6 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-800">Datenanalyse Demo</h2>
                </>
              )}
            </div>
            <button
              onClick={() => switchDemo('overview')}
              className="text-gray-600 hover:text-indigo-600 font-medium text-sm flex items-center"
            >
              Zurück zur Übersicht
            </button>
          </div>
        </div>
      )}

      {/* Hauptbereich der Demo */}
      {renderActiveDemo()}

      {/* Navigation zwischen den Demos (nur sichtbar, wenn eine Demo aktiv ist) */}
      {activeDemo !== 'overview' && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => switchDemo('chatbot')}
            className={`flex items-center justify-center p-3 rounded-md transition ${
              activeDemo === 'chatbot'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Brain className="w-5 h-5 mr-2" />
            KI-Chatbot
          </button>
          <button
            onClick={() => switchDemo('document')}
            className={`flex items-center justify-center p-3 rounded-md transition ${
              activeDemo === 'document'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FileSearch className="w-5 h-5 mr-2" />
            Dokumentenanalyse
          </button>
          <button
            onClick={() => switchDemo('data')}
            className={`flex items-center justify-center p-3 rounded-md transition ${
              activeDemo === 'data'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BarChart4 className="w-5 h-5 mr-2" />
            Datenanalyse
          </button>
        </div>
      )}
    </div>
  );
};

export default KIAssistentDemo;
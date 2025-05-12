// components/AIDemo.tsx
import React, { useState, useRef, useEffect } from 'react';

// Typen für unsere Komponenten
type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

type DemoFeature = {
  id: string;
  title: string;
  description: string;
  prompt: string;
};

const AIDemo: React.FC = () => {
  // Demo-Features für KMU
  const features: DemoFeature[] = [
    {
      id: '1',
      title: 'Kundenfragen automatisch beantworten',
      description: 'Erkennen und beantworten Sie häufig gestellte Kundenfragen automatisch.',
      prompt: 'Wie kann ich meine Bestellung verfolgen?'
    },
    {
      id: '2',
      title: 'Textinhalte generieren',
      description: 'Erstellen Sie schnell professionelle Texte für Ihre Webseite oder Marketing-Materialien.',
      prompt: 'Erstelle einen kurzen Produkttext für unsere neue umweltfreundliche Verpackung.'
    },
    {
      id: '3',
      title: 'Datenanalyse und Insights',
      description: 'Gewinnen Sie wertvolle Erkenntnisse aus Ihren Unternehmensdaten.',
      prompt: 'Analysiere die Verkaufszahlen des letzten Quartals und gib Empfehlungen.'
    },
    {
      id: '4',
      title: 'Übersetzungen',
      description: 'Übersetzen Sie Inhalte automatisch in verschiedene Sprachen.',
      prompt: 'Übersetze folgenden Text ins Englische: "Unser Unternehmen steht für Qualität und Innovation."'
    }
  ];

  // State für die Chat-Nachrichten
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: 'Hallo! Ich bin Ihre KI-Assistentin. Wie kann ich Ihnen heute helfen?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatische Antworten für die Demo
  const demoResponses: Record<string, string> = {
    'Wie kann ich meine Bestellung verfolgen?': 
      'Sie können Ihre Bestellung über unser Kundenportal verfolgen. Gehen Sie auf "Mein Konto" > "Bestellungen" und klicken Sie auf die Bestellnummer. Alternativ können Sie auch die Tracking-Nummer in der Bestätigungs-E-Mail verwenden.',
    
    'Erstelle einen kurzen Produkttext für unsere neue umweltfreundliche Verpackung.':
      'Unsere revolutionäre Öko-Verpackung: Hergestellt aus 100% recycelten Materialien und vollständig biologisch abbaubar. Schützen Sie Ihre Produkte und gleichzeitig unseren Planeten. Mit unserem innovativen Design reduzieren Sie nicht nur Ihren ökologischen Fußabdruck, sondern begeistern auch umweltbewusste Kunden. Zukunftsorientierte Verpackung, die Verantwortung zeigt.',
    
    'Analysiere die Verkaufszahlen des letzten Quartals und gib Empfehlungen.':
      'Basierend auf den Verkaufszahlen des letzten Quartals sehe ich einen Anstieg bei Produktkategorie A (+15%) und einen Rückgang bei Kategorie C (-8%). Die höchsten Umsätze wurden in der Region Nord erzielt. Empfehlungen: 1) Marketing-Budget für Kategorie A erhöhen, 2) Produktlinie C überarbeiten oder Preisstrategien anpassen, 3) Best Practices aus Region Nord auf andere Regionen übertragen, 4) Cross-Selling zwischen Kategorie A und B verstärken.',
    
    'Übersetze folgenden Text ins Englische: "Unser Unternehmen steht für Qualität und Innovation."':
      '"Our company stands for quality and innovation."'
  };

  // Funktion zum Scrollen zum Ende des Chats
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Nachricht senden und Antwort generieren
  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    // Neue Benutzernachricht hinzufügen
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    // In einer realen Anwendung würden Sie hier Ihre KI-API aufrufen
    // Für diese Demo verwenden wir vordefinierte Antworten
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: demoResponses[text] || 'Ich verstehe Ihre Anfrage. In einer echten Implementierung würde ich hier eine passende Antwort liefern, basierend auf Ihren Unternehmensdaten und -prozessen.',
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  // Feature-Demo starten
  const startFeatureDemo = (prompt: string) => {
    setInputText(prompt);
    sendMessage(prompt);
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4">
          <h2 className="text-xl font-bold">KI-Assistent für Ihr Unternehmen</h2>
          <p className="text-sm opacity-75">Automatisieren Sie Prozesse und steigern Sie die Effizienz</p>
        </div>
        
        {/* Chat-Bereich */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`rounded-lg p-3 max-w-xs md:max-w-md ${
                  message.sender === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs opacity-75 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white text-gray-800 rounded-lg p-3 border border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Eingabefeld */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputText)}
              placeholder="Schreiben Sie Ihre Nachricht..."
              className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => sendMessage(inputText)}
              disabled={!inputText.trim() || isLoading}
              className="bg-blue-600 text-white rounded-r-md px-4 py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              Senden
            </button>
          </div>
        </div>
      </div>
      
      {/* Feature-Demos */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Entdecken Sie KI-Anwendungsfälle für Ihr Unternehmen</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map(feature => (
            <div key={feature.id} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
              <h4 className="font-bold text-blue-600">{feature.title}</h4>
              <p className="text-gray-600 mb-3 text-sm">{feature.description}</p>
              <button
                onClick={() => startFeatureDemo(feature.prompt)}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded transition-colors"
              >
                Demo starten
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Integrationshinweise */}
      <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Implementierungshinweise</h3>
        <p className="text-blue-700 text-sm">
          In einer vollständigen Implementierung würde diese Komponente mit einer KI-API wie OpenAI, Anthropic Claude oder einer eigenen KI-Lösung verbunden sein. 
          Die Antworten können an Ihre Unternehmensdaten und -prozesse angepasst werden, um spezifische Aufgaben zu automatisieren.
        </p>
      </div>
    </div>
  );
};

export default AIDemo;
// components/DataAnalysisDemo.tsx
import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Demo-Daten
const salesData = [
  { month: 'Jan', sales: 12400, target: 10000 },
  { month: 'Feb', sales: 14200, target: 10000 },
  { month: 'Mär', sales: 15800, target: 12000 },
  { month: 'Apr', sales: 16200, target: 12000 },
  { month: 'Mai', sales: 18100, target: 15000 },
  { month: 'Jun', sales: 17300, target: 15000 },
  { month: 'Jul', sales: 16500, target: 18000 },
  { month: 'Aug', sales: 19200, target: 18000 },
  { month: 'Sep', sales: 21400, target: 20000 },
  { month: 'Okt', sales: 24600, target: 20000 },
  { month: 'Nov', sales: 27200, target: 25000 },
  { month: 'Dez', sales: 29800, target: 25000 },
];

const customerData = [
  { name: 'Neukunden', value: 32 },
  { name: 'Bestandskunden', value: 68 },
];

const productData = [
  { category: 'Kategorie A', sales: 124600, profit: 43610 },
  { category: 'Kategorie B', sales: 98400, profit: 36108 },
  { category: 'Kategorie C', sales: 67200, profit: 24192 },
  { category: 'Kategorie D', sales: 42800, profit: 11984 },
];

const channelData = [
  { name: 'Online-Shop', value: 45 },
  { name: 'Direktvertrieb', value: 30 },
  { name: 'Partner', value: 18 },
  { name: 'Sonstige', value: 7 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const DataAnalysisDemo: React.FC = () => {
  const [analysisType, setAnalysisType] = useState<'sales' | 'customers' | 'products' | 'channels'>('sales');
  const [insight, setInsight] = useState<string>('');
  const [insightLoading, setInsightLoading] = useState<boolean>(false);

  // KI-generierte Insights basierend auf der Datenanalyse
  const demoInsights = {
    sales: [
      "Die Umsätze zeigen einen deutlichen Aufwärtstrend mit einer Steigerung von 140% von Januar bis Dezember.",
      "In 8 von 12 Monaten wurden die Umsatzziele übertroffen, besonders stark im 4. Quartal.",
      "Die durchschnittliche monatliche Wachstumsrate beträgt 7,6%, was auf eine stabile Geschäftsentwicklung hindeutet.",
      "Es gibt eine leichte saisonale Schwankung mit einem kleinen Rückgang im Juli, der strategische Marketingmaßnahmen für diesen Zeitraum nahelegt."
    ],
    customers: [
      "Die Kundenstruktur ist mit 68% Bestandskunden und 32% Neukunden relativ stabil.",
      "Die Akquisitionskosten für Neukunden könnten optimiert werden, da sie derzeit 15% über dem Branchendurchschnitt liegen.",
      "Ein spezielles Loyalitätsprogramm für Bestandskunden könnte den Customer Lifetime Value um ca. 25% steigern.",
      "Die Einführung eines Empfehlungsprogramms könnte basierend auf der aktuellen Kundenstruktur besonders effektiv sein."
    ],
    products: [
      "Kategorie A ist sowohl umsatz- als auch gewinnstärkste Kategorie mit einer Marge von 35%.",
      "Kategorie D zeigt mit 28% die niedrigste Marge und sollte auf Optimierungspotenziale überprüft werden.",
      "Eine Ausweitung des Sortiments in Kategorie A könnte basierend auf der aktuellen Performance besonders rentabel sein.",
      "Kategorie C bietet gutes Potenzial für Cross-Selling mit Produkten aus Kategorie A, da diese häufig zusammen gekauft werden."
    ],
    channels: [
      "Der Online-Shop ist mit 45% der stärkste Vertriebskanal und zeigt großes Potenzial für weitere Digitalisierungsmaßnahmen.",
      "Der Direktvertrieb (30%) könnte durch CRM-Integration effizienter gestaltet werden.",
      "Partnervertrieb (18%) zeigt überdurchschnittliche Wachstumsraten von 23% im letzten Quartal.",
      "Die Diversifizierung der Vertriebskanäle minimiert Risiken und sollte beibehalten werden."
    ]
  };

  const generateInsight = () => {
    setInsightLoading(true);
    
    // In einer realen Anwendung würde hier die KI die Daten analysieren
    // Für die Demo verwenden wir vordefinierte Insights
    setTimeout(() => {
      // Zufälligen Insight aus dem Array auswählen
      const randomIndex = Math.floor(Math.random() * demoInsights[analysisType].length);
      setInsight(demoInsights[analysisType][randomIndex]);
      setInsightLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">KI-gestützte Geschäftsdatenanalyse</h2>
      <p className="text-gray-600 mb-6">
        Nutzen Sie die Kraft der künstlichen Intelligenz, um Ihre Unternehmensdaten zu analysieren 
        und wertvolle Erkenntnisse zu gewinnen. Wählen Sie eine Datenkategorie und lassen Sie die KI Trends, 
        Muster und Optimierungspotenziale identifizieren.
      </p>

      <div className="mb-6">
        <div className="inline-flex rounded-md shadow-sm mb-6" role="group">
          <button
            type="button"
            onClick={() => setAnalysisType('sales')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${
              analysisType === 'sales' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Umsatzentwicklung
          </button>
          <button
            type="button"
            onClick={() => setAnalysisType('customers')}
            className={`px-4 py-2 text-sm font-medium ${
              analysisType === 'customers' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
            }`}
          >
            Kundenstruktur
          </button>
          <button
            type="button"
            onClick={() => setAnalysisType('products')}
            className={`px-4 py-2 text-sm font-medium ${
              analysisType === 'products' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
            }`}
          >
            Produktperformance
          </button>
          <button
            type="button"
            onClick={() => setAnalysisType('channels')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${
              analysisType === 'channels' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
            }`}
          >
            Vertriebskanäle
          </button>
        </div>

        <div className="h-64 mb-6">
          {analysisType === 'sales' && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#0088FE" name="Umsatz (€)" />
                <Line type="monotone" dataKey="target" stroke="#FF8042" strokeDasharray="5 5" name="Ziel (€)" />
              </LineChart>
            </ResponsiveContainer>
          )}

          {analysisType === 'customers' && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {customerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}

          {analysisType === 'products' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" name="Umsatz (€)" fill="#0088FE" />
                <Bar dataKey="profit" name="Gewinn (€)" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          )}

          {analysisType === 'channels' && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="text-center mb-6">
          <button
            onClick={generateInsight}
            disabled={insightLoading}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {insightLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                KI analysiert Daten...
              </>
            ) : "KI-Insight generieren"}
          </button>
        </div>

        {insight && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <h4 className="font-semibold text-lg text-blue-800 mb-2">KI-generierter Insight:</h4>
            <p className="text-gray-700">{insight}</p>
          </div>
        )}
      </div>

      <div className="mt-8 bg-indigo-50 rounded-lg p-6 border border-indigo-100">
        <h3 className="text-lg font-semibold mb-3 text-indigo-800">Wie KI Ihre Geschäftsdaten transformiert</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md p-4 shadow-sm">
            <h4 className="font-medium text-indigo-700 mb-2">Datengetriebene Entscheidungen</h4>
            <p className="text-sm text-gray-600">
              KI kann komplexe Datenmuster erkennen, die für das menschliche Auge nicht sichtbar sind. 
              Durch die Analyse historischer Daten werden präzise Vorhersagen möglich, die Ihre 
              Geschäftsentscheidungen untermauern.
            </p>
          </div>
          
          <div className="bg-white rounded-md p-4 shadow-sm">
            <h4 className="font-medium text-indigo-700 mb-2">Automatisierte Berichterstattung</h4>
            <p className="text-sm text-gray-600">
              Lassen Sie KI Ihre Geschäftsberichte automatisch erstellen und aktualisieren. 
              Sparen Sie wertvolle Zeit bei der Datenaufbereitung und -analyse und konzentrieren Sie 
              sich auf die strategische Interpretation der Ergebnisse.
            </p>
          </div>
          
          <div className="bg-white rounded-md p-4 shadow-sm">
            <h4 className="font-medium text-indigo-700 mb-2">Anomalieerkennung</h4>
            <p className="text-sm text-gray-600">
              KI-Systeme können ungewöhnliche Muster in Ihren Daten erkennen und Sie auf potenzielle 
              Probleme oder Chancen hinweisen, bevor sie offensichtlich werden. Reagieren Sie 
              proaktiv statt reaktiv auf Marktveränderungen.
            </p>
          </div>
          
          <div className="bg-white rounded-md p-4 shadow-sm">
            <h4 className="font-medium text-indigo-700 mb-2">Kundenverhalten verstehen</h4>
            <p className="text-sm text-gray-600">
              Nutzen Sie KI, um tiefere Einblicke in das Verhalten Ihrer Kunden zu gewinnen. 
              Identifizieren Sie Segmente, Präferenzen und Muster, die Ihnen helfen, Ihr 
              Angebot und Ihre Marketingstrategien zu optimieren.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisDemo;
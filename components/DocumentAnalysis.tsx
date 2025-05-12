// components/DocumentAnalysis.tsx
import React, { useState } from 'react';

const DocumentAnalysis: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Beispiel-Analysen für verschiedene Dokumenttypen
  const demoAnalysisResults: Record<string, string> = {
    'pdf': `# Dokumentanalyse: Vertrag.pdf

## Zusammenfassung
Der vorliegende Vertrag ist ein Liefervertrag zwischen zwei Unternehmen mit einer Laufzeit von 24 Monaten.

## Erkannte Schlüsselinformationen
- **Vertragsparteien**: Musterfirma GmbH, Lieferant AG
- **Vertragswert**: 45.000€ jährlich
- **Laufzeit**: 24 Monate
- **Kündigungsfrist**: 3 Monate
- **Zahlungsbedingungen**: 30 Tage netto

## Potenzielle Risiken
- Keine Preisanpassungsklausel bei steigenden Materialkosten
- Keine klare Definition der Lieferqualität
- Haftungsobergrenzen fehlen

## Empfehlungen
- Ergänzung einer Preisindexierungsklausel
- Definition von klaren Qualitätsstandards
- Verhandlung von Haftungsobergrenzen`,

    'docx': `# Dokumentanalyse: Bericht.docx

## Zusammenfassung
Der Bericht enthält eine Marktanalyse für den Bereich erneuerbarer Energien mit Fokus auf Solartechnologie.

## Erkannte Schlüsselinformationen
- **Marktvolumen**: 12,4 Mrd. € (2024)
- **Wachstumsrate**: 8,3% p.a.
- **Hauptwettbewerber**: 5 identifizierte Unternehmen
- **Technologietrends**: Bifaziale Module, Speicherlösungen

## SWOT-Analyse
- **Stärken**: Technologische Innovationen, staatliche Förderungen
- **Schwächen**: Hohe Anfangsinvestitionen, Lieferkettenprobleme
- **Chancen**: Neue Märkte in Entwicklungsländern, sinkende Herstellungskosten
- **Risiken**: Politische Unsicherheiten, neue Wettbewerber aus Asien

## Geschäftschancen
- Ausbau von Geschäftsbeziehungen im B2B-Bereich
- Erschließung des Marktsegments für kleine Gewerbebetriebe`,

    'xlsx': `# Dokumentanalyse: Finanzdaten.xlsx

## Zusammenfassung
Die Tabelle enthält Finanzdaten des Unternehmens für die letzten 4 Quartale.

## Finanzüberblick
- **Gesamtumsatz**: 1.245.600€
- **Durchschnittliche Marge**: 27,3%
- **Höchste Rentabilität**: Produktlinie A (32,1%)
- **Niedrigste Rentabilität**: Produktlinie D (15,4%)

## Trendanalyse
- **Umsatzwachstum**: +5,2% im Jahresvergleich
- **Margenverschlechterung**: -1,3 Prozentpunkte
- **Fixkostenentwicklung**: +7,8% 

## Anomalien
- Ungewöhnlicher Umsatzrückgang in Q3 bei Produktlinie B (-12%)
- Starker Anstieg der Materialkosten in Q4 (+8,2%)

## Empfehlungen
- Überprüfung der Preisgestaltung für Produktlinie D
- Kostenoptimierung im Bereich Logistik (höchster Kostenanstieg)
- Ausweitung des Marketingbudgets für Produktlinie A`,

    'jpg': `# Dokumentanalyse: Infografik.jpg

## Erkannte Elemente
- Firmenlogo und Markensignatur
- Produktdarstellung mit technischen Spezifikationen
- Farbschema entspricht Corporate Identity
- Kontaktinformationen und QR-Code

## Designbewertung
- Professionelles Layout mit klarer visueller Hierarchie
- Lesbarkeit der Textelemente gut bis sehr gut
- Effektiver Einsatz von Icons und Visualisierungen

## Marketingwirksamkeit
- Klare Werteversprechen erkennbar
- USPs deutlich hervorgehoben
- Call-to-Action vorhanden, könnte prominenter sein

## Verbesserungsvorschläge
- Kontrastverbesserung bei einigen Textelementen
- Ergänzung von Kundenfeedback/Testimonials
- QR-Code vergrößern und mit Call-to-Action verbinden`,

    'txt': `# Dokumentanalyse: Notizen.txt

## Zusammenfassung
Das Dokument enthält Besprechungsnotizen eines Teamtreffens zur Produktentwicklung.

## Erkannte Schlüsselinformationen
- **Projekt**: Entwicklung eines neuen CRM-Systems
- **Zeitplan**: Launch in Q1 2026
- **Beteiligte Teams**: IT, Marketing, Kundenservice
- **Hauptverantwortlicher**: M. Müller

## Identifizierte Aufgaben
- Anforderungsanalyse (Frist: 15.05.2025)
- Wettbewerbsanalyse (Frist: 30.05.2025) 
- UI/UX-Konzept (Frist: 30.06.2025)
- Backend-Entwicklung (Start: 01.07.2025)

## Offene Fragen
- Budget noch nicht final genehmigt
- Integrationsanforderungen mit bestehendem ERP-System
- Personalbedarf für Supportphase

## Empfehlungen
- Erstellung eines detaillierten Projektplans mit RACI-Matrix
- Frühzeitige Einbindung des Finanzteams zur Budgetklärung
- Workshop zur Definition der MVP-Features`
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
      setResult(null);
    }
  };

  const analyzeDemoDocument = () => {
    if (!file) {
      setError("Bitte wählen Sie zuerst eine Datei aus.");
      return;
    }

    setAnalyzing(true);
    setError(null);

    // In einer realen Anwendung würden Sie hier die Datei zur KI-API senden
    // Für die Demo verwenden wir vordefinierte Analysen basierend auf dem Dateityp
    setTimeout(() => {
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
      
      if (demoAnalysisResults[fileExtension]) {
        setResult(demoAnalysisResults[fileExtension]);
      } else {
        setResult(`# Dokumentanalyse: ${file.name}

## Zusammenfassung
Dieses Dokument wurde analysiert und enthält geschäftsrelevante Informationen.

## Erkannte Schlüsselinformationen
- Geschäftsdaten und Statistiken
- Kontaktinformationen
- Zeitlicher Ablauf von Prozessen

## Empfehlungen
- Strukturierte Speicherung in Ihrem Dokumentenmanagementsystem
- Verknüpfung mit relevanten Geschäftsprozessen
- Regelmäßige Überprüfung auf Aktualität

In einer vollständigen Implementierung würde die KI eine detaillierte, dokumentenspezifische Analyse durchführen.`);
      }
      
      setAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">KI-Dokumentenanalyse</h2>
      <p className="text-gray-600 mb-6">
        Laden Sie ein Dokument hoch und lassen Sie die KI dessen Inhalt analysieren. 
        Die KI erkennt wichtige Informationen, identifiziert Risiken und gibt Ihnen Handlungsempfehlungen.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Dokument auswählen</label>
        <div className="flex items-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-medium
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:bg-indigo-100"
            accept=".pdf,.docx,.xlsx,.jpg,.jpeg,.png,.txt"
          />
          <button
            onClick={analyzeDemoDocument}
            disabled={!file || analyzing}
            className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {analyzing ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analysiere...
              </>
            ) : "Dokument analysieren"}
          </button>
        </div>
        {file && (
          <p className="mt-2 text-sm text-gray-500">
            Ausgewählte Datei: {file.name} ({(file.size / 1024).toFixed(1)} KB)
          </p>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      {result && (
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Analyseergebnis</h3>
          <div className="bg-gray-50 rounded-md p-4 prose prose-sm max-w-none">
            {result.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-xl font-bold mb-4">{line.substring(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={index} className="text-lg font-semibold mt-4 mb-2">{line.substring(3)}</h2>;
              } else if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.substring(2)}</li>;
              } else if (line === '') {
                return <br key={index} />;
              } else {
                return <p key={index} className="mb-2">{line}</p>;
              }
            })}
          </div>

          <div className="mt-6 bg-indigo-50 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-medium text-indigo-800">Demo-Hinweis</h3>
                <div className="mt-2 text-sm text-indigo-700">
                  <p>
                    In einer vollständigen Implementierung würde die KI das Dokument tatsächlich analysieren und 
                    relevante Informationen extrahieren. Die Demo zeigt beispielhaft, wie KI Ihnen helfen kann, 
                    wichtige Erkenntnisse aus Ihren Geschäftsdokumenten zu gewinnen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="font-medium text-gray-900 mb-2">Unterstützte Dokumenttypen</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              PDF-Dokumente (.pdf)
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Word-Dokumente (.docx)
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Excel-Tabellen (.xlsx)
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Bilder (.jpg, .png)
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Textdateien (.txt)
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-md p-4">
          <h3 className="font-medium text-gray-900 mb-2">Anwendungsfälle für KMU</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
              </svg>
              Automatisierte Rechnungsverarbeitung
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
              </svg>
              Vertragsanalyse und Risikobewertung
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
              </svg>
              Extrahierung von Marktdaten aus Berichten
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path>
              </svg>
              Klassifizierung und Archivierung von Dokumenten
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
              </svg>
              Zusammenfassung langer Dokumente
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalysis;
"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="mb-4 text-gray-700">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
              aufgeführten Datenschutzerklärung.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3 mt-6">Datenerfassung auf unserer Website</h3>
            <p className="mb-4 text-gray-700">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <p className="mb-4 text-gray-700">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, 
              die Sie in ein Kontaktformular eingeben.
            </p>
            
            <p className="mb-4 text-gray-700">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische 
              Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt 
              automatisch, sobald Sie unsere Website betreten.
            </p>
            
            <p className="mb-4 text-gray-700">
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können 
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            
            <p className="mb-4 text-gray-700">
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten 
              zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum 
              angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-8">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3 mt-6">Datenschutz</h3>
            <p className="mb-4 text-gray-700">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen 
              Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <p className="mb-4 text-gray-700">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
              mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir 
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            
            <p className="mb-4 text-gray-700">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken 
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4 text-gray-700">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              
              PrintzzDigital GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland<br /><br />
              
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@printzzdigital.de
            </p>
            
            <p className="mb-4 text-gray-700">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke 
              und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            
            <h3 className="text-lg font-medium text-gray-800 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4 text-gray-700">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte 
              Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum 
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
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
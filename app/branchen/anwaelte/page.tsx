"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useState } from "react";
import AnwaelteDemo from "@/components/AnwaelteDemo";
import { Scale, FileText, Calendar, Search, Database } from "lucide-react";

const anwaelteData = [
  {
    id: "1",
    name: "Dr. Julia Berger",
    fachgebiet: "Wirtschaftsrecht",
    schwerpunkte: ["Unternehmensrecht", "Handelsrecht", "Gesellschaftsrecht"],
    verfuegbarkeit: ["Mo: 9-17", "Di: 9-17", "Mi: 9-17", "Do: 9-17", "Fr: 9-15"],
    standort: "Königsallee 60, 40212 Düsseldorf",
    bewertung: 4.9,
    erfahrung: "15 Jahre"
  },
  {
    id: "2",
    name: "Rechtsanwalt Thomas Schneider",
    fachgebiet: "Familienrecht",
    schwerpunkte: ["Scheidungsrecht", "Sorgerecht", "Unterhalt"],
    verfuegbarkeit: ["Mo: 8-16", "Di: 8-16", "Mi: 8-16", "Do: 8-16", "Fr: 8-14"],
    standort: "Friedrichstraße 53, 10117 Berlin",
    bewertung: 4.7,
    erfahrung: "12 Jahre"
  },
  {
    id: "3",
    name: "RA Martina Hoffmann",
    fachgebiet: "Arbeitsrecht",
    schwerpunkte: ["Kündigungsschutz", "Arbeitsverträge", "Tarifrecht"],
    verfuegbarkeit: ["Mo: 9-18", "Di: 9-18", "Mi: 9-18", "Do: 9-18", "Fr: 9-14"],
    standort: "Darmstädter Landstraße 112, 60598 Frankfurt",
    bewertung: 4.8,
    erfahrung: "8 Jahre"
  },
  {
    id: "4",
    name: "Dr. Alexander Koch",
    fachgebiet: "Immobilienrecht",
    schwerpunkte: ["Mietrecht", "Kaufvertragsrecht", "WEG-Recht"],
    verfuegbarkeit: ["Mo: 9-17", "Di: 9-17", "Mi: 9-17", "Do: 9-17", "Fr: 9-15"],
    standort: "Neuer Wall 80, 20354 Hamburg",
    bewertung: 4.6,
    erfahrung: "20 Jahre"
  },
  {
    id: "5",
    name: "Rechtsanwältin Sarah Wagner",
    fachgebiet: "Strafrecht",
    schwerpunkte: ["Wirtschaftsstrafrecht", "Betäubungsmittelrecht", "Verkehrsstrafrecht"],
    verfuegbarkeit: ["Mo: 8-16", "Di: 8-16", "Mi: 8-16", "Do: 8-16", "Fr: 8-14"],
    standort: "Theresienstraße 15, 80333 München",
    bewertung: 4.9,
    erfahrung: "10 Jahre"
  }
];

export default function AnwaeltePage() {
  const [selectedTab, setSelectedTab] = useState("uebersicht");

  return (
    <>
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digitale Lösungen für Kanzleien
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Optimieren Sie Ihre Kanzleiorganisation mit unseren maßgeschneiderten digitalen 
              Lösungen für die rechtliche Praxis. Mehr Zeit für Mandanten, weniger Verwaltungsaufwand.
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setSelectedTab("uebersicht")}
                className={`pb-4 font-medium text-sm transition ${
                  selectedTab === "uebersicht"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Übersicht
              </button>
              <button
                onClick={() => setSelectedTab("funktionen")}
                className={`pb-4 font-medium text-sm transition ${
                  selectedTab === "funktionen"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Funktionen
              </button>
              <button
                onClick={() => setSelectedTab("demo")}
                className={`pb-4 font-medium text-sm transition ${
                  selectedTab === "demo"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Demo
              </button>
            </div>
          </div>

          {/* Übersicht */}
          {selectedTab === "uebersicht" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Effiziente Kanzleiverwaltung
                </h2>
                <p className="text-gray-600 mb-6">
                  Mit unserer digitalen Lösung für Rechtsanwälte optimieren Sie Ihren Kanzleialltag:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Aktenmanagement</h3>
                      <p className="text-sm text-gray-600">Digitale Aktenführung mit automatischer Dokumentenerkennung und -kategorisierung</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Terminplanung</h3>
                      <p className="text-sm text-gray-600">Intelligente Kalenderintegration mit Erinnerungsfunktion für Fristen und Termine</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Search className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Rechtsrecherche</h3>
                      <p className="text-sm text-gray-600">KI-gestützte Recherche in Gesetzestexten, Urteilen und Fachliteratur</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Database className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Mandantenverwaltung</h3>
                      <p className="text-sm text-gray-600">DSGVO-konforme Datenerfassung und -verwaltung mit sicherer Kommunikation</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Vorteile unserer Lösung
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Zeitersparnis bis zu 30%</h4>
                    <p className="text-gray-600 text-sm">
                      Durch Automatisierung administrativer Aufgaben können Sie sich auf Ihre Kernkompetenzen konzentrieren.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Höhere Mandantenzufriedenheit</h4>
                    <p className="text-gray-600 text-sm">
                      Verbesserte Kommunikation und Transparenz führen zu einer höheren Kundenbindung.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Rechtssichere Dokumentation</h4>
                    <p className="text-gray-600 text-sm">
                      Lückenlose und revisionssichere Dokumentation aller Vorgänge und Kommunikation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Funktionen */}
          {selectedTab === "funktionen" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <Scale className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Dokumentenmanagement</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Unsere KI-gestützte Dokumentenerkennung klassifiziert und analysiert Schriftsätze, Urteile und Verträge automatisch.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Automatische Texterkennung (OCR)</li>
                  <li>• Intelligente Verschlagwortung</li>
                  <li>• Volltextsuche in allen Dokumenten</li>
                  <li>• Versionierung und Änderungsverfolgung</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Fristenverwaltung</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Nie wieder eine wichtige Frist verpassen mit unserem intelligenten Fristenkalender.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Automatische Fristberechnung</li>
                  <li>• Mehrfache Erinnerungen</li>
                  <li>• Integrierte Wiedervorlagen</li>
                  <li>• Verknüpfung mit Akten und Dokumenten</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Abrechnung & Zeiterfassung</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Effiziente Zeiterfassung und automatisierte Abrechnung nach RVG oder Stundenhonorar.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Digitale Zeiterfassung</li>
                  <li>• Automatische RVG-Berechnung</li>
                  <li>• Integration mit DATEV</li>
                  <li>• Automatisierter Mahnprozess</li>
                </ul>
              </div>
            </div>
          )}

          {/* Demo */}
          {selectedTab === "demo" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Demo: Anwaltsvermittlung
                </h2>
                <p className="text-gray-600 mb-6">
                  Unsere Anwaltsvermittlung zeigt, wie Mandanten den passenden Rechtsanwalt für ihr Anliegen finden können.
                  Sehen Sie hier eine beispielhafte Demo unserer Lösung.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <AnwaelteDemo anwaelte={anwaelteData} />
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-md transition font-medium">
                  Demo mit eigenen Daten testen
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Vereinbaren Sie einen Termin für eine individuelle Beratung und Demo.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
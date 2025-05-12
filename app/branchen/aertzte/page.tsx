"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useState } from "react";
import { Calendar, Clock, Phone, Mail } from "lucide-react";
import AerzteDemo from "@/components/AerzteDemo";

// Beispiel-Daten
const aerzte = [
  {
    id: "1",
    name: "Dr. Markus Schmidt",
    fachrichtung: "Allgemeinmedizin",
    verfuegbarkeit: ["Mo: 8-12, 14-18", "Di: 8-12, 14-18", "Mi: 8-12", "Do: 8-12, 14-18", "Fr: 8-12"]
  },
  {
    id: "2",
    name: "Dr. Anna Weber",
    fachrichtung: "Innere Medizin",
    verfuegbarkeit: ["Mo: 9-14", "Di: 9-17", "Mi: 9-14", "Do: 9-17", "Fr: 9-13"]
  },
  {
    id: "3",
    name: "Dr. Thomas Müller",
    fachrichtung: "Kardiologie",
    verfuegbarkeit: ["Mo: 8-13, 15-18", "Di: 8-13", "Mi: 8-13, 15-18", "Do: 8-13", "Fr: 8-13"]
  }
];

export default function AertztePage() {
  const [selectedTab, setSelectedTab] = useState("uebersicht");

  return (
    <>
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digitale Lösungen für Arztpraxen
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Optimieren Sie Ihre Praxisorganisation und sparen Sie wertvolle Zeit durch unsere speziell entwickelten digitalen Lösungen für den medizinischen Bereich.
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
                  Effiziente Praxisverwaltung
                </h2>
                <p className="text-gray-600 mb-6">
                  Mit unserer digitalen Lösung für Arztpraxen optimieren Sie Ihren Praxisalltag:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Intelligente Terminplanung mit Online-Buchung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Reduzierung von Wartezeiten und No-Shows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Automatische Patientenkommunikation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Digitale Dokumentation und sicherer Datenaustausch</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Vorteile unserer Lösung
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Zeitersparnis</h4>
                    <p className="text-gray-600 text-sm">
                      Reduzieren Sie administrative Aufgaben um bis zu 40% durch Automatisierung.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Bessere Patientenbindung</h4>
                    <p className="text-gray-600 text-sm">
                      Steigern Sie die Patientenzufriedenheit durch moderne, digitale Kommunikationswege.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Datensicherheit</h4>
                    <p className="text-gray-600 text-sm">
                      DSGVO-konforme Lösungen mit höchsten Sicherheitsstandards für Patientendaten.
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Online-Terminbuchung</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Patienten können Termine online buchen und erhalten automatische Bestätigungen und Erinnerungen.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 24/7 Terminvergabe</li>
                  <li>• Automatische Erinnerungen</li>
                  <li>• Kapazitätsmanagement</li>
                  <li>• Reduzierung von No-Shows</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Digitales Wartezimmer</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Optimieren Sie Abläufe und reduzieren Sie Wartezeiten durch digitale Check-ins und Wartezimmermanagement.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Digitaler Check-in</li>
                  <li>• Echtzeit-Wartezeitenübersicht</li>
                  <li>• Priorisierung von Notfällen</li>
                  <li>• Patientenbenachrichtigungen</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Abrechnungsoptimierung</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Automatisieren Sie Abrechnungsprozesse und minimieren Sie Fehler bei der Abrechnung.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Automatische Leistungsdokumentation</li>
                  <li>• KV-konforme Abrechnung</li>
                  <li>• Privatliquidation</li>
                  <li>• Umsatzanalysen</li>
                </ul>
              </div>
            </div>
          )}

          {/* Demo */}
          {selectedTab === "demo" && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Demo: Ärzteplan
                </h2>
                <p className="text-gray-600 mb-6">
                  In dieser Demo sehen Sie einen beispielhaften Überblick über die Ärzteverfügbarkeit in einer Gemeinschaftspraxis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <AerzteDemo aerzte={aerzte} />
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
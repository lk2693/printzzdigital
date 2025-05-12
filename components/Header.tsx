"use client";

import { useState } from "react";
import { ChevronDown, FileText, ClipboardList, Calendar, BarChart3, Brain, FileSearch, Database, Stethoscope, Scale, Wrench, Store, Truck, Scissors } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);
  const [branchenDropdownOpen, setBranchenDropdownOpen] = useState(false);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  const closeAllDropdowns = () => {
    setSoftwareDropdownOpen(false);
    setAiDropdownOpen(false);
    setBranchenDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="text-xl font-medium text-blue-500">
            PrintzzDigital
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <a href="/" className="px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium">Home</a>

            {/* KI-Automatisierung Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setAiDropdownOpen(!aiDropdownOpen);
                  setSoftwareDropdownOpen(false);
                  setBranchenDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium"
              >
                <span>KI Automatisierung</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {aiDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-4 w-[400px] bg-white border border-gray-100 shadow-xl rounded-2xl p-4 z-50
                  grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <a href="/demos/ki-chatbot" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <Brain className="w-5 h-5" />
                      KI-Chatbot
                    </div>
                    <p className="text-sm text-gray-500">Intelligente Kundenkommunikation</p>
                  </a>

                  <a href="/demos/dokument-analyse" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <FileSearch className="w-5 h-5" />
                      Dokumentenanalyse
                    </div>
                    <p className="text-sm text-gray-500">Automatische Informationsextraktion</p>
                  </a>

                  <a href="/demos/daten-analyse" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <BarChart3 className="w-5 h-5" />
                      KI-Datenanalyse
                    </div>
                    <p className="text-sm text-gray-500">Intelligente Geschäftsdatenauswertung</p>
                  </a>

                  <a href="/demos/ki-assistent" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <Database className="w-5 h-5" />
                      KI-Assistent
                    </div>
                    <p className="text-sm text-gray-500">Maßgeschneiderte KI-Lösungen für KMU</p>
                  </a>
                </motion.div>
              )}
            </div>

            {/* Branchenlösungen Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setBranchenDropdownOpen(!branchenDropdownOpen);
                  setAiDropdownOpen(false);
                  setSoftwareDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium"
              >
                <span>Branchenlösungen</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {branchenDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-4 w-[400px] bg-white border border-gray-100 shadow-xl rounded-2xl p-4 z-50
                  grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <a href="/branchen/aertzte" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <Stethoscope className="w-5 h-5" />
                      Für Ärzte
                    </div>
                    <p className="text-sm text-gray-500">Optimierte Praxisorganisation</p>
                  </a>

                  <a href="/branchen/anwaelte" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <Scale className="w-5 h-5" />
                      Für Anwälte
                    </div>
                    <p className="text-sm text-gray-500">Dokumentenanalyse & Rechtsrecherche</p>
                  </a>

                  <a href="/branchen/handwerk" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <Wrench className="w-5 h-5" />
                      Für Handwerker
                    </div>
                    <p className="text-sm text-gray-500">Angebotserstellung & Planung</p>
                  </a>

                  <a href="/branchen/einzelhandel" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <Store className="w-5 h-5" />
                      Für Einzelhandel
                    </div>
                    <p className="text-sm text-gray-500">Bestandsoptimierung & Kundenanalyse</p>
                  </a>
                </motion.div>
              )}
            </div>

            {/* CRM & Software Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setSoftwareDropdownOpen(!softwareDropdownOpen);
                  setAiDropdownOpen(false);
                  setBranchenDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium"
              >
                <span>CRM & Software</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {softwareDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-4 w-[400px] bg-white border border-gray-100 shadow-xl rounded-2xl p-4 z-50
                  grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <a href="/demos/rechnung" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <FileText className="w-5 h-5" />
                      Rechnungs-Demo
                    </div>
                    <p className="text-sm text-gray-500">Automatisierte Rechnungserstellung</p>
                  </a>

                  <a href="/demos/angebot" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <ClipboardList className="w-5 h-5" />
                      Angebots-Demo
                    </div>
                    <p className="text-sm text-gray-500">Schnell und digital Angebote versenden</p>
                  </a>

                  <a href="/demos/termin" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <Calendar className="w-5 h-5" />
                      Terminbuchungs-Demo
                    </div>
                    <p className="text-sm text-gray-500">Online-Kalender mit Bestätigungen</p>
                  </a>

                  <a href="/demos/dashboard" className="p-4 rounded-xl bg-white hover:bg-gray-50 transition flex flex-col gap-2 border border-gray-100">
                    <div className="flex items-center gap-2 text-blue-500 font-medium">
                      <BarChart3 className="w-5 h-5" />
                      Dashboard-Demo
                    </div>
                    <p className="text-sm text-gray-500">Business Intelligence visualisiert</p>
                  </a>
                </motion.div>
              )}
            </div>

            <a href="/#kontakt" className="px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium">Kontakt</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block ml-6">
            <motion.a
              href="/#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition font-medium"
            >
              Jetzt starten
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden bg-white p-2 rounded-full border border-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-gray-700 ${menuOpen ? 'hidden' : 'block'}`}>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-gray-700 ${menuOpen ? 'block' : 'hidden'}`}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Apple Style */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white px-6 pb-6 pt-2 shadow-sm border-t border-gray-100"
        >
          <div className="space-y-5">
            <a href="/" className="block text-gray-700 hover:text-blue-500 font-medium py-2">Home</a>

            
            {/* KI-Demos im Mobile-Menü */}
            <div className="py-2">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">KI Automatisierung</p>
              <div className="mt-3 space-y-3 pl-1">
                <a href="/demos/ki-chatbot" className="block text-gray-700 hover:text-blue-500 font-medium">KI-Chatbot</a>
                <a href="/demos/dokument-analyse" className="block text-gray-700 hover:text-blue-500 font-medium">Dokumentenanalyse</a>
                <a href="/demos/daten-analyse" className="block text-gray-700 hover:text-blue-500 font-medium">KI-Datenanalyse</a>
                <a href="/demos/ki-assistent" className="block text-gray-700 hover:text-blue-500 font-medium">KI-Assistent</a>
              </div>
            </div>
            
            {/* Branchenlösungen im Mobile-Menü */}
            <div className="py-2">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">Branchenlösungen</p>
              <div className="mt-3 space-y-3 pl-1">
                <a href="/branchen/aertzte" className="block text-gray-700 hover:text-blue-500 font-medium">Für Ärzte</a>
                <a href="/branchen/anwaelte" className="block text-gray-700 hover:text-blue-500 font-medium">Für Anwälte</a>
                <a href="/branchen/handwerk" className="block text-gray-700 hover:text-blue-500 font-medium">Für Handwerker</a>
                <a href="/branchen/einzelhandel" className="block text-gray-700 hover:text-blue-500 font-medium">Für Einzelhandel</a>
              </div>
            </div>
            
            {/* CRM & Software im Mobile-Menü */}
            <div className="py-2">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">CRM & Software</p>
              <div className="mt-3 space-y-3 pl-1">
                <a href="/demos/rechnung" className="block text-gray-700 hover:text-blue-500 font-medium">Rechnungs-Demo</a>
                <a href="/demos/angebot" className="block text-gray-700 hover:text-blue-500 font-medium">Angebots-Demo</a>
                <a href="/demos/termin" className="block text-gray-700 hover:text-blue-500 font-medium">Terminbuchungs-Demo</a>
                <a href="/demos/dashboard" className="block text-gray-700 hover:text-blue-500 font-medium">Dashboard-Demo</a>
              </div>
            </div>
            
            <a href="/#kontakt" className="block text-gray-700 hover:text-blue-500 font-medium py-2">Kontakt</a>
            
            <motion.a
              href="/#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6 py-3 rounded-full hover:shadow-md transition font-medium mt-4"
            >
              Jetzt starten
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
"use client";

import { useState } from "react";
import { ChevronDown, Globe, Store, Search, Users, Database, Bot, BarChart3, Wrench, FileText, Calendar, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [onlineDropdownOpen, setOnlineDropdownOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  const closeAllDropdowns = () => {
    setOnlineDropdownOpen(false);
    setBusinessDropdownOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            PrintzzDigital
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <a href="/" className="px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium">Home</a>

            {/* Online-Präsenz Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setOnlineDropdownOpen(!onlineDropdownOpen);
                  setBusinessDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium"
              >
                <span>Online-Präsenz</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {onlineDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-4 w-[420px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 z-50"
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Ihre digitale Sichtbarkeit</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <a href="/webseiten" className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition flex flex-col gap-2 border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                          <Globe className="w-5 h-5" />
                          Webseiten
                        </div>
                        <p className="text-sm text-gray-600">Moderne, schnelle Websites</p>
                      </a>

                      <a href="/online-shops" className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition flex flex-col gap-2 border border-emerald-100">
                        <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                          <Store className="w-5 h-5" />
                          Online-Shops
                        </div>
                        <p className="text-sm text-gray-600">E-Commerce Lösungen</p>
                      </a>

                      <a href="/seo-marketing" className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition flex flex-col gap-2 border border-orange-100">
                        <div className="flex items-center gap-2 text-orange-600 font-semibold">
                          <Search className="w-5 h-5" />
                          SEO & Marketing
                        </div>
                        <p className="text-sm text-gray-600">Besser gefunden werden</p>
                      </a>

                      <a href="/social-media" className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition flex flex-col gap-2 border border-purple-100">
                        <div className="flex items-center gap-2 text-purple-600 font-semibold">
                          <Users className="w-5 h-5" />
                          Social Media
                        </div>
                        <p className="text-sm text-gray-600">Digitale Präsenz aufbauen</p>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Geschäftsprozesse Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setBusinessDropdownOpen(!businessDropdownOpen);
                  setOnlineDropdownOpen(false);
                }}
                className="inline-flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium"
              >
                <span>Geschäftsprozesse</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {businessDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-4 w-[420px] bg-white border border-gray-100 shadow-xl rounded-2xl p-6 z-50"
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Effizienz steigern</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <a href="/crm-systeme" className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 transition flex flex-col gap-2 border border-indigo-100">
                        <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                          <Database className="w-5 h-5" />
                          CRM-Systeme
                        </div>
                        <p className="text-sm text-gray-600">Kundenverwaltung digital</p>
                      </a>

                      <a href="/automatisierung" className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100 transition flex flex-col gap-2 border border-purple-100">
                        <div className="flex items-center gap-2 text-purple-600 font-semibold">
                          <Bot className="w-5 h-5" />
                          KI-Automatisierung
                        </div>
                        <p className="text-sm text-gray-600">Prozesse automatisieren</p>
                      </a>

                      <a href="/datenanalyse" className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition flex flex-col gap-2 border border-green-100">
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                          <BarChart3 className="w-5 h-5" />
                          Datenanalyse
                        </div>
                        <p className="text-sm text-gray-600">Business Intelligence</p>
                      </a>

                      <a href="/software-entwicklung" className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-gray-50 hover:from-slate-100 hover:to-gray-100 transition flex flex-col gap-2 border border-slate-100">
                        <div className="flex items-center gap-2 text-slate-600 font-semibold">
                          <Settings className="w-5 h-5" />
                          Custom Software
                        </div>
                        <p className="text-sm text-gray-600">Maßgeschneiderte Tools</p>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <a href="/portfolio" className="px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium">Portfolio</a>
            <a href="/#kontakt" className="px-4 py-2 text-gray-700 hover:text-blue-500 transition font-medium">Kontakt</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block ml-6">
            <motion.a
              href="/#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition font-medium"
            >
              Projekt starten
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white/95 backdrop-blur-sm px-6 pb-6 pt-2 shadow-sm border-t border-gray-100"
        >
          <div className="space-y-5">
            <a href="/" className="block text-gray-700 hover:text-blue-500 font-medium py-2">Home</a>

            {/* Online-Präsenz im Mobile-Menü */}
            <div className="py-2">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Online-Präsenz</p>
              <div className="space-y-3 pl-1">
                <a href="/webseiten" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <Globe className="w-4 h-4 text-blue-500" />
                  Webseiten
                </a>
                <a href="/online-shops" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <Store className="w-4 h-4 text-emerald-500" />
                  Online-Shops
                </a>
                <a href="/seo-marketing" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <Search className="w-4 h-4 text-orange-500" />
                  SEO & Marketing
                </a>
                <a href="/social-media" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <Users className="w-4 h-4 text-purple-500" />
                  Social Media
                </a>
              </div>
            </div>
            
            {/* Geschäftsprozesse im Mobile-Menü */}
            <div className="py-2">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Geschäftsprozesse</p>
              <div className="space-y-3 pl-1">
                <a href="/crm-systeme" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <Database className="w-4 h-4 text-indigo-500" />
                  CRM-Systeme
                </a>
                <a href="/automatisierung" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <Bot className="w-4 h-4 text-purple-500" />
                  KI-Automatisierung
                </a>
                <a href="/datenanalyse" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <BarChart3 className="w-4 h-4 text-green-500" />
                  Datenanalyse
                </a>
                <a href="/software-entwicklung" className="flex items-center gap-3 text-gray-700 hover:text-blue-500 font-medium py-1">
                  <Settings className="w-4 h-4 text-slate-500" />
                  Custom Software
                </a>
              </div>
            </div>
            
            <a href="/portfolio" className="block text-gray-700 hover:text-blue-500 font-medium py-2">Portfolio</a>
            <a href="/#kontakt" className="block text-gray-700 hover:text-blue-500 font-medium py-2">Kontakt</a>
            
            <motion.a
              href="/#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-full hover:shadow-md transition font-medium mt-4"
            >
              Projekt starten
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
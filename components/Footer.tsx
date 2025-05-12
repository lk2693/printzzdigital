"use client";

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">PrintzzDigital</h3>
            <p className="mb-4 text-gray-400 max-w-md">
              Wir helfen Unternehmen durch digitale Lösungen Zeit und Kosten zu sparen. 
              Von der Angebotserstellung bis zur Rechnungsstellung - alles automatisiert und digital.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/#projects" className="text-gray-400 hover:text-white transition">Leistungen</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">Über uns</a></li>
              <li><a href="/#kontakt" className="text-gray-400 hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Demos</h4>
            <ul className="space-y-2">
              <li><a href="/demos/rechnung" className="text-gray-400 hover:text-white transition">Rechnungs-Demo</a></li>
              <li><a href="/demos/angebot" className="text-gray-400 hover:text-white transition">Angebots-Demo</a></li>
              <li><a href="/demos/termin" className="text-gray-400 hover:text-white transition">Terminbuchungs-Demo</a></li>
              <li><a href="/demos/dashboard" className="text-gray-400 hover:text-white transition">Dashboard-Demo</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PrintzzDigital GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/impressum" className="text-sm text-gray-500 hover:text-white transition">Impressum</a>
            <a href="/datenschutz" className="text-sm text-gray-500 hover:text-white transition">Datenschutz</a>
            <a href="/agb" className="text-sm text-gray-500 hover:text-white transition">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
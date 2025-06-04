"use client";

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">PrintzDigital</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Ihr Partner für digitale Transformation und KI-Lösungen
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/automatisierung" className="text-gray-400 hover:text-white transition-colors">
                  KI-Automatisierung
                </Link>
              </li>
              <li>
                <Link href="/datenanalyse" className="text-gray-400 hover:text-white transition-colors">
                  Datenanalyse
                </Link>
              </li>
              <li>
                <Link href="/cloud" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/beratung" className="text-gray-400 hover:text-white transition-colors">
                  IT-Beratung
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="text-gray-400 hover:text-white transition-colors">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/karriere" className="text-gray-400 hover:text-white transition-colors">
                  Karriere
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+49 (0) 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>info@printzdigital.de</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Musterstraße 123<br />12345 München</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PrintzDigital. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">
                Impressum
              </Link>
              <Link href="/agb" className="text-gray-400 hover:text-white text-sm transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  Smartphone,
  Store,
  Zap,
  CheckCircle,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
  Monitor,
  Palette,
  Search,
  Eye,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function WebseitenPage() {
  const [activeExample, setActiveExample] = useState(0);
  const [activeDemo, setActiveDemo] = useState("steuerberatung");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Beispiele-Daten
  const examples = [
    {
      title: "Steuerberatung Müller",
      category: "Landing Page",
      location: "Braunschweig",
      result: "+180% Anfragen",
      duration: "1 Woche",
      color: "bg-blue-500",
    },
    {
      title: "Handwerk Schmidt GmbH",
      category: "Corporate Website",
      location: "Hannover",
      result: "+240% Leads",
      duration: "2 Wochen",
      color: "bg-emerald-500",
    },
    {
      title: "Heimtextilien Wagner",
      category: "Online-Shop",
      location: "Wolfsburg",
      result: "+320% Umsatz",
      duration: "3 Wochen",
      color: "bg-purple-500",
    },
  ];

  // Website-Arten-Daten
  const websiteTypes = [
    {
      title: "Landing Page",
      description: "Eine fokussierte Seite, die Besucher zu Kunden macht.",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Single Page Design",
        "Mobile optimiert",
        "Kontaktformular",
        "SEO-Grundausstattung",
      ],
      timeline: "1-2 Wochen",
    },
    {
      title: "Corporate Website",
      description:
        "Mehrseitige Website mit allen wichtigen Unternehmensinformationen.",
      icon: Globe,
      color: "from-emerald-500 to-teal-500",
      features: [
        "Mehrere Seiten",
        "Content Management",
        "News/Blog",
        "Team-Vorstellung",
      ],
      timeline: "2-3 Wochen",
      popular: true,
    },
    {
      title: "Online-Shop",
      description: "Vollständiger Online-Shop mit Zahlungsabwicklung.",
      icon: Store,
      color: "from-purple-500 to-pink-500",
      features: [
        "Produktkatalog",
        "Warenkorb & Checkout",
        "Zahlungssysteme",
        "Bestellverwaltung",
      ],
      timeline: "3-4 Wochen",
    },
  ];

  // Features-Daten
  const features = [
    { icon: Smartphone, title: "Mobile First", description: "Optimiert für alle Geräte" },
    { icon: Zap, title: "Blitzschnell", description: "Unter 2 Sekunden Ladezeit" },
    { icon: Search, title: "SEO-optimiert", description: "Besser gefunden werden" },
    { icon: Palette, title: "Individuell", description: "Passend zu Ihrer Marke" },
  ];

  // Live-Demo-Daten
  const demos: Record<
    string,
    { title: string; nav: string[]; headline: string; subline: string; cta: string }
  > = {
    steuerberatung: {
      title: "Steuerberatung Müller",
      nav: ["Home", "Leistungen", "Über uns", "Kontakt"],
      headline: "Ihre Steuern in besten Händen",
      subline: "Professionelle Steuerberatung für Privatpersonen und Unternehmen",
      cta: "Termin vereinbaren",
    },
    handwerk: {
      title: "Handwerk Schmidt GmbH",
      nav: ["Home", "Leistungen", "Projekte", "Kontakt"],
      headline: "Qualität, die überzeugt",
      subline: "Von der Planung bis zur Umsetzung - Ihr Projekt in Meisterhand",
      cta: "Kostenvoranschlag",
    },
    shop: {
      title: "Heimtextilien Wagner",
      nav: ["Shop", "Kategorien", "Sale", "Kontakt"],
      headline: "Gemütlichkeit für Ihr Zuhause",
      subline: "Hochwertige Heimtextilien online bestellen",
      cta: "Jetzt shoppen",
    },
  };

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-12 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden px-4 sm:px-6">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-blue-100 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>PROFESSIONELLE WEBSEITEN</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 sm:mb-8">
                Ihre neue
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Website{" "}
                </span>
                die überzeugt
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0">
                Von der einfachen Landing Page bis zum vollständigen Online-Shop –
                wir entwickeln Webseiten, die Ihre Kunden begeistern.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>50+ erfolgreiche Websites</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>4.9/5 Kundenbewertung</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>Fertig in 1-4 Wochen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16 sm:py-20 bg-white/50 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Live
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Website-Demo
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
                Sehen Sie, wie Ihre Website aussehen könnte.
              </p>

              {/* Demo Selection Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4 mb-8 sm:mb-12">
                {[
                  { key: "steuerberatung", label: "Steuerberatung", icon: "📊" },
                  { key: "handwerk", label: "Handwerk", icon: "🔨" },
                  { key: "shop", label: "Online-Shop", icon: "🛍️" },
                ].map((demo) => (
                  <button
                    key={demo.key}
                    onClick={() => setActiveDemo(demo.key)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                      activeDemo === demo.key
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    <span className="mr-2">{demo.icon}</span>
                    {demo.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Website Types Grid */}
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {websiteTypes.map((type, index) => (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white mb-6`}
                  >
                    <type.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>

                  <div className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">
                        {type.timeline}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-full hover:shadow-lg transition-all">
                      Jetzt anfragen
                    </button>
                  </div>

                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        BELIEBT
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-12">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Bereit für Ihre neue Website?
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam Ihre digitale Präsenz aufbauen. Kostenloses
                  Beratungsgespräch inklusive.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl transition-all"
                  >
                    <Sparkles className="mr-2 w-5 h-5" />
                    Kostenloses Beratungsgespräch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>

                  <a
                    href="tel:+49123456789"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                  >
                    📞 Direkt anrufen
                  </a>
                </div>

                <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold mb-1">E-Mail</div>
                    <div className="text-blue-100">info@webdesign-braunschweig.de</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Telefon</div>
                    <div className="text-blue-100">+49 (0) 531 123 456</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Büro</div>
                    <div className="text-blue-100">Braunschweig, Deutschland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

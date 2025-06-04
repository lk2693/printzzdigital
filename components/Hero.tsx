"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: "🌐",
      title: "Moderne Webseiten",
      subtitle: "Responsive & schnell",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Mobile First",
      subtitle: "Perfekt auf allen Geräten",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "SEO Optimiert",
      subtitle: "Besser gefunden werden",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🎯",
      title: "Kundengewinnung",
      subtitle: "Mehr Leads & Umsatz",
      color: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            SPEZIALIST FÜR KMU WEBSEITEN
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 max-w-4xl leading-tight">
            Ihre neue
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">
              {" "}Webseite{" "}
            </span>
            die Kunden
            <br />
            <span className="text-blue-600">begeistert.</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-relaxed">
            Als Ihr regionaler Partner entwickeln wir professionelle Webseiten für kleine und mittlere Unternehmen. 
            Von der ersten Idee bis zum Online-Erfolg – <strong>alles aus einer Hand.</strong>
          </p>
        </div>

        {/* Interactive Feature Grid */}
        <div className="relative mx-auto max-w-4xl mb-16">
          {/* Central mockup */}
          <div className="relative z-20 bg-white rounded-3xl shadow-2xl max-w-2xl mx-auto overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="bg-gray-100 px-6 py-4 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-white rounded-full px-4 py-1 text-sm text-gray-600 flex-1">
                ihr-unternehmen.de
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-[300px] flex flex-col justify-center items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              <div className="text-center z-10">
                <div className="text-6xl mb-4 animate-bounce">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600">
                  {features[activeFeature].subtitle}
                </p>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-6 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          {/* Interactive feature cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {features.map((feature, index) => {
              const positions = [
                "top-0 left-0 translate-x-4 -translate-y-4",
                "top-0 right-0 -translate-x-4 -translate-y-4", 
                "bottom-0 left-0 translate-x-4 translate-y-4",
                "bottom-0 right-0 -translate-x-4 translate-y-4"
              ];
              
              return (
                <div
                  key={index}
                  className={`absolute ${positions[index]} transition-all duration-500 cursor-pointer ${
                    activeFeature === index 
                      ? 'scale-110 z-30' 
                      : 'scale-90 hover:scale-100 z-10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`bg-white rounded-2xl shadow-lg p-4 w-48 ${
                    activeFeature === index ? 'ring-2 ring-blue-400 shadow-2xl' : ''
                  }`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-xl mb-3`}>
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{feature.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Über 50 zufriedene KMU-Kunden</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Persönliche Betreuung vor Ort</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Faire Preise ohne versteckte Kosten</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced call to action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#kontakt"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">Kostenloses Beratungsgespräch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#referenzen"
              className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <span>Referenzen ansehen</span>
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            📞 Anruf genügt: <a href="tel:+49123456789" className="text-blue-600 hover:underline font-medium">+49 123 456 789</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
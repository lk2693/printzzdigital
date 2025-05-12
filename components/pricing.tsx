"use client"

import React, { useState, JSX } from 'react';
import { Check, Clock, Store, FileCode, Shield, Bot, Globe, Smartphone, Code, Sparkles, Zap } from 'lucide-react';
import AnfrageModal from './AnfrageModal';

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<{
    title: string;
    description: string;
    price?: string;
    deliveryTime: string;
    icon: JSX.Element;
    gradient: string;
    features: string[];
    priceUnit?: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectStart = (item: { title: string; description: string; price: string; deliveryTime: string; icon: JSX.Element; gradient: string; features: string[]; priceUnit?: string }) => {
    setSelectedPackage(item);
    setIsModalOpen(true);
  };

  const services = [
    {
      title: "Web Solutions",
      accent: "from-blue-500 to-indigo-600",
      items: [
        {
          title: "Landing Page Pro",
          description: "Moderne, performante Webseite",
          deliveryTime: "7-10 Tage",
          icon: <Globe className="w-6 h-6" />,
          gradient: "from-blue-400 to-indigo-500",
          features: [
            "Next.js Performance",
            "Framer Motion Animationen",
            "Real-time Analytics",
            "Progressive Web App"
          ]
        },
        {
          title: "Corporate Premium",
          description: "Enterprise-Grade Website",
          deliveryTime: "2-3 Wochen",
          icon: <Smartphone className="w-6 h-6" />,
          gradient: "from-indigo-400 to-purple-500",
          features: [
            "Headless CMS",
            "Custom Animations",
            "Multi-language Support",
            "Advanced SEO"
          ]
        },
        {
          title: "E-Commerce Plus",
          description: "Conversion-optimierter Shop",
          deliveryTime: "3-4 Wochen",
          icon: <Store className="w-6 h-6" />,
          gradient: "from-purple-400 to-pink-500",
          features: [
            "AI-powered Empfehlungen",
            "Optimierte Checkout-Prozesse",
            "One-Click Checkout",
            "Real-time Bestandsverwaltung"
          ],
           
        }
      ]
    },
    {
      title: "App Development",
      accent: "from-purple-500 to-pink-600",
      items: [
        {
          title: "Web App Advanced",
          description: "SaaS-ready Application",
          deliveryTime: "4-6 Wochen",
          icon: <Code className="w-6 h-6" />,
          gradient: "from-orange-400 to-red-500",
          features: [
            "Microservices Architecture",
            "GraphQL API",
            "Real-time Features",
            "Cloud-native Design"
          ]
        },
        {
          title: "Data Intelligence",
          description: "KI-gestützte Dashboards",
          deliveryTime: "3-4 Wochen",
          icon: <FileCode className="w-6 h-6" />,
          gradient: "from-red-400 to-pink-500",
          features: [
            "AI-Predictions",
            "Automated Insights",
            "Real-time Sync",
            "Custom ML Models"
          ]
        }
      ]
    },
    {
      title: "Digital Services",
      accent: "from-teal-500 to-emerald-600",
      items: [
        {
          title: "Automation Suite",
          description: "Python-powered Solutions",
          deliveryTime: "nach Aufwand",
          icon: <Bot className="w-6 h-6" />,
          gradient: "from-teal-400 to-cyan-500",
          features: [
            "AI-Integration",
            "Process Automation",
            "Data Engineering",
            "Custom API Development"
          ]
        },
        {
          title: "Growth Package",
          description: "Komplett-SEO-Lösung",
          deliveryTime: "Laufend",
          icon: <Shield className="w-6 h-6" />,
          gradient: "from-cyan-400 to-blue-500",
          features: [
            "AI Content Strategy",
            "Competitor Analysis",
            "Technical SEO",
            "Conversion Rate Optimization"
          ]
        },
        {
          title: "Digital Presence",
          description: "Google Business Excellence",
          deliveryTime: "1-2 Tage",
          icon: <Sparkles className="w-6 h-6" />,
          gradient: "from-blue-400 to-indigo-500",
          features: [
            "Premium Setup",
            "Rich Media Integration",
            "Reputation Management",
            "Local SEO Boost"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <AnfrageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
      <section id="preise" className="py-24 sm:py-32 bg-white">
        {/* Dynamic background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-4 top-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Premium Web Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Modernste Technologien für Ihren digitalen Erfolg
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Alle Angebote
            </div>
          </div>

          {services.map((category, index) => (
            <div key={index} className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.accent}`}>
                  {category.title}
                </h3>
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.accent}`}></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg shadow-blue-500/25`}>
                          {item.icon}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{item.deliveryTime}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-8">
                        {item.description}
                      </p>
                      
                      <div className="mb-8">
                       
                        {item.priceUnit && (
                          <span className="text-lg text-gray-600">{item.priceUnit}</span>
                        )}
                      
                      </div>

                      <div className="space-y-4">
                        {item.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-3">
                            <div className="mt-1 p-1 rounded-full bg-green-100">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => handleProjectStart(item)}
                        className={`mt-8 w-full rounded-full py-4 font-medium text-white bg-gradient-to-r ${item.gradient} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5`}
                      >
                        Projekt starten
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 lg:p-12 text-white">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Individuelle Projekte
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl">
                Jedes Projekt ist einzigartig. Wir erstellen 
                gerne ein maßgeschneidertes Angebot für Ihre spezifischen Anforderungen.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -mr-32 -mb-32"></div>
          </div>
        </div>
      </section>
    </>
  );
}
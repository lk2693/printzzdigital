"use client";

import { useState } from "react";
import { Send, Phone, Mail, MessageCircle, CheckCircle, Clock, MapPin, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  });

  const services = [
    "Neue Website erstellen",
    "Bestehende Website modernisieren", 
    "Online-Shop entwickeln",
    "KI-Automatisierung implementieren",
    "SEO & Online-Marketing",
    "Social Media Strategie",
    "IT-Security & Datenschutz",
    "Wartung & Support",
    "Sonstiges"
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-green-400/5 to-blue-400/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            KONTAKT
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Lassen Sie uns
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}sprechen
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bereit für Ihr digitales Projekt? Wir antworten schnell und unverbindlich.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Projekt-Anfrage</h3>
                <p className="text-blue-100">Antwort innerhalb von 24 Stunden garantiert</p>
              </div>

              <div className="p-8">
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Nachricht erfolgreich gesendet!</h4>
                    <p className="text-gray-600">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Ihr Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Max Mustermann"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-Mail Adresse *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="max@beispiel.de"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefonnummer (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+49 123 456789"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Gewünschte Leistung *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Bitte wählen Sie Ihr Projekt...</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                      <p className="mt-1 text-xs text-gray-500">
                        Hilft uns, Sie besser zu beraten und ein passenderes Angebot zu erstellen.
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Ihr Projekt *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Beschreiben Sie Ihr Projekt, Ihre Ziele und Wünsche..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500 mt-1"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        Ich stimme der <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Datenschutzerklärung</a> zu. *
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full rounded-xl py-4 text-white font-medium transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg shadow-md'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Wird gesendet...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" />
                          <span>Nachricht senden</span>
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Direkter Kontakt</h4>
              <div className="space-y-4">
                <a href="tel:+49123456789" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Telefon</div>
                    <div className="text-sm text-blue-600">+49 123 456 789</div>
                  </div>
                </a>

                <a href="mailto:info@beispiel.de" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">E-Mail</div>
                    <div className="text-sm text-blue-600">info@beispiel.de</div>
                  </div>
                </a>

                <a href="https://wa.me/49123456789" className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp</div>
                    <div className="text-sm text-green-600">Direkt-Chat</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Standort & Zeiten
              </h4>
              <div className="space-y-3 text-gray-600">
                <div>
                  <div className="font-medium text-gray-900">Braunschweig, Deutschland</div>
                  <div className="text-sm">Deutschlandweit per Video-Call</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Mo-Fr: 9:00 - 18:00 Uhr</span>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-bold mb-3">Unsere Garantie</h4>
              <div className="space-y-2 text-green-100 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Antwort innerhalb von 24 Stunden</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Kostenloses Erstgespräch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Unverbindliches Angebot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
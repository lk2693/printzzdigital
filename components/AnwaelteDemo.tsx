"use client";

import React, { useState } from "react";
import { Scale, Calendar, User, MapPin, X, Check, FileText, Briefcase, Award } from "lucide-react";


export interface Anwalt {
  id: string;
  name: string;
  fachgebiet: string;
  schwerpunkte: string[];
  verfuegbarkeit: string[];
  standort?: string;
  bewertung?: number;
  erfahrung?: string;
}

export interface AnwaelteDemoProps {
  anwaelte: Anwalt[];
}

export default function AnwaelteDemo({ anwaelte }: AnwaelteDemoProps) {
  const [selectedAnwalt, setSelectedAnwalt] = useState<Anwalt | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const [showBeratungModal, setShowBeratungModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFachgebiet, setSelectedFachgebiet] = useState<string | null>(null);
  const [anliegen, setAnliegen] = useState("");

  // Extrahiere alle eindeutigen Fachgebiete für den Filter
  const fachgebiete = Array.from(new Set(anwaelte.map(anwalt => anwalt.fachgebiet)));

  // Filtere Anwälte basierend auf Suchbegriff und Fachgebiet
  const filteredAnwaelte = anwaelte.filter(anwalt => {
    const matchesSearch = searchTerm === "" || 
      anwalt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anwalt.fachgebiet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anwalt.schwerpunkte.some(sp => sp.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFachgebiet = selectedFachgebiet === null || anwalt.fachgebiet === selectedFachgebiet;
    
    return matchesSearch && matchesFachgebiet;
  });

  // Verfügbare Zeiten für die Beratungsbuchung
  const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  // Handle booking submission
  const handleBookBeratung = () => {
    if (!selectedDate || !selectedTime) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setShowBeratungModal(false);
      setSelectedDate("");
      setSelectedTime("");
      setAnliegen("");
    }, 2000);
  };

  // Render star rating
  const renderStars = (rating: number) => (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <>
     
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-sm">
            {/* Search and filter controls */}
            <div className="mb-6 flex flex-wrap gap-4 items-center justify-between">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Suchen nach Name, Fachgebiet oder Schwerpunkt..."
                  className="w-64 lg:w-80 px-4 py-2 pl-10 border border-gray-300 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Filtern nach:</span>
                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={selectedFachgebiet || ""}
                  onChange={(e) => 
                    setSelectedFachgebiet(e.target.value)
                  }
                >
                  <option value="">Alle Fachgebiete</option>
                  {fachgebiete.map((fachgebiet) => (
                    <option key={fachgebiet} value={fachgebiet}>
                      {fachgebiet}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setViewMode("list")}
                  aria-label="Listenansicht"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button
                  className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Kachelansicht"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-4">
              {filteredAnwaelte.length} {filteredAnwaelte.length === 1 ? 'Rechtsanwalt' : 'Rechtsanwälte'} gefunden
            </p>

            {/* No results */}
            {filteredAnwaelte.length === 0 && (
              <div className="text-center py-8 bg-gray-50 rounded-xl">
                <Scale className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900 mt-2">Keine Rechtsanwälte gefunden</h3>
                <p className="text-gray-500">Bitte versuchen Sie andere Suchbegriffe oder entfernen Sie den Filter.</p>
              </div>
            )}

            {/* List view */}
            {viewMode === "list" && filteredAnwaelte.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Anwalt</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fachgebiet</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Schwerpunkte</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Erfahrung</th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAnwaelte.map((anwalt) => (
                      <tr key={anwalt.id} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-blue-500" />
                            </div>
                            <div className="ml-3">
                              <div className="font-medium text-gray-900">{anwalt.name}</div>
                              {anwalt.bewertung && renderStars(anwalt.bewertung)}
                            </div>
                          </div>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {anwalt.fachgebiet}
                          </span>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">
                          <div className="flex flex-wrap gap-1">
                            {anwalt.schwerpunkte.map((schwerpunkt, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs">
                                {schwerpunkt}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">
                          {anwalt.erfahrung}
                        </td>
                        <td className="border border-gray-200 px-4 py-3">
                          <button
                            onClick={() => {
                              setSelectedAnwalt(anwalt);
                              setShowBeratungModal(true);
                            }}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                          >
                            Beratung buchen
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Grid view */}
            {viewMode === "grid" && filteredAnwaelte.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAnwaelte.map((anwalt) => (
                  <div
                    key={anwalt.id}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-24 relative">
                      <div className="absolute -bottom-10 left-6">
                        <div className="h-20 w-20 rounded-full bg-white p-1 shadow-md">
                          <div className="h-full w-full rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="h-8 w-8 text-blue-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-12 px-6 pb-6">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{anwalt.name}</h3>
                          <p className="text-sm text-blue-600 font-medium">{anwalt.fachgebiet}</p>
                        </div>
                        {anwalt.bewertung && renderStars(anwalt.bewertung)}
                      </div>

                      {anwalt.erfahrung && (
                        <div className="flex items-center mt-3 text-sm text-gray-500">
                          <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                          {anwalt.erfahrung} Erfahrung
                        </div>
                      )}

                      {anwalt.standort && (
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                          {anwalt.standort}
                        </div>
                      )}

                      <div className="mt-4">
                        <h4 className="text-xs font-medium text-gray-500 uppercase mb-2">Schwerpunkte</h4>
                        <div className="flex flex-wrap gap-1">
                          {anwalt.schwerpunkte.map((schwerpunkt, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs"
                            >
                              {schwerpunkt}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedAnwalt(anwalt);
                          setShowBeratungModal(true);
                        }}
                        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center"
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Beratung buchen
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Beratungs-Modal */}
            {showBeratungModal && selectedAnwalt && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-xl max-w-md w-full">
                  <div className="px-6 py-4 border-b border-gray-200 flex justify-between">
                    <h3 className="text-lg font-medium">Beratung mit {selectedAnwalt.name}</h3>
                    <button onClick={() => setShowBeratungModal(false)} className="text-gray-400">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {bookingSuccess ? (
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-500" />
                      </div>
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Beratung erfolgreich gebucht!</h4>
                      <p className="text-gray-600">
                        Ihre Beratung bei {selectedAnwalt.name} am {selectedDate} um {selectedTime} Uhr wurde bestätigt.
                      </p>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Datum auswählen</label>
                        <input
                          type="date"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                          min={new Date().toISOString().split("T")[0]}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                        {selectedDate === "" && (
                          <p className="text-sm text-red-500 mt-1">Bitte wählen Sie ein Datum</p>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Uhrzeit auswählen</label>
                        <div className="grid grid-cols-3 gap-2">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              className={`py-2 text-center text-sm rounded-lg ${
                                selectedTime === time
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              }`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {selectedTime === "" && (
                          <p className="text-sm text-red-500 mt-1">Bitte wählen Sie eine Uhrzeit</p>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ihr Anliegen (optional)</label>
                        <textarea
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24"
                          placeholder="Beschreiben Sie kurz Ihr rechtliches Anliegen..."
                          value={anliegen}
                          onChange={(e) => setAnliegen(e.target.value)}
                        />
                      </div>

                      <button
                        onClick={handleBookBeratung}
                        disabled={!selectedDate || !selectedTime}
                        className={`w-full py-2 rounded-lg text-white text-center ${
                          !selectedDate || !selectedTime
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600"
                        }`}
                      >
                        Beratung bestätigen
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Anwalt-Details Modal */}
            {selectedAnwalt && !showBeratungModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-32"></div>
                    <button
                      onClick={() => setSelectedAnwalt(null)}
                      className="absolute top-4 right-4 bg-white p-1 rounded-full shadow-md"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                      <div className="h-32 w-32 rounded-full bg-white p-1 shadow-md">
                        <div className="h-full w-full rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="h-16 w-16 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-20 px-8 pb-8">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedAnwalt.name}
                      </h2>
                      <p className="text-blue-600">{selectedAnwalt.fachgebiet}</p>
                      {selectedAnwalt.bewertung && (
                        <div className="flex justify-center mt-2">
                          {renderStars(selectedAnwalt.bewertung)}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-blue-500" />
                          Schwerpunkte
                        </h3>
                        <ul className="space-y-1">
                          {selectedAnwalt.schwerpunkte.map((schwerpunkt, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 flex items-start"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              {schwerpunkt}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                          Informationen
                        </h3>
                        {selectedAnwalt.erfahrung && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Erfahrung:</span> {selectedAnwalt.erfahrung}
                          </p>
                        )}
                        {selectedAnwalt.standort && (
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Standort:</span> {selectedAnwalt.standort}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-md font-medium text-gray-900 mb-2 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                        Verfügbarkeit
                      </h3>
                      <ul className="space-y-1">
                        {selectedAnwalt.verfuegbarkeit.map((zeit, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            {zeit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          setShowBeratungModal(true);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition flex items-center"
                      >
                        <Calendar className="h-5 w-5 mr-2" />
                        Beratung buchen
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Replace with a valid Footer component or remove if unnecessary */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
      </footer>
    </>
  );
}
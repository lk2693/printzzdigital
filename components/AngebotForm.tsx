"use client";

import { useState } from 'react';

interface AngebotItem {
  id: number;
  beschreibung: string;
  menge: number;
  einheit: string;
  einzelpreis: number;
}

export default function AngebotForm() {
  const [firmenname, setFirmenname] = useState('');
  const [ansprechpartner, setAnsprechpartner] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [angebotsnummer, setAngebotsnummer] = useState(`A-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`);
  const [angebotsdatum, setAngebotsdatum] = useState(new Date().toISOString().split('T')[0]);
  const [gueltigkeitsdauer, setGueltigkeitsdauer] = useState(30);
  const [posten, setPosten] = useState<AngebotItem[]>([
    { id: 1, beschreibung: '', menge: 1, einheit: 'Stk', einzelpreis: 0 }
  ]);
  const [notizen, setNotizen] = useState('');
  const [mwstSatz, setMwstSatz] = useState(19);
  const [showPreview, setShowPreview] = useState(false);

  const addPosten = () => {
    const newId = posten.length > 0 ? Math.max(...posten.map(p => p.id)) + 1 : 1;
    setPosten([...posten, { id: newId, beschreibung: '', menge: 1, einheit: 'Stk', einzelpreis: 0 }]);
  };

  const removePosten = (id: number) => {
    setPosten(posten.filter(p => p.id !== id));
  };

  const updatePosten = (id: number, field: keyof AngebotItem, value: string | number) => {
    setPosten(posten.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const calculateSubtotal = () => {
    return posten.reduce((sum, item) => sum + (item.menge * item.einzelpreis), 0);
  };

  const calculateMwst = () => {
    return calculateSubtotal() * (mwstSatz / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateMwst();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const handleGeneratePreview = () => {
    // Hier würde die Logik für die Angebotsgenerierung implementiert
    setShowPreview(true);
  };

  const handleSendAngebot = () => {
    // Hier würde die Logik für das Versenden des Angebots implementiert
    alert('Angebot wurde erfolgreich versendet!');
    setShowPreview(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      {!showPreview ? (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Kundeninformationen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Firmenname</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={firmenname}
                  onChange={(e) => setFirmenname(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ansprechpartner</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={ansprechpartner}
                  onChange={(e) => setAnsprechpartner(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Angebotsinformationen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Angebotsnummer</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={angebotsnummer}
                  onChange={(e) => setAngebotsnummer(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Angebotsdatum</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={angebotsdatum}
                  onChange={(e) => setAngebotsdatum(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gültig (Tage)</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={gueltigkeitsdauer}
                  onChange={(e) => setGueltigkeitsdauer(parseInt(e.target.value))}
                  min="1"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Leistungen und Produkte</h2>
              <button
                type="button"
                onClick={addPosten}
                className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm"
              >
                + Neuer Posten
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beschreibung</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Menge</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einheit</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einzelpreis (€)</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gesamt (€)</th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody>
                  {posten.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-2 px-3">
                        <input
                          type="text"
                          className="w-full p-1 border border-gray-300 rounded-md"
                          value={item.beschreibung}
                          onChange={(e) => updatePosten(item.id, 'beschreibung', e.target.value)}
                          placeholder="Artikelbeschreibung"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="number"
                          className="w-full p-1 border border-gray-300 rounded-md"
                          value={item.menge}
                          onChange={(e) => updatePosten(item.id, 'menge', parseFloat(e.target.value))}
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <select
                          className="w-full p-1 border border-gray-300 rounded-md"
                          value={item.einheit}
                          onChange={(e) => updatePosten(item.id, 'einheit', e.target.value)}
                        >
                          <option value="Stk">Stk</option>
                          <option value="Std">Std</option>
                          <option value="kg">kg</option>
                          <option value="m">m</option>
                          <option value="Pauschal">Pauschal</option>
                        </select>
                      </td>
                      <td className="py-2 px-3">
                        <input
                          type="number"
                          className="w-full p-1 border border-gray-300 rounded-md"
                          value={item.einzelpreis}
                          onChange={(e) => updatePosten(item.id, 'einzelpreis', parseFloat(e.target.value))}
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="py-2 px-3 text-right">
                        {formatCurrency(item.menge * item.einzelpreis)}
                      </td>
                      <td className="py-2 px-3">
                        <button
                          type="button"
                          onClick={() => removePosten(item.id)}
                          className="text-red-600 hover:text-red-800"
                          disabled={posten.length <= 1}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t">
                    <td colSpan={4} className="py-2 px-3 text-right font-medium">Zwischensumme:</td>
                    <td className="py-2 px-3 text-right font-medium">{formatCurrency(calculateSubtotal())}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="py-2 px-3 text-right font-medium">MwSt ({mwstSatz}%):</td>
                    <td className="py-2 px-3 text-right font-medium">{formatCurrency(calculateMwst())}</td>
                    <td></td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td colSpan={4} className="py-2 px-3 text-right font-bold">Gesamtbetrag:</td>
                    <td className="py-2 px-3 text-right font-bold">{formatCurrency(calculateTotal())}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Zusätzliche Informationen</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notizen zum Angebot</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
                value={notizen}
                onChange={(e) => setNotizen(e.target.value)}
                placeholder="Lieferbedingungen, Zahlungsbedingungen, etc."
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={handleGeneratePreview}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
            >
              Angebot erstellen
            </button>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Angebotsvorschau</h2>
            <div className="text-sm">
              <span className="block font-medium">Angebotsnummer: {angebotsnummer}</span>
              <span className="block">Datum: {new Date(angebotsdatum).toLocaleDateString('de-DE')}</span>
              <span className="block">Gültig bis: {new Date(new Date(angebotsdatum).setDate(new Date(angebotsdatum).getDate() + gueltigkeitsdauer)).toLocaleDateString('de-DE')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Anbieter</h3>
              <div className="text-gray-600">
                <p className="font-medium">Ihre Firma GmbH</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>USt-IdNr: DE123456789</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Kunde</h3>
              <div className="text-gray-600">
                <p className="font-medium">{firmenname}</p>
                <p>z.H. {ansprechpartner}</p>
                <p>E-Mail: {email}</p>
                <p>Tel: {telefon}</p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-700 mb-4">Angebotspositionen</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-3 text-left font-medium text-gray-700">Beschreibung</th>
                  <th className="py-2 px-3 text-center font-medium text-gray-700">Menge</th>
                  <th className="py-2 px-3 text-center font-medium text-gray-700">Einheit</th>
                  <th className="py-2 px-3 text-right font-medium text-gray-700">Einzelpreis</th>
                  <th className="py-2 px-3 text-right font-medium text-gray-700">Gesamt</th>
                </tr>
              </thead>
              <tbody>
                {posten.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-3">{item.beschreibung || "Artikelbeschreibung"}</td>
                    <td className="py-3 px-3 text-center">{item.menge}</td>
                    <td className="py-3 px-3 text-center">{item.einheit}</td>
                    <td className="py-3 px-3 text-right">{formatCurrency(item.einzelpreis)}</td>
                    <td className="py-3 px-3 text-right">{formatCurrency(item.menge * item.einzelpreis)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="py-2 px-3 text-right font-medium">Zwischensumme:</td>
                  <td className="py-2 px-3 text-right font-medium">{formatCurrency(calculateSubtotal())}</td>
                </tr>
                <tr>
                  <td colSpan={4} className="py-2 px-3 text-right font-medium">MwSt ({mwstSatz}%):</td>
                  <td className="py-2 px-3 text-right font-medium">{formatCurrency(calculateMwst())}</td>
                </tr>
                <tr className="bg-gray-100">
                  <td colSpan={4} className="py-3 px-3 text-right font-bold">Gesamtbetrag:</td>
                  <td className="py-3 px-3 text-right font-bold">{formatCurrency(calculateTotal())}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {notizen && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Notizen</h3>
              <div className="p-4 bg-gray-50 rounded-md text-gray-600 whitespace-pre-line">
                {notizen}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Standardbedingungen</h3>
            <div className="text-sm text-gray-600">
              <p>• Dieses Angebot ist {gueltigkeitsdauer} Tage gültig.</p>
              <p>• Zahlungsbedingungen: 14 Tage nach Rechnungserhalt ohne Abzug.</p>
              <p>• Die Lieferung erfolgt nach Verfügbarkeit.</p>
              <p>• Es gelten unsere allgemeinen Geschäftsbedingungen.</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => setShowPreview(false)}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-medium"
            >
              Zurück bearbeiten
            </button>
            <button
              type="button"
              onClick={handleSendAngebot}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium"
            >
              Als PDF speichern
            </button>
            <button
              type="button"
              onClick={handleSendAngebot}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
            >
              Per E-Mail senden
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import { FileText, Download } from "lucide-react";
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  heading: { fontSize: 18, marginBottom: 10 },
  text: { fontSize: 12 },
  company: { fontSize: 14, marginBottom: 10, fontWeight: "bold" },
  itemHeader: { fontSize: 12, marginTop: 10, marginBottom: 4, textDecoration: "underline" }
});

const RechnungPDF = ({ subtotal, tax, total, items }: { subtotal: number; tax: number; total: number; items: { description: string; quantity: number; price: number }[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.company}>PrintzzDigital</Text>
      <Text style={styles.text}>Digitale Lösungen & Automatisierung</Text>
      <Text style={styles.text}>Musterstraße 1, 12345 Berlin</Text>
      <Text style={styles.text}>www.printzzdigital.de | kontakt@printzzdigital.de</Text>

      <Text style={styles.heading}>Rechnung</Text>

      <Text style={styles.itemHeader}>Rechnungsposten</Text>
      {items.map((item, idx) => (
        <Text key={idx} style={styles.text}>
          - {item.quantity} x {item.description || "Position"} à {item.price.toFixed(2)} €
        </Text>
      ))}

      <Text style={styles.text}>Zwischensumme: {subtotal.toFixed(2)} €</Text>
      <Text style={styles.text}>MwSt (19%): {tax.toFixed(2)} €</Text>
      <Text style={styles.text}>Gesamtsumme: {total.toFixed(2)} €</Text>
    </Page>
  </Document>
);

export default function RechnungForm() {
  const [items, setItems] = useState([{ description: "", quantity: 1, price: 0 }]);

  const addItem = () =>
    setItems([...items, { description: "", quantity: 1, price: 0 }]);

  const removeItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const updateItem = (index: number, field: "description" | "quantity" | "price", value: any) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const taxRate = 0.19;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <>
      {/* Hero-Bereich */}
      <section className="bg-indigo-50 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-4">
            <FileText className="w-12 h-12 text-indigo-600 animate-pulse" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Rechnung automatisiert erstellen</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Dieses Tool zeigt, wie du mit wenigen Klicks professionelle Rechnungen für deine Kunden erstellst. Vollständig digital & individuell anpassbar.
          </p>
        </div>
      </section>

      {/* Hauptinhalt mit Live-Zusammenfassung */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 mt-12">
        {/* Formular */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-8">
          <h2 className="text-xl font-semibold text-center text-white bg-blue-600 py-2 rounded-md mb-6">
            Rechnungserstellung
          </h2>

          <form className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <button type="button" className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">Standard-Dienstleistung</button>
              <button type="button" className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">Web-Paket</button>
            </div>

            <input type="text" placeholder="Firmenname" className="w-full border rounded-md p-2" />
            <input type="text" placeholder="Straße und Hausnummer" className="w-full border rounded-md p-2" />
            <input type="text" placeholder="PLZ und Ort" className="w-full border rounded-md p-2" />
            <input type="email" placeholder="Kunden-Email" className="w-full border rounded-md p-2" />

            <input type="text" value="Automatisch generiert" disabled className="w-full border rounded-md p-2 bg-gray-100" />
            <input type="date" placeholder="Fälligkeitsdatum" className="w-full border rounded-md p-2" />
            <input type="number" placeholder="Mehrwertsteuersatz (%)" defaultValue={19} className="w-full border rounded-md p-2" />

            <div className="space-y-2">
              <label className="font-semibold">Rechnungsposten</label>
              <div className="flex gap-2 font-semibold text-sm text-gray-700">
                <div className="flex-1">Beschreibung</div>
                <div className="w-20">Menge</div>
                <div className="w-24">Preis</div>
              </div>
              {items.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateItem(index, "description", e.target.value)}
                    placeholder="Beschreibung"
                    className="flex-1 border rounded-md p-2"
                  />
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                    placeholder="Menge"
                    className="w-20 border rounded-md p-2"
                  />
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => updateItem(index, "price", Number(e.target.value))}
                    placeholder="Preis"
                    className="w-24 border rounded-md p-2"
                  />
                  <button type="button" onClick={() => removeItem(index)} className="text-red-500 font-bold">×</button>
                </div>
              ))}
              <button type="button" onClick={addItem} className="text-blue-600 text-sm mt-2">+ Position hinzufügen</button>
            </div>

            <textarea placeholder="Anmerkungen" className="w-full border rounded-md p-2" />

            <div className="flex flex-wrap gap-4 mt-4">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">Rechnung erstellen</button>
              <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-md">E-Mail versenden</button>
              <button type="button" className="bg-gray-600 text-white px-4 py-2 rounded-md">Druckansicht</button>
            </div>
          </form>
        </div>

        {/* Live-Zusammenfassung */}
        <div className="bg-indigo-50 rounded-xl shadow p-6 h-fit sticky top-24">
          <h3 className="text-lg font-semibold text-indigo-700 mb-4">Zusammenfassung</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>Zwischensumme: <span className="font-medium">{subtotal.toFixed(2)} €</span></p>
            <p>MwSt (19%): <span className="font-medium">{tax.toFixed(2)} €</span></p>
            <p className="text-base font-bold text-gray-900">Gesamtsumme: {total.toFixed(2)} €</p>
          </div>

          {/* Mini-Vorschau */}
          <div className="mt-6 text-center">
            <div className="bg-white border rounded-md p-4 shadow-inner">
              <p className="text-sm text-gray-500">📄 Vorschau</p>
              <p className="text-xs text-gray-400">(Simulation der späteren PDF-Rechnung)</p>
              <div className="mt-2 text-left text-xs text-gray-600 space-y-1">
                <p>Kunde: Max Mustermann</p>
                <p>Leistung: Webdesign</p>
                <p>Gesamtsumme: {total.toFixed(2)} €</p>
              </div>
            </div>

            {/* PDF-Download mit react-pdf */}
            <PDFDownloadLink
              document={<RechnungPDF subtotal={subtotal} tax={tax} total={total} items={items} />}
              fileName="rechnung.pdf"
              className="mt-4 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
            >
              {({ loading }) => loading ? "Lade PDF..." : (<><Download className="w-4 h-4" /> PDF herunterladen</>)}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </>
  );
}

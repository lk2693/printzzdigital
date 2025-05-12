"use client";

import React, { useState } from "react";
import { FileText } from "lucide-react";
import dynamic from 'next/dynamic';

// Dynamisch laden ohne SSR
const PDFDownloadButton = dynamic(
  () => import('./PDFDownloadButton'),
  { ssr: false }
);

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

export default function RechnungForm() {
  const [items, setItems] = useState<InvoiceItem[]>([{ description: "", quantity: 1, price: 0 }]);

  const addItem = () =>
    setItems([...items, { description: "", quantity: 1, price: 0 }]);

  const removeItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value
    };
    setItems(updatedItems);
  };

  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const taxRate = 0.19;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <>
      {/* ... (Rest des Codes bleibt gleich) ... */}
      
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

          {/* PDF-Download mit dynamic import */}
          <PDFDownloadButton subtotal={subtotal} tax={tax} total={total} items={items} />
        </div>
      </div>
    </>
  );
}
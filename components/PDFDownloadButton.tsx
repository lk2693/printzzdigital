"use client";

import React from 'react';
import { Download } from 'lucide-react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  heading: { fontSize: 18, marginBottom: 10 },
  text: { fontSize: 12 },
  company: { fontSize: 14, marginBottom: 10, fontWeight: "bold" },
  itemHeader: { fontSize: 12, marginTop: 10, marginBottom: 4, textDecoration: "underline" }
});

interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
}

interface PDFDownloadButtonProps {
  subtotal: number;
  tax: number;
  total: number;
  items: InvoiceItem[];
}

const RechnungPDF = ({ subtotal, tax, total, items }: PDFDownloadButtonProps) => (
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

export default function PDFDownloadButton({ subtotal, tax, total, items }: PDFDownloadButtonProps) {
  return (
    <PDFDownloadLink
      document={<RechnungPDF subtotal={subtotal} tax={tax} total={total} items={items} />}
      fileName="rechnung.pdf"
      className="mt-4 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
    >
      {({ loading }) => loading ? "Lade PDF..." : (<><Download className="w-4 h-4" /> PDF herunterladen</>)}
    </PDFDownloadLink>
  );
}
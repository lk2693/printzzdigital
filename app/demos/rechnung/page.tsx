import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import RechnungForm from "../../../components/RechnungForm";

export default function RechnungDemo() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Demo: Automatisierte Rechnungserstellung
          </h1>

          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Diese interaktive Demo zeigt, wie kleine Unternehmen und Selbstständige mit nur wenigen Klicks Rechnungen erstellen,
            berechnen und digital versenden können – ganz ohne Excel oder komplizierte Tools.
          </p>

          <p className="text-center text-sm text-gray-500 mb-12">
            <a href="/" className="text-indigo-600 hover:underline">Zurück zur Startseite</a>
          </p>

          <RechnungForm />
        </div>
      </section>
      <Footer />
    </>
  );
}

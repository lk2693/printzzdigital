
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TerminbuchungSystem from "../../../components/TerminbuchungSystem";

export default function TerminbuchungDemo() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Demo: Online-Terminbuchungssystem
          </h1>

          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Diese interaktive Demo zeigt, wie Unternehmen ihren Kunden eine einfache Terminbuchung 
            ermöglichen können - mit automatischen Bestätigungen und einem übersichtlichen 
            Admin-Dashboard zur Verwaltung aller Termine.
          </p>

          <p className="text-center text-sm text-gray-500 mb-12">
            <a href="/" className="text-indigo-600 hover:underline">Zurück zur Startseite</a>
          </p>

          <TerminbuchungSystem />
        </div>
      </section>
      <Footer />
    </>
  );
}
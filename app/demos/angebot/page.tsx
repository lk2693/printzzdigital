import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AngebotForm from "../../../components/AngebotForm";

export default function AngebotDemo() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Demo: Schnelle Angebotserstellung
          </h1>

          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
            Diese interaktive Demo zeigt, wie kleine Unternehmen und Selbstständige mit nur wenigen Klicks professionelle Angebote erstellen,
            kalkulieren und digital versenden können – zeitsparend und effizient.
          </p>

          <p className="text-center text-sm text-gray-500 mb-12">
            <a href="/" className="text-indigo-600 hover:underline">Zurück zur Startseite</a>
          </p>

          <AngebotForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
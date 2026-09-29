import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white font-sans text-ink">
      <a
        href="#contenido"
        className="sr-only fixed left-4 top-4 z-50 rounded-full bg-white px-5 py-3 text-ink focus:not-sr-only"
      >
        Saltar al contenido
      </a>
      <main id="contenido">
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

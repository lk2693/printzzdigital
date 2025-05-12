import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import WebseitenAblauf from "../components/WebseitenAblauf";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/pricing";



export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Projects />
  <TechStack />
    <Showcase />
    <WebseitenAblauf/> 
    <Pricing />
    <Contact />
    <Footer />
  </>

  );
}

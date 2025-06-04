import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import WebseitenAblauf from "../components/WebseitenAblauf";
import TechStack from "@/components/TechStack";
import DigitalTransformation from '@/components/DigitalTransformation';



export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Showcase />
    <DigitalTransformation />
    <Projects />
    <TechStack />
    <WebseitenAblauf/> 
    <Contact />
    <Footer />
  </>

  );
}

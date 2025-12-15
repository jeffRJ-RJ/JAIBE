import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid-pattern">
      <Header />
      <HeroSection />
      <ContactSection/>
      <Footer />
   </main>
  );
}

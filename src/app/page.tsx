import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid-pattern">
      <Header />
      <HeroSection />
      <Footer />
   </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ModuleShowcase from "@/components/ModuleShowcase";
import Trust from "@/components/Trust";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ModuleShowcase />
        <Trust />
        <Download />
      </main>
      <Footer />
    </>
  );
}

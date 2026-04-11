import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/hero/Hero";
import Stats from "@/sections/stats/Stats";
import TrustBar from "@/sections/trust-bar/TrustBar";
import EventGallery from "@/sections/gallery/EventGallery";
import Testimonials from "@/sections/testimonials/Testimonials";
import About from "@/sections/about/About";
import Contact from "@/sections/contact/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <Stats />
        <TrustBar />
        <EventGallery />
        <Testimonials />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}







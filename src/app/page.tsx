import React from "react";
import {
  Header,
  Hero,
  Services,
  About,
  Testimonials,
  FAQ,
  Footer,
} from "@/components";
import HomeContact from "@/components/HomeContact";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services showLimited={true} />
      <About />
      <Testimonials />
      <FAQ />
      <HomeContact />
      <Footer />
    </main>
  );
}

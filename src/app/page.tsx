"use client";

import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Stats from "./components/home/Stats";
import WhyUs from "./components/home/WhyUs";
import About from "./components/home/About";
import Projects from "./components/home/Projects";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";
import Blog from "./components/home/Blog";
import Whatsapp from "./components/Whatsapp";
import ScrollToTopIcon from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Blog />
      <Whatsapp />
      <ScrollToTopIcon />
    </main>
  );
}

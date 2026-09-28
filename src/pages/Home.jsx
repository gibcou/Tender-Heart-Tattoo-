import React from "react";
import SiteNav from "@/components/tenderheart/SiteNav";
import Hero from "@/components/tenderheart/Hero";
import Philosophy from "@/components/tenderheart/Philosophy";
import About from "@/components/tenderheart/About";
import Portfolio from "@/components/tenderheart/Portfolio";
import Process from "@/components/tenderheart/Process";
import Consultation from "@/components/tenderheart/Consultation";
import SiteFooter from "@/components/tenderheart/SiteFooter";

export default function Home() {
  return (
    <div className="grain bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Portfolio />
        <Process />
        <Consultation />
      </main>
      <SiteFooter />
    </div>
  );
}
"use client";

import { useRef } from "react";
import ScrollProgress from "./components/ScrollProgress";
import HeroDetails from "./components/HeroDetails";
import AboutSection from "./components/AboutSection";
import PrizeSection from "./components/PrizeSection";
import TeamSection from "./components/TeamSection";
import FaqSection from "./components/FaqSection";

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white min-h-screen text-black selection:bg-blue-200" ref={containerRef}>
      <main className="w-full">
        <ScrollProgress />
        <HeroDetails />
        <AboutSection />
        <PrizeSection />
        <TeamSection />
        <FaqSection />
      </main>
    </div>
  );
}

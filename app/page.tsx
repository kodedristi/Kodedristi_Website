"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Hero } from "@/components/home/Hero";
import { Approach } from "@/components/home/Approach";
import { TeamSection } from "@/components/home/TeamSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero entrance
      gsap.fromTo(
        ".gsap-hero-element",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      // Hero BG slow zoom (if we add a BG image later, currently it's just black)
      gsap.to(".gsap-hero-bg", {
        scale: 1.12,
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Approach horizontal scroll
      const approachSection = document.querySelector(".gsap-approach-section") as HTMLElement;
      if (approachSection) {
        const wrapper = approachSection.querySelector(".gsap-approach-wrapper") as HTMLElement;
        if (wrapper) {
          const tween = gsap.to(wrapper, {
            x: () => -(wrapper.scrollWidth - window.innerWidth),
            ease: "none",
          });
          ScrollTrigger.create({
            trigger: approachSection,
            pin: true,
            start: "top top",
            end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
            scrub: 1,
            animation: tween,
          });
        }
      }

      // Services pinned fade
      const serviceSection = document.querySelector(".gsap-service-section") as HTMLElement;
      if (serviceSection) {
        const panels = serviceSection.querySelectorAll(".gsap-service-panel");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: serviceSection,
            pin: true,
            start: "top top",
            end: "+=250%",
            scrub: 1,
          },
        });
        panels.forEach((panel, i) => {
          if (i > 0)
            tl.fromTo(
              panel,
              { opacity: 0, scale: 0.97 },
              { opacity: 1, scale: 1, duration: 1, ease: "none" },
            );
          if (i !== panels.length - 1)
            tl.to(panel, {
              opacity: 0,
              scale: 1.03,
              duration: 1,
              ease: "none",
            });
        });
      }

      // Team cards stagger on scroll
      gsap.fromTo(
        ".gsap-home-team-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gsap-home-team-grid", start: "top 80%" },
        },
      );

      // Partners marquee
      const partnersMarquee = document.querySelector(".gsap-partners-marquee") as HTMLElement;
      if (partnersMarquee) {
        gsap.fromTo(
          partnersMarquee,
          { xPercent: -50 },
          { xPercent: 0, duration: 30, repeat: -1, ease: "none" },
        );
      }

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <div
      className="bg-background text-foreground overflow-x-clip"
      ref={containerRef}
    >
      <main className="w-full gsap-global-wrapper">
        <Hero />
        <Approach />
        <TeamSection />
        <ServicesSection />
        <PartnersMarquee />
      </main>
    </div>
  );
}

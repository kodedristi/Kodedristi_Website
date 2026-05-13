"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { testimonialsData } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".gsap-global-wrapper", { opacity: 1, duration: 0.5 });

      gsap.fromTo(
        ".gsap-testimonial-item",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".gsap-testimonials-grid",
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      className="bg-background text-foreground overflow-x-clip"
      ref={containerRef}
    >
      <main className="w-full opacity-0 gsap-global-wrapper min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10 bg-white" aria-label="Testimonials Page Hero">
          <div className="absolute inset-0 z-0 bg-white">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
              alt="Testimonials background"
              fill
              className="object-cover opacity-20 grayscale"
              priority
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 text-center max-w-6xl px-6 md:px-8 flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.9] text-black uppercase">
              System <span className="text-primary italic">Impact</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-700 md:max-w-3xl font-medium tracking-wide">
              The enterprise results of our uncompromising execution.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-background border-t border-white/10 py-24 md:py-32 overflow-hidden" aria-labelledby="feedback-heading">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 id="feedback-heading" className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12 md:mb-16 text-center">
              Executive Feedback
            </h2>

            {/* Grid */}
            <div className="gsap-testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-fr">
              {testimonialsData.map((impact, i) => (
                <div
                  key={i}
                  className="gsap-testimonial-item flex flex-col justify-between h-full min-h-[320px] bg-black border border-white/10 p-8 md:p-12 hover:border-primary transition-all duration-300"
                >
                  {/* Client */}
                  <p className="text-primary font-bold tracking-widest text-xs uppercase mb-6 md:mb-8">
                    {impact.client}
                  </p>

                  {/* Quote */}
                  <h3 className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-8 md:mb-12">
                    {impact.quote}
                  </h3>

                  {/* Author */}
                  <div className="border-t border-white/10 pt-6 mt-auto">
                    <p className="text-white font-black uppercase tracking-widest text-sm">
                      {impact.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

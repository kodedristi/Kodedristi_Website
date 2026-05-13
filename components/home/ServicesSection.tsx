"use client";

import Image from "next/image";
import { servicesData } from "@/lib/data";

export function ServicesSection() {
  return (
    <>
      {/* MOBILE: Normal vertical list (hidden on md+) */}
      <section className="block md:hidden w-full bg-background border-b border-white/10 px-5 py-16">
        <p className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-4">
          What We Build
        </p>
        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-10 leading-tight">
          Core<br />Services
        </h2>
        <div className="flex flex-col gap-4">
          {servicesData.map((srv, index) => (
            <div key={index} className="w-full bg-black border border-white/10 p-6 flex flex-col gap-2">
              <p className="text-white/50 font-bold tracking-widest uppercase text-xs">
                0{index + 1}
              </p>
              <h3 className="text-xl font-black text-white uppercase leading-tight">
                {srv.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP: GSAP Fade-Pinned (hidden on mobile) */}
      <section className="gsap-service-section hidden md:flex relative min-h-screen w-full bg-background border-b border-white/10 overflow-hidden">
        <div className="w-full h-full flex flex-row max-w-7xl mx-auto px-12 lg:pl-24 items-center justify-center gap-12">
          <div className="w-1/3 flex-shrink-0">
            <p className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-4">
              What We Build
            </p>
            <h2 className="text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
              Core<br />Services
            </h2>
            <p className="text-gray-500 text-sm font-medium">
              Scroll through our core offerings.
            </p>
          </div>
          <div className="w-2/3 h-[65vh] relative">
            {servicesData.map((srv, index) => (
              <div
                key={index}
                className={`gsap-service-panel absolute inset-0 w-full h-full border border-white/10 flex flex-col justify-end p-12 bg-black ${index === 0 ? "opacity-100 z-30" : "opacity-0 z-20"}`}
              >
                <div className="absolute inset-0 z-0 bg-black">
                  <Image
                    src={srv.img}
                    alt={srv.title}
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="relative z-10">
                  <p className="text-white font-bold tracking-widest uppercase text-xs mb-3">
                    0{index + 1}
                  </p>
                  <h3 className="text-5xl font-black text-white mb-4 uppercase leading-none">
                    {srv.title}
                  </h3>
                  <p className="text-gray-300 font-medium text-xl max-w-2xl leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

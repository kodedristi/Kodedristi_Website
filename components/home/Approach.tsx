"use client";

import { approachData } from "@/lib/data";

export function Approach() {
  return (
    <>
      {/* MOBILE: Normal vertical layout (hidden on md+) */}
      <section className="block md:hidden w-full bg-white border-b border-black/10 px-5 py-16">
        <h2 className="text-5xl font-black text-black uppercase tracking-tighter mb-3">
          Our Approach
        </h2>
        <p className="text-base font-medium text-gray-600 mb-10 leading-snug">
          We execute rigorously. Our operational pipeline guarantees absolute consistency.
        </p>
        <div className="flex flex-col gap-4">
          {approachData.map((phase, i) => (
            <div key={i} className="w-full bg-black p-6 flex flex-col gap-3">
              <p className="text-primary font-bold tracking-widest uppercase text-xs">
                {phase.phase}
              </p>
              <h3 className="text-2xl font-black text-white uppercase leading-tight">
                {phase.title}
              </h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">
                {phase.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP: GSAP Horizontal Scroll (hidden on mobile) */}
      <section className="gsap-approach-section hidden md:block relative h-screen w-full bg-white overflow-hidden border-b border-black/10">
        <div className="absolute bottom-12 left-24 z-20 pointer-events-none mix-blend-difference">
          <h2 className="text-8xl font-black text-white uppercase tracking-tighter mix-blend-difference drop-shadow-[0_0_15px_rgba(0,0,0,1)]">
            Our Approach
          </h2>
        </div>
        <div className="gsap-approach-wrapper flex flex-nowrap h-full items-center relative z-10 w-max">
          <div className="w-[70vw] h-full flex flex-col justify-center px-24 bg-white flex-shrink-0">
            <h3 className="text-primary text-3xl font-bold uppercase tracking-widest mb-4">
              → Swipe Process
            </h3>
            <p className="text-5xl font-medium text-black max-w-3xl leading-tight">
              We execute rigorously. Our operational pipeline guarantees
              absolute consistency.
            </p>
          </div>
          {approachData.map((phase, i) => (
            <div
              key={i}
              className="w-[80vw] lg:w-[78vw] h-full flex items-center justify-center p-2 flex-shrink-0 bg-white"
            >
              <div className="w-full max-w-6xl h-[70vh] flex flex-col justify-end relative overflow-hidden group bg-black">
                <div className="absolute inset-0 bg-black z-0" />
                <div className="relative z-10 p-12 w-1/2">
                  <p className="text-white font-bold tracking-widest uppercase mb-4 text-base">
                    {phase.phase}
                  </p>
                  <h3 className="text-5xl font-black text-white mb-6 uppercase">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 font-medium text-2xl">
                    {phase.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

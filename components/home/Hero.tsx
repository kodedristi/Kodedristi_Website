"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      onClick={() =>
        window.open("https://forms.gle/k9XYt89brsv3dgLUA", "_blank")
      }
      className="group relative h-[100dvh] w-full flex items-center justify-center overflow-hidden border-b border-white/10 cursor-pointer"
      aria-label="National AI Hackathon Hero Section"
    >
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-background" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-7xl px-8">
        <div className="gsap-hero-element mb-6 inline-flex items-center gap-3 border border-white/30 bg-white/10 px-6 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Registrations Open ·
        </div>
        <h1 className="gsap-hero-element text-4xl sm:text-6xl md:text-8xl lg:text-6xl font-black mb-6 tracking-tight leading-[0.9] text-white uppercase drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          National<span className="text-primary mx-2"> AI</span> Hackathon 2026
        </h1>
        <p className="gsap-hero-element text-lg md:text-2xl text-gray-300 md:max-w-3xl mb-10 font-medium tracking-wide">
          Click anywhere to secure your spot at the most advanced
          engineering event of the decade.
        </p>
        <div className="gsap-hero-element flex flex-col md:flex-row items-center gap-8 mt-4">
          <Link
            href="/hackathon"
            onClick={(e) => e.stopPropagation()}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-widest bg-primary hover:bg-blue-600 rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:scale-105"
          >
            <span className="relative z-10">View More</span>
          </Link>
          <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
            <span>Or tap anywhere for Google Forms</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

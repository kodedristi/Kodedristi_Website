"use client";

import Link from "next/link";
import Image from "next/image";
import { teamData } from "@/lib/data";

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative w-full bg-background border-b border-white/10 py-24 overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <p className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Our People
          </p>
          <h2 id="team-heading" className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            The Architects
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl">
            Hover over our core engineering team to reveal their secondary
            identity.
          </p>
        </div>

        <div className="gsap-home-team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, i) => (
            <div
              key={i}
              className="gsap-home-team-card group relative h-[400px] sm:h-[520px] overflow-hidden bg-black border border-white/10 cursor-crosshair"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
                {/* Primary image */}
                <div className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top opacity-90 grayscale"
                  />
                </div>
                {/* Hover image */}
                <div className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-90">
                  <Image
                    src={member.imgHover}
                    alt={`${member.name} alternate view`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <h4 className="text-3xl font-black text-white uppercase leading-none mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-bold tracking-widest text-xs uppercase">
                  {member.role}
                </p>
              </div>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/team"
            className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-white font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Meet Full Team
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { partnersData } from "@/lib/data";

export function PartnersMarquee() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b relative flex flex-col items-center justify-center overflow-hidden" aria-label="Our Partners and Organizations">
      <p className="text-black mb-10 text-center font-black tracking-[0.3em] uppercase text-xs z-20">
        Trusted By
      </p>
      <div className="flex w-full overflow-hidden">
        <div className="gsap-partners-marquee flex whitespace-nowrap items-center">
          {[...partnersData, ...partnersData, ...partnersData].map(
            (partner, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-16 md:gap-28 px-8 md:px-14"
              >
                <div className="relative h-12 md:h-16 w-32 md:w-48">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300"
                    sizes="(max-width: 768px) 128px, 192px"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

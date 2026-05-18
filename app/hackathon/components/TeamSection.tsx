"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { eventTeamData } from "@/lib/data";

export default function TeamSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#f8fafc] overflow-hidden" aria-labelledby="event-team-heading">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-[#00a884] font-bold tracking-widest uppercase text-sm mb-4"
            >
            </motion.div>
            <motion.h2
              id="event-team-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter"
            >
              Meet Our <span className="text-[#00a884]">Team</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 max-w-md font-medium"
          >
            The dedicated individuals working tirelessly behind the scenes to make this event a massive success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {eventTeamData.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="group relative overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[3/4]"
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-1 leading-tight">{member.name}</h3>
                <p className="text-[#00a884] font-bold text-sm tracking-wide">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

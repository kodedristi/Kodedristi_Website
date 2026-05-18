"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, BrainCircuit, Rocket, Users } from "lucide-react";
import Image from "next/image";


export default function AboutSection() {
  const vision = [
    { text: "Position Nepal as a hub for AI innovation", icon: <BrainCircuit className="w-5 h-5 text-[#00a884]" /> },
    { text: "Empower youth to build impactful tech solutions", icon: <Code2 className="w-5 h-5 text-[#00a884]" /> },
    { text: "Bridge academia, industry, and research through AI", icon: <Rocket className="w-5 h-5 text-[#00a884]" /> },
  ];

  const mission = [
    { text: "Provide a competitive AI innovation platform", icon: <Users className="w-5 h-5 text-blue-600" /> },
    { text: "Encourage learning through real-world problem solving", icon: <BrainCircuit className="w-5 h-5 text-blue-600" /> },
    { text: "Connect students with industry experts and mentors", icon: <Code2 className="w-5 h-5 text-blue-600" /> },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* <div className="inline-flex items-center gap-2 text-[#00a884] font-bold tracking-widest uppercase text-sm mb-2">
            <span className="w-8 h-[2px] bg-[#00a884]"></span>
            About The Event
          </div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            Code The <span className="text-blue-600">Future</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
            The National AI Hackathon 2026 is a 20-hour intensive coding marathon designed to push the boundaries of what's possible with Artificial Intelligence. We bring together students, developers, designers, and tech enthusiasts to build solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black text-black mb-4 uppercase tracking-tight">Vision</h3>
              <div className="flex flex-col gap-4">
                {vision.map((obj, i) => (
                  <motion.div
                    key={`v-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5 p-2 bg-[#00a884]/10 rounded-lg">
                      {obj.icon}
                    </div>
                    <p className="text-gray-800 font-bold text-sm leading-snug">{obj.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-black mb-4 uppercase tracking-tight">Mission</h3>
              <div className="flex flex-col gap-4">
                {mission.map((obj, i) => (
                  <motion.div
                    key={`m-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5 p-2 bg-blue-100 rounded-lg">
                      {obj.icon}
                    </div>
                    <p className="text-gray-800 font-bold text-sm leading-snug">{obj.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] lg:h-[600px]  overflow-hidden border border-gray-200 shadow-xl group bg-blue-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-[#00a884]/10 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
            alt="Hackathon event"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          
          <div className="absolute bottom-8 left-8 right-8 z-20 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-[#00a884] flex items-center justify-center text-white shadow-lg">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <p className="text-black font-black text-xl mb-1">Massive Scale</p>
                <p className="text-gray-600 font-medium leading-snug">
                  Over <span className="text-blue-600 font-bold">300 hackers</span>, industry professionals, and top companies will join the movement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

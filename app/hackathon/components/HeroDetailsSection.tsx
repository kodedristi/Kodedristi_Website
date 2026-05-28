"use client";

import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function HeroDetailsSection() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 5 + 5,
        targetY: Math.random() * -150,
      }))
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white py-20">
      {/* Background Gradients & Tech Grid */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00a884]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating Particles (Darker for light theme) */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-600/20 rounded-full"
          initial={{
            x: p.x,
            y: p.y,
            opacity: p.opacity,
          }}
          animate={{
            y: [null, p.targetY],
            opacity: [null, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="inline-flex items-center gap-3 px-6 py-2.5  border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm mb-12 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00a884]/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#00a884] animate-pulse" />
          <span className="text-gray-800 text-xs sm:text-sm font-bold tracking-widest uppercase">Registration Open Now</span>
        </motion.div>

        {/* Logo / Title Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="relative inline-flex flex-col items-center mb-14 w-full"
        >
          {/* Hackathon Logo Image */}
          <h1 className="sr-only">National AI Hackathon 2083</h1>
          <div className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] relative z-10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00a884] to-blue-600 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 " />
            <Image 
              src="/hackathon-logo.png" 
              alt="National AI Hackathon 2083 Logo" 
              width={550}
              height={550}
              className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,168,132,0.2)] hover:drop-shadow-[0_15px_40px_rgba(0,168,132,0.4)] transition-all duration-700 hover:scale-105" 
              sizes="(max-width: 640px) 250px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 550px"
              priority
            />


          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="https://forms.gle/k9XYt89brsv3dgLUA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-base font-bold text-white uppercase tracking-widest bg-black overflow-hidden transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3">
              {/* <Sparkles className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" /> */}
              Register Now
            </span>
          </a>
        </motion.div>
        </div>
      

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

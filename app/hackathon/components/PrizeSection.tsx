"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

export default function PrizeSection() {
  const prizes = [
    { rank: "1st Place", amount: "Rs. 75,000", icon: <Trophy className="w-12 h-12 text-[#00a884]" />, desc: "Winner's Trophy, Swags", color: "from-[#00a884]/20 to-[#00a884]/5", border: "border-[#00a884]/50", bg: "bg-white" },
    { rank: "2nd Place", amount: "Rs. 50,000", icon: <Medal className="w-12 h-12 text-blue-500" />, desc: "Runner-up Trophy, Swags", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/50", bg: "bg-white" },
    { rank: "3rd Place", amount: "Rs. 25,000", icon: <Award className="w-12 h-12 text-gray-800" />, desc: "Trophy,Medal, Swags", color: "from-gray-600/20 to-gray-600/5", border: "border-gray-500/50", bg: "bg-white" },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#00a884] font-bold tracking-widest uppercase text-sm mb-4"
          >
            {/* <span className="w-8 h-[2px] bg-[#00a884]"></span>
            Rewards
            <span className="w-8 h-[2px] bg-[#00a884]"></span> */}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter"
          >
            Prizes & <span className="text-blue-600">Glory</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border ${prize.border} ${prize.bg} shadow-lg p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,168,132,0.15)]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${prize.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 mb-8 p-5 rounded-full bg-gray-50 border border-gray-100 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {prize.icon}
              </div>
              
              <h3 className="relative z-10 text-3xl font-black text-black mb-2">{prize.rank}</h3>
              <p className="relative z-10 text-4xl font-black text-blue-600 mb-4">
                {prize.amount}
              </p>
              <p className="relative z-10 text-gray-600 text-base font-medium">
                {prize.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    { question: "Who can participate in the hackathon?", answer: "The hackathon is open to all students, professionals, and tech enthusiasts. You can participate 2 to 5 members." },
    { question: "Is there any registration fee?", answer: "Yes, there is a registration fee of Rs. 5000 per team. However, spots are limited, so early registration is highly recommended." },
    { question: "What should I bring?", answer: "Bring your laptop, charger, any hardware you plan to use, and your best ideas! We will provide food, beverages, and a great working environment." },
    { question: "Do I need to know AI to participate?", answer: "While the theme is centered around AI, teams benefit from diverse skill sets including design, product management, and frontend development." },
    { question: "Can we start working on our project before the event?", answer: "No, all coding and project work must begin after the official kickoff. You are allowed to use open-source libraries and APIs." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#00a884] font-bold tracking-widest uppercase text-sm mb-4"
          >
            {/* <span className="w-8 h-[2px] bg-[#00a884]"></span>
            FAQ
            <span className="w-8 h-[2px] bg-[#00a884]"></span> */}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter"
          >
            Frequently Asked <span className="text-[#00a884]">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-200"
                >
                  <Plus className="w-5 h-5 text-blue-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4 font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

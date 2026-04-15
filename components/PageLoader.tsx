'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleared = false;

    const dismiss = () => {
      if (!cleared) {
        cleared = true;
        setIsLoading(false);
      }
    };

    // Hard max timeout — always dismisses after 4s regardless (critical for iOS Safari)
    const maxTimer = setTimeout(dismiss, 4000);

    // Normal path — dismiss quickly once page is ready
    if (document.readyState === 'complete') {
      const timer = setTimeout(dismiss, 500);
      return () => { clearTimeout(timer); clearTimeout(maxTimer); };
    } else {
      const handleLoad = () => setTimeout(dismiss, 500);
      // iOS Safari: also listen to DOMContentLoaded as fallback
      const handleDCL = () => setTimeout(dismiss, 1200);
      window.addEventListener('load', handleLoad, { once: true });
      document.addEventListener('DOMContentLoaded', handleDCL, { once: true });
      return () => {
        clearTimeout(maxTimer);
        window.removeEventListener('load', handleLoad);
        document.removeEventListener('DOMContentLoaded', handleDCL);
      };
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-background text-foreground flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {/* Graph Animation */}
              <div className="relative w-24 h-24 mb-2">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible w-full h-full">
                  {/* Edges */}
                  <motion.g stroke="currentColor" className="text-primary/60" strokeWidth="1.5" strokeLinecap="round">
                    <motion.line x1="50" y1="10" x2="20" y2="40" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
                    <motion.line x1="50" y1="10" x2="80" y2="40" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
                    <motion.line x1="20" y1="40" x2="80" y2="40" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} />
                    <motion.line x1="20" y1="40" x2="35" y2="80" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
                    <motion.line x1="80" y1="40" x2="65" y2="80" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} />
                    <motion.line x1="35" y1="80" x2="65" y2="80" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                    <motion.line x1="20" y1="40" x2="65" y2="80" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} />
                    <motion.line x1="80" y1="40" x2="35" y2="80" animate={{ opacity: [0.1, 1, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.4 }} />
                  </motion.g>

                  {/* Nodes */}
                  <motion.g fill="currentColor" className="text-white">
                    <motion.circle cx="50" cy="10" r="4" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.circle cx="20" cy="40" r="4" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
                    <motion.circle cx="80" cy="40" r="4" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
                    <motion.circle cx="35" cy="80" r="4" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} />
                    <motion.circle cx="65" cy="80" r="4" animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.6 }} />
                  </motion.g>
                </svg>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white font-bold text-lg tracking-widest uppercase"
              >
                Kodedristi
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 transition-opacity duration-1000'}>
        {children}
      </div>
    </>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene3D from './Scene3D';

export default function HeroIntro() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const scrollToArchive = () => {
    document.querySelector('#archive')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <Scene3D />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 gradient-fade-up pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <AnimatePresence>
          {phase >= 1 && (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-editorial text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight"
            >
              Faces101
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-ui mt-6 text-metallic tracking-[0.3em]"
            >
              Power. Rebellion. Visibility.
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase >= 3 && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={scrollToArchive}
              className="mt-12 border border-foreground/20 px-10 py-4 text-ui text-foreground hover:bg-foreground/5 transition-all duration-700"
            >
              Enter the Archive
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      {phase >= 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-foreground/40 to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}

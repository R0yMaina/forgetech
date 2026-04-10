import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Zap, Globe } from 'lucide-react';
import TiltCard from '../components/TiltCard';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState({ projects: 0, clients: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount({
        projects: Math.floor(12 * easeOut),
        clients: Math.floor(4 * easeOut),
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Floating glow effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#6C63FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30"
              >
                <Zap className="w-4 h-4 text-[#FF6B35]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#6C63FF]">
                  Fullstack Web Development
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-wide"
              >
                <span className="text-white">We Forge</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#6C63FF]">
                  Digital Excellence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/60 max-w-lg leading-relaxed"
              >
                Clean, high-performance websites and fullstack solutions that transform 
                your vision into reality. Serving clients with precision and passion 
                for over a year.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  className="btn-primary-3d flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="btn-secondary-3d flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#portfolio')}
                >
                  <Globe className="w-5 h-5" />
                  View Our Work
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-8 pt-4"
              >
                <div>
                  <div className="font-display text-4xl text-[#FF6B35]">{count.projects}+</div>
                  <div className="text-sm text-white/50">Projects Delivered</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-[#6C63FF]">{count.clients}</div>
                  <div className="text-sm text-white/50">Happy Clients</div>
                </div>
                <div>
                  <div className="font-display text-4xl text-white">1</div>
                  <div className="text-sm text-white/50">Year of Excellence</div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - 3D Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <TiltCard className="w-full max-w-md mx-auto" tiltAmount={10}>
                <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                  {/* Gradient line at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#6C63FF] to-[#FF6B35]" />
                  
                  {/* Card content */}
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#6C63FF] flex items-center justify-center shadow-xl shadow-orange-500/20 floating">
                      <Code2 className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      ForgeTech Studio
                    </h3>
                    <p className="text-[#FF6B35] text-sm font-semibold tracking-wider uppercase">
                      Fullstack Development
                    </p>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="font-display text-3xl text-[#FF6B35]">{count.projects}</div>
                      <div className="text-xs text-white/50 mt-1">Projects</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="font-display text-3xl text-[#6C63FF]">{count.clients}</div>
                      <div className="text-xs text-white/50 mt-1">Clients</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="font-display text-3xl text-white">99.9%</div>
                      <div className="text-xs text-white/50 mt-1">Uptime</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <div className="font-display text-3xl text-[#FF6B35]">1</div>
                      <div className="text-xs text-white/50 mt-1">Year</div>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['React', 'Node.js', 'TypeScript', 'Next.js'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

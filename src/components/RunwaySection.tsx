import { motion } from 'framer-motion';
import runwayHero from '@/assets/runway-hero.jpg';

const capabilities = [
  'Full Runway Collection Design',
  'Creative Direction & Styling',
  'Custom Capsule Collections',
  'Exhibition & Installation Concepts',
  'Lookbook Production',
  'Press Kit & Media Assets',
];

export default function RunwaySection() {
  return (
    <section id="runway" className="relative bg-background">
      {/* Hero image */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={runwayHero}
          alt="Faces101 Runway"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 gradient-fade-up" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-ui text-metallic mb-4">For Event Organizers</p>
            <h2 className="text-editorial text-4xl md:text-6xl text-foreground">
              Runway Ready
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Faces101 is prepared for runway presentations at fashion weeks, exhibitions, 
              and collaborative shows worldwide. Our collections are designed to make 
              powerful statements on any stage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From creative direction to full production, we deliver complete runway 
              experiences that embody luxury, rebellion, and cultural storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-ui text-metallic mb-8">Capabilities</p>
            <ul className="space-y-4">
              {capabilities.map((cap, i) => (
                <motion.li
                  key={cap}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 text-foreground border-b border-border pb-4"
                >
                  <span className="text-ui text-metallic w-6">{String(i + 1).padStart(2, '0')}</span>
                  {cap}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-block border border-foreground/30 px-12 py-5 text-ui text-foreground hover:bg-foreground/5 transition-all duration-700"
          >
            Book Faces101 for a Runway
          </a>
        </motion.div>
      </div>
    </section>
  );
}

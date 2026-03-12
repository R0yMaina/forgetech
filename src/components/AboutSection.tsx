import { motion } from 'framer-motion';
import designerPortrait from '@/assets/designer-portrait.jpg';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={designerPortrait}
            alt="Creative Director"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-ui text-metallic mb-4">The Vision</p>
          <h2 className="text-editorial text-4xl md:text-5xl text-foreground mb-4">
            About Faces101
          </h2>
          <p className="text-editorial text-xl text-metallic italic mb-8">
            Born Here. Worn Everywhere.
          </p>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Faces101 is a luxury fashion house born from the streets of Nairobi — 
              rooted in African identity, cultural storytelling, and rebellion against 
              conformity. Every piece is a statement — crafted with precision, designed 
              with purpose.
            </p>
            <p>
              From Nairobi to the world, our work exists at the intersection of 
              sculptural drama and minimal brutalism. We don't follow trends — we 
              create narratives through fabric, form, and fearless design.
            </p>
            <p>
              From couture gowns to experimental concepts, each collection 
              (or "Chapter") explores themes of power, visibility, and authority. 
              Our craft honors heritage while pushing the boundaries of contemporary 
              luxury fashion.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-ui text-metallic mb-2">Creative Philosophy</p>
            <p className="text-editorial text-2xl text-foreground italic">
              "Fashion is not decoration. It is armor. It is identity. It is rebellion made visible."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import trouser1 from '@/assets/trouser-1.jpg';
import trouser2 from '@/assets/trouser-2.jpg';
import trouser3 from '@/assets/trouser-3.jpg';
import trouser4 from '@/assets/trouser-4.jpg';
import trouser5 from '@/assets/trouser-5.jpg';
import trouser6 from '@/assets/trouser-6.jpg';

const trousers = [
  { id: 1, name: 'Obsidian Tailored', description: 'Sculpted slim-fit with architectural seam lines and commanding silhouette', image: trouser1 },
  { id: 2, name: 'Noir Wide-Leg', description: 'Flowing wide-leg drape in midnight black with concealed pocket construction', image: trouser2 },
  { id: 3, name: 'Bone Pleated', description: 'High-waisted pleated trousers in bone white with razor-sharp press lines', image: trouser3 },
  { id: 4, name: 'Shadow Cargo', description: 'Slim cargo silhouette with sculptural pocket detailing in deep charcoal', image: trouser4 },
  { id: 5, name: 'Clay Draped', description: 'Asymmetric drape construction in warm clay tones with wrap-front detail', image: trouser5 },
  { id: 6, name: 'Authority High-Waist', description: 'Belted high-waisted trouser with precision tailoring and power silhouette', image: trouser6 },
];

export default function TrouserSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="trousers" className="py-32 px-6 md:px-12 bg-background border-t border-border">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6"
      >
        <p className="text-ui text-metallic mb-4">Chapter I — SEEN</p>
        <h2 className="text-editorial text-4xl md:text-6xl text-foreground">Trousers</h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-muted-foreground max-w-xl mb-16 leading-relaxed"
      >
        The foundation of the SEEN collection. Each trouser is a statement of architectural tailoring — 
        sculpted with precision, designed to command presence.
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {trousers.map((piece, i) => (
          <motion.div
            key={piece.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setLightbox(piece.id)}
            className="group relative overflow-hidden aspect-[3/4] bg-card cursor-pointer"
          >
            <img
              src={piece.image}
              alt={piece.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
              <p className="text-ui text-metallic mb-2">Chapter I — SEEN</p>
              <h3 className="text-editorial text-2xl text-foreground mb-1">{piece.name}</h3>
              <p className="text-sm text-muted-foreground">{piece.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6 cursor-pointer"
          >
            {(() => {
              const piece = trousers.find(p => p.id === lightbox);
              if (!piece) return null;
              return (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-4xl w-full flex flex-col md:flex-row gap-8"
                  onClick={e => e.stopPropagation()}
                >
                  <img src={piece.image} alt={piece.name} className="w-full md:w-2/3 object-cover max-h-[80vh]" />
                  <div className="flex flex-col justify-end">
                    <p className="text-ui text-metallic mb-3">Chapter I — SEEN</p>
                    <h3 className="text-editorial text-3xl text-foreground mb-4">{piece.name}</h3>
                    <p className="text-muted-foreground mb-4">{piece.description}</p>
                    <p className="text-ui text-muted-foreground">2024</p>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import piece1 from '@/assets/piece-1.jpg';
import piece2 from '@/assets/piece-2.jpg';
import piece3 from '@/assets/piece-3.jpg';
import piece4 from '@/assets/piece-4.jpg';
import piece5 from '@/assets/piece-5.jpg';
import piece6 from '@/assets/piece-6.jpg';

const pieces = [
  { id: 1, name: 'Obsidian Jacket', collection: 'Chapter I — SEEN', description: 'Structured leather silhouette with sculptural shoulders', year: '2024', image: piece1, category: 'Garments' },
  { id: 2, name: 'Authority Boot', collection: 'Chapter III — AUTHORITY', description: 'Architectural heel construction in full-grain leather', year: '2024', image: piece2, category: 'Footwear' },
  { id: 3, name: 'Noir Drape Gown', collection: 'Chapter I — SEEN', description: 'Flowing silk with asymmetric draping and sweetheart neckline', year: '2023', image: piece3, category: 'Couture' },
  { id: 4, name: 'Clasp Tote', collection: 'Chapter II — UNBOXED', description: 'Soft leather with sculptural gold hardware', year: '2024', image: piece4, category: 'Accessories' },
  { id: 5, name: 'Bone & Shadow', collection: 'Chapter II — UNBOXED', description: 'Experimental deconstruction exploring textile boundaries', year: '2023', image: piece5, category: 'Experimental' },
  { id: 6, name: 'Open Blazer Set', collection: 'Chapter III — AUTHORITY', description: 'Tailored precision with African-inspired construction', year: '2024', image: piece6, category: 'Garments' },
];

const categories = ['All', 'Couture', 'Garments', 'Footwear', 'Accessories', 'Experimental'];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? pieces : pieces.filter(p => p.category === activeCategory);

  return (
    <section id="archive" className="py-32 px-6 md:px-12 bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <p className="text-ui text-metallic mb-4">The Archive</p>
        <h2 className="text-editorial text-4xl md:text-6xl text-foreground">
          Portfolio
        </h2>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-wrap gap-4 mb-16"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-ui px-5 py-2 border transition-all duration-500 ${
              activeCategory === cat
                ? 'border-foreground/40 text-foreground bg-secondary'
                : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        <AnimatePresence mode="popLayout">
          {filtered.map((piece, i) => (
            <motion.div
              key={piece.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setLightbox(piece.id)}
              className="group cursor-pointer relative overflow-hidden aspect-[3/4] bg-card"
            >
              <img
                src={piece.image}
                alt={piece.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-ui text-metallic mb-2">{piece.category} — {piece.year}</p>
                <h3 className="text-editorial text-2xl text-foreground mb-1">{piece.name}</h3>
                <p className="text-sm text-muted-foreground">{piece.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
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
              const piece = pieces.find(p => p.id === lightbox);
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
                    <p className="text-ui text-metallic mb-3">{piece.collection}</p>
                    <h3 className="text-editorial text-3xl text-foreground mb-4">{piece.name}</h3>
                    <p className="text-muted-foreground mb-4">{piece.description}</p>
                    <p className="text-ui text-muted-foreground">{piece.year}</p>
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

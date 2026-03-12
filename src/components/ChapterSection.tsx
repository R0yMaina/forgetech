import { motion } from 'framer-motion';
import piece1 from '@/assets/piece-1.jpg';
import piece3 from '@/assets/piece-3.jpg';
import piece5 from '@/assets/piece-5.jpg';

const chapters = [
  {
    number: 'I',
    title: 'SEEN',
    description: 'The debut statement. Visibility as power. Black silhouettes that refuse to be ignored — structured, intentional, commanding.',
    image: piece3,
  },
  {
    number: 'II',
    title: 'UNBOXED',
    description: 'Deconstruction as philosophy. Breaking fashion conventions to reveal raw creative truth. Experimental forms meeting luxury craft.',
    image: piece5,
  },
  {
    number: 'III',
    title: 'AUTHORITY',
    description: 'The culmination. Tailored power that speaks without words. Precision meets cultural identity in every stitch.',
    image: piece1,
  },
];

export default function ChapterSection() {
  return (
    <section id="chapters" className="py-32 bg-background">
      <div className="px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-ui text-metallic mb-4">Collections</p>
          <h2 className="text-editorial text-4xl md:text-6xl text-foreground">Chapters</h2>
        </motion.div>
      </div>

      <div className="space-y-0">
        {chapters.map((chapter, i) => (
          <motion.div
            key={chapter.number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] border-t border-border"
          >
            <div className={`relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
              <img
                src={chapter.image}
                alt={`Chapter ${chapter.number}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
            <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-ui text-metallic mb-6">Chapter {chapter.number}</p>
                <h3 className="text-editorial text-5xl md:text-7xl text-foreground mb-8">
                  {chapter.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {chapter.description}
                </p>
                <button className="mt-10 text-ui text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-500">
                  Explore Chapter
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

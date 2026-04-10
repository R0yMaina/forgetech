import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'NexaRetail Solutions',
    avatar: 'S',
    rating: 5,
    text: 'ForgeTech transformed our online presence completely. Our e-commerce site went from zero to generating $50K in monthly revenue within 3 months. Their attention to detail and technical expertise is unmatched.',
    project: 'E-Commerce Platform',
    results: '+300% sales increase',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Operations Director',
    company: 'FlowSystems Inc',
    avatar: 'D',
    rating: 5,
    text: 'The automation system ForgeTech built for us saved over 120 hours of manual work every month. ROI was achieved in just 6 weeks. Incredible team to work with!',
    project: 'Process Automation',
    results: '120h/month saved',
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Founder',
    company: 'HealthFirst Clinics',
    avatar: 'A',
    rating: 5,
    text: 'Our patient portal is now handling 5,000+ users seamlessly. The telemedicine integration was flawless. ForgeTech delivered beyond our expectations.',
    project: 'MediReach',
    results: '5K+ active users',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Farm Manager',
    company: 'GreenValley Farms',
    avatar: 'J',
    rating: 5,
    text: 'The IoT dashboard they built helps us monitor 50+ farms in real-time. Our crop yield increased by 25% in the first season alone. Truly game-changing technology.',
    project: 'AgriTech Dashboard',
    results: '+25% yield increase',
  },
];

const stats = [
  { icon: Star, value: '5.0', label: 'Average Rating', color: '#FF6B35' },
  { icon: Users, value: '4', label: 'Happy Clients', color: '#6C63FF' },
  { icon: TrendingUp, value: '12', label: 'Projects Completed', color: '#FF6B35' },
  { icon: Award, value: '100%', label: 'Client Satisfaction', color: '#6C63FF' },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += speed;
        if (scrollPosition >= track.scrollWidth / 2) {
          scrollPosition = 0;
        }
        track.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B35]/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Testimonials</span>
          <h2 className="section-title mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about working with ForgeTech.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}30, ${stat.color}10)`,
                }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="font-display text-4xl text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Track */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#04040a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#04040a] to-transparent z-10 pointer-events-none" />
          
          <div
            ref={trackRef}
            className="flex gap-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ width: 'max-content' }}
          >
            {/* Duplicate testimonials for infinite scroll */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="w-[400px] flex-shrink-0"
              >
                <div className="glass-card rounded-2xl p-6 h-full relative">
                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-white/10" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Results badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full mb-6">
                    <TrendingUp className="w-4 h-4 text-[#6C63FF]" />
                    <span className="text-xs font-medium text-[#6C63FF]">{testimonial.results}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#6C63FF] flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-white/50">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Project tag */}
                  <div className="mt-4 text-xs text-white/40">
                    Project: {testimonial.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm">
            Trusted by businesses across healthcare, agriculture, retail, and technology sectors
          </p>
        </motion.div>
      </div>
    </section>
  );
}

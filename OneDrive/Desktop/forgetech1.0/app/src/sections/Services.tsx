import { motion } from 'framer-motion';
import { 
  Globe, 
  Settings, 
  Cpu, 
  ShoppingCart, 
  Database, 
  Smartphone,
  ArrowRight,
  Check
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites built with modern technologies. From landing pages to simple business sites, we deliver clean, responsive, and affordable solutions.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
    price: 'From KES 30,000',
    color: '#FF6B35',
    featured: false,
  },
  {
    icon: Cpu,
    title: 'System Automation',
    description: 'Streamline your business operations with intelligent automation. We build systems that save time and reduce manual work.',
    features: ['Workflow Automation', 'API Integration', 'Data Processing', 'Report Generation'],
    price: 'From KES 45,000',
    color: '#6C63FF',
    featured: true,
  },
  {
    icon: Database,
    title: 'Fullstack Solutions',
    description: 'End-to-end development from database design to frontend implementation. Complete systems that scale with your business.',
    features: ['Database Design', 'API Development', 'Authentication', 'Cloud Deployment'],
    price: 'From KES 70,000',
    color: '#FF6B35',
    featured: false,
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online stores that convert visitors into customers. Payment integration, inventory management, and seamless checkout experiences.',
    features: ['Payment Gateway', 'Inventory System', 'User Dashboard', 'Order Tracking'],
    price: 'From KES 60,000',
    color: '#6C63FF',
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'App-like experiences that work on any device. Offline capability, push notifications, and native-like performance.',
    features: ['Offline Support', 'Push Notifications', 'Installable', 'Cross-Platform'],
    price: 'From KES 50,000',
    color: '#FF6B35',
    featured: false,
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Keep your digital assets running smoothly. Regular updates, security patches, and 24/7 monitoring.',
    features: ['Security Updates', 'Performance Monitoring', 'Backup & Recovery', '24/7 Support'],
    price: 'From KES 12,000/mo',
    color: '#6C63FF',
    featured: false,
  },
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C63FF]/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4 block">What We Do</span>
          <h2 className="section-title mb-6">
            Services That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From concept to deployment, we provide comprehensive web development 
            services tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard tiltAmount={8}>
                <div
                  className={`glass-card rounded-2xl p-8 h-full relative overflow-hidden group hover:border-[${service.color}]/40 transition-all duration-300 ${
                    service.featured ? 'border-[#6C63FF]/40' : ''
                  }`}
                >
                  {/* Featured badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#6C63FF] text-white text-xs font-semibold rounded-full">
                      Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-[#FF6B35]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="font-heading font-bold text-lg" style={{ color: service.color }}>
                      {service.price}
                    </span>
                    <motion.button
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                      onClick={scrollToContact}
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 70%)`,
                    }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

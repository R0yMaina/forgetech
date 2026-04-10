import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and personal projects',
    price: 25000,
    period: 'project',
    icon: Zap,
    color: '#FF6B35',
    features: [
      'Single-page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form integration',
      '2 revision rounds',
      '1 week delivery',
      '30 days support',
    ],
    notIncluded: [
      'Custom animations',
      'CMS integration',
      'E-commerce functionality',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses needing more features',
    price: 60000,
    period: 'project',
    icon: Sparkles,
    color: '#6C63FF',
    features: [
      'Multi-page website (up to 5)',
      'Advanced responsive design',
      'Complete SEO optimization',
      'CMS integration (WordPress/Strapi)',
      'Custom animations',
      'Blog setup',
      'Social media integration',
      '5 revision rounds',
      '2 weeks delivery',
      '60 days support',
    ],
    notIncluded: [
      'E-commerce functionality',
      'Custom web application',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Fullstack solutions for complex requirements',
    price: 120000,
    period: 'project',
    icon: Crown,
    color: '#FF6B35',
    features: [
      'Unlimited pages',
      'Custom web application',
      'Database design & integration',
      'User authentication system',
      'API development',
      'E-commerce functionality',
      'Payment gateway integration',
      'Advanced analytics',
      'Unlimited revisions',
      '4 weeks delivery',
      '90 days support',
    ],
    notIncluded: [],
    popular: false,
  },
];

const maintenancePlans = [
  {
    name: 'Basic Care',
    price: 6000,
    period: 'month',
    features: [
      'Monthly updates',
      'Security monitoring',
      'Weekly backups',
      'Email support',
    ],
  },
  {
    name: 'Pro Care',
    price: 15000,
    period: 'month',
    features: [
      'Weekly updates',
      '24/7 monitoring',
      'Daily backups',
      'Priority support',
      'Performance optimization',
      'Content updates (5/mo)',
    ],
  },
  {
    name: 'Elite Care',
    price: 30000,
    period: 'month',
    features: [
      'Daily updates',
      'Real-time monitoring',
      'Hourly backups',
      'Dedicated support',
      'Advanced optimization',
      'Unlimited content updates',
      'Monthly reports',
    ],
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'development' | 'maintenance'>('development');

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
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
          <span className="section-label mb-4 block">Pricing</span>
          <h2 className="section-title mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Prices in KES (Nairobi local billing). All taxes included. No hidden fees. Choose the plan that fits your needs and budget.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab('development')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'development'
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#6C63FF] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'maintenance'
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#6C63FF] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Maintenance
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'development' ? (
            <motion.div
              key="development"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TiltCard tiltAmount={5}>
                    <div
                      className={`glass-card rounded-2xl p-8 h-full relative overflow-hidden ${
                        plan.popular ? 'border-[#6C63FF]/50' : ''
                      }`}
                    >
                      {/* Popular badge */}
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#6C63FF] to-[#FF6B35] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                          MOST POPULAR
                        </div>
                      )}

                      {/* Icon & Name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${plan.color}30, ${plan.color}10)`,
                          }}
                        >
                          <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-white">
                          {plan.name}
                        </h3>
                      </div>

                      <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-8">
                        <span className="font-display text-5xl text-white">KES {plan.price.toLocaleString('en-KE')}</span>
                        <span className="text-white/50 text-sm">/{plan.period}</span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                            <Check className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                        {plan.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-white/30">
                            <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">×</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <motion.button
                        className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                          plan.popular
                            ? 'bg-gradient-to-r from-[#FF6B35] to-[#6C63FF] text-white'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={scrollToContact}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="maintenance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {maintenancePlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TiltCard tiltAmount={5}>
                    <div className="glass-card rounded-2xl p-8 h-full">
                      <h3 className="font-heading text-xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      
                      <div className="mb-6">
                        <span className="font-display text-4xl text-white">KES {plan.price.toLocaleString('en-KE')}</span>
                        <span className="text-white/50 text-sm">/{plan.period}</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                            <Check className="w-5 h-5 text-[#6C63FF] flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        className="w-full py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={scrollToContact}
                      >
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom quote note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm">
            Need something custom?{' '}
            <button
              onClick={scrollToContact}
              className="text-[#FF6B35] hover:underline"
            >
              Let's discuss your project (KES pricing available)
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

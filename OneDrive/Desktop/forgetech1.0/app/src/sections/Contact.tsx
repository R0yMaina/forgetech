import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle, 
  Loader2,
  MessageSquare
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kevinbuluma9@gmail.com',
    href: 'mailto:kevinbuluma9@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+254 700 000 000',
    href: 'tel:+254700000000',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: '#',
  },
];

const services = [
  'Web Development',
  'System Automation',
  'Fullstack Solutions',
  'E-Commerce',
  'Progressive Web Apps',
  'Maintenance & Support',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Budget: ${formData.budget}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:kevinbuluma9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C63FF]/5 to-transparent pointer-events-none" />
      
      {/* Floating glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6C63FF]/10 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Get In Touch</span>
          <h2 className="section-title mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ready to transform your digital presence? Send us a message and we'll 
            get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-white/60 mb-8">
                Fill out the form and we'll get back to you as soon as possible. 
                Prefer email? Reach out directly.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group hover:border-[#6C63FF]/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#6C63FF]/10 flex items-center justify-center group-hover:bg-[#6C63FF]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#6C63FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick response badge */}
            <div className="flex items-center gap-3 p-4 bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-xl">
              <MessageSquare className="w-5 h-5 text-[#FF6B35]" />
              <div>
                <div className="text-sm font-medium text-white">Quick Response</div>
                <div className="text-xs text-white/50">We typically reply within 2-4 hours</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <TiltCard tiltAmount={3}>
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                {/* Success overlay */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#04040a]/95 backdrop-blur-sm flex flex-col items-center justify-center z-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-white/60 text-center">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}

                {/* Gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#6C63FF] to-[#FF6B35]" />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#6C63FF] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#6C63FF] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6C63FF] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#04040a]">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-[#04040a]">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#6C63FF] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#04040a]">Select budget</option>
                        <option value="KES 20,000 - 50,000" className="bg-[#04040a]">KES 20,000 - 50,000</option>
                        <option value="KES 50,000 - 100,000" className="bg-[#04040a]">KES 50,000 - 100,000</option>
                        <option value="KES 100,000 - 200,000" className="bg-[#04040a]">KES 100,000 - 200,000</option>
                        <option value="KES 200,000+" className="bg-[#04040a]">KES 200,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#6C63FF] focus:outline-none transition-colors resize-none"
                      placeholder="Describe your project, goals, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary-3d flex items-center justify-center gap-2 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-white/40">
                    By submitting this form, you agree to our privacy policy. 
                    Your information will be sent to kevinbuluma9@gmail.com
                  </p>
                </form>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

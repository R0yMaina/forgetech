import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const projectTypes = [
  'Runway Collaboration',
  'Fashion Week Presentation',
  'Capsule Collection',
  'Exhibition / Installation',
  'Editorial / Campaign',
  'Brand Partnership',
  'Other',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }
    toast.success('Your inquiry has been received. We will be in touch.');
    setForm({ name: '', organization: '', email: '', projectType: '', message: '' });
  };

  const inputClass = "w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-metallic transition-colors duration-500 font-sans";

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="text-ui text-metallic mb-4">Professional Inquiries</p>
          <h2 className="text-editorial text-4xl md:text-6xl text-foreground mb-6">
            Contact
          </h2>
          <p className="text-muted-foreground max-w-lg">
            For runway bookings, brand collaborations, press inquiries, and partnership opportunities.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Name *"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              maxLength={100}
              required
            />
            <input
              type="text"
              placeholder="Organization"
              value={form.organization}
              onChange={e => setForm({ ...form, organization: e.target.value })}
              className={inputClass}
              maxLength={100}
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            maxLength={255}
            required
          />

          <div>
            <p className="text-ui text-muted-foreground mb-4">Project Type</p>
            <div className="flex flex-wrap gap-3">
              {projectTypes.map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setForm({ ...form, projectType: type })}
                  className={`text-ui px-4 py-2 border transition-all duration-300 ${
                    form.projectType === type
                      ? 'border-foreground/40 text-foreground bg-secondary'
                      : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Tell us about your project *"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} min-h-[120px] resize-none`}
            maxLength={1000}
            required
          />

          <button
            type="submit"
            className="border border-foreground/30 px-12 py-5 text-ui text-foreground hover:bg-foreground/5 transition-all duration-700"
          >
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}

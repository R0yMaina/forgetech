import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import TiltCard from '../components/TiltCard';

const projects = [
  {
    id: 1,
    title: 'Faces Phased Fashion',
    category: 'E-Commerce',
    description: 'A fashion storefront built for modern shoppers, featuring a polished product catalog, smooth browsing experience, and fast checkout flow.',
    image: 'gradient-1',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://faces-phased-fashion.vercel.app',
    githubUrl: '#',
    stats: { users: '3K+', revenue: '+120%' },
  },
  {
    id: 2,
    title: 'FlowAutomation',
    category: 'System Automation',
    description: 'Business process automation platform that reduced client operational costs by 40% through intelligent workflow management.',
    image: 'gradient-2',
    tech: ['Node.js', 'Python', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    stats: { efficiency: '+40%', timeSaved: '120h/mo' },
  },
  {
    id: 3,
    title: 'MediReach',
    category: 'Healthcare',
    description: 'MediReach is a patient-focused telehealth platform that supports virtual consultations, appointment scheduling, secure medical record access, and analytics for clinicians. It simplifies remote care delivery, enhances patient engagement, and improves clinical workflow efficiency.',
    image: 'gradient-3',
    tech: ['Next.js', 'React', 'Supabase', 'Tailwind'],
    liveUrl: 'https://medireach-henna.vercel.app/?fbclid=PAT01DUAQzcGJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadts5CPRh7oMOetYjzbHgWLMKVx3VCURcYPMdeH-Um0vzk1yYy7s75WiZNDlQ_aem_0eLydywZwGxP_ahF1OLtbw',
    githubUrl: '#',
    stats: { users: '5K+', satisfaction: '98%' },
  },
  {
    id: 4,
    title: 'Omega Roots Ecosystem',
    category: 'Environment',
    description: 'A comprehensive ecosystem management and sustainability platform designed to monitor, analyze, and optimize environmental health. Features real-time data visualization, ecological impact tracking, and sustainable resource management tools.',
    image: 'gradient-4',
    tech: ['React', 'Next.js', 'Tailwind', 'Vercel'],
    liveUrl: 'https://omega-roots-ecosystem-amso.vercel.app',
    githubUrl: '#',
    stats: { ecosystems: '100+', impact: '+60%' },
  },
  {
    id: 5,
    title: 'Eclipse Tattoos & Piercings',
    category: 'Business',
    description: 'Eclipse Tattoos & Piercings solves the challenge of inefficient appointment booking and limited online visibility for tattoo studios. This modern website features an intuitive online booking system, artist portfolios showcasing diverse styles, a comprehensive gallery of completed work, service pricing transparency, and seamless contact integration. It streamlines client acquisition, reduces no-shows through automated reminders, and enhances the overall customer experience in the creative services industry.',
    image: 'gradient-5',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://eclipse-tattoos-and-piercings.vercel.app/?fbclid=PAT01DUAQzcINleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacfuu8V8L55VDg-xKvW3_HB2PqLijdnc9zacKOh91DobQD5p4YVh8__vCKifQ_aem_dy6d42VCkNPXCH4vCJNgOA',
    githubUrl: '#',
    stats: { bookings: '1K+', clients: '500+' },
  },
  {
    id: 6,
    title: 'Nyumba Search',
    category: 'Real Estate',
    description: 'Nyumba Search addresses the fragmented and inefficient property search process in real estate markets. It solves problems like scattered listings, lack of comprehensive filters, and poor user experience by providing a centralized platform with advanced search capabilities, interactive maps, property comparison tools, and verified listings. Unique features include AI-powered recommendations, virtual tours integration, tenant-landlord messaging, and real-time market analytics, making property hunting seamless and data-driven.',
    image: 'gradient-6',
    tech: ['Next.js', 'React', 'Supabase', 'Mapbox'],
    liveUrl: 'https://nyumbasearch-seven.vercel.app/?fbclid=PAT01DUAQzcKpleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAae0QzaqjnWUFuseT9R-wJM7_RW4TU-orNXBNstrNFchgXHLi-CjnZji5808Zw_aem_EvCXOdJyM2GbatkrgyFi1g',
    githubUrl: '#',
    stats: { properties: '10K+', users: '5K+' },
  },
];

const gradients: Record<string, string> = {
  'gradient-1': 'from-[#FF6B35] via-[#FF8C42] to-[#FFA94D]',
  'gradient-2': 'from-[#6C63FF] via-[#8B5CF6] to-[#A78BFA]',
  'gradient-3': 'from-[#10B981] via-[#34D399] to-[#6EE7B7]',
  'gradient-4': 'from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]',
  'gradient-5': 'from-[#8B008B] via-[#9932CC] to-[#BA55D3]',
  'gradient-6': 'from-[#FF6347] via-[#FF7F50] to-[#FFA07A]',
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C63FF]/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="section-label mb-4 block">Our Work</span>
            <h2 className="section-title">
              Projects That <span className="text-gradient">Speak</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md">
            Every project is a testament to our commitment to excellence. 
            Here's what we've built for our clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard tiltAmount={5}>
                <div
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image/Gradient */}
                  <div className={`h-56 bg-gradient-to-br ${gradients[project.image]} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl text-white/30">{project.title[0]}</span>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 text-white/70 rounded border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 pt-4 border-t border-white/10">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="font-display text-xl text-[#6C63FF]">{value}</div>
                          <div className="text-xs text-white/50 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm mb-4">
            And {12 - projects.length}+ more projects delivered successfully
          </p>
          <motion.button
            className="btn-secondary-3d inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`h-48 bg-gradient-to-br ${gradients[selectedProject.image]} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-white/70 mb-6">{selectedProject.description}</p>

                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/50 mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm bg-white/5 text-white rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white/50 mb-3">RESULTS</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="bg-white/5 rounded-lg p-4">
                        <div className="font-display text-2xl text-[#FF6B35]">{value}</div>
                        <div className="text-sm text-white/50 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    className="flex-1 btn-primary-3d text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    className="flex-1 btn-secondary-3d text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

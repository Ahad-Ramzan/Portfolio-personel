'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Rocket } from 'lucide-react';

const highlights = [
  {
    title: 'Web Development First',
    description:
      'Most of my professional experience is in full stack web development for real-world client products.',
    icon: Globe,
  },
  {
    title: 'Real-world Client Projects',
    description:
      'Delivered production web applications with scalable architecture, admin workflows, and API integrations.',
    icon: CheckCircle2,
  },
  {
    title: '3+ Mobile Apps Deployed',
    description:
      'Also shipped mobile applications with store-ready builds for Play Store and App Store.',
    icon: Rocket,
  },
];

const ExperienceHighlights = () => {
  return (
    <section id='experience-highlights' className='py-20'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          <div className='text-center mb-14'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Experience <span className='gradient-text'>Highlights</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6' />
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4'>
                  <item.icon className='text-white' size={22} />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-300 text-sm'>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;

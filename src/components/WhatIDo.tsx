'use client';

import { motion } from 'framer-motion';
import { AppWindow, ServerCog, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Full Stack Web Development',
    description:
      'I build scalable, production-ready web applications with clean architecture from frontend to backend.',
    icon: AppWindow,
    points: ['React.js + Next.js interfaces', 'Node.js + Express.js services'],
  },
  {
    title: 'Mobile App Development',
    description:
      'I deliver polished cross-platform mobile apps designed for real users and app store deployment.',
    icon: Smartphone,
    points: ['React Native with Expo', 'TypeScript-first codebases'],
  },
  {
    title: 'API Development',
    description:
      'I design and implement reliable API layers that power dashboards, mobile apps, and client platforms.',
    icon: ServerCog,
    points: ['REST API development', 'Integration-ready endpoints'],
  },
];

const WhatIDo = () => {
  return (
    <section id='what-i-do' className='py-20'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          <div className='text-center mb-14'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              What <span className='gradient-text'>I Do</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6' />
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              End-to-end development services focused on scalability,
              maintainability, and production quality.
            </p>
          </div>

          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className='glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4'>
                  <service.icon className='text-white' size={22} />
                </div>
                <h3 className='text-xl font-semibold text-white mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-300 mb-4'>{service.description}</p>
                <div className='space-y-2'>
                  {service.points.map(point => (
                    <div key={point} className='text-sm text-blue-300'>
                      {point}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;

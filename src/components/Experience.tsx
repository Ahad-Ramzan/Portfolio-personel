'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Expert System Solution',
      location: 'Remote',
      period: 'Dec 2024 - Present',
      type: 'Full-time',
      responsibilities: [
        'Develop and maintain responsive web applications using React.js and Next.js',
        'Collaborate with design teams to implement pixel-perfect UI/UX designs',
        'Optimize application performance and ensure cross-browser compatibility',
        'Implement state management solutions using Zustand and React Context',
        'Work with RESTful APIs to integrate frontend with backend services',
        'Write clean, maintainable, and well-documented code following best practices',
        'Participate in code reviews and contribute to team knowledge sharing',
      ],
      technologies: [
        'React.js',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Zustand',
        'Git',
      ],
      isActive: true,
    },
    // You can add more experiences here
  ];

  return (
    <section id='experience' className='py-20 bg-gray-900/50'>
      <div className='container mx-auto px-6'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='max-w-4xl mx-auto'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Work <span className='gradient-text'>Experience</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              My professional journey in frontend development
            </p>
          </motion.div>

          {/* Timeline */}
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500'></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='relative pl-20 pb-12 last:pb-0'
              >
                {/* Timeline Dot */}
                <div className='absolute left-6 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ring-4 ring-gray-900'>
                  {exp.isActive && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className='absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30'
                    />
                  )}
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className='glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300'
                >
                  {/* Header */}
                  <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {exp.title}
                      </h3>
                      <div className='flex items-center gap-x-4 text-gray-400'>
                        <span className='text-lg font-semibold text-blue-400'>
                          {exp.company}
                        </span>
                        <span className='hidden md:block'>•</span>
                        <div className='flex items-center gap-x-1'>
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col items-start md:items-end mt-4 md:mt-0'>
                      <div className='flex items-center gap-x-2 text-gray-300 mb-2'>
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.isActive
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-white mb-4'>
                      Key Responsibilities:
                    </h4>
                    <ul className='gap-y-3'>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className='flex items-start gap-x-3 text-gray-300'
                        >
                          <ChevronRight
                            size={16}
                            className='text-blue-400 mt-0.5 flex-shrink-0'
                          />
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-4'>
                      Technologies Used:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className='px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium'
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className='text-center mt-16 p-8 glass rounded-2xl'
          >
            <h3 className='text-2xl font-bold text-white mb-4'>
              Interested in working together?
            </h3>
            <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
              I&apos;m always open to discussing new opportunities and exciting
              projects. Let&apos;s connect and see how we can create something
              amazing together.
            </p>
            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center gap-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300'
            >
              <span>Get In Touch</span>
              <ChevronRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

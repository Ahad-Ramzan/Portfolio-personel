'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Zap, Users } from 'lucide-react';

const About = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Zap, label: 'Lines of Code', value: '50K+' },
    { icon: Users, label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section id='about' className='py-20 bg-gray-900/50'>
      <div className='container mx-auto px-6'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              About <span className='gradient-text'>Me</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'></div>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Image/Avatar Section */}
            <motion.div
              variants={itemVariants}
              className='text-center lg:text-left'
            >
              <div className='relative inline-block'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1'
                >
                  <div className='w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center overflow-hidden'>
                    {/* Placeholder for avatar - you can replace with actual image */}
                    <div className='w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center'>
                      <div className='text-8xl text-gray-400'>AR</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className='absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'
                >
                  <Code className='text-white' size={24} />
                </motion.div>

                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className='absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center'
                >
                  <Zap className='text-white' size={24} />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants} className='gap-y-6'>
              <h3 className='text-3xl font-bold text-white mb-6'>
                Frontend Developer & UI/UX Enthusiast
              </h3>

              <div className='gap-y-4 text-gray-300 leading-relaxed'>
                <p>
                  I&apos;m a passionate Frontend Developer with expertise in modern
                  web technologies. Currently working at{' '}
                  <span className='text-blue-400 font-semibold'>
                    Expert System Solution
                  </span>
                  where I develop cutting-edge React.js and Next.js
                  applications.
                </p>

                <p>
                  With a strong foundation in computer science from Leads
                  University and specialized training in web development, I
                  bring both theoretical knowledge and practical experience to
                  every project.
                </p>

                <p>
                  I specialize in creating responsive, user-friendly interfaces
                  using React, Next.js, and TailwindCSS. My focus is on writing
                  clean, maintainable code while delivering exceptional user
                  experiences.
                </p>

                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>

              {/* Skills Highlights */}
              <div className='flex flex-wrap gap-3 mt-8'>
                {[
                  'React.js',
                  'Next.js',
                  'TypeScript',
                  'TailwindCSS',
                  'Node.js',
                  'Git',
                ].map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className='px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium'
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-20'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className='text-center p-6 glass rounded-xl'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'>
                  <stat.icon className='text-white' size={28} />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-400 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

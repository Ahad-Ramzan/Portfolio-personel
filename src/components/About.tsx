'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Layers3, Smartphone, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ value }: { value: string }) => {
  const numericPart = Number.parseInt(value, 10);
  const suffix = value.replace(String(numericPart), '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 40;
    const start = performance.now();
    const duration = 1000;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const next = Math.round(progress * numericPart);
      setCount(next);
      frame += 1;
      if (progress < 1 && frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [numericPart]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

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
    { icon: Code, label: 'Projects Completed', value: '8+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '50+' },
    { icon: Zap, label: 'Lines of Code', value: '50M+' },
    { icon: Users, label: 'Happy Clients', value: '8+' },
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
                 <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src='/Ahad_Ramzan4.jpeg'
                    alt='Ahad Ramzan'
                    width={500}
                    height={500}
                    className='w-full h-full object-cover object-top rounded-2xl'
                  />

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
                Full Stack Developer | Mobile App Developer
              </h3>

              <div className='gap-y-4 text-gray-300 leading-relaxed'>
                <p>
                  I build scalable web applications and production-ready mobile
                  apps using modern full stack technologies. At{' '}
                  <span className='text-blue-400 font-semibold'>
                    Expert System Solution
                  </span>
                  , I deliver client-focused products with clean architecture and
                  reliable performance.
                </p>

                <p>
                  Frontend expertise includes React.js, Next.js, Tailwind CSS,
                  and shadcn-style component systems. On the backend, I work
                  with Node.js, Express.js, PostgreSQL, and TypeORM to build
                  robust APIs and data layers.
                </p>

                <p>
                  I also build React Native (Expo) mobile applications with
                  TypeScript, and I enjoy monorepo-based architecture for
                  scalable product development across web and mobile.
                </p>
              </div>

              {/* Skills Highlights */}
              <div className='flex flex-wrap gap-3 mt-8'>
                {[
                  'React.js',
                  'Next.js',
                  'Tailwind CSS',
                  'Node.js',
                  'Express.js',
                  'PostgreSQL',
                  'TypeORM',
                  'React Native (Expo)',
                  'TypeScript',
                  'Monorepo Architecture',
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
                className='text-center p-6 glass rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300'
              >
                <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'>
                  <stat.icon className='text-white' size={28} />
                </div>
                <div className='text-3xl font-bold text-white mb-2'>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className='text-gray-400 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='grid md:grid-cols-2 gap-6 mt-12'
          >
            <div className='glass rounded-xl p-6 border border-white/5'>
              <div className='flex items-center gap-3 mb-3'>
                <Layers3 className='text-blue-400' size={20} />
                <h4 className='text-lg font-semibold text-white'>
                  Scalable Systems
                </h4>
              </div>
              <p className='text-gray-300 text-sm'>
                Built with monorepo-based architecture and reusable modules for
                long-term maintainability.
              </p>
            </div>
            <div className='glass rounded-xl p-6 border border-white/5'>
              <div className='flex items-center gap-3 mb-3'>
                <Smartphone className='text-purple-400' size={20} />
                <h4 className='text-lg font-semibold text-white'>
                  Mobile + Web Delivery
                </h4>
              </div>
              <p className='text-gray-300 text-sm'>
                Consistent user experience across web and mobile with
                performance-focused, production-ready implementations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

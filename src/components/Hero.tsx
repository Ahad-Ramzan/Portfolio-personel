'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Download, Mail } from 'lucide-react';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900'>
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-blue-500 rounded-full opacity-20'
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className='absolute left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse'></div>
      <div
        className='absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse'
        style={{ animationDelay: '2s' }}
      ></div>

      <div className='container mt-20 mx-auto px-6 text-center relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='max-w-4xl mx-auto'
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className='mb-6'>
            <span className='text-lg text-blue-400 font-medium'>
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6'
          >
            <span className='gradient-text'>Ahad</span>{' '}
            <span className='text-white'>Ramzan</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div variants={itemVariants} className='mb-8'>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-gray-300 font-light'>
              Frontend Developer –{' '}
              <span className='text-blue-400'>React.js</span> |{' '}
              <span className='text-purple-400'>Next.js</span> |{' '}
              <span className='text-cyan-400'>TailwindCSS</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className='text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed'
          >
            Passionate about creating exceptional user experiences with modern
            web technologies. Specializing in React, Next.js, and building
            scalable, responsive applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row items-center justify-center gap-6 mb-12'
          >
            <motion.a
              href='/cv.pdf'
              download
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg'
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>

            <motion.a
              href='#contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-x-3 px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300'
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className='flex items-center justify-center gap-x-6 mb-16'
          >
            <motion.a
              href='https://linkedin.com/in/ahad-ramzan'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 group'
            >
              <Linkedin
                size={24}
                className='text-gray-300 group-hover:text-white'
              />
            </motion.a>

            <motion.a
              href='https://github.com/ahad-ramzan'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 group'
            >
              <Github
                size={24}
                className='text-gray-300 group-hover:text-white'
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <motion.a
          href='#about'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className='flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300'
        >
          <span className='text-sm mb-2'>Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

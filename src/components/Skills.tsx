'use client';

import { motion } from 'framer-motion';
import {
  AppWindow,
  Boxes,
  Database,
  GitBranch,
  Server,
  Smartphone,
} from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: AppWindow,
      color: 'from-blue-500 to-blue-600',
      skills: [
        'React.js / Next.js',
        'TypeScript',
        'Tailwind CSS',
        'shadcn/ui',

      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-purple-600',
      skills: [
        'Node.js',
        'Express.js',
        'REST API Development',
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        'PostgreSQL',
        'TypeORM',
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-emerald-500 to-cyan-600',
      skills: [
        'React Native (Expo)',
        'TypeScript',
        'Responsive UI systems',
      ],
    },
    {
      title: 'Architecture & Tools',
      icon: Boxes,
      color: 'from-amber-500 to-orange-600',
      skills: [
        'Monorepo (Turborepo / Nx)',
        'Zustand',
        'Git / GitHub',
        'API Integration',
        'Deployment (Cpanel /Mobile builds)',
      ],
    },
  ];

  return (
    <section id='skills' className='py-16 md:py-20'>
      <div className='container mx-auto px-4 sm:px-6'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center mb-12 md:mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              My <span className='gradient-text'>Skills</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              A structured full stack and mobile development toolkit focused on
              scalable, client-ready products.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className='glass rounded-2xl p-4 border border-white/5 hover:border-blue-500/30 hover:shadow-2xl transition-all duration-300'
              >
                {/* Category Header */}
                <div className='flex items-center gap-3 md:gap-4 mb-6 md:mb-8'>
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-2 md:mr-4`}
                  >
                    <category.icon className='text-white' size={20} />
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-white'>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className='space-y-3'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className='flex items-center gap-2 text-gray-200 text-sm md:text-base'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-blue-400' />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className='mt-14 md:mt-20'>
            <h3 className='text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 text-white'>
              Core Technologies
            </h3>

            <div className='flex flex-wrap justify-center items-center gap-5 md:gap-8'>
              {[
                { name: 'React.js', icon: AppWindow },
                { name: 'Next.js', icon: AppWindow },
                { name: 'TypeScript', icon: Boxes },
                { name: 'Tailwind CSS', icon: AppWindow },
                { name: 'shadcn/ui', icon: Boxes },
                { name: 'Node.js', icon: Server },
                { name: 'Express.js', icon: Server },
                { name: 'PostgreSQL', icon: Database },
                { name: 'TypeORM', icon: Database },
                { name: 'React Native(Expo)', icon: Smartphone },
                { name: 'Git / GitHub', icon: GitBranch },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -10 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex flex-col items-center group cursor-pointer w-[90px] md:w-auto'
                >
                  <div className='w-14 h-14 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300'>
                    <tech.icon className='text-blue-300' size={24} />
                  </div>
                  <span className='text-xs md:text-sm text-center text-gray-400 group-hover:text-white transition-colors duration-300'>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

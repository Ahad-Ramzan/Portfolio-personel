'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Settings, Globe } from 'lucide-react';

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
      title: 'Languages & Frameworks',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Zustand', level: 80 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Vite', level: 80 },
        { name: 'npm/yarn', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
        { name: 'Vercel', level: 80 },
      ],
    },
    {
      title: 'Concepts & Practices',
      icon: Globe,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'Responsive Design', level: 95 },
        { name: 'Component Architecture', level: 90 },
        { name: 'REST APIs', level: 85 },
        { name: 'SSR/SSG', level: 80 },
        { name: 'Dynamic Routing', level: 85 },
        { name: 'State Management', level: 88 },
      ],
    },
  ];

  const SkillBar = ({
    skill,
    delay,
  }: {
    skill: { name: string; level: number };
    delay: number;
  }) => (
    <div className='mb-4'>
      <div className='flex justify-between mb-2'>
        <span className='text-gray-300 font-medium'>{skill.name}</span>
        <span className='text-blue-400'>{skill.level}%</span>
      </div>
      <div className='w-full bg-gray-700 rounded-full h-2'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
          className='bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full'
        />
      </div>
    </div>
  );

  return (
    <section id='skills' className='py-20'>
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
              My <span className='gradient-text'>Skills</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className='grid lg:grid-cols-3 gap-8'>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className='glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300'
              >
                {/* Category Header */}
                <div className='flex items-center gap-4 mb-8'>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                  >
                    <category.icon className='text-white' size={24} />
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className='gap-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div variants={itemVariants} className='mt-20'>
            <h3 className='text-2xl font-bold text-center mb-12 text-white'>
              Technologies I Love Working With
            </h3>

            <div className='flex flex-wrap justify-center items-center gap-8'>
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Next.js', icon: '▲' },
                { name: 'TypeScript', icon: 'TS' },
                { name: 'JavaScript', icon: 'JS' },
                { name: 'TailwindCSS', icon: '🎨' },
                { name: 'Node.js', icon: '📗' },
                { name: 'Git', icon: '📚' },
                { name: 'VS Code', icon: '💻' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -10 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex flex-col items-center group cursor-pointer'
                >
                  <div className='w-16 h-16 glass rounded-2xl flex items-center justify-center mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300'>
                    <span className='text-2xl'>{tech.icon}</span>
                  </div>
                  <span className='text-sm text-gray-400 group-hover:text-white transition-colors duration-300'>
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

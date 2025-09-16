'use client';

import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Ensure projects stay visible after animation
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

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

  const projects = [
    {
      title: 'MCM Construction Web App',
      description:
        'A comprehensive construction management platform built with Next.js and Tailwind CSS, featuring reusable UI components and real-time data integration.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Next.js',
        'TailwindCSS',
        'TypeScript',
        'React',
        'API Integration',
      ],
      features: [
        'Responsive design with mobile-first approach',
        'Reusable component library',
        'Real-time data synchronization',
        'Modern UI/UX with animations',
        'SEO optimized',
      ],
      github: 'https://github.com/ahad-ramzan/mcm-construction',
      live: 'https://mcm-construction.vercel.app',
      status: 'Completed',
      category: 'Web Application',
    },
    {
      title: 'E-commerce Store',
      description:
        'A fully functional e-commerce platform with product listing, shopping cart system, and state management using React and Vite.',
      image: '/api/placeholder/600/400',
      technologies: [
        'React',
        'Vite',
        'React Router',
        'Context API',
        'CSS Modules',
      ],
      features: [
        'Product catalog with search and filter',
        'Shopping cart functionality',
        'User authentication',
        'Responsive design',
        'State management with Context API',
      ],
      github: 'https://github.com/ahad-ramzan/ecommerce-store',
      live: 'https://ecommerce-store-demo.vercel.app',
      status: 'Completed',
      category: 'E-commerce',
    },
    {
      title: 'Ecity Admin Panel',
      description:
        'A dynamic admin dashboard built with Next.js and Zustand for state management, featuring real-time content updates and modern UI.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Next.js',
        'Zustand',
        'TailwindCSS',
        'Chart.js',
        'REST APIs',
      ],
      features: [
        'Real-time dashboard analytics',
        'Content management system',
        'User role management',
        'Data visualization with charts',
        'Responsive admin interface',
      ],
      github: 'https://github.com/ahad-ramzan/ecity-admin',
      live: 'https://ecity-admin.vercel.app',
      status: 'In Progress',
      category: 'Dashboard',
    },
  ];

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className='glass rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300'
    >
      {/* Project Image */}
      <div className='relative overflow-hidden'>
        <div className='w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center'>
          {/* Placeholder for project image */}
          <div className='text-6xl text-gray-500'>
            {project.category === 'Web Application'
              ? '🏗️'
              : project.category === 'E-commerce'
                ? '🛒'
                : '📊'}
          </div>
        </div>

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <div className='flex gap-x-4'>
            <motion.a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300'
            >
              <Github className='text-white' size={24} />
            </motion.a>
            <motion.a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300'
            >
              <ExternalLink className='text-white' size={24} />
            </motion.a>
          </div>
        </div>

        {/* Status Badge */}
        <div className='absolute top-4 right-4'>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Completed'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className='p-8'>
        {/* Header */}
        <div className='flex items-start justify-between mb-4'>
          <div>
            <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'>
              {project.title}
            </h3>
            <span className='text-sm text-blue-400 font-medium'>
              {project.category}
            </span>
          </div>
          <Code
            className='text-gray-400 group-hover:text-blue-400 transition-colors duration-300'
            size={20}
          />
        </div>

        {/* Description */}
        <p className='text-gray-300 mb-6 leading-relaxed'>
          {project.description}
        </p>

        {/* Features */}
        <div className='mb-6'>
          <h4 className='text-sm font-semibold text-white mb-3 flex items-center gap-x-2'>
            <Eye size={16} />
            <span>Key Features:</span>
          </h4>
          <ul className='gap-y-2'>
            {project.features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className='flex items-start gap-x-2 text-gray-400 text-sm'
              >
                <div className='w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0'></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className='mb-6'>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map(tech => (
              <span
                key={tech}
                className='px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 text-xs font-medium'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-x-4'>
          <motion.a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-x-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex-1 justify-center'
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>

          <motion.a
            href={project.live}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex-1 justify-center'
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id='projects' className='py-20 bg-gray-900/50'>
      <div className='container mx-auto px-6'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={hasAnimated ? 'visible' : isInView ? 'visible' : 'hidden'}
          className='max-w-7xl mx-auto'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Featured <span className='gradient-text'>Projects</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Here are some of my recent projects that showcase my skills and
              passion for web development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div
            className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'
            style={{
              minHeight: '500px',
              opacity: hasAnimated ? 1 : isInView ? 1 : 0.3,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className='text-center mt-16 p-8 glass rounded-2xl'
          >
            <h3 className='text-2xl font-bold text-white mb-4'>
              Want to see more?
            </h3>
            <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
              These are just a few highlights from my portfolio. I have more
              projects showcasing different technologies and use cases.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <motion.a
                href='https://github.com/ahad-ramzan'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300'
              >
                <Github size={16} />
                <span>View All Projects</span>
              </motion.a>

              <motion.a
                href='#contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300'
              >
                <span>Let&apos;s Work Together</span>
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

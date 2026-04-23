'use client';

import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers3,
  Smartphone,
  Store,
  Workflow,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const mobileApps = [
  {
    title: 'e-City Challenge',
    description:
      'React Native "Tuk Tuk App" focused on interactive activities with authentication, onboarding, map progress tracking, and task workflows. Includes drawing/photo/text/video activities, feedback, offline sync, media backup, and modular component architecture.',
    playStore: 'https://play.google.com/store/apps/details?id=com.ecity.challenge',
    appStore: null,
    icon: '/ecitychallenge_icon_app.png',
    platform: 'Android',
    status: 'Completed',
  },
  {
    title: 'Yourself Pilates',
    description:
      'Yourself Pilates is a mobile app for managing Pilates classes, bookings, schedules, and instructional videos. Users can register as teachers or students, book sessions, and use a clean interface powered by authentication and calendar workflows.',
    playStore: 'https://play.google.com/store/apps/details?id=com.yourselfpilate.app',
    appStore: 'https://apps.apple.com/pk/app/yourself-pilates/id6752496161',
    icon: '/yourselfPilates_icon.png',
    platform: 'Android + iOS',
    status: 'Completed',
    stack: [
      'React Native (Expo)',
      'TypeScript',
      'NativeWind (Tailwind CSS)',
      'Context API',
      'Custom Hooks',
      'REST APIs',
      'Android/iOS Native Config',
    ],
  },
  {
    title: 'FisioActif',
    description:
      'FisioActif is a cross-platform physiotherapy appointment app built with Expo and React Native. It supports authentication, calendar-based booking, video resources, and secure data handling for mobile users.',
    playStore: '#',
    appStore: '#',
    icon: '/FisioActif_icon.png',
    platform: 'Android + iOS',
    status: 'In Progress',
    stack: [
      'React Native',
      'Expo Router',
      'TypeScript',
      'Axios',
      'React Navigation',
      'EAS Build/Deploy',
    ],
  },
];

const fullStackProjects = [
  {
    title: 'MCM Construction Web App',
    problem:
      'Construction teams needed a centralized workflow for project updates and operations.',
    stack: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeORM'],
    features: [
      'Full-stack application with admin + user workflows',
      'Scalable architecture for growing business operations',
      'Reliable, performance-focused UI and data flows',
    ],
    github: 'https://github.com/Ahad-Ramzan/MCM',
    live: '#',
    icon: Workflow,
  },
  {
    title: 'E-commerce Store',
    problem:
      'The business needed a dependable shopping flow with connected product and checkout operations.',
    stack: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL'],
    features: [
      'Product management with API-driven backend',
      'Cart + checkout workflow with state synchronization',
      'Responsive storefront optimized for conversion',
    ],
    github: 'https://github.com/ahad-ramzan/ecommerce-store',
    live: 'https://ecommerce-store-demo.vercel.app',
    icon: Store,
  },
  {
    title: 'TukTuk Admin Panel',
    problem:
      'Operations teams required a central dashboard for data control, visibility, and team access.',
    stack: ['Next.js', 'Node.js', 'Express.js', 'Zustand', 'REST APIs'],
    features: [
      'Dashboard system for data management',
      'Role-based access workflow support',
      'Modular structure ready for feature expansion',
    ],
    github: 'https://github.com/ahad-ramzan/ecity-admin',
    live: 'https://ecity-admin.vercel.app',
    icon: Layers3,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Featured <span className='gradient-text'>Projects</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6' />
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Production-focused mobile and full stack projects built for
              real-world users and business workflows.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className='flex items-center gap-3 mb-6'>
              <Layers3 className='text-purple-400' />
              <h3 className='text-2xl font-bold text-white'>Full Stack Projects</h3>
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {fullStackProjects.map(project => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -8 }}
                  className='glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300'
                >
                  <div className='flex items-center justify-between mb-5'>
                    <div className='w-11 h-11 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'>
                      <project.icon className='text-white' size={20} />
                    </div>
                    <div className='flex items-center gap-2'>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300'
                      >
                        <Github className='text-gray-200' size={16} />
                      </a>
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300'
                      >
                        <ExternalLink className='text-gray-200' size={16} />
                      </a>
                    </div>
                  </div>
                  <h4 className='text-xl font-semibold text-white mb-4'>
                    {project.title}
                  </h4>
                  <div className='mb-4'>
                    <p className='text-xs font-semibold text-blue-300 mb-2'>
                      Problem Solved
                    </p>
                    <p className='text-gray-300 text-sm'>{project.problem}</p>
                  </div>
                  <div className='mb-4'>
                    <p className='text-xs font-semibold text-purple-300 mb-2'>
                      Tech Stack
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.stack.map(tech => (
                        <span
                          key={tech}
                          className='px-2.5 py-1 rounded-full text-xs bg-blue-500/15 text-blue-300 border border-blue-500/30'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className='text-xs font-semibold text-cyan-300 mb-2'>
                      Key Features
                    </p>
                    <ul className='space-y-2'>
                      {project.features.map(feature => (
                        <li key={feature} className='text-gray-300 text-sm flex gap-2'>
                          <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2' />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='mt-16'>
            <div className='flex items-center gap-3 mb-4'>
              <Smartphone className='text-blue-400' />
              <h3 className='text-2xl font-bold text-white'>
                Mobile Applications
              </h3>
            </div>
            <p className='text-gray-300 mb-6'>
              Total apps: 3 | 3 on Google Play Store | 2 on Apple App Store
            </p>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {mobileApps.map(app => (
                <motion.article
                  key={app.title}
                  whileHover={{ y: -8 }}
                  className='glass rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300'
                >
                  {app.icon ? (
                    <div className='w-12 h-12 rounded-xl overflow-hidden mb-4 border border-white/10'>
                      <Image
                        src={app.icon}
                        alt={`${app.title} icon`}
                        width={48}
                        height={48}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  ) : (
                    <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4'>
                      <Smartphone className='text-white' size={20} />
                    </div>
                  )}
                  <h4 className='text-xl font-semibold text-white mb-2'>
                    {app.title}
                  </h4>
                  <p className='text-gray-300 text-sm mb-5'>{app.description}</p>
                  {'stack' in app && app.stack ? (
                    <div className='flex flex-wrap gap-2 mb-5'>
                      {app.stack.slice(0, 4).map(tech => (
                        <span
                          key={tech}
                          className='px-2.5 py-1 rounded-full text-xs bg-blue-500/15 text-blue-300 border border-blue-500/30'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className='flex items-center justify-between mb-4 text-sm'>
                    <span className='text-gray-400'>{app.platform}</span>
                    <span
                      className={
                        app.status === 'In Progress'
                          ? 'text-yellow-400'
                          : 'text-green-400'
                      }
                    >
                      {app.status}
                    </span>
                  </div>
                  <div className='flex gap-3'>
                    <a
                      href={app.playStore}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300 transition-all duration-300 text-sm'
                    >
                      Play Store
                    </a>
                    {app.appStore && (
                      <a
                        href={app.appStore}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm'
                      >
                        App Store
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>



          <motion.div
            variants={itemVariants}
            className='text-center mt-16 p-8 glass rounded-2xl'
          >
            <h3 className='text-2xl font-bold text-white mb-4'>
              Let&apos;s build something impactful
            </h3>
            <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
              I build high-quality full stack and mobile products focused on
              performance, clean architecture, and business value.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <a
                href='https://github.com/ahad-ramzan'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300'
              >
                <Github size={16} />
                <span>View All Projects</span>
              </a>
              <a
                href='#contact'
                className='flex items-center gap-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300'
              >
                <span>Let&apos;s Work Together</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

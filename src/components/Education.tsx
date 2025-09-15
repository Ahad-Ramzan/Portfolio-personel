'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'Leads University',
      location: 'Lahore, Pakistan',
      period: 'Dec 2024',
      status: 'Graduated',
      icon: GraduationCap,
      description:
        'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.',
      subjects: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Management Systems',
        'Web Development',
        'Object-Oriented Programming',
        'Computer Networks',
      ],
      color: 'from-blue-500 to-purple-500',
    },
    {
      degree: 'Web Design & Development Certification',
      institution: 'Punjab Skills Development Fund (PSDF)',
      location: 'Punjab, Pakistan',
      period: 'Apr 2023 - Sep 2023',
      status: 'Certified',
      icon: Award,
      description:
        'Intensive training program focused on modern web development technologies and industry best practices.',
      subjects: [
        'HTML5 & CSS3',
        'JavaScript ES6+',
        'React.js Development',
        'Responsive Web Design',
        'Version Control (Git)',
        'Frontend Best Practices',
      ],
      color: 'from-purple-500 to-cyan-500',
    },
  ];

  return (
    <section id='education' className='py-20'>
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
              <span className='gradient-text'>Education</span> & Certifications
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              My academic journey and professional certifications that shaped my
              career
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className='grid lg:grid-cols-2 gap-8'>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className='glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group'
              >
                {/* Header */}
                <div className='flex items-start gap-x-4 mb-6'>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <edu.icon className='text-white' size={28} />
                  </div>

                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'>
                      {edu.degree}
                    </h3>
                    <div className='gap-y-1'>
                      <p className='text-blue-400 font-semibold'>
                        {edu.institution}
                      </p>
                      <p className='text-gray-400 text-sm'>{edu.location}</p>
                    </div>
                  </div>
                </div>

                {/* Period and Status */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center gap-x-2 text-gray-300'>
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Graduated'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Description */}
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  {edu.description}
                </p>

                {/* Subjects */}
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4 flex items-center gap-x-2'>
                    <BookOpen size={18} />
                    <span>Key Subjects:</span>
                  </h4>
                  <div className='grid grid-cols-2 gap-3'>
                    {edu.subjects.map((subject, idx) => (
                      <motion.div
                        key={subject}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className='flex items-center gap-x-2 text-gray-300 text-sm'
                      >
                        <div className='w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
                        <span>{subject}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className='mt-16 text-center p-8 glass rounded-2xl'
          >
            <h3 className='text-2xl font-bold text-white mb-4'>
              Continuous Learning
            </h3>
            <p className='text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed'>
              I believe in lifelong learning and staying updated with the latest
              technologies. I regularly participate in online courses,
              workshops, and tech communities to enhance my skills and knowledge
              in web development.
            </p>

            <div className='flex flex-wrap justify-center gap-4'>
              {[
                'Online Courses',
                'Tech Webinars',
                'Developer Communities',
                'Open Source Contributions',
                'Tech Blogs & Articles',
              ].map((activity, index) => (
                <motion.span
                  key={activity}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 text-sm font-medium'
                >
                  {activity}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

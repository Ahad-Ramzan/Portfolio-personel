'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ahad-ramzan',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ahad-ramzan',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:ahadramzan584@gmail.com',
      label: 'Email',
      color: 'hover:text-green-400',
    },
    {
      icon: Phone,
      href: 'tel:+923064468027',
      label: 'Phone',
      color: 'hover:text-purple-400',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className='bg-gray-900/80 backdrop-blur-sm border-t border-gray-800'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mb-6'
            >
              <h3 className='text-2xl font-bold gradient-text mb-4'>
                Ahad Ramzan
              </h3>
              <p className='text-gray-400 leading-relaxed max-w-md'>
                Frontend Developer passionate about creating exceptional user
                experiences with modern web technologies. Specializing in React,
                Next.js, and building scalable, responsive applications.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='gap-y-2'
            >
              <div className='flex items-center gap-x-2 text-gray-400'>
                <Mail size={16} />
                <span>ahadramzan584@gmail.com</span>
              </div>
              <div className='flex items-center gap-x-2 text-gray-400'>
                <Phone size={16} />
                <span>0306-4468027</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className='text-lg font-semibold text-white mb-6'>
                Quick Links
              </h4>
              <ul className='gap-y-3'>
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className='text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-x-2'
                    >
                      <span className='w-1 h-1 bg-blue-500 rounded-full'></span>
                      <span>{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className='text-lg font-semibold text-white mb-6'>Connect</h4>
              <div className='gap-y-4'>
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`flex items-center gap-x-3 text-gray-400 ${social.color} transition-all duration-300 group`}
                  >
                    <div className='p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300'>
                      <social.icon size={16} />
                    </div>
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between'
        >
          {/* Copyright */}
          <div className='flex items-center gap-x-2 text-gray-400 mb-4 md:mb-0'>
            <span>© {currentYear} Ahad Ramzan. Made with</span>
            <Heart size={16} className='text-red-500' fill='currentColor' />
            <span>using Next.js & TailwindCSS</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group'
          >
            <span className='text-sm'>Back to Top</span>
            <ArrowUp
              size={16}
              className='group-hover:-translate-y-1 transition-transform duration-300'
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl'></div>
      </div>
    </footer>
  );
};

export default Footer;

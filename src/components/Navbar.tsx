'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, Mail, BarChart3 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className='container mx-auto px-6 '>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='hidden sm:block text-2xl font-bold gradient-text'
          >
            Ahad Ramzan
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-4'>
            {navItems.map(item => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='text-gray-300 hover:text-white transition-colors duration-200 relative group'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full'></span>
              </motion.a>
            ))}

            {/* CTA Buttons */}
            <div className='flex items-center gap-4 px-4 ml-8'>
              <ThemeToggle />

              <motion.a
                href='/admin'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-x-2 px-4 py-2 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300'
                title='Analytics Dashboard'
              >
                <BarChart3 size={16} />
                <span className='hidden sm:inline'>Analytics</span>
              </motion.a>

              <motion.a
                href='/cv.pdf'
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300'
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                href='#contact'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-x-2 px-4 py-2 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300'
              >
                <Mail size={16} />
                <span>Contact</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-white p-2'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden mt-4 glass rounded-lg p-6'
          >
            <div className='flex flex-col gap-y-4'>
              {navItems.map(item => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className='text-gray-300 hover:text-white transition-colors duration-200'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}

              <div className='flex flex-col gap-y-3 pt-4 border-t border-gray-700'>
                <div className='flex justify-center'>
                  <ThemeToggle />
                </div>

                <motion.a
                  href='/admin'
                  whileHover={{ scale: 1.02 }}
                  className='flex items-center justify-center gap-x-2 px-4 py-3 border border-green-500 text-green-400 rounded-full'
                  onClick={() => setIsOpen(false)}
                >
                  <BarChart3 size={16} />
                  <span>Analytics Dashboard</span>
                </motion.a>

                <motion.a
                  href='/cv.pdf'
                  download
                  whileHover={{ scale: 1.02 }}
                  className='flex items-center justify-center gap-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full'
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </motion.a>

                <motion.a
                  href='#contact'
                  whileHover={{ scale: 1.02 }}
                  className='flex items-center justify-center gap-x-2 px-4 py-3 border border-blue-500 text-blue-400 rounded-full'
                  onClick={() => setIsOpen(false)}
                >
                  <Mail size={16} />
                  <span>Contact Me</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

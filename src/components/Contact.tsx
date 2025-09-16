'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import type { ContactFormInput, SubmitStatus, FieldErrors } from '@/types';

const Contact = () => {
  const { trackContact } = useAnalytics();
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validateForm = () => {
    const errors: typeof fieldErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Track successful contact form submission
        trackContact(
          formData.name,
          formData.email,
          formData.message,
          'contact-form'
        );

        setSubmitStatus({
          type: 'success',
          message: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear field error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: undefined,
      });
    }
  };

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

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '0306-4468027',
      href: 'tel:+923064468027',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ahadramzan584@gmail.com',
      href: 'mailto:ahadramzan584@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ahad-ramzan',
      color: 'hover:bg-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ahad-ramzan',
      color: 'hover:bg-blue-600',
    },
  ];

  return (
    <section id='contact' className='py-20'>
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
              Get In <span className='gradient-text'>Touch</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Ready to start your next project? Let&apos;s discuss how we can
              work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <motion.div variants={itemVariants} className='gap-y-8'>
              <div>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-x-2'>
                  <MessageCircle className='text-blue-400' size={28} />
                  <span>Let&apos;s Connect</span>
                </h3>
                <p className='text-gray-300 leading-relaxed mb-8'>
                  I&apos;m always excited to work on new projects and
                  collaborate with amazing people. Whether you have a project in
                  mind or just want to chat about web development, feel free to
                  reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className='gap-y-6'>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className='flex items-center gap-x-4 p-4 glass rounded-xl hover:shadow-lg transition-all duration-300 group'
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className='text-white' size={20} />
                    </div>
                    <div>
                      <div className='text-gray-400 text-sm'>{info.label}</div>
                      <div className='text-white font-medium group-hover:text-blue-300 transition-colors duration-300'>
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className='text-lg font-semibold text-white mb-4'>
                  Follow Me
                </h4>
                <div className='flex gap-x-4'>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-800 rounded-full ${social.color} transition-all duration-300 group`}
                    >
                      <social.icon
                        size={24}
                        className='text-gray-300 group-hover:text-white'
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className='glass rounded-2xl p-8 gap-y-6'
              >
                <h3 className='text-2xl font-bold text-white mb-6'>
                  Send Message
                </h3>

                {/* Name Field */}
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none text-white transition-all duration-300 ${
                      fieldErrors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-600 focus:border-blue-500'
                    }`}
                    placeholder='Enter your name'
                  />
                  {fieldErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='text-red-400 text-sm mt-1 flex items-center gap-1'
                    >
                      <AlertCircle size={14} />
                      {fieldErrors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none text-white transition-all duration-300 ${
                      fieldErrors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-600 focus:border-blue-500'
                    }`}
                    placeholder='Enter your email'
                  />
                  {fieldErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='text-red-400 text-sm mt-1 flex items-center gap-1'
                    >
                      <AlertCircle size={14} />
                      {fieldErrors.email}
                    </motion.p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none text-white transition-all duration-300 resize-none ${
                      fieldErrors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-600 focus:border-blue-500'
                    }`}
                    placeholder='Tell me about your project...'
                  />
                  {fieldErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='text-red-400 text-sm mt-1 flex items-center gap-1'
                    >
                      <AlertCircle size={14} />
                      {fieldErrors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center justify-center gap-x-2 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin' />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-x-2 p-4 rounded-lg border ${
                      submitStatus.type === 'success'
                        ? 'bg-green-900/20 border-green-500/50 text-green-400'
                        : 'bg-red-900/20 border-red-500/50 text-red-400'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span className='text-sm'>{submitStatus.message}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            variants={itemVariants}
            className='text-center mt-16 p-8 glass rounded-2xl'
          >
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to start a project?
            </h3>
            <p className='text-gray-400 mb-6 max-w-2xl mx-auto'>
              I&apos;m currently available for freelance work and always
              interested in new opportunities. Let&apos;s create something
              amazing together!
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <motion.a
                href='/cv.pdf'
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-x-2 px-6 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300'
              >
                <span>Download CV</span>
              </motion.a>

              <motion.a
                href='mailto:ahadramzan584@gmail.com'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300'
              >
                <Mail size={16} />
                <span>Email Directly</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

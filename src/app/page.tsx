'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIDo from '@/components/WhatIDo';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import ExperienceHighlights from '@/components/ExperienceHighlights';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Home() {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <TechStack />
      <Experience />
      <ExperienceHighlights />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

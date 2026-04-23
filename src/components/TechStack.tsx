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

const stack = [
  { name: 'React.js', icon: AppWindow },
  { name: 'Next.js', icon: AppWindow },
  { name: 'Tailwind CSS', icon: AppWindow },
  { name: 'shadcn/ui', icon: Boxes },
  { name: 'Node.js', icon: Server },
  { name: 'Express.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'TypeORM', icon: Database },
  { name: 'React Native (Expo)', icon: Smartphone },
  { name: 'TypeScript', icon: Boxes },
  { name: 'Zustand', icon: Boxes },
  { name: 'Git / GitHub', icon: GitBranch },
];

const TechStack = () => {
  return (
    <section id='tech-stack' className='py-20 bg-gray-900/50'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='max-w-6xl mx-auto'
        >
          <div className='text-center mb-14'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Tech <span className='gradient-text'>Stack</span>
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6' />
            <p className='text-gray-400 max-w-2xl mx-auto text-lg'>
              Core technologies I use to deliver full stack and mobile products.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {stack.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className='glass rounded-xl px-4 py-4 border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex items-center gap-3'
              >
                <div className='w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center'>
                  <item.icon className='text-blue-300' size={16} />
                </div>
                <span className='text-sm md:text-base text-gray-200'>
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

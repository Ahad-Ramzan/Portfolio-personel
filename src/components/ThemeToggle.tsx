'use client';

import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className='flex items-center gap-1 p-1 bg-gray-800/50 rounded-lg border border-gray-600'>
      {themes.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            theme === value ? 'text-white' : 'text-gray-400 hover:text-gray-200'
          }`}
          title={`Switch to ${label} mode`}
        >
          {theme === value && (
            <motion.div
              layoutId='theme-indicator'
              className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md'
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <Icon
            size={16}
            className={`relative z-10 ${
              theme === value ? 'text-white' : 'text-gray-400'
            }`}
          />
          <span className='relative z-10 hidden sm:inline'>{label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeToggle;

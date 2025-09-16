'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, BarChart3, Mail, Users, Settings } from 'lucide-react';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'admin123'; // Change this in production!

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='glass rounded-2xl p-8 w-full max-w-md'
        >
          <div className='text-center mb-8'>
            <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Lock className='text-white' size={32} />
            </div>
            <h1 className='text-2xl font-bold text-white mb-2'>
              Admin Dashboard
            </h1>
            <p className='text-gray-400'>Enter password to access analytics</p>
          </div>

          <form onSubmit={handleLogin} className='my-6 '>
            <div>
              <label className='block text-sm font-medium text-gray-300 mb-4'>
                Password
              </label>
              <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white'
                placeholder='Enter admin password'
                required
              />
              {error && <p className='text-red-400 text-sm mt-2'>{error}</p>}
            </div>

            <motion.button
              type='submit'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300'
            >
              Access Dashboard
            </motion.button>
          </form>

          <div className='mt-6 text-center'>
            <p className='text-gray-500 text-sm'>
              Default password:{' '}
              <code className='bg-gray-800 px-2 py-1 rounded text-gray-300'>
                admin123
              </code>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex items-center justify-between mb-8'
        >
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center'>
              <BarChart3 className='text-white' size={24} />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-white'>
                Portfolio Analytics
              </h1>
              <p className='text-gray-400'>
                Real-time visitor insights and performance metrics
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='text-right'>
              <div className='text-sm text-gray-400'>Last updated</div>
              <div className='text-white font-semibold'>
                {new Date().toLocaleTimeString()}
              </div>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className='px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors'
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Analytics Dashboard */}
        <AnalyticsDashboard />
      </div>
    </div>
  );
};

export default AdminPage;

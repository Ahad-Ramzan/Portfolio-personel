'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Eye,
  Clock,
  MousePointer,
  Mail,
  TrendingUp,
  Smartphone,
  Monitor,
  Globe,
  BarChart3,
} from 'lucide-react';
import { AnalyticsData } from '@/types';

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics();
    // Refresh every 30 seconds
    const interval = setInterval(fetchAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics/track');
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data);
      } else {
        setError('Failed to fetch analytics data');
      }
    } catch {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center p-8'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  if (error || !analytics) {
    return (
      <div className='text-center p-8 text-red-400'>
        <p>Failed to load analytics: {error}</p>
        <button
          onClick={fetchAnalytics}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        >
          Retry
        </button>
      </div>
    );
  }

  const StatCard = ({
    title,
    value,
    icon: Icon,
    color = 'blue',
    subtitle,
  }: {
    title: string;
    value: string | number;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color?: string;
    subtitle?: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='glass rounded-xl p-6'
    >
      <div className='flex items-center justify-between mb-4'>
        <div className={`p-3 rounded-lg bg-${color}-500/20`}>
          <Icon className={`text-${color}-400`} size={24} />
        </div>
        <div className='text-right'>
          <div className='text-2xl font-bold text-white'>{value}</div>
          {subtitle && <div className='text-sm text-gray-400'>{subtitle}</div>}
        </div>
      </div>
      <div className='text-gray-300 text-sm'>{title}</div>
    </motion.div>
  );

  return (
    <div className='gap-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold text-white'>Analytics Dashboard</h2>
        <button
          onClick={fetchAnalytics}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
        >
          Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
        <StatCard
          title='Total Visitors'
          value={analytics.totalVisitors}
          icon={Users}
          color='blue'
        />
        <StatCard
          title='Unique Visitors'
          value={analytics.uniqueVisitors}
          icon={Eye}
          color='green'
        />
        <StatCard
          title='Page Views'
          value={analytics.pageViews}
          icon={MousePointer}
          color='purple'
        />
        <StatCard
          title='Avg. Time on Site'
          value={`${analytics.averageTimeOnSite}s`}
          icon={Clock}
          color='orange'
        />
        <StatCard
          title='Bounce Rate'
          value={`${analytics.bounceRate}%`}
          icon={TrendingUp}
          color='red'
        />
        <StatCard
          title='Contact Submissions'
          value={analytics.contactFormSubmissions}
          icon={Mail}
          color='cyan'
        />
        <StatCard
          title='Conversion Rate'
          value={`${analytics.contactFormConversionRate}%`}
          icon={BarChart3}
          color='emerald'
        />
      </div>

      {/* Charts Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'>
        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='glass rounded-xl p-6'
        >
          <h3 className='text-xl font-semibold text-white mb-4'>Top Pages</h3>
          <div className='gap-y-3'>
            {analytics.topPages.slice(0, 5).map((page, index) => (
              <div
                key={page.page}
                className='flex items-center justify-between'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-sm font-bold'>
                    {index + 1}
                  </div>
                  <span className='text-gray-300'>{page.page}</span>
                </div>
                <span className='text-white font-semibold'>{page.views}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Device Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='glass rounded-xl p-6'
        >
          <h3 className='text-xl font-semibold text-white mb-4'>
            Device Breakdown
          </h3>
          <div className='gap-y-3'>
            {analytics.deviceBreakdown.map(device => (
              <div
                key={device.device}
                className='flex items-center justify-between'
              >
                <div className='flex items-center gap-3'>
                  {device.device === 'mobile' ? (
                    <Smartphone className='text-green-400' size={20} />
                  ) : device.device === 'tablet' ? (
                    <Monitor className='text-blue-400' size={20} />
                  ) : (
                    <Monitor className='text-purple-400' size={20} />
                  )}
                  <span className='text-gray-300 capitalize'>
                    {device.device}
                  </span>
                </div>
                <span className='text-white font-semibold'>{device.count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Referrers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='glass rounded-xl p-6'
        >
          <h3 className='text-xl font-semibold text-white mb-4'>
            Top Referrers
          </h3>
          <div className='gap-y-3'>
            {analytics.topReferrers.slice(0, 5).map(referrer => (
              <div
                key={referrer.referrer}
                className='flex items-center justify-between'
              >
                <div className='flex items-center gap-3'>
                  <Globe className='text-cyan-400' size={20} />
                  <span className='text-gray-300 truncate'>
                    {referrer.referrer}
                  </span>
                </div>
                <span className='text-white font-semibold'>
                  {referrer.count}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Browser Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='glass rounded-xl p-6'
        >
          <h3 className='text-xl font-semibold text-white mb-4'>
            Browser Breakdown
          </h3>
          <div className='gap-y-3'>
            {analytics.browserBreakdown.map(browser => (
              <div
                key={browser.browser}
                className='flex items-center justify-between'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded'></div>
                  <span className='text-gray-300'>{browser.browser}</span>
                </div>
                <span className='text-white font-semibold'>
                  {browser.count}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='glass rounded-xl p-6 mt-6'
      >
        <h3 className='text-xl font-semibold text-white mb-4'>
          Recent Visitors (Last 24h)
        </h3>
        <div className='gap-y-2 max-h-64 overflow-y-auto'>
          {analytics.recentVisitors.slice(0, 10).map(visitor => (
            <div
              key={visitor.id}
              className='flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0'
            >
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                <span className='text-gray-300 text-sm'>{visitor.page}</span>
                <span className='text-gray-500 text-xs'>{visitor.device}</span>
              </div>
              <span className='text-gray-400 text-xs'>
                {new Date(visitor.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnalyticsDashboard;

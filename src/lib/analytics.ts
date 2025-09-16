// Analytics utility functions
import type { VisitorData, ContactFormData, AnalyticsData } from '@/types';

// Generate unique session ID
export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get device type from user agent
export function getDeviceType(
  userAgent: string
): 'mobile' | 'tablet' | 'desktop' {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const tabletRegex = /iPad|Android(?=.*Mobile)/i;

  if (tabletRegex.test(userAgent)) return 'tablet';
  if (mobileRegex.test(userAgent)) return 'mobile';
  return 'desktop';
}

// Get browser name from user agent
export function getBrowser(userAgent: string): string {
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  return 'Other';
}

// Get OS from user agent
export function getOS(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS')) return 'iOS';
  return 'Other';
}

// Calculate scroll depth percentage
export function calculateScrollDepth(): number {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return Math.round((scrollTop / scrollHeight) * 100);
}

// Track page view
export function trackPageView(page: string, sessionId: string): VisitorData {
  const userAgent = navigator.userAgent;
  const referrer = document.referrer || 'direct';

  return {
    id: `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    page,
    referrer,
    userAgent,
    device: getDeviceType(userAgent),
    browser: getBrowser(userAgent),
    os: getOS(userAgent),
    screenResolution: `${screen.width}x${screen.height}`,
    timeOnSite: 0,
    scrollDepth: 0,
    sessionId,
  };
}

// Track contact form submission
export function trackContactForm(
  name: string,
  email: string,
  message: string,
  source: string,
  sessionId: string,
  conversionTime: number
): ContactFormData {
  return {
    id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    name,
    email,
    message,
    source,
    userAgent: navigator.userAgent,
    sessionId,
    conversionTime,
  };
}

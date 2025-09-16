// Analytics related types
export interface VisitorData {
  id: string;
  timestamp: number;
  page: string;
  referrer: string;
  userAgent: string;
  ip?: string;
  country?: string;
  city?: string;
  device: 'mobile' | 'tablet' | 'desktop';
  browser: string;
  os: string;
  screenResolution: string;
  timeOnSite: number;
  scrollDepth: number;
  sessionId: string;
}

export interface ContactFormData {
  id: string;
  timestamp: number;
  name: string;
  email: string;
  message: string;
  source: string; // which page/section
  userAgent: string;
  sessionId: string;
  conversionTime: number; // time from page load to form submit
}

export interface AnalyticsData {
  totalVisitors: number;
  uniqueVisitors: number;
  pageViews: number;
  averageTimeOnSite: number;
  bounceRate: number;
  topPages: Array<{ page: string; views: number }>;
  topReferrers: Array<{ referrer: string; count: number }>;
  deviceBreakdown: Array<{ device: string; count: number }>;
  browserBreakdown: Array<{ browser: string; count: number }>;
  contactFormSubmissions: number;
  contactFormConversionRate: number;
  recentVisitors: VisitorData[];
  recentContacts: ContactFormData[];
}

// Contact analytics specific types
export interface ContactAnalytics {
  totalContacts: number;
  recentContacts: ContactFormData[];
  averageConversionTime: number;
  sourceBreakdown: Array<{ source: string; count: number }>;
  hourlyBreakdown: Array<{ hour: string; count: number }>;
  conversionRate: number;
}

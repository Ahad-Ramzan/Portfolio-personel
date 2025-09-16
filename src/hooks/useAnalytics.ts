'use client';

import { useEffect, useRef, useState } from 'react';
import {
  trackPageView,
  trackContactForm,
  generateSessionId,
  calculateScrollDepth,
} from '@/lib/analytics';
import type { VisitorData, ContactFormData } from '@/types';

export function useAnalytics() {
  const [sessionId] = useState(() => generateSessionId());
  const [startTime] = useState(() => Date.now());
  const [maxScrollDepth, setMaxScrollDepth] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Track page view on mount
  useEffect(() => {
    const page = window.location.pathname;
    const visitorData = trackPageView(page, sessionId);

    // Send to analytics API
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(visitorData),
    }).catch(console.error);
  }, [sessionId]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = calculateScrollDepth();
      setMaxScrollDepth(prev => Math.max(prev, scrollDepth));

      // Debounce scroll tracking
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        // Update visitor data with scroll depth
        const page = window.location.pathname;
        const visitorData = trackPageView(page, sessionId);
        visitorData.scrollDepth = scrollDepth;

        fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(visitorData),
        }).catch(console.error);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sessionId]);

  // Track time on site before page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeOnSite = Date.now() - startTime;
      const page = window.location.pathname;
      const visitorData = trackPageView(page, sessionId);
      visitorData.timeOnSite = Math.round(timeOnSite / 1000); // Convert to seconds
      visitorData.scrollDepth = maxScrollDepth;

      // Send final tracking data
      navigator.sendBeacon('/api/analytics/track', JSON.stringify(visitorData));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [sessionId, startTime, maxScrollDepth]);

  // Track contact form submission
  const trackContact = (
    name: string,
    email: string,
    message: string,
    source: string = 'contact-form'
  ) => {
    const conversionTime = Date.now() - startTime;
    const contactData = trackContactForm(
      name,
      email,
      message,
      source,
      sessionId,
      Math.round(conversionTime / 1000) // Convert to seconds
    );

    // Send to contact analytics API
    fetch('/api/analytics/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData),
    }).catch(console.error);
  };

  return {
    sessionId,
    trackContact,
  };
}

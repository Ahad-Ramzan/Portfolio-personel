import { NextRequest, NextResponse } from 'next/server';
import { VisitorData, ContactFormData } from '@/types';

// In-memory storage for demo (in production, use a database)
let visitors: VisitorData[] = [];
const contacts: ContactFormData[] = [];

export async function POST(request: NextRequest) {
  try {
    const visitorData: VisitorData = await request.json();

    // Add visitor data
    visitors.push(visitorData);

    // Keep only last 1000 visitors to prevent memory issues
    if (visitors.length > 1000) {
      visitors = visitors.slice(-1000);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track visitor data' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Calculate analytics data
    const totalVisitors = visitors.length;
    const uniqueVisitors = new Set(visitors.map(v => v.sessionId)).size;
    const pageViews = visitors.length;

    // Calculate average time on site
    const averageTimeOnSite =
      visitors.length > 0
        ? visitors.reduce((sum, v) => sum + v.timeOnSite, 0) / visitors.length
        : 0;

    // Calculate bounce rate (visitors with timeOnSite < 10 seconds)
    const bouncedVisitors = visitors.filter(v => v.timeOnSite < 10).length;
    const bounceRate =
      totalVisitors > 0 ? (bouncedVisitors / totalVisitors) * 100 : 0;

    // Top pages
    const pageCounts = visitors.reduce(
      (acc, v) => {
        acc[v.page] = (acc[v.page] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const topPages = Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Top referrers
    const referrerCounts = visitors.reduce(
      (acc, v) => {
        const referrer =
          v.referrer === 'direct' ? 'Direct' : new URL(v.referrer).hostname;
        acc[referrer] = (acc[referrer] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const topReferrers = Object.entries(referrerCounts)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Device breakdown
    const deviceCounts = visitors.reduce(
      (acc, v) => {
        acc[v.device] = (acc[v.device] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const deviceBreakdown = Object.entries(deviceCounts).map(
      ([device, count]) => ({ device, count })
    );

    // Browser breakdown
    const browserCounts = visitors.reduce(
      (acc, v) => {
        acc[v.browser] = (acc[v.browser] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const browserBreakdown = Object.entries(browserCounts).map(
      ([browser, count]) => ({ browser, count })
    );

    // Contact form data
    const contactFormSubmissions = contacts.length;
    const contactFormConversionRate =
      totalVisitors > 0 ? (contactFormSubmissions / totalVisitors) * 100 : 0;

    // Recent data (last 24 hours)
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const recentVisitors = visitors
      .filter(v => v.timestamp > oneDayAgo)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 50);

    const recentContacts = contacts
      .filter(c => c.timestamp > oneDayAgo)
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 20);

    const analyticsData = {
      totalVisitors,
      uniqueVisitors,
      pageViews,
      averageTimeOnSite: Math.round(averageTimeOnSite),
      bounceRate: Math.round(bounceRate * 100) / 100,
      topPages,
      topReferrers,
      deviceBreakdown,
      browserBreakdown,
      contactFormSubmissions,
      contactFormConversionRate:
        Math.round(contactFormConversionRate * 100) / 100,
      recentVisitors,
      recentContacts,
    };

    return NextResponse.json(analyticsData, { status: 200 });
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

// In-memory storage for demo (in production, use a database)
let contacts: ContactFormData[] = [];

export async function POST(request: NextRequest) {
  try {
    const contactData: ContactFormData = await request.json();

    // Add contact data
    contacts.push(contactData);

    // Keep only last 500 contacts to prevent memory issues
    if (contacts.length > 500) {
      contacts = contacts.slice(-500);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track contact data' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Calculate contact form analytics
    const totalContacts = contacts.length;

    // Recent contacts (last 7 days)
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const recentContacts = contacts
      .filter(c => c.timestamp > oneWeekAgo)
      .sort((a, b) => b.timestamp - a.timestamp);

    // Conversion time analysis
    const conversionTimes = contacts.map(c => c.conversionTime);
    const averageConversionTime =
      conversionTimes.length > 0
        ? conversionTimes.reduce((sum, time) => sum + time, 0) /
          conversionTimes.length
        : 0;

    // Source analysis
    const sourceCounts = contacts.reduce(
      (acc, c) => {
        acc[c.source] = (acc[c.source] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const sourceBreakdown = Object.entries(sourceCounts)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count);

    // Time-based analysis (contacts per hour)
    const hourlyCounts = new Array(24).fill(0);
    contacts.forEach(c => {
      const hour = new Date(c.timestamp).getHours();
      hourlyCounts[hour]++;
    });

    const hourlyBreakdown = hourlyCounts.map((count, hour) => ({
      hour: `${hour.toString().padStart(2, '0')}:00`,
      count,
    }));

    const contactAnalytics = {
      totalContacts,
      recentContacts: recentContacts.slice(0, 20),
      averageConversionTime: Math.round(averageConversionTime),
      sourceBreakdown,
      hourlyBreakdown,
      conversionRate:
        contacts.length > 0
          ? (contacts.filter(c => c.conversionTime < 300).length /
              contacts.length) *
            100
          : 0, // 5 minutes
    };

    return NextResponse.json(contactAnalytics, { status: 200 });
  } catch (error) {
    console.error('Contact analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact analytics data' },
      { status: 500 }
    );
  }
}

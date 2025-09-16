import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend REST API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        to: [
          process.env.TO_EMAIL || 'ahadramzan584@gmail.com',
          'ahadramzan.dev@gmail.com',
        ],
        subject: `Portfolio Contact: Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact Message</h1>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 5px 0;">From:</h3>
                <p style="color: #475569; margin: 0; font-size: 16px;">${name}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 5px 0;">Email:</h3>
                <p style="color: #475569; margin: 0; font-size: 16px;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #1e293b; margin: 0 0 10px 0;">Message:</h3>
                <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #e2e8f0;">
                  <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; margin: 0; font-size: 14px;">
                  This message was sent from your portfolio website contact form.
                </p>
                <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">
                  Time: ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
New Portfolio Contact Message

From: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio website contact form.
Time: ${new Date().toLocaleString()}
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        id: data.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'TrimPath Health <support@trimpath.health>',
      to: email,
      subject: 'We Received Your Message - TrimPath Health',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0077BE 0%, #00A8A8 100%); padding: 32px; color: white; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Thank You!</h1>
            <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">We've received your message</p>
          </div>

          <div style="background: #f5f5f5; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 16px 0; font-size: 16px; color: #1a1a1a; font-weight: 600;">Message Details</h2>
            <table style="width: 100%; border-collapse: collapse; color: #666; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; font-weight: 500; color: #1a1a1a; width: 100px;">Subject:</td>
                <td style="padding: 8px 0;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 500; color: #1a1a1a; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; white-space: pre-wrap; line-height: 1.5;">${message}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; border: 1px solid #e8e8e8; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #1a1a1a; font-weight: 600;">What's Next?</h3>
            <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.5;">
              Our support team will review your message and get back to you within 24 hours. If your inquiry is urgent, please call us at <a href="tel:+18335872737" style="color: #0077BE; text-decoration: none;">(833) 587-2737</a>.
            </p>
          </div>

          <div style="text-align: center; color: #999; font-size: 12px; line-height: 1.5;">
            <p style="margin: 0;">© 2024 TrimPath Health. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    // Send internal notification to support
    await resend.emails.send({
      from: 'TrimPath Support <support@trimpath.health>',
      to: 'support@trimpath.health',
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a1a;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600; width: 100px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}" style="color: #0077BE;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600; vertical-align: top;">Subject:</td>
              <td style="padding: 8px;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: 600; vertical-align: top;">Message:</td>
              <td style="padding: 8px; white-space: pre-wrap; line-height: 1.5;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

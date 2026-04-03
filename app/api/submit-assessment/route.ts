import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      state,
      age,
      weight,
      height,
      goal,
      timeframe,
      hasType2Diabetes,
      familyHistoryObesity,
      exerciseFrequency,
      dietType,
      consent,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'TrimPath Health <assessments@trimpath.health>',
      to: email,
      subject: 'Thank You for Your Assessment - We\'ll Review Your Information',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0077BE 0%, #00A8A8 100%); padding: 32px; color: white; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Thank You, ${firstName}!</h1>
            <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">Your assessment has been received</p>
          </div>

          <div style="background: #f5f5f5; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #1a1a1a; font-weight: 600;">What Happens Next</h2>
            <ol style="margin: 0; padding-left: 20px; color: #666; line-height: 1.6;">
              <li style="margin-bottom: 12px;">
                <strong style="color: #1a1a1a;">Our medical team reviews your information</strong> (usually within 24 hours)
              </li>
              <li style="margin-bottom: 12px;">
                <strong style="color: #1a1a1a;">We'll contact you to schedule your consultation</strong> using the phone number ${phone}
              </li>
              <li style="margin-bottom: 12px;">
                <strong style="color: #1a1a1a;">Licensed provider evaluation</strong> to determine if GLP-1 is right for you
              </li>
              <li>
                <strong style="color: #1a1a1a;">Get your personalized treatment plan</strong> if you're eligible
              </li>
            </ol>
          </div>

          <div style="background: white; border: 1px solid #e8e8e8; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #1a1a1a; font-weight: 600;">Your Assessment Summary</h3>
            <table style="width: 100%; border-collapse: collapse; color: #666; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; font-weight: 500; color: #1a1a1a;">Name:</td>
                <td style="padding: 8px 0; text-align: right;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; font-weight: 500; color: #1a1a1a;">Age:</td>
                <td style="padding: 8px 0; text-align: right;">${age}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; font-weight: 500; color: #1a1a1a;">Weight Goal:</td>
                <td style="padding: 8px 0; text-align: right;">${goal}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 500; color: #1a1a1a;">State:</td>
                <td style="padding: 8px 0; text-align: right;">${state}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f0f8ff; border-left: 4px solid #0077BE; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
            <p style="margin: 0; color: #1a1a1a; font-size: 14px; line-height: 1.5;">
              <strong>Important:</strong> This assessment is not medical advice. Our licensed providers will thoroughly review your medical history and determine your eligibility during your consultation.
            </p>
          </div>

          <div style="text-align: center; color: #999; font-size: 12px; line-height: 1.5;">
            <p style="margin: 0;">Questions? Contact our support team at <a href="mailto:support@trimpath.health" style="color: #0077BE; text-decoration: none;">support@trimpath.health</a></p>
            <p style="margin: 8px 0 0 0;">© 2024 TrimPath Health. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    // Send internal notification to admin (temporarily routed to rexforddray@gmail.com)
    await resend.emails.send({
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
      to: 'rexforddray@gmail.com',
      subject: `New Assessment: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
          <h2 style="color: #1a1a1a;">New Patient Assessment</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600; width: 150px;">Name:</td>
              <td style="padding: 8px;">${firstName} ${lastName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Age:</td>
              <td style="padding: 8px;">${age}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">State:</td>
              <td style="padding: 8px;">${state}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Weight:</td>
              <td style="padding: 8px;">${weight} lbs</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Height:</td>
              <td style="padding: 8px;">${height}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Goal:</td>
              <td style="padding: 8px;">${goal}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Timeframe:</td>
              <td style="padding: 8px;">${timeframe}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Type 2 Diabetes:</td>
              <td style="padding: 8px;">${hasType2Diabetes ? 'Yes' : 'No'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Family History of Obesity:</td>
              <td style="padding: 8px;">${familyHistoryObesity ? 'Yes' : 'No'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8e8e8;">
              <td style="padding: 8px; font-weight: 600;">Exercise Frequency:</td>
              <td style="padding: 8px;">${exerciseFrequency}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: 600;">Diet Type:</td>
              <td style="padding: 8px;">${dietType}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Assessment submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Assessment submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit assessment' },
      { status: 500 }
    );
  }
}

# TrimPath Health - Resend Email Integration

## Overview

The TrimPath Health application is fully integrated with Resend for email notifications. Both the assessment form and contact form submit data via Resend, sending confirmation emails to users and internal notifications to the team.

## Configuration

### Environment Variable
- **RESEND_API_KEY**: Your Resend API key (already configured)

## Email Routes

### 1. Assessment Form Submission (`/api/submit-assessment`)
**Triggered when:** User completes the 5-step assessment form

**Emails sent:**
- **User Confirmation**: Personalized welcome email with next steps timeline
- **Admin Notification**: Internal notification to admin@trimpath.health with complete assessment details

**Data captured:**
- Personal info (name, email, phone, state)
- Biometric data (age, height, weight)
- Health goals and timeline
- Medical history (conditions, medications, diabetes status)
- Lifestyle info (exercise, diet type)

### 2. Contact Form Submission (`/api/send-contact`)
**Triggered when:** User submits the contact form

**Emails sent:**
- **User Confirmation**: Acknowledgment email with support contact info
- **Support Notification**: Internal notification to support@trimpath.health

**Data captured:**
- Name, email, subject, and message

## Email Templates

All emails are styled with:
- TrimPath brand colors (Primary Blue #0077BE, Teal #00A8A8)
- Responsive HTML templates
- Clear call-to-action and next steps
- HIPAA compliance disclaimers (for assessment emails)

## Testing

### Test the Assessment Form
1. Navigate to `/assessment`
2. Complete all 5 steps
3. Submit the form
4. Check email inbox for confirmation

### Test the Contact Form
1. Navigate to `/contact`
2. Fill in all fields
3. Submit the form
4. Check email inbox for confirmation

## Email Addresses

Update these in the API routes as needed:
- **Assessment confirmation from:** assessments@trimpath.health
- **Assessment admin to:** admin@trimpath.health
- **Contact confirmation from:** support@trimpath.health
- **Contact support to:** support@trimpath.health

## Troubleshooting

- **Emails not sending**: Verify RESEND_API_KEY is set correctly in environment variables
- **Wrong email domain**: Ensure email domains are verified in Resend dashboard
- **Templates not rendering**: Check browser console for API errors

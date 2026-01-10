# Complaint Registration System Setup Guide

This guide explains how to set up the complaint registration system to send emails and SMS notifications.

## Features

- ✅ Complaint registration form with validation
- ✅ Email confirmation to customer
- ✅ SMS confirmation to customer phone number
- ✅ Automatic complaint ID generation
- ✅ Success/error handling with user feedback

## Email Setup (Using EmailJS)

### Step 1: Create EmailJS Account

1. Sign up for a free account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Verify your email address

### Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
Complaint Registered - {{complaint_id}}
```

**Email Body:**
```
Dear {{customer_name}},

Thank you for contacting Vault. Your complaint has been registered successfully.

Complaint ID: {{complaint_id}}
Category: {{complaint_category}}
Subject: {{complaint_subject}}
Date & Time: {{complaint_timestamp}}

Your Complaint Details:
{{complaint_description}}

Our support team will review your complaint and get back to you within 24-48 hours.

If you have any urgent concerns, please contact our support team directly.

Best regards,
Vault Support Team
```

4. Note down your **Template ID**

### Step 4: Get Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Copy your **Public Key**

### Step 5: Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Or directly update the values in `src/services/complaintService.ts`:

```typescript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_public_key_here',
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here',
};
```

## SMS Setup

SMS sending requires a backend API endpoint for security reasons (API keys should not be exposed in frontend code).

### Option 1: Backend API Endpoint

Create a backend API endpoint: `POST /api/complaints/send-sms`

**Request Body:**
```json
{
  "phone": "+91 9876543210",
  "message": "Vault: Complaint COMP-123456 registered. Subject: Account Issue. Our team will contact you soon. Thank you!"
}
```

**Recommended Services:**
- **Twilio** (https://www.twilio.com/) - Popular, reliable
- **AWS SNS** (https://aws.amazon.com/sns/) - AWS integration
- **MessageBird** (https://www.messagebird.com/) - Global coverage

### Option 2: Backend Email-to-SMS Gateway

Some email providers support SMS via email gateways:
- Example: `1234567890@txt.att.net` (AT&T)
- Not recommended for production use

### Example Backend Implementation (Node.js/Express)

```javascript
// Example using Twilio
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

app.post('/api/complaints/send-sms', async (req, res) => {
  const { phone, message } = req.body;
  
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Development Mode

In development mode, if EmailJS is not configured, the system will:
- Log email details to the console (you can check browser console)
- Log SMS details to the console
- Still show success message to user (for testing purposes)

## Usage

1. The "Register Complaint" button is available in the footer
2. Users fill out the form with their details
3. Upon submission:
   - A unique complaint ID is generated
   - Email is sent to the customer's email address
   - SMS is sent to the customer's phone number
   - Success message is displayed to the user

## Template Variables

The email template uses these variables:

- `{{complaint_id}}` - Unique complaint ID
- `{{customer_name}}` - Customer's full name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone number
- `{{complaint_category}}` - Category of complaint
- `{{complaint_subject}}` - Complaint subject
- `{{complaint_description}}` - Detailed description
- `{{complaint_timestamp}}` - Date and time of registration

## Troubleshooting

### Email not sending
1. Check browser console for errors
2. Verify EmailJS credentials are correct
3. Ensure email service is connected in EmailJS dashboard
4. Check email template variables match the code

### SMS not sending
1. Verify backend API endpoint is configured
2. Check API endpoint is accessible
3. Verify SMS service credentials (Twilio, etc.)
4. Check phone number format is correct

### Form not submitting
1. Check all required fields are filled
2. Verify email format is correct
3. Check browser console for validation errors

## Security Notes

- ⚠️ Never expose SMS API keys in frontend code
- ✅ Always use backend API for SMS sending
- ✅ EmailJS Public Key can be exposed (it's designed for client-side use)
- ✅ Consider rate limiting on your backend API
- ✅ Validate and sanitize all user inputs



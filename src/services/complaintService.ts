// Complaint Service - Handles sending emails and SMS for complaint registration

interface ComplaintDetails {
  complaintId: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  description: string;
  timestamp: string;
}

/**
 * Sends complaint confirmation email to the customer
 * Uses EmailJS for client-side email sending
 * 
 * To set up EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with variables: {{complaintId}}, {{name}}, {{email}}, {{phone}}, {{category}}, {{subject}}, {{description}}, {{timestamp}}
 * 4. Get your Public Key, Service ID, and Template ID
 * 5. Replace the values below or use environment variables
 */

const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
};

// Load EmailJS dynamically
async function loadEmailJS() {
  if (typeof window === 'undefined') return null;
  
  try {
    // Try to use EmailJS if already loaded
    if ((window as any).emailjs) {
      return (window as any).emailjs;
    }
    
    // Try to load EmailJS from CDN
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.onload = () => {
        (window as any).emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        resolve((window as any).emailjs);
      };
      script.onerror = () => reject(new Error('Failed to load EmailJS'));
      document.head.appendChild(script);
    });
  } catch (error) {
    console.warn('EmailJS not available, using fallback method');
    return null;
  }
}

export async function sendComplaintEmail(complaint: ComplaintDetails): Promise<void> {
  try {
    const emailjs = await loadEmailJS();
    
    if (emailjs && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      // Use EmailJS if configured
      const templateParams = {
        to_email: complaint.email,
        to_name: complaint.name,
        complaint_id: complaint.complaintId,
        customer_name: complaint.name,
        customer_email: complaint.email,
        customer_phone: complaint.phone,
        complaint_category: complaint.category,
        complaint_subject: complaint.subject,
        complaint_description: complaint.description,
        complaint_timestamp: new Date(complaint.timestamp).toLocaleString(),
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );
    } else {
      // Fallback: Try backend API endpoint
      try {
        const response = await fetch('/api/complaints/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(complaint),
        });

        if (!response.ok) {
          throw new Error('Backend API not available');
        }
      } catch (apiError) {
        // Final fallback: Log in development mode
        if (import.meta.env.DEV) {
          console.log('📧 Email would be sent:', {
            to: complaint.email,
            subject: `Complaint Registered - ${complaint.complaintId}`,
            body: formatEmailBody(complaint),
          });
          // Simulate successful send in development
          return;
        }
        throw new Error('Email service not configured. Please set up EmailJS or backend API.');
      }
    }
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

/**
 * Sends complaint confirmation SMS to the customer
 * 
 * For SMS, you need a backend API endpoint because SMS services like Twilio
 * require server-side API keys for security.
 * 
 * Example backend endpoint structure:
 * POST /api/complaints/send-sms
 * Body: { phone, message }
 * 
 * Or use a service like:
 * - Twilio (https://www.twilio.com/)
 * - AWS SNS (https://aws.amazon.com/sns/)
 * - MessageBird (https://www.messagebird.com/)
 */
export async function sendComplaintSMS(complaint: ComplaintDetails): Promise<void> {
  try {
    // In production, this should call your backend API
    // Example: POST /api/complaints/send-sms
    const response = await fetch('/api/complaints/send-sms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: complaint.phone,
        message: formatSMSMessage(complaint),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send SMS');
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    // In development, log the SMS details
    if (import.meta.env.DEV) {
      console.log('📱 SMS would be sent:', {
        to: complaint.phone,
        message: formatSMSMessage(complaint),
      });
      // Simulate successful send in development
      return;
    }
    // Don't throw error for SMS - email is the primary notification
    // In production, you might want to log this to a monitoring service
    console.warn('SMS notification failed, but complaint was registered');
  }
}

function formatEmailBody(complaint: ComplaintDetails): string {
  return `
Dear ${complaint.name},

Thank you for contacting Vault. Your complaint has been registered successfully.

Complaint ID: ${complaint.complaintId}
Category: ${complaint.category}
Subject: ${complaint.subject}
Date & Time: ${new Date(complaint.timestamp).toLocaleString()}

Your Complaint Details:
${complaint.description}

Our support team will review your complaint and get back to you within 24-48 hours.

If you have any urgent concerns, please contact our support team directly.

Best regards,
Vault Support Team
  `.trim();
}

function formatSMSMessage(complaint: ComplaintDetails): string {
  return `Vault: Complaint ${complaint.complaintId} registered. Subject: ${complaint.subject}. Our team will contact you soon. Thank you!`;
}


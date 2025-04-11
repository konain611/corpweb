'use server';

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitForm(formData: FormData) {
  // Extract form data
  const fields = {
    first_name: formData.get('first_name') as string,
    last_name: formData.get('last_name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    phone: formData.get('phone') as string,
    domain: formData.get('domain') as string,
    message: formData.get('message') as string
  };

  // Insert into Supabase
  const { error } = await supabase
    .from('inquiries')
    .insert(fields);

  if (error) {
    console.error('Database error:', error);
    throw new Error('Failed to submit inquiry.');
  }

  try {
    // Send acknowledgment email to user
    await resend.emails.send({
      from: 'Notifications <konain611@gmail.com>',
      to: fields.email,
      subject: 'We\'ve Received Your Inquiry!',
      html: `<p>Hi ${fields.first_name},<br/>
        Thank you for contacting us about "${fields.subject}".<br/>
        We'll respond to your inquiry within 24 hours.</p>
        <p>Best regards,<br/>Diginfo</p>`
    });

    // Send notification email to admin
    await resend.emails.send({
      from: 'Notifications <onboarding@resend.dev>',
      to: 'konain611@gmail.com', // REPLACE WITH ACTUAL EMAIL
      subject: `New Inquiry: ${fields.subject}`,
      html: `<p>New inquiry received:</p>
        <ul>
          <li>Name: ${fields.first_name} ${fields.last_name}</li>
          <li>Email: ${fields.email}</li>
          <li>Phone: ${fields.phone}</li>
          <li>Domain: ${fields.domain}</li>
          <li>Subject: ${fields.subject}</li>
          <li>Message: ${fields.message}</li>
        </ul>`
    });
  } catch (error) {
    console.error('Email error:', error);
    throw new Error('Emails failed to send.');
  }
}
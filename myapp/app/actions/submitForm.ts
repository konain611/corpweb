"use server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitForm(fields: {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  phone: string;
  domain: string;
  message: string;
}) {
  const { error: dbError } = await supabase.from("inquiries").insert(fields);
  if (dbError) throw dbError;

  await resend.emails.send({
    from: "Notifications <konain611@gmail.com>",
    to: fields.email,
    subject: "We've Received Your Inquiry!",
    html: `<p>Hi ${fields.first_name}, Thanks for contacting us about "${fields.subject}". We’ll respond within 24 hours.</p><p>Best regards,<br/>Diginfo</p>`,
  });

  await resend.emails.send({
    from: "Notifications <onboarding@resend.dev>",
    to: "konain611@gmail.com",
    subject: `New Inquiry: ${fields.subject}`,
    html: `<ul>
            <li>Name: ${fields.first_name} ${fields.last_name}</li>
            <li>Email: ${fields.email}</li>
            <li>Phone: ${fields.phone}</li>
            <li>Domain: ${fields.domain}</li>
            <li>Subject: ${fields.subject}</li>
            <li>Message: ${fields.message}</li>
           </ul>`,
  });
}

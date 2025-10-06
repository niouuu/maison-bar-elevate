import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  eventDate?: string;
  guests?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, eventType, eventDate, guests, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, eventType });

    // Validate required fields
    if (!name || !email || !eventType || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Format email body
    const emailBody = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="font-family: 'Chamberi Super Display', Georgia, serif; color: #000; border-bottom: 2px solid #000; padding-bottom: 15px;">
          New Contact Form Submission
        </h1>
        
        <div style="margin-top: 30px;">
          <h2 style="color: #000; font-size: 18px; margin-bottom: 20px;">Contact Details:</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-left: 3px solid #000; margin-bottom: 15px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #000;">${email}</a></p>
            ${phone ? `<p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
          </div>

          <h2 style="color: #000; font-size: 18px; margin: 30px 0 20px 0;">Event Information:</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-left: 3px solid #000; margin-bottom: 15px;">
            <p style="margin: 5px 0;"><strong>Event Type:</strong> ${eventType}</p>
            ${eventDate ? `<p style="margin: 5px 0;"><strong>Event Date:</strong> ${eventDate}</p>` : ""}
            ${guests ? `<p style="margin: 5px 0;"><strong>Number of Guests:</strong> ${guests}</p>` : ""}
          </div>

          <h2 style="color: #000; font-size: 18px; margin: 30px 0 20px 0;">Message:</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-left: 3px solid #000;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This email was sent from the Maison du Bar contact form.</p>
        </div>
      </div>
    `;

    // Send email using verified domain maisondubar.com
    const emailResponse = await resend.emails.send({
      from: "Maison du Bar <info@maisondubar.com>",
      to: ["maisondubar25@gmail.com"],
      replyTo: email,
      subject: "New Contact Form Submission – Maison du Bar",
      html: emailBody,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message || "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);

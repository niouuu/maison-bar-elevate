import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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
    const emailBody = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
<h1 style="font-family: 'Chamberi Super Display', Georgia, serif; color: #000; border-bottom: 2px solid #000; padding-bottom: 15px;">New Contact Form Submission</h1>
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
</body>
</html>`.trim();

    // Initialize SMTP client with Papaki configuration
    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("SMTP_HOST") || "linux260.papaki.gr",
        port: Number(Deno.env.get("SMTP_PORT")) || 465,
        tls: true, // SSL encryption on port 465
        auth: {
          username: Deno.env.get("SMTP_USER") || "info@maisondubar.com",
          password: Deno.env.get("SMTP_PASSWORD") || "",
        },
      },
    });

    console.log("Attempting to send email via Papaki SMTP...");

    // Send email via Papaki SMTP
    await client.send({
      from: Deno.env.get("SMTP_FROM") || "info@maisondubar.com",
      to: "info@maisondubar.com", // Business inbox
      replyTo: email, // Customer's email for direct replies
      subject: "New Contact Form Submission – Maison du Bar",
      html: emailBody,
    });

    // Close SMTP connection
    await client.close();

    console.log("Email sent successfully via Papaki SMTP");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    console.error("SMTP Error details:", {
      message: error.message,
      name: error.name,
      stack: error.stack,
      code: error.code, // SMTP error codes
      command: error.command, // SMTP command that failed
    });

    // Determine user-friendly error message
    let userMessage = "Failed to send email";
    if (error.message?.includes("authentication") || error.message?.includes("auth")) {
      userMessage = "Email service authentication failed";
    } else if (error.message?.includes("timeout") || error.message?.includes("ETIMEDOUT")) {
      userMessage = "Email service connection timeout";
    } else if (error.message?.includes("ECONNREFUSED")) {
      userMessage = "Email service unavailable";
    }

    return new Response(
      JSON.stringify({
        error: userMessage,
        details: error.message || null,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  }
};

serve(handler);

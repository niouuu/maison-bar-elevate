import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY_REAL"));

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
    const formData: ContactFormRequest = await req.json();
    console.log("Received contact form submission:", { name: formData.name, email: formData.email });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.eventType || !formData.message) {
      console.error("Missing required fields");
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Send email to Maison du Bar
    const emailResponse = await resend.emails.send({
      from: "Maison du Bar <onboarding@resend.dev>",
      to: ["maisondubar25@gmail.com"],
      subject: "New Contact Form Submission – Maison du Bar",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <h1 style="color: #000000; border-bottom: 2px solid #000000; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <div style="margin: 20px 0;">
            <h2 style="color: #000000; font-size: 18px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${formData.email}" style="color: #000000;">${formData.email}</a></td>
              </tr>
              ${
                formData.phone
                  ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${formData.phone}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h2 style="color: #000000; font-size: 18px;">Event Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 150px;">Event Type:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${formData.eventType}</td>
              </tr>
              ${
                formData.eventDate
                  ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Event Date:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${formData.eventDate}</td>
              </tr>
              `
                  : ""
              }
              ${
                formData.guests
                  ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Number of Guests:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${formData.guests}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h2 style="color: #000000; font-size: 18px;">Message</h2>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #000000;">
              ${formData.message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666666; font-size: 12px;">
            <p>This email was sent from the Maison du Bar contact form</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
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

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  project: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, project, message }: ContactEmailRequest = await req.json();

    // Validate inputs
    if (!name || !email || !project || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to the business
    const notificationEmail = await resend.emails.send({
      from: "Visual Arcade <onboarding@resend.dev>",
      to: ["hello@visualarcade.com"], // Replace with your actual email
      subject: `New Contact Form Submission - ${project}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00D4FF; border-bottom: 2px solid #00D4FF; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          <div style="background: #1a1a2e; padding: 20px; border-radius: 8px; color: #ffffff;">
            <p><strong style="color: #00D4FF;">Name:</strong> ${name}</p>
            <p><strong style="color: #00D4FF;">Email:</strong> ${email}</p>
            <p><strong style="color: #00D4FF;">Project Type:</strong> ${project}</p>
            <p><strong style="color: #00D4FF;">Message:</strong></p>
            <p style="background: #0f0f23; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            This email was sent from the Visual Arcade website contact form.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the customer
    const confirmationEmail = await resend.emails.send({
      from: "Visual Arcade <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message! - Visual Arcade",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00D4FF; text-align: center;">
            Thank You, ${name}!
          </h1>
          <div style="background: #1a1a2e; padding: 30px; border-radius: 8px; color: #ffffff; text-align: center;">
            <p style="font-size: 18px; margin-bottom: 20px;">
              We've received your message about your <strong style="color: #00D4FF;">${project}</strong> project.
            </p>
            <p style="color: #cccccc; line-height: 1.6;">
              Our team at Visual Arcade is excited to learn more about your vision. 
              We'll review your project details and get back to you within 24-48 hours.
            </p>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #888; font-size: 14px;">
                In the meantime, feel free to check out our latest work on our portfolio.
              </p>
            </div>
          </div>
          <p style="color: #00D4FF; text-align: center; font-size: 24px; font-weight: bold; margin-top: 30px;">
            VISUAL ARCADE
          </p>
          <p style="color: #888; text-align: center; font-size: 12px;">
            Professional Video Editing Services
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

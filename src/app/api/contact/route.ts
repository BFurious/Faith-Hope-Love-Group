import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple logging function that won't fail
function logSubmission(data: any, status: "success" | "error", error?: string) {
  try {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      status,
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        bestTime: data.bestTime,
        insuranceType: data.insuranceType,
        message: data.message,
      },
      error: error || null,
    };

    console.log(`[${timestamp}] Contact Form Submission:`, logEntry);
  } catch (logError) {
    console.error("Failed to log submission:", logError);
  }
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  let data: any = {};

  try {
    // Parse request body
    try {
      data = await req.json();
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 400 }
      );
    }

    const { name, email, phone, bestTime, insuranceType, message } = data;

    // Validate required fields
    if (!name || !email || !phone || !bestTime || !message) {
      logSubmission(data, "error", "Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      logSubmission(data, "error", "Invalid email format");
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Check if email configuration is available
    const mailPass = process.env.MAIL_PASS;
    const mailUser = process.env.MAIL_USER || "care@faholog.com";
    const mailHost = process.env.MAIL_HOST || "smtp.hostinger.com";
    const mailPort = process.env.MAIL_PORT || "587";
    const mailTo = process.env.MAIL_TO || "care@faholog.com";

    // If email is not configured, still log the submission and return success
    if (!mailPass) {
      logSubmission(data, "success");
      const duration = Date.now() - startTime;

      return NextResponse.json({
        success: true,
        message:
          "Thank you! We have received your message. We'll get back to you soon.",
        duration: `${duration}ms`,
        note: "Email service not configured - message logged only",
      });
    }

    // Create email transporter with minimal configuration for serverless
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        host: mailHost,
        port: parseInt(mailPort),
        secure: false,
        auth: {
          user: mailUser,
          pass: mailPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
        // Serverless-friendly timeouts
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
      });

      // Skip verification in serverless environment to avoid file system issues
      console.log("Email transporter created successfully");
    } catch (transporterError: any) {
      console.error("Failed to create email transporter:", transporterError);
      logSubmission(
        data,
        "error",
        `Email transporter error: ${transporterError.message}`
      );

      // Return success even if email fails, but log the issue
      const duration = Date.now() - startTime;
      return NextResponse.json({
        success: true,
        message:
          "Thank you! We have received your message. We'll get back to you soon.",
        duration: `${duration}ms`,
        note: "Email service temporarily unavailable - message logged",
      });
    }

    const recipients = mailTo
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const mailOptions = {
      from: `"Faith Hope Love Group" <${mailUser}>`,
      to: recipients,
      subject: "🔔 New Contact Form Submission - Faith Hope Love Group",
      text: `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Best Time to Contact: ${bestTime}
Insurance Type: ${insuranceType}
Message: ${message}

Submitted at: ${new Date().toLocaleString()}
            `,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                    <div style="background: white; border-radius: 12px; padding: 30px; margin: 20px 0;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #2563eb; margin: 0; font-size: 28px;">Faith Hope Love Group</h1>
                            <p style="color: #6b7280; margin: 5px 0;">New Contact Form Submission</p>
                        </div>
                        
                        <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
                            <h2 style="color: #1e40af; margin-bottom: 20px; font-size: 20px;">📞 Contact Details</h2>
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #374151;">Name:</strong> 
                                <span style="color: #6b7280;">${name}</span>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #374151;">Email:</strong> 
                                <span style="color: #6b7280;">${email}</span>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #374151;">Phone:</strong> 
                                <span style="color: #6b7280;">${phone}</span>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #374151;">Best Time to Contact:</strong> 
                                <span style="color: #6b7280;">${bestTime}</span>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <strong style="color: #374151;">Insurance Type:</strong> 
                                <span style="color: #6b7280;">${insuranceType}</span>
                            </div>
                        </div>
                        
                        <div style="background: #fff7ed; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
                            <h2 style="color: #d97706; margin-bottom: 15px; font-size: 18px;">💬 Message</h2>
                            <div style="background: white; padding: 20px; border-radius: 6px; border: 1px solid #fed7aa;">
                                <p style="margin: 0; line-height: 1.6; color: #374151;">${message.replace(
                                  /\n/g,
                                  "<br>"
                                )}</p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                            <p style="color: #6b7280; font-size: 14px; margin: 0;">
                                📅 Submitted at: <strong>${new Date().toLocaleString()}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            `,
    };

    const autoReplyOptions = {
      from: `"Faith Hope Love Group" <${mailUser}>`,
      to: email,
      subject: "✅ Thank you for contacting Faith Hope Love Group Insurance!",
      text: `
Dear ${name},

Thank you for reaching out to Faith Hope Love Group Insurance! We have received your inquiry and appreciate your interest in our services.

Here's what happens next:
• One of our licensed insurance specialists will review your request
• You'll receive a personalized response within 24 hours
• We'll provide you with a free, no-obligation quote

Your submission details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Best Time to Contact: ${bestTime}
Insurance Type: ${insuranceType}

If you have any urgent questions, please don't hesitate to call us directly or reply to this email.

Best regards,
The Faith Hope Love Group Insurance Team
📧 care@faholog.com
            `,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                    <div style="background: white; color: #333; padding: 40px; border-radius: 12px; margin: 20px 0;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #2563eb; margin: 0; font-size: 32px;">Thank You! 🎉</h1>
                            <p style="color: #6b7280; margin: 10px 0; font-size: 18px;">Faith Hope Love Group Insurance</p>
                        </div>
                        
                        <p style="font-size: 18px; line-height: 1.6; margin-bottom: 25px; color: #374151;">
                            Dear <strong style="color: #2563eb;">${name}</strong>,
                        </p>
                        
                        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #374151;">
                            Thank you for reaching out to <strong>Faith Hope Love Group Insurance</strong>! We have received your inquiry and appreciate your interest in our services.
                        </p>
                        
                        <div style="background: #f0fdf4; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #10b981;">
                            <h3 style="color: #059669; margin-bottom: 20px; font-size: 20px;">✨ What happens next:</h3>
                            <ul style="margin: 0; padding-left: 20px; color: #374151;">
                                <li style="margin-bottom: 10px; line-height: 1.5;">One of our licensed insurance specialists will review your request</li>
                                <li style="margin-bottom: 10px; line-height: 1.5;">You'll receive a personalized response within 24 hours</li>
                                <li style="margin-bottom: 10px; line-height: 1.5;">We'll provide you with a free, no-obligation quote</li>
                            </ul>
                        </div>
                        
                        <div style="background: #eff6ff; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #2563eb;">
                            <h3 style="color: #1d4ed8; margin-bottom: 20px; font-size: 18px;">📋 Your submission details:</h3>
                            <div style="color: #374151; line-height: 1.6;">
                                <p style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</p>
                                <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
                                <p style="margin-bottom: 8px;"><strong>Phone:</strong> ${phone}</p>
                                <p style="margin-bottom: 8px;"><strong>Best Time to Contact:</strong> ${bestTime}</p>
                                <p style="margin-bottom: 8px;"><strong>Insurance Type:</strong> ${insuranceType}</p>
                            </div>
                        </div>
                        
                        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #f59e0b; text-align: center;">
                            <p style="margin: 0; color: #92400e; font-weight: bold;">
                                🚨 Need immediate assistance? Reply to this email or contact us directly!
                            </p>
                        </div>
                        
                        <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid #e5e7eb;">
                            <p style="color: #6b7280; font-size: 16px; margin-bottom: 10px;">
                                Best regards,<br>
                                <strong style="color: #2563eb;">The Faith Hope Love Group Insurance Team</strong>
                            </p>
                            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                                📧 care@faholog.com
                            </p>
                        </div>
                    </div>
                </div>
            `,
    };

    // Send emails with better error handling and timeouts
    try {
      // Send both emails with timeout protection
      await Promise.race([
        Promise.all([
          transporter.sendMail(mailOptions),
          transporter.sendMail(autoReplyOptions),
        ]),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Email sending timeout")), 15000)
        ),
      ]);
    } catch (emailError: any) {
      console.error("Failed to send emails:", emailError);

      // Check if it's an authentication error
      const isAuthError =
        emailError.message &&
        (emailError.message.includes("authentication failed") ||
          emailError.message.includes("Invalid login") ||
          emailError.message.includes("535") ||
          emailError.message.includes("Authentication failed"));

      logSubmission(
        data,
        "error",
        `Email sending failed: ${emailError.message}${
          isAuthError ? " (Authentication issue)" : ""
        }`
      );

      // Still return success but note the email issue
      const duration = Date.now() - startTime;
      return NextResponse.json({
        success: true,
        message:
          "Thank you! We have received your message. We'll get back to you soon.",
        duration: `${duration}ms`,
        note: isAuthError
          ? "Email authentication failed - message logged"
          : "Email delivery failed - message logged",
      });
    }

    const duration = Date.now() - startTime;
    logSubmission(data, "success");

    console.log(`✅ Contact form processed successfully in ${duration}ms`);

    return NextResponse.json({
      success: true,
      message:
        "Thank you! We have received your message and sent you a confirmation email to your inbox.",
      duration: `${duration}ms`,
    });
  } catch (error: any) {
    const duration = Date.now() - startTime;
    const errorMessage = error.message || "Failed to send email.";

    logSubmission(data || {}, "error", errorMessage);
    console.error(`❌ Contact form error (${duration}ms):`, error);

    return NextResponse.json(
      {
        error:
          "We encountered an issue sending your message. Please try again or contact us directly at care@faholog.com",
        duration: `${duration}ms`,
      },
      { status: 500 }
    );
  }
}

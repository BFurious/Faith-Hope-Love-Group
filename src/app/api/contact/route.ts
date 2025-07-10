import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

function getEnv(key: string, fallback = ""): string {
  if (process.env[key]) return process.env[key] as string;
  if (fallback) return fallback;
  throw new Error(`Missing env: ${key}`);
}

function logSubmission(data: any, status: "success" | "error", error?: string) {
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

  const logDir = path.join(process.cwd(), "logs");
  const logFile = path.join(logDir, "contact-submissions.log");

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  fs.appendFileSync(logFile, JSON.stringify(logEntry) + "\n");
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  let data: any = {};

  try {
    data = await req.json();
    const { name, email, phone, bestTime, insuranceType, message } = data;

    if (!name || !email || !phone || !bestTime || !message) {
      logSubmission(data, "error", "Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: getEnv("MAIL_HOST", "smtp.hostinger.com"),
      port: parseInt(getEnv("MAIL_PORT", "587")),
      secure: false, // true for 465, false for other ports
      auth: {
        user: getEnv("MAIL_USER", "care@faholog.com"),
        pass: getEnv("MAIL_PASS"),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const recipients = getEnv("MAIL_TO", "care@faholog.com")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const mailOptions = {
      from: `"Faith Hope Love Group" <${getEnv(
        "MAIL_USER",
        "care@faholog.com"
      )}>`,
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
      from: `"Faith Hope Love Group" <${getEnv(
        "MAIL_USER",
        "care@faholog.com"
      )}>`,
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

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

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

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function getEnv(key: string, fallback = ''): string {
    if (process.env[key]) return process.env[key] as string;
    if (fallback) return fallback;
    throw new Error(`Missing env: ${key}`);
}

function logSubmission(data: any, status: 'success' | 'error', error?: string) {
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
            message: data.message
        },
        error: error || null
    };

    console.log(`[${timestamp}] Contact Form Submission:`, logEntry);

    const logDir = path.join(process.cwd(), 'logs');
    const logFile = path.join(logDir, 'contact-submissions.log');

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
}

export async function POST(req: NextRequest) {
    const startTime = Date.now();
    let data: any = {};

    try {
        data = await req.json();
        const {
            name,
            email,
            phone,
            bestTime,
            insuranceType,
            message
        } = data;

        if (!name || !email || !phone || !bestTime || !message) {
            logSubmission(data, 'error', 'Missing required fields');
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: getEnv('MAIL_SERVICE', 'gmail'),
            auth: {
                user: getEnv('MAIL_USER'),
                pass: getEnv('MAIL_PASS'),
            },
        });

        const recipients = getEnv('MAIL_TO', 'ashutoshth456@gmail.com,faithopelovegroup@gmail.com,kossilife@gmail.com')
            .split(',')
            .map((e) => e.trim())
            .filter(Boolean);

        const mailOptions = {
            from: getEnv('MAIL_USER'),
            to: recipients,
            subject: 'New Contact Form Submission',
            text: `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Best Time to Contact: ${bestTime}
Insurance Type: ${insuranceType}
Message: ${message}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Best Time to Contact:</strong> ${bestTime}</p>
                        <p><strong>Insurance Type:</strong> ${insuranceType}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #6b7280; font-size: 14px;">
                        Submitted at: ${new Date().toLocaleString()}
                    </p>
                </div>
            `,
        };

        const autoReplyOptions = {
            from: getEnv('MAIL_USER'),
            to: email,
            subject: 'Thank you for contacting Faith Hope Love Group Insurance',
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

If you have any urgent questions, please don't hesitate to call us directly.

Best regards,
The Faith Hope Love Group Insurance Team
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <div style="background: white; color: #333; padding: 30px; border-radius: 12px; margin: 20px 0;">
                        <h2 style="color: #2563eb; margin-bottom: 20px;">Thank You! 🎉</h2>
                        
                        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Dear <strong>${name}</strong>,
                        </p>
                        
                        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            Thank you for reaching out to <strong>Faith Hope Love Group Insurance</strong>! We have received your inquiry and appreciate your interest in our services.
                        </p>
                        
                        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
                            <h3 style="color: #059669; margin-bottom: 15px;">What happens next:</h3>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;">One of our licensed insurance specialists will review your request</li>
                                <li style="margin-bottom: 8px;">You'll receive a personalized response within 24 hours</li>
                                <li style="margin-bottom: 8px;">We'll provide you with a free, no-obligation quote</li>
                            </ul>
                        </div>
                        
                        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
                            <h3 style="color: #1d4ed8; margin-bottom: 15px;">Your submission details:</h3>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Phone:</strong> ${phone}</p>
                            <p><strong>Best Time to Contact:</strong> ${bestTime}</p>
                            <p><strong>Insurance Type:</strong> ${insuranceType}</p>
                        </div>
                        
                        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                            If you have any urgent questions, please don't hesitate to call us directly.
                        </p>
                        
                        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                            <p style="color: #6b7280; font-size: 14px;">
                                Best regards,<br>
                                <strong>The Faith Hope Love Group Insurance Team</strong>
                            </p>
                        </div>
                    </div>
                </div>
            `,
        };


        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoReplyOptions);

        const duration = Date.now() - startTime;
        logSubmission(data, 'success');

        console.log(`✅ Contact form processed successfully in ${duration}ms`);

        return NextResponse.json({
            success: true,
            message: 'Thank you! We have received your message and sent you a confirmation email.',
            duration: `${duration}ms`
        });

    } catch (error: any) {
        const duration = Date.now() - startTime;
        const errorMessage = error.message || 'Failed to send email.';

        logSubmission(data || {}, 'error', errorMessage);
        console.error(`❌ Contact form error (${duration}ms):`, error);

        return NextResponse.json({
            error: errorMessage,
            duration: `${duration}ms`
        }, { status: 500 });
    }
} 
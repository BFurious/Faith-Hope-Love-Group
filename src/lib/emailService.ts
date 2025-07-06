// Email Service for various email functionalities throughout the app

export interface EmailData {
    name?: string
    email: string
    phone?: string
    message?: string
    subject?: string
    type?: 'contact' | 'newsletter' | 'quote' | 'claim' | 'support'
    insuranceType?: string
    bestTime?: string
}

export interface EmailResponse {
    success: boolean
    message: string
    duration?: string
    error?: string
}

class EmailService {
    private async sendEmail(data: EmailData): Promise<EmailResponse> {
        const startTime = Date.now()

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await response.json()
            const duration = Date.now() - startTime

            return {
                success: result.success,
                message: result.message || 'Email sent successfully',
                duration: `${duration}ms`,
                error: result.error
            }
        } catch (error: any) {
            const duration = Date.now() - startTime
            return {
                success: false,
                message: 'Failed to send email',
                duration: `${duration}ms`,
                error: error.message
            }
        }
    }

    // Contact form email
    async sendContactEmail(data: EmailData): Promise<EmailResponse> {
        return this.sendEmail({
            ...data,
            type: 'contact',
            subject: 'New Contact Form Submission'
        })
    }

    // Newsletter subscription
    async sendNewsletterSubscription(email: string): Promise<EmailResponse> {
        return this.sendEmail({
            email,
            type: 'newsletter',
            subject: 'Newsletter Subscription',
            message: 'New newsletter subscription request'
        })
    }

    // Quote request
    async sendQuoteRequest(data: EmailData): Promise<EmailResponse> {
        return this.sendEmail({
            ...data,
            type: 'quote',
            subject: 'Insurance Quote Request'
        })
    }

    // Claim request
    async sendClaimRequest(data: EmailData): Promise<EmailResponse> {
        return this.sendEmail({
            ...data,
            type: 'claim',
            subject: 'Insurance Claim Request'
        })
    }

    // Support request
    async sendSupportRequest(data: EmailData): Promise<EmailResponse> {
        return this.sendEmail({
            ...data,
            type: 'support',
            subject: 'Support Request'
        })
    }

    // Direct email link
    getDirectEmailLink(email: string, subject: string = '', body: string = ''): string {
        const params = new URLSearchParams()
        if (subject) params.append('subject', subject)
        if (body) params.append('body', body)

        return `mailto:${email}?${params.toString()}`
    }

    // Phone call link
    getPhoneCallLink(phone: string): string {
        return `tel:${phone.replace(/\s/g, '')}`
    }
}

export const emailService = new EmailService() 
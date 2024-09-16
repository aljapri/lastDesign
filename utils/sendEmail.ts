// utils/sendEmail.ts

interface SendEmailParams {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export async function sendEmail({ to, subject, text, html }: SendEmailParams): Promise<void> {
    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to, subject, text, html }),
        });

        if (!response.ok) {
            const result = await response.json();
            throw new Error(`Failed to send email: ${result.error}`);
        }

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

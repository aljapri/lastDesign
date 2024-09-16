// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Define the request body type
interface EmailRequestBody {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Ensure the request method is POST
    if (req.method === 'POST') {
        // Extract email details from the request body
        const { to, subject, text, html }: EmailRequestBody = req.body;

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'mail.shazaalsham.com',
            port: 465,
            secure: true, // true for port 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Setup email data
        const mailOptions = {
            from:"gamer2mohamad@gmail.com",
            to:process.env.EMAIL_USER, // list of receivers
            subject, // Subject line
            text, // plain text body
            html // html body
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

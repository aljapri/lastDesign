// app/api/sendEmail/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
console.log("ok");
// Define the request body type
interface EmailRequestBody {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export async function POST(req: Request) {
    console.log("hello");
    try {
        const body: EmailRequestBody = await req.json();
        console.log(body);
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
            from: process.env.EMAIL_USER, // sender address
            to: body.to, // list of receivers
            subject: body.subject,
            text: body.text, // plain text body
            html: body.html // html body
        };
        const mailOptions1 = {
            from:body.to,
            to: process.env.EMAIL_USER, // sender address
            subject: body.subject, // Subject line
            text: body.text, // plain text body
            html: body.html // html body
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptions1);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Error sending email',message:error }, { status: 500 });
    }
}

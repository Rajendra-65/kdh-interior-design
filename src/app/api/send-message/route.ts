import nodemailer from 'nodemailer';
// import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
// import SMTPTransport from 'nodemailer/lib/smtp-transport';
export const POST = async (request: Request) => {
    // if (req.method !== 'POST') return res.status(405).end();

    const { name, email, message } = await request.json();
    console.log("inside API route")
    console.log(name, email, message)

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, // <- use app password here
        }
    });

    try {
        await transporter.sendMail({
            from: `"KHD Website Contact" <${process.env.GMAIL_USER}>`, // Authenticated sender
            to: process.env.GMAIL_USER,                                 // Where the message should be delivered
            replyTo: email,                                              // User's email for replies
            subject: `New message from ${name} via KHD-web`,
            text: message,
        });
        
        return NextResponse.json({ success: true, message: "Email sent successfully", status: 200 })
    } catch (error) {

        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Failed to send Email",
            status: 500
        })
    }
}
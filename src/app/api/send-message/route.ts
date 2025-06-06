import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
    const { name, email, message } = await request.json();


    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, // <- use app password here
        }
    });

    try {
        await transporter.sendMail({
            from: `"KHD Website Contact" <${process.env.GMAIL_USER}>`, 
            to: process.env.GMAIL_USER,                                 
            replyTo: email,                                              
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
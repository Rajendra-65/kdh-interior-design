import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';



export const POST = async (request: Request) => {
    const { firstName,lastName,email,phone} = await request.json();
    console.log("inside API route")
    console.log( email , phone)

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, // <- use app password here
        }
    });

    try {
        await transporter.sendMail({
            from: `"Start an Project KHD " <${process.env.GMAIL_USER}>`, 
            to: process.env.GMAIL_USER,                                 
            replyTo: email,                                              
            subject: `New project request from ${email} via KHD-web`,
            text: `An project request from ${firstName+" "+lastName} with email ${email} and phone number: ${phone} start an email conversation or an Phone call to mr/ms ${firstName} Thank You! `,
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
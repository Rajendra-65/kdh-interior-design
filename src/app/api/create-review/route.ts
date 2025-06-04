import { NextResponse } from "next/server"
import { connectDB } from "../../../../utils/connectDB"
import { Review } from "@/models/Review"

export const POST = async (request: Request) => {
    try {
        await connectDB()
        const { username, email, message, rate } = await request.json()
        console.log(rate)
        const review = await Review.create({
            userName: username,
            email,
            message,
            rate
        })
        console.log(review)

        return NextResponse.json({
            success: true,
            review: review,
            message: `${username} put an Review!`
        })

    } catch (error: unknown) {
        if (error instanceof Error) {
            
            const mongoError = error as { code?: number; keyValue?: Record<string, string> };

            if (mongoError.code === 11000) {
                return NextResponse.json({
                    success:false,
                    error: 'Duplicate field value',
                    field: Object.keys(mongoError.keyValue ?? {})[0],
                    value: Object.values(mongoError.keyValue ?? {})[0],
                    message: 'This email is already taken',
                });
            }

            return NextResponse.json({ 
                message: 'Server Error', 
                detail: error.message,
                success: false
            });

        }
    }
}
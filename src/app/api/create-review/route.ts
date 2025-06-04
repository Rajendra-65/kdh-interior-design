import { NextResponse } from "next/server"
import { connectDB } from "../../../../utils/connectDB"
import { Review } from "@/models/Review"

export const POST = async (request: Request) => {
    try{
        await connectDB()
        const {username,email,message} = await request.json()
        
        const review = await Review.create({
            userName:username,
            email,
            message
        })

        return NextResponse.json({
            success:true,
            review: review,
            message: `${username} put an Review!`
        })

    }catch(e){
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Failed to create an Review Try again"
        })
    }
}
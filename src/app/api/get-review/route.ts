import { Review } from "@/models/Review"
import { NextResponse } from "next/server"
import { connectDB } from "../../../../utils/connectDB"

export const GET = async () => {
    try{
        await connectDB()
        const review = await Review.find()
        console.log(review)
        return NextResponse.json({
            success:true,
            reviews:review
        })
    }catch(e){
        console.log(e)
        return NextResponse.json({
            success:false,
            message: "Error in fetching Reviews!"
        })
    }
}
import { User } from "@/models/User";
import { connectDB } from "../../../../utils/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const PUT = async (request: Request) => {
    try {
        await connectDB()
        const { email, password } = await request.json();

        const user = await User.findOne({
            email: email
        })

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "No user found in this email"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const updateduser = await User.updateOne(
            {email:email},
            {$set:{password:hashedPassword}}
        )

        console.log("updateduser",updateduser)

        return NextResponse.json({
            success:true,
            message: "Password updated successfully",
            user: updateduser
        })
    } catch (e) {
        console.log(e)
        return NextResponse.json({
            success:false,
            message : "Error in updating the password"
        })
    }




}
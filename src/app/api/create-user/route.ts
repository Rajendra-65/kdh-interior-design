import { User } from "../../../models/User";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../utils/connectDB";
import bcrypt from "bcryptjs";

export const POST = async (request:Request) => {
    await connectDB();
    const {firstName, lastName, email, password} = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try{
        const user = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
        })
        console.log(user)
        return NextResponse.json({
            success:true,
            message:"User created successfully",
            user:user
        })
    }catch(error){
        console.log(error)
        return NextResponse.json({
            success:false,
            error:error instanceof Error ? error.message : "Internal Server Error"
        })
    }
}
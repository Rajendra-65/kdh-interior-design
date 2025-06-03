import { User } from "../../../models/User";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../utils/connectDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const POST = async (request: Request) => {
    await connectDB();

    const { email, password } = await request.json();

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: "User not found",
                success:false
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password); // user.password is hashed

        if (!isPasswordCorrect) {
            return NextResponse.json({
                message: "Incorrect password"
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                _id: user._id 
            }, 
            process.env.JWT_SECRET!
        )

        return NextResponse.json({
            success:true,
            message: "User logged in successfully",
            user:user,
            token:token
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success:false,
            error: error instanceof Error ? error.message : "Internal Server Error",
            message: "Invalid credentials"
        });
    }
}

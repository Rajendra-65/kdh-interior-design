import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        console.log("Reached....")
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("connected")
    }catch(error){
        console.log(error)
    }
}
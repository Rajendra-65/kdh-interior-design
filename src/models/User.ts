import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,    
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

export const User = mongoose.models?.User || mongoose.model('User',userSchema)
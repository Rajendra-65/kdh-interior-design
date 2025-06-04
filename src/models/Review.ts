import mongoose, {Schema} from 'mongoose'

const ReviewSchema = new Schema({
    userName:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    message:{
        type : String,
        required : true
    },
    rate:{
        type : Number,
        required : true
    }
})

export const Review = mongoose.models?.Review || mongoose.model('Review',ReviewSchema)
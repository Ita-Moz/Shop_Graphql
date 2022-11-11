import mongoose from "mongoose"
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    url:{
        type: String,
        required: true
    },
    name:{
        type: String,
    }
    ,
    cloudinaryId:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    }
})

export default mongoose.model('images', ImageSchema)
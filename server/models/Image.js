import mongoose from "mongoose"
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    url:{
        type: String,
        required: true
    },
    public_id:{
        type: String,
        required: true
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
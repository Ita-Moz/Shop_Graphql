import mongoose from "mongoose"
const Schema = mongoose.Schema

const CategorySchema = new Schema({
	name:{
        type: String,
        required: true
    },
    imageID:{
        type: String,
    },
    type:{
        type: String,
    }
})

export default mongoose.model('categories', CategorySchema)
import mongoose from "mongoose"
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    id:{
        type: String,
        required: true
    },
	name:{
        type: String,
        required: true
    },
    banner:{
        type: [String],
    },
    arrayType:{
        type: [String],
    }
})

export default mongoose.model('categories', CategorySchema)
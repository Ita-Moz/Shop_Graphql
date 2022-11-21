import mongoose from "mongoose"
const Schema = mongoose.Schema

const CategorySchema = new Schema({
	name:{
        type: String,
        required: true
    },
    type:{
        type: String,
    },
    typeItem:{
        type: String,
    }
})

export default mongoose.model('categories', CategorySchema)
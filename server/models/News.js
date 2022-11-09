import mongoose from "mongoose"
const Schema = mongoose.Schema

const NewsSchema = new Schema({
	title:{
		type: String,
		required: true
	},
	createAt:{
		type: Date,
		default: Date.now,
	},
	description:{
		type: String,
		default: "No description",
	},
	photo:{
		type: [String],
	},
	category:{
		type: String,
		required: true
	}
})

export default mongoose.model('news', NewsSchema)
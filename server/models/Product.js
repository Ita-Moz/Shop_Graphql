import mongoose from "mongoose"
const Schema = mongoose.Schema

const ProductSchema = new Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	photo: {
		type: String
	},
	brand: {
		type: String
	},
	description: {
		type: String
	},
	kilogram: {
		type: Number
	},
	categoryID: {
		type: String
	}
})

export default mongoose.model("products", ProductSchema)

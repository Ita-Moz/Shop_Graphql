import mongoose from "mongoose"
const Schema = mongoose.Schema

const ProductSchema = new Schema({
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
	brand: {
		type: String
	},
	description: {
		type: String
	},
	kilogram: {
		type: Number
	},
	imageID: {
		type: String
	},
	categoryID: {
		type: String
	},
	sale: {
		type: Number
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.model("products", ProductSchema)

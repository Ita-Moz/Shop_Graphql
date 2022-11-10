import mongoose from "mongoose"
const Schema = mongoose.Schema

const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	imageID: {
		type: String
	},
	cartID: {
		type: String
	}
})

export default mongoose.model("users", UserSchema)

import mongoose from "mongoose"
const Schema = mongoose.Schema

const CartSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    productID:{
        type: String,
    },
    totalPrice:{
        type: Number,
    }
})

export default mongoose.model('carts', CartSchema)
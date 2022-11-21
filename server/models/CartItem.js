import mongoose from "mongoose"
const Schema = mongoose.Schema

const CartItemSchema = new Schema({
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    cartID: {
        type: String
    },
    productID: {
        type: String
    }
})

export default mongoose.model('cartItems', CartItemSchema)
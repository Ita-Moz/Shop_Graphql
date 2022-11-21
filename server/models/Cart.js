import mongoose from "mongoose"
const Schema = mongoose.Schema

const CartSchema = new Schema({
    totalPrice:{
        type: Number,
    }
})

export default mongoose.model('carts', CartSchema)
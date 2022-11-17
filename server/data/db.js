import { Product } from "../models/index.js"
const mongoDataMethods = {
	// Product
	getAllProducts: async (condition = null) =>
		condition === null ? await Product.find() : await Product.find(condition),
	getProductById: async (id) => await Product.findById(id),
	createProduct: async (args) => {
		try {
			const newProduct = new Product(args)
			return await newProduct.save()
		} catch (error) {
			console.log(error)
		}
	}
}
export default mongoDataMethods

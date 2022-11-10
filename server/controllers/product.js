import { Product } from "../models/index.js"

const getAllProducts = async (condition = null) =>
	condition === null ? await Product.find() : await Product.find(condition)
const getProductById = async (id) => await Product.findById(id)
const createProduct = async (args) => {
	const newProduct = new Product(args)
	return await newProduct.save()
}
export default {
	getAllProducts,
	createProduct,
	getProductById
}

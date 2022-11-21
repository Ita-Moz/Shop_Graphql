import { Product, Image, Category, Cart, CartItem } from "../models/index.js"
import cloudinary from "../utils/cloudinary.js"
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
	},
	deleteProduct: async (id, imageID) => {
		const rmProduct = await Product.findByIdAndDelete(id)
		await cloudinary.uploader.destroy(imageID)
		return rmProduct
	},
	updateProduct: async (args) => {
		const { id, ...rest } = args
		return await Product.findByIdAndUpdate(id, rest, { new: true })
	},

	// Image
	getImageById: async (id) => await Image.findById(id),
	createImage: async (args) => {
		try {
			const newImage = new Image(args)
			return await newImage.save()
		} catch (error) {
			console.log(error)
		}
	},

	// Category
	getAllCategories: async (condition = null) =>
		condition === null ? await Product.find() : await Product.find(condition),
	getCategoryById: async (id) => await Category.findById(id),
	createCategory: async (args) => {
		try {
			const newCategory = new Category(args)
			return await newCategory.save()
		} catch (error) {
			console.log(error)
		}
	},
	deleteCategory: async (id, imageID) => {
		const rmCategory = await Category.findByIdAndDelete(id)
		return rmCategory
	},
	updateCategory: async (args) => {
		const { id, ...rest } = args
		return await Category.findByIdAndUpdate(id, rest, { new: true })
	},

	// Cart
	getCartById: async (id) => await Cart.findById(id),
	createCart: async (args) => {
		try {
			const newCart = new Cart(args)
			return await newCart.save()
		} catch (error) {
			console.log(error)
		}
	},
	// CartItem
	getAllCartItem: async (condition = null) =>
		condition === null ? await CartItem.find() : await CartItem.find({cartID: condition}),
	createCartItem: async (args) => {
		try {
			const newCartItem = new CartItem(args)
			return await newCartItem.save()
		} catch (error) {
			console.log(error)
		}
	}
}
export default mongoDataMethods

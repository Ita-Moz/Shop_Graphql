import { Image, Product } from "../models/index.js"
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
	// Image
	getAllImages: async (condition = null) =>
		condition === null ? await Image.find() : await Image.find(condition),
	getImageById: async (id) => await Image.findById(id),
	createImage: async (args) => {
		const { createReadStream, filename, mimetype, encoding } = await args.file;
		// const result = await cloudinary.uploader.upload(req.file)
		const newImage = new Image(args)
		// newImage.url = result.secure_url
		// newImage.cloudinaryId = result.public_id
		return await newImage.save()
	}
}
export default mongoDataMethods

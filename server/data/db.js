import fs from "fs"
import { readFile } from "../middleware/file.js"
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
	createImage: async (file) => {
		const imageUrl = await readFile(file)
		console.log(imageUrl.pathName, imageUrl.randomName)
		const result = await cloudinary.uploader.upload(
			imageUrl.pathName,
			{
				tags: "basic_sample",
				folder: "shopping-for-all"
			},
			(result, error) => console.log(result, error)
		)
		console.log(result.secure_url)
		fs.unlink(imageUrl.pathName, (err) => {
			if (err) throw err
			console.log("File deleted!")
		})
		const newImage = new Image({ url: result.secure_url, name: imageUrl.randomName })
		return await newImage.save()
	}
}
export default mongoDataMethods

import { Image, Product } from "../models/index.js"
import cloudinary from "../utils/cloudinary.js"
import path from "path"
import { fileURLToPath } from "url"
import {createWriteStream} from "fs"
import { finished } from "stream"
const __dirname = path.dirname(fileURLToPath(import.meta.url))
// Tạo id ngẫu nhiên
function makeId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
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
		const { createReadStream, filename, mimetype, encoding } = await args
		// const {ext} = path.parse(filename)
		// const randomName = makeId(10)+ ext
		const pathName = path.join(__dirname,`../public/images/${filename}`)
		console.log(pathName)
		const stream = await createReadStream()
		const out =await createWriteStream(pathName)
		await stream.pipe(out)
		// await finished(out)
		const result = await cloudinary.uploader.upload(pathName,{
			upload_preset: "shopping-for-all"
		})
		console.log("done")

		const newImage = await new Image({ url: result.secure_url, name: filename })
		return await newImage.save()
	}
}
export default mongoDataMethods

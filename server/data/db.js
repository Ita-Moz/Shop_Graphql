import Product from "../models/Product.js"
const mongoDataMethods = {
	getAllProducts: async (condition = null) => {
		condition = null ? await Product.find() : await Product.find(condition)
	}
}
export default mongoDataMethods

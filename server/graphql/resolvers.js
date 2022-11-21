import { GraphQLScalarType, Kind } from "graphql"
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs"
const resolvers = {
	// Định nghĩa kiểu dữ liệu mới Date cho graphql (Để sử dụng định nghĩa "scalar Date" trong schema)
	Date: new GraphQLScalarType({
		name: "Date",
		description: "Date custom scalar type",
		parseValue(value) {
			return new Date(value) // value from the client
		},
		serialize(value) {
			return value.getTime() // value sent to the client
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return new Date(ast.value) // ast value is always in string format
			}
			return null
		}
	}),
	Upload: GraphQLUpload,
	// Định nghĩa các truy vấn
	Query: {
		products: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllProducts(),
		product: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getProductById(args.id),
		image: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getImageById(args.id),
		categories: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllCategories(),
		category: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getCategoryById(args.id),
		cart: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getCartById(args.id),
		cartItem: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllCartItems()
	},

	// Định nghĩa các thao tác thêm dữ liệu
	Mutation: {
		createProduct: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.createProduct(args)
		},
		deleteProduct: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.deleteProduct(args.id, args.imageID)
		},
		updateProduct: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.updateProduct(args)
		},
		createImage: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.createImage(args)
		},
		createCategory: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.createCategory(args)
		},
		deleteCategory: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.deleteCategory(args.id, args.imageID)
		},
		updateCategory: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.updateCategory(args)
		},
		createCart: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.createCart(args)
		},
		createCartItem: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.createCartItem(args)
		}
	},

	// Định nghĩa các thao tác truy vấn
	Product: {
		imageID: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.getImageById(parent.imageID)
		}
	},
	Cart: {
		cartItemID: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.getAllCartItem(parent.id)
		}
	},
	CartItem: {
		productID: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.getProductById(parent.productID)
		}
	},
	User:{
		cartID: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.getCartById(parent.cartID)
		}
	}

}
export default resolvers

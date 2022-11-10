import { GraphQLScalarType, Kind } from "graphql"
import Product from "../controllers/index.js"

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
	Query: {
		products: async (parent, args) => await Product.getAllProducts(),
		product: async (parent, args) => await Product.getProductById(args.id)
	},
	Mutation: {
		createProduct: async (parent, args) => {
			return await Product.createProduct(args)
		}
	}
}
export default resolvers

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
			await mongoDataMethods.getProductById(args.id)
	},

	// Định nghĩa các thao tác thêm dữ liệu
	Mutation: {
		createProduct: async (parent, args, { mongoDataMethods }) => {
			return await mongoDataMethods.createProduct(args)
		}
	}
}
export default resolvers

import { GraphQLScalarType, Kind } from "graphql"
import mongoDataMethods from "../data/db.js"
import path from "path"
import fs from "fs"
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
	// Định nghĩa các truy vấn
	Query: {
		products: async () => await mongoDataMethods.getAllProducts(),
		product: async (parent, args) => await mongoDataMethods.getProductById(args.id),
		images: async () => await mongoDataMethods.getAllImages(),
		image: async (parent, args) => await mongoDataMethods.getImageById(args.id)
	},
	// Định nghĩa các thao tác thêm dữ liệu
	Mutation: {
		createProduct: async (parent, args) => {
			return await mongoDataMethods.createProduct(args)
		},
		createImage: async (parent, args) => await mongoDataMethods.createImage(args),
	},
	Product: {
		image: async (parent) => await mongoDataMethods.getImageById(parent.imageID)
	}
}
export default resolvers

const typeDefs = `#graphql
	scalar Date
	scalar Upload
	type Product {
		name: String
		price: Int
		quantity: Int
		image: String
		brand: String
		description: String
		kilogram: Int
		category: Category
		createdAt: Date
	    updatedAt: Date
	}
	type Category {
		name: String
		image: String
		type: String
	}
	type Cart {
		productID: Product
		totalPrice: Int
	}
	type User {
		firstName: String
		lastName: String
		userName: String
		password: String
		email: String
		phone: Int
		role: String
		image: String
		cartID: Cart
	}
	type News {
		title: String
		createAt: Date
		description: String
		image: String
		category: Category
	}

    # Yêu cầu truy xuất dữ liệu
	type Query {
		products: [Product]
		product(id: ID!): Product
	}
	# Yêu cầu thêm dữ liệu
	type Mutation {
		createProduct(name:String!, price:Int!, quantity:Int!, image:String!, brand:String,description: String, kilogram: Int, categoryID: String  ): Product
	}
	
`
export default typeDefs

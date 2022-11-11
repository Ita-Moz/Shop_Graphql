const typeDefs = `#graphql
	scalar Date
	scalar Upload
	type Product {
		id: ID!
		name: String
		price: Int
		quantity: Int
		image: Image
		brand: String
		description: String
		kilogram: Int
		category: Category
	}
	type Image {
		url:String!,
		name:String,
    	createdAt: Date
	    updatedAt: Date
	}
	type Category {
		name: String
		image: Image
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
		image: Image
		cartID: Cart
	}
	type News {
		title: String
		createAt: Date
		description: String
		image: Image
		category: Category
	}

    # Yêu cầu truy xuất dữ liệu
	type Query {
		products: [Product]
		product(id: ID!): Product
		images: [Image]
		image(id: ID!): Image
	}
	# Yêu cầu thêm dữ liệu
	type Mutation {
		createProduct(name:String!, price:Int!, quantity:Int!, imageID:String!, brand:String,description: String, kilogram: Int, categoryID: String  ): Product
		createImage(file: Upload!): Image!
	}
	
`
export default typeDefs

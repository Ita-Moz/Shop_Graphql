const typeDefs = `#graphql
	scalar Date
	type Products {
		id: ID!
		name: String
		price: Int
		quantity: Int
		imageID: Images
		brand: String
		description: String
		kilogram: Int
		categoryID: String
	}
	type Images {
		url: String
    	cloudinaryId: String
    	createdAt: Date
	    updatedAt: Date
	}
	type Categories {
		name: String
		imageID: Images
		type: String
	}
	type Carts {
		productID: Products
		totalPrice: Int
	}
	type Users {
		firstName: String
		lastName: String
		userName: String
		password: String
		email: String
		phone: Int
		role: String
		imageID: Images
		cartID: Carts
	}
	type News {
		title: String
		createAt: Date
		description: String
		imageID: Images
		categoryID: Categories
	}

    # Yêu cầu truy xuất dữ liệu
	type Query {
		products: [Products]
		product(id: ID!): Products
	}
	# Yêu cầu thêm dữ liệu
	type Mutation {
		createProduct(name:String, price:Int, quantity:Int): Products
	}
`
export default typeDefs

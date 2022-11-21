const typeDefs = `#graphql
	scalar Date
	scalar Upload
	type Product {
		id: ID
		name: String
		price: Int
		quantity: Int
		imageID: Image
		brand: String
		description: String
		kilogram: Int
		category: Category
		createdAt: Date
	    updatedAt: Date
	}
	type Category {
		id: ID
		name: String
		type: String
		typeItem: String
	}
	type Cart {
		id: ID
		cartItemID: [CartItem]
		totalPrice: Int
	}
	type CartItem {
		id: ID
		quantity: Int
  		price: Int
    	cartID: ID!
    	productID: Product!
	}
	type User {
		id: ID
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
		id: ID
		title: String
		createAt: Date
		description: String
		image: Image
		category: Category
	}
	type Image{
		id: ID
		url: String
		public_id: String
	}
    # Yêu cầu truy xuất dữ liệu
	type Query {
		products: [Product]
		product(id: ID!): Product
		image(id: ID!): Image
		categories: [Category]
		category(id: ID!): Category
		cart(id: ID!): Cart
		cartItem: [CartItem]
	}
	# Yêu cầu thêm dữ liệu
	type Mutation {
		# Product
		createProduct(name:String!, price:Int!, quantity:Int!, imageID:ID!, brand:String,description: String, kilogram: Int, categoryID: String,sale:Int  ): Product,
		deleteProduct(id: ID!,imageID:String!): Product,
		updateProduct(id: ID!, name:String, price:Int, quantity:Int, 
		imageID:ID, brand:String,description: String, kilogram: Int, categoryID: String,sale:Int  ): Product,
		# Image
		createImage(url:String!, public_id:String!): Image,
		# Category
		createCategory(name:String!, type:String!,typeItem:String): Category,
		deleteCategory(id: ID!): Category,
		updateCategory(id: ID!, name:String, type:String,typeItem:String):Category,
		# Cart
		createCart(totalPrice:Int!): Cart,
		# CartItem
		createCartItem(quantity:Int, price:Int, cartID:ID!, productID:ID!): CartItem,
	}
	
`
export default typeDefs

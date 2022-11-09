const typeDefs = `#graphql
	type Products {
		id: ID!
		name: String
		price: Int
	}
    # Yêu cầu truy xuất dữ liệu
	type Query {
		products: [Products]
	}
`
export default typeDefs

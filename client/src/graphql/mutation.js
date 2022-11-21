import { gql } from "@apollo/client"
const CREATE_PRODUCT = gql`
	mutation (
		$name: String!
		$price: Int!
		$quantity: Int!
		$imageId: ID!
		$kilogram: Int
		$description: String
		$brand: String
		$categoryId: ID!
		$sale: Int
	) {
		createProduct(
			name: $name
			price: $price
			quantity: $quantity
			imageID: $imageId
			kilogram: $kilogram
			description: $description
			brand: $brand
			categoryID: $categoryId
			sale: $sale
		) {
			id
			name
			price
			quantity
			imageID {
				public_id
				url
			}
		}
	}
`
const CREATE_IMAGE = gql`
	mutation ($url: String!, $publicId: String!) {
		createImage(url: $url, public_id: $publicId) {
			id
		}
	}
`
export default {
	CREATE_PRODUCT,
	CREATE_IMAGE
}

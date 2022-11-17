import { gql } from "@apollo/client"
const CREATE_PRODUCT = gql`
	mutation CreateProduct($name: String!, $price: Int!, $quantity: Int!, $image: String!) {
		createProduct(name: $name, price: $price, quantity: $quantity, image: $image) {
			name
			price
			quantity
			image
		}
	}
`
export default {
	CREATE_PRODUCT
}

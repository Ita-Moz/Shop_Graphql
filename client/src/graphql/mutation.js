import { gql } from "@apollo/client"
const UPLOAD_FILE = gql`
	mutation ($file: Upload!) {
		createImage(file: $file) {
			url
			name
			createdAt
			updatedAt
		}
	}
`
export default {
	UPLOAD_FILE
}
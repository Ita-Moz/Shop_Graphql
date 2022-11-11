import { gql, useMutation } from "@apollo/client"

const UPLOAD_FILE = gql`
	mutation CreateImage($file: Upload!) {
		createImage(file: $file) {
			url
			name
			createdAt
			updatedAt
		}
	}
`
function Upload() {
	const [mutate, { loading, error }] = useMutation(UPLOAD_FILE)
	const handleFileChange = ({
		target: {
			validity,
			files: [file]
		}
	}) => validity.valid && mutate({ variables: { file } })

	if (loading) return <div>Loading...</div>
	if (error) return <div>{JSON.stringify(error, null, 2)}</div>

	return (
		<div>
			<h1>Upload File</h1>
			<input type="file" onChange={handleFileChange} />
		</div>
	)
}

export default Upload

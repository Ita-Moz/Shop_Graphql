import { useMutation } from "@apollo/client"
import { Mutation } from "../graphql"

function Upload() {
	const [uploadFile, { loading, error }] = useMutation(Mutation.UPLOAD_FILE, {
		onCompleted: (data) => {
			console.log(data)
		}
	})
	const handleFileChange = (e) => {
		const file = e.target.files[0]
		uploadFile({ variables: { file } })
	}
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

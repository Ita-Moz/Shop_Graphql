import { useMutation } from "@apollo/client"
import axios from "axios"
import { useState } from "react"
import { Mutation } from "../graphql"
function Upload() {
	const [imageSelected, setImageSelected] = useState("")
	const [product, setProduct] = useState({
		name: "",
		price: 0,
		quantity: 0,
		description: "",
		kilogram: 0,
		brand: "",
		categoryId: "",
		sale: 0
	})
	// Yêu cầu tạo dữ liệu từ graphql
	const [createImage] = useMutation(Mutation.CREATE_IMAGE, {
		onCompleted: (data) => {
			console.log(data)
			createProduct({
				variables: {
					name: product.name,
					price: parseInt(product.price),
					quantity: parseInt(product.quantity),
					imageId: data.createImage.id,
					description: product.description,
					kilogram: parseInt(product.kilogram),
					brand: product.brand
					// Thêm categoryID và sale
				}
			})
		}
	})
	const [createProduct] = useMutation(Mutation.CREATE_PRODUCT, {
		onCompleted: (data) => {
			console.log("Create Product Success", data)
		}
	})

	// Hàm xử lý khi người dùng nhập formData
	const handleFileChange = (e) => {
		setImageSelected(e.target.files[0])
	}
	const handleOnchange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value })
		console.log(product)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append("file", imageSelected)
		formData.append("upload_preset", "shopping-for-all")
		await axios
			.post(`https://api.cloudinary.com/v1_1/dv1fvhcla/image/upload`, formData)
			.then((res) => {
				createImage({
					variables: {
						url: res.data.url,
						publicId: res.data.public_id
					}
				})
			})
			.catch((err) => console.log(err))
	}
	return (
		<div>
			<h1>Upload File</h1>
			<input
				name="name"
				type="text"
				placeholder="Vui lòng nhập tên"
				onChange={handleOnchange}
				required
			/>
			<input
				name="price"
				type="number"
				placeholder="Vui lòng nhập giá"
				onChange={handleOnchange}
				required
			/>
			<input
				name="quantity"
				type="number"
				placeholder="Vui lòng nhập số lượng"
				onChange={handleOnchange}
				required
			/>
			<input name="description" type="text" onChange={handleOnchange} placeholder="desc" />
			<input name="kilogram" type="number" onChange={handleOnchange} placeholder="KILO" />
			<input name="brand" type="text" onChange={handleOnchange} placeholder="brand" />
			<input name="image" type="file" onChange={handleFileChange} required />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}

export default Upload

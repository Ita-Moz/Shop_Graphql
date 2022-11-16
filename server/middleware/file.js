import dotenv from "dotenv"
import { createWriteStream } from "fs"
import { dirname, join, parse } from "path"
import { finished } from "stream"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config()
// Tạo id ngẫu nhiên
function makeId(length) {
	var result = ""
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	var charactersLength = characters.length
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}
export const readFile = async (file) => {
	const { createReadStream, filename } = await file
	const { ext } = parse(filename)
	const stream = createReadStream()
	const randomName = (await makeId(5)) + Date.now() + ext
	const pathName = join(__dirname, `../public/images/${randomName}`)
	const out = createWriteStream(pathName)
	await stream.pipe(out)
	finished(out, (err) => {
		if (err) console.log(err)
	})
	const baseUrl = process.env.BASE_URL
	let url = `${baseUrl}${pathName.split("public")[1]}`
	return { url, pathName, randomName }
}

export const multipleReadFile = async (file) => {
	let fileUrl = []
	let pathNames = []
	for (let i = 0; i < file.length; i++) {
		const { createReadStream, filename } = await file[i]
		const stream = createReadStream()
		var { ext } = parse(filename)
		const randomName = makeId(10) + Date.now() + ext
		let pathName = (__dirname, `../public/images/${randomName}`)
		const out = await createWriteStream(pathName)
		await stream.pipe(out)
		const baseUrl = process.env.BASE_URL
		let url = `${baseUrl}${url.split("public")[1]}`
		fileUrl.push({ url })
		pathNames.push({ pathName })
	}
	return { fileUrl, pathNames }
}

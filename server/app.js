import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs"
import http from "http"
import mongoose from "mongoose"
import mongoDataMethods from "./data/db.js"
import resolvers from "./graphql/resolvers.js"
import typeDefs from "./graphql/schema.js"
dotenv.config()
// define env
const PORT = process.env.PORT || 5000

// Connect MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})

		console.log("MongoDB connected")
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}
connectDB()

const app = express()
const httpServer = await http.createServer(app)

// Set up Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})
await server.start()
app.use(
	express.static("public"),
	express.json(),
	express.urlencoded({ extended: true }),
	graphqlUploadExpress(),
	cors("*"),
	expressMiddleware(server, {
		context: async ({ req, res }) => ({ req, res, mongoDataMethods })
	})
)

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve))
console.log(`🚀 Server ready at ${process.env.BASE_URL}`)

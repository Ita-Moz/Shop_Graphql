import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import http from "http"
import mongoose from "mongoose"
import mongoDataMethods from "./controllers/index.js"
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
const httpServer = http.createServer(app)

// Set up Apollo Server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})
await server.start()

app.use(
	cors(),
	bodyParser.json(),
	expressMiddleware(server, {
		context: async () => ({ mongoDataMethods })
	})
)

await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve))
console.log(`🚀 Server ready at http://localhost:${PORT}`)

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

const client = new ApolloClient({
	link: createUploadLink({
		headers: {
			'Apollo-Require-Preflight': true,
			"content-type": "application/json"
		},
		uri: "http://localhost:4000",
		credentials: "include"
	}),
	cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
)

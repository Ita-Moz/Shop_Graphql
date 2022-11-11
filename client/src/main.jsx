import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createUploadLink({
		headers: {'Apollo-Require-Preflight': 'true'},
		uri: "http://localhost:4000"
	})
})
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
        <ApolloProvider client={client}>
		<App />
        </ApolloProvider>
	</React.StrictMode>
)

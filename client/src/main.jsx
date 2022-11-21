import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { StyledEngineProvider } from "@mui/material"
import { createUploadLink } from "apollo-upload-client"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
const client = new ApolloClient({
	link: createUploadLink({
		headers: {
			"Apollo-Require-Preflight": true,
			"Content-Type": "application/json"
		},
		uri: "http://localhost:4000"
	}),
	cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</ApolloProvider>
)

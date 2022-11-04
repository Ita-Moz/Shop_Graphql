import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import {resolve} from 'path'
export default defineConfig({
    plugins: [react()],
    build: {
        emptyOutDir: true,
        outDir: "dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            }
        }
    },
    resolve: {
        alias:{
            '@': resolve(__dirname, './src'),
            '@images': resolve(__dirname, './src/assets/images'),
        }
    }
})

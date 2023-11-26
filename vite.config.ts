import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts({ insertTypesEntry: true })],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "oc-hrnet-ui",
			fileName: "oc-hrnet-ui",
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});

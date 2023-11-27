import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { glob } from "glob";
import { extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			include: /\.(jsx|tsx)$/,
			babel: {
				plugins: ["styled-components"],
				babelrc: false,
				configFile: false,
			},
		}),
		dts({ include: ["lib"] }),
	],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react-dom", "styled-components"],
			input: Object.fromEntries(
				// https://rollupjs.org/configuration-options/#input
				glob
					.sync("lib/**/*.{ts,tsx}")
					.map((file) => [
						relative(
							"lib",
							file.slice(0, file.length - extname(file).length)
						),
						fileURLToPath(new URL(file, import.meta.url)),
					])
			),
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"styled-components": "styled",
				},
			},
		},
	},
});

import contentCollections from "@content-collections/vite";
import { defineConfig } from "vite";
import kiru from "vite-plugin-kiru";
import { feedPlugin } from "./plugins/feed";

export default defineConfig({
	plugins: [
		contentCollections(),
		kiru({ devtools: true, ssg: true }),
		feedPlugin(),
	],
});

import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";
import { z } from "zod";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const posts = defineCollection({
	name: "posts",
	directory: "content/posts",
	include: "*.mdx",
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		date: z.coerce.date(),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {
			files(appender) {
				appender.file("@components/Avatar", "./src/components/Avatar.tsx");
			},
			rehypePlugins: [
				[
					rehypeShiki,
					{
						theme: customShikiThemeDark(),
					},
				],
			],
		});

		// Detect language from filename pattern: .(th|ja|zh).mdx
		const langMatch = document._meta.fileName.match(/\.(th|ja|zh)\.mdx$/);
		const lang = langMatch ? langMatch[1] : "en";

		// Generate base slug without language suffix
		const baseSlug = document.title
			.toLowerCase()
			.replace(/[^a-z0-9]/g, "-")
			.replace(/-+/g, "-")
			.replace(/^-|-$/g, "");

		return {
			...document,
			slug: baseSlug,
			baseSlug,
			lang,
			mdx,
		};
	},
});

const projects = defineCollection({
	name: "projects",
	directory: "content/projects",
	include: "*.mdx",
	schema: z.object({
		title: z.string("You must provide a title"),
		repo: z.string("You must provide a repo link"),
		type: z.string("You must provide a type of Web or Tool").regex(/Web|Tool/),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {});
		return {
			...document,
			slug: document.title
				.toLowerCase()
				.replace(/[^a-z0-9]/g, "-")
				.replace(/-+/g, "-")
				.replace(/^-|-$/g, ""),
			mdx,
		};
	},
});

const thangs = defineCollection({
	name: "thangs",
	directory: "content/thangs",
	include: "*.mdx",
	schema: z.object({
		item: z.string("You must provide a item name"),
		img: z.string("You must provide a img link"),
		type: z.enum(["Tech", "Day", "Furniture", "Travel", "Kitchen", "Lang"]),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		return {
			...document,
			slug: document.item
				.toLowerCase()
				.replace(/[^a-z0-9]/g, "-")
				.replace(/-+/g, "-")
				.replace(/^-|-$/g, ""),
			mdx,
		};
	},
});

export default defineConfig({
	collections: [posts, projects, thangs],
});

function customShikiThemeDark() {
	return {
		name: "deepin-os-soft",
		type: "dark",
		colors: {
			"editor.background": "#0d0d0d", // Site Charcoal
			"editor.foreground": "#83A5AE", // Muted Slate for punctuation
		},
		tokenColors: [
			{
				// KEYWORDS (const, return, import)
				// Your primary Gold
				scope: ["keyword", "storage.type", "keyword.operator"],
				settings: { foreground: "#b59a4d" },
			},
			{
				// REPLACING GREEN (Object keys, Tags, Properties)
				// The Complementary Slate Blue (#4d68b5)
				scope: [
					"meta.object-literal.key",
					"support.type.property-name",
					"entity.name.tag",
				],
				settings: { foreground: "#4d68b5" },
			},
			{
				// FUNCTIONS (signal, mount, useEffect)
				// A lighter "Champagne" version of your gold to keep the theme
				scope: ["entity.name.function", "support.function"],
				settings: { foreground: "#d4af37" },
			},
			{
				// STRINGS
				// A desaturated Tan/Gold
				scope: ["string", "punctuation.definition.string"],
				settings: { foreground: "#a3905d" },
			},
			{
				// VARIABLES
				// Soft Gray so they don't compete with the Gold/Blue
				scope: ["variable", "variable.other", "variable.parameter"],
				settings: { foreground: "#9ea3a0" },
			},
			{
				// COMMENTS
				// Darker Slate to recede into the charcoal background
				scope: ["comment"],
				settings: { foreground: "#72868D", fontStyle: "italic" },
			},
		],
	};
}

import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string()
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      slug: document.title.toLowerCase().replace(/ /g, '-'),
      html,
    };
  },
});

const notes = defineCollection({
  name: "notes",
  directory: "content/notes",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});

export default defineConfig({
  collections: [posts, notes],
});

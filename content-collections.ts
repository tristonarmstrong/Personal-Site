import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from '@content-collections/mdx'
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
    date: z.coerce.date()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      files(appender) {
        appender.file("@components/Avatar", "./src/components/Avatar.tsx")
      },
    });
    return {
      ...document,
      slug: document.title.toLowerCase().replace(/ /g, '-'),
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
    type: z.string("You must provide a type of Web or Tool").regex(/Web|Tool/)
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      slug: document.title.toLowerCase().replace(/ /g, '-'),
      mdx,
    };
  },
});
export default defineConfig({
  collections: [posts, projects],
});

import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from '@content-collections/mdx'
import { z } from "zod";
import rehypeShiki from '@shikijs/rehype'

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
      rehypePlugins: [
        [rehypeShiki, {
          theme: customShikiThemeDark()
        }]
      ]
    });

    return {
      ...document,
      slug: document.title.toLowerCase().replace(/\s/g, '-').replace(/'|"|:/, ''),
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
    const mdx = await compileMDX(context, document, {

    });
    return {
      ...document,
      slug: document.title.toLowerCase().replace(/ /g, '-'),
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
    type: z.enum(["Tech", "Day", "Furniture", "Travel", "Kitchen", "Lang"])
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      slug: document.item.toLowerCase().replace(/\s|:|&/g, '-').replace(/-/g, ''),
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, projects, thangs],
});

function customShikiThemeDark() {
  return {
    name: 'deepin-os-soft',
    type: 'dark',
    colors: {
      'editor.background': '#0d0d0d', // Slightly off-black to reduce contrast
      'editor.foreground': '#00a300', // Softer Green
    },
    tokenColors: [
      {
        // "const", "return", "==", "=>"
        scope: ['keyword', 'storage.type', 'keyword.operator', 'punctuation.separator'],
        settings: { foreground: '#b34d82' } // Softer Magenta (less neon)
      },
      {
        // "post", "x" (Variable names and Arrow function parameters)
        scope: ['variable.other', 'variable.parameter', 'meta.definition.variable'],
        settings: { foreground: '#a32a2a' } // Softer Red
      },
      {
        // "{ state: { params } }" (Object keys stay green)
        scope: ['meta.object-literal.key', 'support.type.property-name', 'variable.other.property'],
        settings: { foreground: '#00a300' } // Softer Green
      },
      {
        // "useFileRouter", "find"
        scope: ['entity.name.function', 'support.function', 'meta.function-call'],
        settings: { foreground: '#4a7bb5' } // Softer Muted Blue
      },
      {
        // "// Kiru v1"
        scope: ['comment', 'punctuation.definition.comment'],
        settings: { foreground: '#586e75' } // Muted Slate Gray (easier to read)
      },
      {
        // " 'my string' "
        scope: ['string', 'punctuation.definition.string'],
        settings: { foreground: '#b59a4d' } // Muted Gold
      }
    ]

  };
}

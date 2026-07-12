import * as Kiru from "kiru";
import { createElement } from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";
import { useFileRouter, Link, definePageConfig } from "kiru/router";
import { a as allPosts } from "./allPosts-eLCCIt0_.js";
import { A as Avatar } from "./Avatar-Y8blbqcW.js";
import { S as SEO } from "./SEO-Cu9liQYw.js";
import { f as formatReadingTime, c as calculateReadingTime } from "./readingTime-B_HF_foQ.js";
import { A as ArrowLeftIcon } from "./ArrowLeft-oSPQ2whM.js";
function Page() {
  const {
    state: { params }
  } = useFileRouter();
  return () => {
    const slug = params.value?.slug;
    const postId = allPosts.findIndex((x) => x.slug === slug);
    const post = allPosts[postId];
    const nextPost = postId !== allPosts.length - 1 ? allPosts[postId + 1] : allPosts[0];
    if (!post?.mdx) {
      return /* @__PURE__ */ createElement("div", null, "Oops something went wrong rendering the page");
    }
    return /* @__PURE__ */ createElement("article", { className: "text-sm mt-10 flex flex-col gap-10 max-w-2xl" }, /* @__PURE__ */ createElement(
      SEO,
      {
        title: post.title,
        description: post.summary,
        type: "article",
        publishedTime: post.date.toISOString(),
        url: `/blog/${post.slug}`
      }
    ), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(
      Link,
      {
        to: "/blog",
        className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.1]  text-gray-400 hover:text-gray-200 hover:bg-white/[0.06] hover:border-white/20 transition text-xs font-medium backdrop-blur-sm no-underline",
        style: "text-decoration: none;",
        transition: true
      },
      /* @__PURE__ */ createElement(ArrowLeftIcon, { size: 14 }),
      /* @__PURE__ */ createElement("span", null, "All Posts"),
      /* @__PURE__ */ createElement("span", { className: "text-gray-600" }, "·"),
      /* @__PURE__ */ createElement("span", { className: "text-gray-500" }, allPosts.length)
    )), /* @__PURE__ */ createElement("header", { className: "p-4 rounded-2xl bg-white/[0.1] backdrop-blur-md " }, /* @__PURE__ */ createElement("div", { className: "flex items-start gap-3" }, /* @__PURE__ */ createElement(Avatar, { size: "lg" }), /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement("h1", { className: "text-xl font-bold tracking-tight text-gray-100 leading-tight", style: "margin-top: 0px;" }, post.title), /* @__PURE__ */ createElement("div", { className: "flex items-center gap-2 mt-2 text-xs text-gray-500" }, /* @__PURE__ */ createElement("span", null, post.date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })), /* @__PURE__ */ createElement("span", null, "·"), /* @__PURE__ */ createElement("span", null, formatReadingTime(calculateReadingTime(post.mdx))))))), /* @__PURE__ */ createElement("div", { className: "w-full border-t border-dashed border-white/10" }), /* @__PURE__ */ createElement("main", { className: "blogpost markdown-body" }, /* @__PURE__ */ createElement(MDXContent, { code: post.mdx })), /* @__PURE__ */ createElement("div", { className: "w-full border-t border-dashed border-white/10" }), /* @__PURE__ */ createElement("footer", null, /* @__PURE__ */ createElement("h2", { className: "text-xs font-medium tracking-wider text-gray-500 uppercase mb-4" }, "Next Post"), /* @__PURE__ */ createElement(
      Link,
      {
        to: `/blog/${nextPost.slug}`,
        className: "flex flex-col p-4  rounded-xl bg-white/[0.1] backdrop-blur-md hover:bg-white/[0.06] transition group no-underline",
        style: "text-decoration: none;",
        transition: true
      },
      /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-4 mb-1" }, /* @__PURE__ */ createElement("h3", { className: "text-sm font-medium text-gray-200 group-hover:text-white transition-colors tracking-tight" }, nextPost.title), /* @__PURE__ */ createElement("span", { className: "text-xs text-gray-500 whitespace-nowrap" }, nextPost.date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      }))),
      /* @__PURE__ */ createElement("p", { className: "text-xs text-gray-500 leading-relaxed line-clamp-2" }, nextPost.summary)
    )), /* @__PURE__ */ createElement("div", { className: "h-20" }));
  };
}
function useMDXComponent(code) {
  const scope = { Kiru, _jsx_runtime };
  const fn = new Function(...Object.keys(scope), code);
  return fn(...Object.values(scope)).default;
}
function MDXContent({ code, ...props }) {
  const Component = useMDXComponent(code);
  return /* @__PURE__ */ jsx(Component, { ...props });
}
const config = definePageConfig({
  generateStaticParams: () => {
    return allPosts.map((p) => ({ slug: p.slug }));
  }
});
export {
  config,
  Page as default
};

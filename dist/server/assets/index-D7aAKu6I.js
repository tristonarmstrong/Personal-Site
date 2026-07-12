import * as Kiru from "kiru";
import { createElement } from "kiru";
import * as _jsx_runtime from "kiru/jsx-runtime";
import { jsx } from "kiru/jsx-runtime";
import { useFileRouter, Link, definePageConfig } from "kiru/router";
import { a as allProjects } from "./allProjects-D7jr3pfx.js";
import { A as Avatar } from "./Avatar-Y8blbqcW.js";
import { S as SEO } from "./SEO-Cu9liQYw.js";
import { A as ArrowLeftIcon } from "./ArrowLeft-oSPQ2whM.js";
function Page() {
  const {
    state: { params }
  } = useFileRouter();
  return () => {
    const slug = params.value?.slug;
    const projectId = allProjects.findIndex((x) => x.slug === slug);
    const project = allProjects[projectId];
    const nextProject = projectId !== allProjects.length - 1 ? allProjects[projectId + 1] : allProjects[0];
    if (!project?.mdx) {
      return /* @__PURE__ */ createElement("div", null, "Oops something went wrong rendering the page");
    }
    return /* @__PURE__ */ createElement("article", { className: "text-sm mt-10 flex flex-col gap-10 max-w-2xl" }, /* @__PURE__ */ createElement(
      SEO,
      {
        title: project.title,
        description: `${project.title} - A ${project.type} project by Triston Armstrong.`,
        url: `/project/${project.slug}`
      }
    ), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement(
      Link,
      {
        to: "/",
        className: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-gray-200 hover:bg-white/[0.06] hover:border-white/20 transition text-xs font-medium backdrop-blur-sm no-underline",
        style: "text-decoration: none;",
        transition: true
      },
      /* @__PURE__ */ createElement(ArrowLeftIcon, { size: 14 }),
      /* @__PURE__ */ createElement("span", null, "All Projects"),
      /* @__PURE__ */ createElement("span", { className: "text-gray-600" }, "·"),
      /* @__PURE__ */ createElement("span", { className: "text-gray-500" }, allProjects.length)
    )), /* @__PURE__ */ createElement("header", { className: "p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10" }, /* @__PURE__ */ createElement("div", { className: "flex items-start gap-3" }, /* @__PURE__ */ createElement(Avatar, { size: "lg" }), /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement(
      "h1",
      {
        style: `view-transition-name: link-h-${project.slug}`,
        className: "text-xl font-bold tracking-tight text-yellow-500 leading-tight"
      },
      project.title
    ), /* @__PURE__ */ createElement("div", { className: "flex items-center gap-2 mt-2 text-xs text-gray-500" }, /* @__PURE__ */ createElement("span", { className: "px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-400" }, project.type), /* @__PURE__ */ createElement("span", null, "·"), /* @__PURE__ */ createElement(
      "a",
      {
        href: project.repo,
        target: "_blank",
        rel: "noopener",
        className: "text-gray-500 hover:text-yellow-500 transition no-underline",
        style: "text-decoration: none;"
      },
      "View on GitHub"
    ))))), /* @__PURE__ */ createElement("div", { className: "w-full border-t border-dashed border-white/10" }), /* @__PURE__ */ createElement("main", { className: "blogpost markdown-body" }, /* @__PURE__ */ createElement(MDXContent, { code: project.mdx })), /* @__PURE__ */ createElement("div", { className: "w-full border-t border-dashed border-white/10" }), /* @__PURE__ */ createElement("footer", null, /* @__PURE__ */ createElement("h2", { className: "text-xs font-medium tracking-wider text-gray-500 uppercase mb-4" }, "Next Project"), /* @__PURE__ */ createElement(
      Link,
      {
        to: `/project/${nextProject.slug}`,
        className: "flex items-start gap-3 p-4 border border-white/10 rounded-xl bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition group no-underline",
        style: "text-decoration: none;",
        transition: true
      },
      /* @__PURE__ */ createElement("div", { className: "w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-500 text-xs font-medium shrink-0 mt-0.5" }, nextProject.type.charAt(0)),
      /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-4 mb-1" }, /* @__PURE__ */ createElement("h3", { className: "text-sm font-medium text-gray-200 group-hover:text-white transition-colors tracking-tight" }, nextProject.title), /* @__PURE__ */ createElement("span", { className: "text-xs text-gray-500 whitespace-nowrap px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10" }, nextProject.type)), nextProject.summary && /* @__PURE__ */ createElement("p", { className: "text-xs text-gray-500 leading-relaxed line-clamp-2" }, nextProject.summary))
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
    return allProjects.map((p) => ({ slug: p.slug }));
  }
});
export {
  config,
  Page as default
};

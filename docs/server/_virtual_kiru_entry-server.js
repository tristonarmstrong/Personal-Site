import { generateStaticPaths as generateStaticPaths$1, render as render$1 } from "kiru/router/server";
import { createElement } from "kiru";
import { Head, Body } from "kiru/router";
import { normalizePrefixPath, formatViteImportMap } from "kiru/router/utils";
function Document() {
  return /* @__PURE__ */ createElement("html", { lang: "en" }, /* @__PURE__ */ createElement("head", null, /* @__PURE__ */ createElement("meta", { charset: "UTF-8" }), /* @__PURE__ */ createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), /* @__PURE__ */ createElement(Head.Outlet, null), /* @__PURE__ */ createElement("link", { rel: "manifest", href: "/manifest.json" })), /* @__PURE__ */ createElement(Body.Outlet, null));
}
const dir = normalizePrefixPath("src/pages");
const baseUrl = normalizePrefixPath("/");
const pagesMap = /* @__PURE__ */ Object.assign({ "/src/pages/404/index.tsx": () => import("./assets/index-D7OGhuae.js"), "/src/pages/blog/[slug]/index.tsx": () => import("./assets/index-DWP33axy.js"), "/src/pages/blog/index.tsx": () => import("./assets/index-BrHQpHa_.js"), "/src/pages/index.tsx": () => import("./assets/index-CaxOrDKx.js"), "/src/pages/project/[slug]/index.tsx": () => import("./assets/index-D7aAKu6I.js"), "/src/pages/thangs/[slug]/index.tsx": () => import("./assets/index-BhehR8kB.js"), "/src/pages/thangs/index.tsx": () => import("./assets/index-BJAqoF2w.js") });
const layoutsMap = /* @__PURE__ */ Object.assign({ "/src/pages/layout.tsx": () => import("./assets/layout-DNEA_SD7.js") });
const pages = formatViteImportMap(pagesMap, dir, baseUrl);
const layouts = formatViteImportMap(layoutsMap, dir, baseUrl);
async function render(url, ctx) {
  const { registerModule, registerPreloadedPageProps } = ctx;
  return render$1(url, { registerModule, registerPreloadedPageProps, Document, baseUrl, pages, layouts });
}
async function generateStaticPaths() {
  return generateStaticPaths$1(pages);
}
export {
  generateStaticPaths,
  render
};

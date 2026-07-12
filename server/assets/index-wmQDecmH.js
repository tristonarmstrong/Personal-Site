import { createElement } from "kiru";
import { Link } from "kiru/router";
import { a as allPosts } from "./allPosts-PgEc26ba.js";
import { a as allProjects } from "./allProjects-D7jr3pfx.js";
const latestPost = allPosts.sort(
  (a, b) => b.date.getTime() - a.date.getTime()
)[0];
const featuredProject = allProjects[0];
const easterEggMessages = [
  "Congratulations! You've discovered the void.",
  "This page is playing hide and seek. It's winning.",
  "You've reached the edge of the internet. Turn back now.",
  "Error 404: Page not found. But your curiosity is appreciated.",
  "Nothing to see here... except this delightful 404 page.",
  "You broke the internet! Just kidding, this link is broken.",
  "This page has gone to a better place. (The recycle bin.)"
];
const randomMessage = easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];
function NotFoundPage() {
  return () => /* @__PURE__ */ createElement("div", { className: "flex flex-col gap-6" }, /* @__PURE__ */ createElement("div", { className: "text-center" }, /* @__PURE__ */ createElement("h1", { className: "text-[4rem] font-bold text-yellow-500" }, "404"), /* @__PURE__ */ createElement("p", { className: "text-lg text-gray-300" }, "Page Not Found"), /* @__PURE__ */ createElement("p", { className: "text-sm text-gray-500 italic mt-2" }, '"', randomMessage, '"')), /* @__PURE__ */ createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ createElement(Link, { to: "/", className: "text-yellow-500 underline", transition: true }, "← Go Home")), /* @__PURE__ */ createElement("div", { className: "mt-4" }, /* @__PURE__ */ createElement("h3", { className: "text-yellow-600 mb-4" }, "While you're here:"), latestPost && /* @__PURE__ */ createElement("div", { className: "mb-4" }, /* @__PURE__ */ createElement("span", { className: "text-gray-400 text-sm" }, "Latest Post"), /* @__PURE__ */ createElement("div", { className: "mx-4" }, /* @__PURE__ */ createElement(
    Item,
    {
      label: latestPost.title,
      href: `/blog/${latestPost.slug}`
    }
  ))), featuredProject && /* @__PURE__ */ createElement("div", { className: "mb-4" }, /* @__PURE__ */ createElement("span", { className: "text-gray-400 text-sm" }, "Featured Project"), /* @__PURE__ */ createElement("div", { className: "mx-4" }, /* @__PURE__ */ createElement(
    Item,
    {
      label: featuredProject.title,
      href: `/project/${featuredProject.slug}`
    }
  ))), /* @__PURE__ */ createElement("div", { className: "mb-4" }, /* @__PURE__ */ createElement("span", { className: "text-gray-400 text-sm" }, "Browse"), /* @__PURE__ */ createElement("div", { className: "mx-4" }, /* @__PURE__ */ createElement(Item, { label: "All Blog Posts", href: "/blog" }), /* @__PURE__ */ createElement(Item, { label: "My Gear (Thangs)", href: "/thangs" }), /* @__PURE__ */ createElement(Item, { label: "Sitemap", href: "/sitemap.xml", external: true })))));
}
function Item({
  label,
  href,
  external = false
}) {
  if (external) {
    return /* @__PURE__ */ createElement(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener",
        className: "flex w-full items-center gap-1 text-gray-400 hover:text-yellow-500 transition"
      },
      /* @__PURE__ */ createElement("span", null, label),
      /* @__PURE__ */ createElement("span", { className: "h-full border border-dashed flex-1 border-gray-600" }),
      /* @__PURE__ */ createElement("span", { className: "text-sm" }, "↗")
    );
  }
  return /* @__PURE__ */ createElement(
    Link,
    {
      to: href,
      className: "flex w-full items-center gap-1 text-gray-400 hover:text-yellow-500 transition",
      transition: true
    },
    /* @__PURE__ */ createElement("span", null, label),
    /* @__PURE__ */ createElement("span", { className: "h-full border border-dashed flex-1 border-gray-600" }),
    /* @__PURE__ */ createElement("span", { className: "text-sm" }, "→")
  );
}
export {
  NotFoundPage as default
};

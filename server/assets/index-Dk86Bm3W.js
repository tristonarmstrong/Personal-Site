import { createElement } from "kiru";
import { a as allPosts } from "./allPosts-PgEc26ba.js";
import { Link } from "kiru/router";
import { A as Avatar } from "./Avatar-Y8blbqcW.js";
import { R as RssIcon } from "./Rss-BXsqYI7d.js";
import { S as SEO } from "./SEO-Cu9liQYw.js";
import { f as formatReadingTime, c as calculateReadingTime } from "./readingTime-B_HF_foQ.js";
function detectCategory(title, summary) {
  const text = `${title} ${summary}`.toLowerCase();
  if (text.includes("interview") || text.includes("personal") || text.includes("career")) {
    return {
      name: "Personal",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: /* @__PURE__ */ createElement(PersonalIcon, null)
    };
  }
  if (text.includes("rust") || text.includes("ci/cd") || text.includes("build") || text.includes("daemon")) {
    return {
      name: "Rust",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      icon: /* @__PURE__ */ createElement(CodeIcon, null)
    };
  }
  if (text.includes("tutorial") || text.includes("how to") || text.includes("guide")) {
    return {
      name: "Tutorial",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      icon: /* @__PURE__ */ createElement(BookIcon, null)
    };
  }
  if (text.includes("linux") || text.includes("wayland") || text.includes("macos") || text.includes("os") || text.includes("gpu")) {
    return {
      name: "Systems",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: /* @__PURE__ */ createElement(TerminalIcon, null)
    };
  }
  return {
    name: "Tech",
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    icon: /* @__PURE__ */ createElement(SparkleIcon, null)
  };
}
function getLastUpdateText(date) {
  if (!date) return "recently";
  const now = /* @__PURE__ */ new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}
function BlogIndex() {
  const allPostsRearranged = allPosts.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  const featuredPost = allPostsRearranged[0];
  const remainingPosts = allPostsRearranged.slice(1);
  return () => /* @__PURE__ */ createElement("main", { className: "text-sm mt-10 flex flex-col gap-10 max-w-2xl" }, /* @__PURE__ */ createElement(
    SEO,
    {
      title: "Blog",
      description: "Latest thoughts, tutorials, and tech deep-dives from Triston Armstrong.",
      url: "/blog"
    }
  ), /* @__PURE__ */ createElement("section", { className: "p-5 rounded-2xl bg-white/[0.1] backdrop-blur-md " }, /* @__PURE__ */ createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ createElement(Avatar, { size: "lg" }), /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-3 mb-2" }, /* @__PURE__ */ createElement("h1", { className: "text-2xl font-bold tracking-tight text-yellow-500" }, "Blog"), /* @__PURE__ */ createElement(
    "a",
    {
      href: "/feed.xml",
      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition text-xs font-medium border border-yellow-500/20",
      title: "Subscribe to RSS feed"
    },
    /* @__PURE__ */ createElement(RssIcon, { size: 12 }),
    /* @__PURE__ */ createElement("span", null, "Subscribe")
  )), /* @__PURE__ */ createElement("p", { className: "text-gray-300 leading-relaxed text-justify" }, "A collection of technical deep-dives, debugging war stories, and lessons learned from shipping software. I write about systems programming, Rust, developer tooling, and the occasional career reflection."), /* @__PURE__ */ createElement("div", { className: "flex items-center gap-4 mt-4 text-xs" }, /* @__PURE__ */ createElement("div", { className: "flex items-center gap-1.5 text-gray-500" }, /* @__PURE__ */ createElement(DocumentIcon, { size: 12 }), /* @__PURE__ */ createElement("span", null, allPostsRearranged.length, " posts")), /* @__PURE__ */ createElement("span", { className: "text-gray-700" }, "·"), /* @__PURE__ */ createElement("div", { className: "flex items-center gap-1.5 text-gray-500" }, /* @__PURE__ */ createElement(TagIcon, { size: 12 }), /* @__PURE__ */ createElement("span", null, "5 topics")), /* @__PURE__ */ createElement("span", { className: "text-gray-700" }, "·"), /* @__PURE__ */ createElement("div", { className: "flex items-center gap-1.5 text-gray-500" }, /* @__PURE__ */ createElement(ClockIcon, { size: 12 }), /* @__PURE__ */ createElement("span", null, "Updated ", getLastUpdateText(allPostsRearranged[0]?.date))))))), /* @__PURE__ */ createElement("div", { className: "w-full border-t border-dashed border-white/10" }), featuredPost && /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("h2", { className: "text-xs font-medium tracking-wider text-gray-500 uppercase mb-4" }, "Latest Post"), /* @__PURE__ */ createElement(FeaturedPostCard, { post: featuredPost })), /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("h2", { className: "text-xs font-medium tracking-wider text-gray-500 uppercase mb-4" }, "All Posts (", allPostsRearranged.length, ")"), /* @__PURE__ */ createElement("div", { className: "grid grid-cols-1 gap-3" }, remainingPosts.map((post) => /* @__PURE__ */ createElement(PostCard, { key: post.slug, post })))), /* @__PURE__ */ createElement("div", { className: "h-20" }));
}
function FeaturedPostCard({ post }) {
  const category = detectCategory(post.title, post.summary);
  const readingTime = formatReadingTime(calculateReadingTime(post.mdx || ""));
  return /* @__PURE__ */ createElement(
    Link,
    {
      to: `/blog/${post.slug}`,
      className: `flex flex-col p-5 rounded-xl bg-white/[0.1] backdrop-blur-md hover:bg-white/[0.05] transition group`,
      transition: true
    },
    /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-4 mb-3" }, /* @__PURE__ */ createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ createElement(
      "span",
      {
        className: `inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${category.color}`
      },
      category.icon,
      category.name
    )), /* @__PURE__ */ createElement("span", { className: "text-xs text-gray-500" }, post.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }))),
    /* @__PURE__ */ createElement("h3", { className: "text-lg font-semibold text-gray-100 group-hover:text-white transition-colors tracking-tight mb-2" }, post.title),
    /* @__PURE__ */ createElement("p", { className: "text-sm text-gray-400 leading-relaxed mb-4 text-justify" }, post.summary),
    /* @__PURE__ */ createElement("div", { className: "flex items-center gap-2 text-xs text-gray-500 mt-auto" }, /* @__PURE__ */ createElement(ClockIcon, { size: 12 }), /* @__PURE__ */ createElement("span", null, readingTime))
  );
}
function PostCard({ post }) {
  const category = detectCategory(post.title, post.summary);
  const readingTime = formatReadingTime(calculateReadingTime(post.mdx || ""));
  return /* @__PURE__ */ createElement(
    Link,
    {
      to: `/blog/${post.slug}`,
      className: `flex items-start gap-3 p-4 rounded-lg bg-white/[0.1] backdrop-blur-md hover:bg-white/[0.05] transition group`,
      transition: true
    },
    /* @__PURE__ */ createElement(
      "div",
      {
        className: `shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${category.color}`
      },
      category.icon
    ),
    /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-2 mb-1" }, /* @__PURE__ */ createElement("h3", { className: "text-sm font-medium text-gray-200 group-hover:text-white transition-colors tracking-tight truncate" }, post.title)), /* @__PURE__ */ createElement("p", { className: "text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2" }, post.summary), /* @__PURE__ */ createElement("div", { className: "flex items-center gap-3 text-[11px] text-gray-600" }, /* @__PURE__ */ createElement("span", { className: "flex items-center gap-1" }, /* @__PURE__ */ createElement(ClockIcon, { size: 10 }), readingTime), /* @__PURE__ */ createElement("span", null, "·"), /* @__PURE__ */ createElement("span", null, post.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    }))))
  );
}
function CodeIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("polyline", { points: "16 18 22 12 16 6" }),
    /* @__PURE__ */ createElement("polyline", { points: "8 6 2 12 8 18" })
  );
}
function BookIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" })
  );
}
function TerminalIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ createElement("line", { x1: "12", x2: "20", y1: "19", y2: "19" })
  );
}
function PersonalIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ createElement("circle", { cx: "12", cy: "7", r: "4" })
  );
}
function SparkleIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" })
  );
}
function ClockIcon({ size = 12 }) {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ createElement("polyline", { points: "12 6 12 12 16 14" })
  );
}
function DocumentIcon({ size = 12 }) {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
    /* @__PURE__ */ createElement("polyline", { points: "14 2 14 8 20 8" })
  );
}
function TagIcon({ size = 12 }) {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    /* @__PURE__ */ createElement("path", { d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" }),
    /* @__PURE__ */ createElement("circle", { cx: "7", cy: "7", r: "1" })
  );
}
export {
  BlogIndex as default
};

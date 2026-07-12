import { createElement } from "kiru";
import { a as allThangs } from "./allThangs-TiLtKidp.js";
import { R as RssIcon } from "./Rss-BXsqYI7d.js";
import { useFileRouter, Link } from "kiru/router";
function Mail() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: ""
    },
    /* @__PURE__ */ createElement("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
    /* @__PURE__ */ createElement("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
  );
}
function Navigation() {
  const { state } = useFileRouter();
  return /* @__PURE__ */ createElement("nav", { className: "flex items-center gap-6" }, /* @__PURE__ */ createElement("div", { className: "flex gap-1" }, /* @__PURE__ */ createElement(NavLink, { to: "/", active: state.pathname.value === "/" }, "Home"), /* @__PURE__ */ createElement(NavLink, { to: "/thangs", active: state.pathname.value === "/thangs" }, "Thangs"), /* @__PURE__ */ createElement(
    NavLink,
    {
      to: "/blog",
      active: state.pathname.value === "/blog" || state.pathname.value.startsWith("/blog/")
    },
    "Blog"
  )));
}
function NavLink({
  to,
  active,
  children
}) {
  return /* @__PURE__ */ createElement(
    Link,
    {
      to,
      className: `
				px-3 py-1.5 rounded-lg text-sm
				transition-all duration-200
				${active ? "bg-[#1a1a1a] text-yellow-500" : "text-gray-400 hover:text-gray-200 hover:bg-[#141414]"}
			`,
      transition: true
    },
    children
  );
}
function RootLayout({ children }) {
  function _generateViewTransitionNamesFromContent() {
    return allThangs.map(
      (thang) => `
        ::view-transition-old(image-${thang.slug}),
        ::view-transition-new(image-${thang.slug}) {
          height: 100%;
        }
      `
    ).join("\n");
  }
  return /* @__PURE__ */ createElement("div", { className: "max-w-[70ch] mx-auto mt-20 flex flex-col gap-4 px-4 sm:overflow-hidden relative" }, /* @__PURE__ */ createElement("style", { innerHTML: _generateViewTransitionNamesFromContent() }), /* @__PURE__ */ createElement("div", { className: "relative z-10" }, /* @__PURE__ */ createElement(Navigation, null), children, /* @__PURE__ */ createElement(
    "footer",
    {
      className: "text-center flex flex-col gap-1",
      style: "view-transition-name: foot"
    },
    /* @__PURE__ */ createElement("div", { className: "w-full border-t border-dashed border-white/10" }),
    /* @__PURE__ */ createElement("div", { className: "flex flex-col [&_*]:transition gap-2" }, /* @__PURE__ */ createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ createElement("small", { className: "opacity-50 hover:opacity-100" }, "Made with ❤️ & 🍵"), /* @__PURE__ */ createElement(
      "a",
      {
        className: "opacity-50 hover:opacity-100 flex items-end gap-1",
        href: "https://kirujs.dev",
        target: "_blank",
        rel: "noopener"
      },
      /* @__PURE__ */ createElement("small", null, "Powered by"),
      /* @__PURE__ */ createElement("div", { className: "flex items-end justify-center" }, /* @__PURE__ */ createElement(
        "svg",
        {
          className: "w-4",
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "crimson",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        /* @__PURE__ */ createElement("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" })
      ), /* @__PURE__ */ createElement("small", { className: "text-primary font-bold flex items-center" }, "Kiru"))
    )), /* @__PURE__ */ createElement("ul", { className: "flex gap-3 [&>*>*]:opacity-50 [&>*>*]:hover:opacity-100 [&>*>*]:hover:text-yellow-500 [&>*]:transition-color [&>*]:duration-200 items-end" }, /* @__PURE__ */ createElement(
      "a",
      {
        className: "hover:scale-90",
        href: "https://github.com/tristonarmstrong",
        rel: "noopener",
        target: "_blank",
        title: "GitHub"
      },
      /* @__PURE__ */ createElement(GithubIcon, null)
    ), /* @__PURE__ */ createElement(
      "a",
      {
        className: "hover:scale-90",
        href: "https://x.com/triston_armstr",
        rel: "noopener",
        target: "_blank",
        title: "X (Twitter)"
      },
      /* @__PURE__ */ createElement(XIcon, null)
    ), /* @__PURE__ */ createElement(
      "a",
      {
        className: "hover:scale-90",
        href: "https://www.linkedin.com/in/triston-armstrong-7248b229b",
        rel: "noopener",
        target: "_blank",
        title: "LinkedIn"
      },
      /* @__PURE__ */ createElement(LinkedinIcon, null)
    ), /* @__PURE__ */ createElement("a", { className: "hover:scale-90", href: "/feed.xml", title: "RSS Feed" }, /* @__PURE__ */ createElement(RssIcon, null)), /* @__PURE__ */ createElement(
      "a",
      {
        className: "hover:scale-90",
        href: "_",
        onclick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const a = document.createElement("a");
          a.href = "mailto:triston95strong@gmail.com?subject=Reaching Out&body=Hey Triston, ...Put message here...";
          a.click();
        },
        title: "Email"
      },
      /* @__PURE__ */ createElement(Mail, null)
    )))
  )));
}
function GithubIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: ""
    },
    /* @__PURE__ */ createElement("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
    /* @__PURE__ */ createElement("path", { d: "M9 18c-4.51 2-5-2-7-2" })
  );
}
function XIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: ""
    },
    /* @__PURE__ */ createElement("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
  );
}
function LinkedinIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      className: ""
    },
    /* @__PURE__ */ createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
    /* @__PURE__ */ createElement("rect", { width: "4", height: "12", x: "2", y: "9" }),
    /* @__PURE__ */ createElement("circle", { cx: "4", cy: "4", r: "2" })
  );
}
export {
  RootLayout as default
};

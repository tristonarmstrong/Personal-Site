import { createElement } from "kiru";
import { a as allThangs } from "./allThangs-TiLtKidp.js";
import { Link } from "kiru/router";
import { g as generateLowResImagePath } from "./generateLowResImagePath-Bwp8sN8z.js";
import { S as SEO } from "./SEO-Cu9liQYw.js";
function Thangs() {
  return () => /* @__PURE__ */ createElement("main", { className: "text-sm mt-10 flex flex-col gap-10 max-w-2xl" }, /* @__PURE__ */ createElement(
    SEO,
    {
      title: "Thangs",
      description: "A collection of things Triston Armstrong likes and uses, including tech, kitchen gear, and more.",
      url: "/thangs"
    }
  ), /* @__PURE__ */ createElement("section", { className: "p-4 rounded-2xl bg-white/[0.03]  flex flex-col gap-2" }, /* @__PURE__ */ createElement("h1", { className: "text-2xl font-bold tracking-tight text-gray-100" }, "/uses"), /* @__PURE__ */ createElement("p", { className: "text-gray-400 leading-relaxed" }, "The gear, tools, and random stuff that powers my day-to-day. From the desk setup to kitchen gadgets, these are things I actually use and recommend.")), /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("div", { className: "p-3 rounded-xl bg-white/[0.1]  mb-4" }, /* @__PURE__ */ createElement("h2", { className: "text-sm font-bold tracking-tight text-gray-100" }, "Tech")), /* @__PURE__ */ createElement(FilteredThangsList, { group: "Tech" })), /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("div", { className: "p-3 rounded-xl bg-white/[0.1]  mb-4" }, /* @__PURE__ */ createElement("h2", { className: "text-sm font-bold tracking-tight text-gray-100" }, "Kitchen")), /* @__PURE__ */ createElement(FilteredThangsList, { group: "Kitchen" })), /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("div", { className: "p-3 rounded-xl bg-white/[0.1]  mb-4" }, /* @__PURE__ */ createElement("h2", { className: "text-sm font-bold tracking-tight text-gray-100" }, "Day")), /* @__PURE__ */ createElement(FilteredThangsList, { group: "Day" })), /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("div", { className: "p-3 rounded-xl bg-white/[0.1]  mb-4" }, /* @__PURE__ */ createElement("h2", { className: "text-sm font-bold tracking-tight text-gray-100" }, "Furniture")), /* @__PURE__ */ createElement(FilteredThangsList, { group: "Furniture" })), /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("div", { className: "p-3 rounded-xl bg-white/[0.1]  mb-4" }, /* @__PURE__ */ createElement("h2", { className: "text-sm font-bold tracking-tight text-gray-100" }, "Travel")), /* @__PURE__ */ createElement("p", { className: "text-gray-500 text-sm pl-1" }, "who travels these days?")), /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("div", { className: "p-3 rounded-xl bg-white/[0.1]  mb-4" }, /* @__PURE__ */ createElement("h2", { className: "text-sm font-bold tracking-tight text-gray-100" }, "Languages")), /* @__PURE__ */ createElement(FilteredThangsList, { group: "Lang" })), /* @__PURE__ */ createElement("p", { className: "text-gray-500 text-xs" }, "Idea stolen from", " ", /* @__PURE__ */ createElement(
    "a",
    {
      className: "text-yellow-500 hover:underline",
      href: "https://favorite.emnudge.dev/",
      target: "_blank",
      rel: "noopener"
    },
    "Emnudge.dev"
  )), /* @__PURE__ */ createElement("div", { className: "h-20" }));
}
function FilteredThangsList({
  group
}) {
  const filteredThangs = allThangs.filter((x) => x.type === group);
  if (filteredThangs.length === 0) {
    return /* @__PURE__ */ createElement("p", { className: "text-gray-500 text-sm pl-1" }, "Nothing here yet");
  }
  return /* @__PURE__ */ createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" }, filteredThangs.map((thang) => {
    return /* @__PURE__ */ createElement(
      Link,
      {
        to: `/thangs/${thang.slug}`,
        className: "transition bg-white/[0.1] rounded-lg hover:bg-white/[0.06] cursor-pointer overflow-hidden group",
        transition: true
      },
      /* @__PURE__ */ createElement(
        "div",
        {
          className: "h-40",
          style: `
								view-transition-name: image-${thang.slug};
								background-image: url(${thang.img}), url(${generateLowResImagePath(thang.img)});
								background-repeat: no-repeat;
								background-size: cover;
								background-position: center;
							`
        }
      ),
      /* @__PURE__ */ createElement("div", { className: "p-3" }, /* @__PURE__ */ createElement(
        "h3",
        {
          style: `view-transition-name: link-h-${thang.slug}`,
          className: "text-sm font-medium text-gray-200 group-hover:text-white transition-colors"
        },
        thang.item
      ), /* @__PURE__ */ createElement("p", { className: "text-xs text-gray-500" }, thang.type))
    );
  }));
}
export {
  Thangs as default
};

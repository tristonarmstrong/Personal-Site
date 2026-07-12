import { createElement } from "kiru";
function RssIcon({ size = 18 }) {
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
    /* @__PURE__ */ createElement("path", { d: "M4 11a9 9 0 0 1 9 9" }),
    /* @__PURE__ */ createElement("path", { d: "M4 4a16 16 0 0 1 16 16" }),
    /* @__PURE__ */ createElement("circle", { cx: "5", cy: "19", r: "1" })
  );
}
export {
  RssIcon as R
};

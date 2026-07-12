import { createElement } from "kiru";
function ArrowLeftIcon({ size = 18 }) {
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
    /* @__PURE__ */ createElement("path", { d: "m12 19-7-7 7-7" }),
    /* @__PURE__ */ createElement("path", { d: "M19 12H5" })
  );
}
export {
  ArrowLeftIcon as A
};

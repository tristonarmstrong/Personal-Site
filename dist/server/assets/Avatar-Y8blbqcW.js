import { createElement } from "kiru";
function Avatar({ size }) {
  const lg = "w-20 h-20";
  const sm = "w-10 h-10";
  let sizing = "";
  switch (size) {
    case "sm":
      sizing = sm;
      break;
    case "lg":
      sizing = lg;
      break;
    default:
      sizing = sm;
      break;
  }
  return () => {
    return /* @__PURE__ */ createElement(
      "div",
      {
        style: `view-transition-name: avatar; background-image: url(/avatar.webp)`,
        className: `${sizing} rounded-full bg-center bg-cover`,
        role: "img",
        "aria-label": "Triston Armstrong's avatar",
        title: "Triston Armstrong"
      }
    );
  };
}
export {
  Avatar as A
};

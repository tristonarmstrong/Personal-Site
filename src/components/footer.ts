import { h } from "../lib";

export function footer() {
  return h('footer', [
    h("br"),
    h('small', h('i', "Crafted with ❤️ by Triston Armstrong © 2025")),
  ], 'text-center')
}

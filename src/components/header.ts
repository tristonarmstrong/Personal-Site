import { h } from "../lib";

export function header() {
  const name = h("h1", "Triston Armstrong", "text-lg")
  const title = h('i', "Senior Software Engineer", "text-sm text-gray-400")

  return h('header', [name, title])
}

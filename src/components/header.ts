import { h } from "../lib";

export function header() {
  const name = h("h1", "Triston Armstrong", "rubik-regular")
  const title = h('i', "Senior Software Engineer", "light")

  return h('header', [name, title])
}

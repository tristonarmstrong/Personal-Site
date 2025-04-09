import { h } from "../lib"

export function linkTo(name: string, href: string) {
  const _a = h('a', name)
  _a.href = href
  _a.target = "__blank"
  return _a
}

import { h, type ClassList } from "../lib"

export function linkTo(name: string, href: string, classList?: ClassList) {
  const _a = h('a', name, classList)
  _a.href = href
  _a.target = "__blank"
  return _a
}

import { h } from "../lib"

export function button(txt: string, onclick: HTMLButtonElement['onclick']): ReturnType<typeof h> {
  const el = h('button', txt)
  el.onclick = onclick
  return el
}

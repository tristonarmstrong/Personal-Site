import { h } from "../lib";

export function workItem(company: string, position: string, time: string) {
  return (
    h('li', [
      h('b', company),
      h("i", [
        h('span', ` - ${position}`),
        h('small', ` ${time}`)
      ]),
    ])
  )
}

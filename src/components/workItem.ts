import { h } from "../lib";

export function workItem(company: string, position: string, time: string) {
  return (
    h('li', [
      h('b', company),
      h("i", [
        h('span', ` - h{position}`),
        h('small', ` h{time}`)
      ]),
    ])
  )
}

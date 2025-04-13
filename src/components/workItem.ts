import { h } from "../lib";

export function workItem(company: string, position: string, time: string) {
  return (
    h('li', [
      h('span', company),
      h("i", [
        h('span', ` - ${position}`, 'light'),
        h('small', ` ${time}`, 'light')
      ], 'flex flex-between'),
    ])
  )
}

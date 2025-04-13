import { h } from "../lib";
import { linkTo } from "./linkTo";

export function projectItem(title: string, link: string, techs: string, desc: string) {
  return (
    h('li', [
      h('div', [
        h('div', [
          linkTo(title, link),
          h('i', h('small', ` ${techs}`), 'light'),
        ], 'flex flex-between'),
        h('div', desc, 'light'),
      ])
    ])
  )
}

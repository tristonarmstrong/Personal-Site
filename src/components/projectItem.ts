import { h } from "../lib";
import { linkTo } from "./linkTo";

export function projectItem(title: string, link: string, techs: string, desc: string) {
  return (
    h('p', [
      h('div', [
        linkTo(title, link),
        h('i', h('small', ` ${techs}`)),
        h('div', desc),
      ])
    ])
  )
}

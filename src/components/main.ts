import { h } from "../lib";
import { intro } from "./intro";
import { projects } from "./projectsList";
import { work } from "./work";

export function main() {
  return h('main', [
    intro(),
    work(),
    projects()
  ])
}

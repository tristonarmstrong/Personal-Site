import { h } from "../lib";
import { about } from "./about";
import { intro } from "./intro";
import { now } from "./now";
import { projects } from "./projectsList";
import { work } from "./work";

export function main() {
  return h('main', [
    intro(),
    about(),
    work(),
    now(),
    projects()
  ])
}

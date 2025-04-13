import { h } from "../lib";
import { workItem } from "./workItem";

export function work() {
  return (
    h('section', [
      h('br'),
      h('h2', "Work History", "codystar-regular"),
      h('i', "I work with TypeScript, Rust, and Python, but open-source software is where I thrive!"),

      h("ul", [
        workItem("Ventra health", "Senior Software Engineer", "( 2023 - Present ) 🏥"),
        h('hr', undefined, 'dashed'),
        workItem("Randstad Technologies", "Software Developer", "( The Past ) 🏢"),
        h('hr', undefined, 'dashed'),
        workItem("Damiano Global Corp", "Senior Software Architect", "( The Past ) 🌐"),
        h('hr', undefined, 'dashed'),
        workItem("Makers Ladder LLC", "Fullstack Software Developer", "( The Past ) 🪜"),
      ])
    ])
  )
}

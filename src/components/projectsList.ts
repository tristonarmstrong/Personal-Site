import { h } from "../lib";
import { projectItem } from "./projectItem";

export function projects() {
  return (
    h('article',
      h('section', [
        h('br'),
        h('h2', 'My Top Projects', "codystar-regular"),
        h('i', 'Here are a few projects I\'ve worked on, ranging from personal tools to open-source contributions:'),

        // Project 1
        projectItem("Todo", "google.com", "(rust/html)", "Something that i need to complete")
      ])
    )
  )
}

import { h } from "../lib";
import { highlightedText } from "./highlightedText";

export function intro() {
  return h('section',
    h('p', `I build useful apps that make my daily tasks easier. I work with ${highlightedText("TypeScript").outerHTML}, ${highlightedText("Rust").outerHTML}, and ${highlightedText("Python").outerHTML} and enjoy learning new things.

            Outside of coding, I like gaming with my wife, spending time with family, and keeping up with tech. I focus on creating good work and working well with others.`
    )
  )
}

import { h } from "../lib";

export function intro() {
  return h('section',
    h('p', `I build useful apps that make my daily tasks easier. I work with ${h('span', 'TypeScript', 'highlight').outerHTML}, ${h('span', 'Rust', 'highlight').outerHTML}, and ${h('span', 'Python', 'highlight').outerHTML} and enjoy learning new things.

            Outside of coding, I like gaming with my wife, spending time with family, and keeping up with tech. I focus on creating good work and working well with others.`
    )
  )
}

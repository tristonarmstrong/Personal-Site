import { h } from "../lib";

export function now() {
  return (
    h('article', [
      h('section', [
        h('br'),
        h('h2', "What I'm Up To Now", "codystar-regular"),
        h('i', "Where I'm at and what I'm focused on"),
        h('p', `Lately, I’ve been diving into Rust and TypeScript, working on personal projects that challenge and expand my skills.

              I’m also contributing to open-source, but my main focus is building tools that solve real problems for me —whether it's aggregators or just practical utilities.

              Outside of coding, I spend time with my family and explore Thailand. Lately, I’ve been experimenting with photography, trying to capture the beauty of wildlife and the world around me.`
        ),
      ])
    ])
  )
}

import { h } from "../lib";

export function about() {
  return (
    h('section', [
      h('br'),
      h('h2', "About Me", "codystar-regular"),
      h('i', "Thanks for stopping by! Here's a bit about me."),
      h('p', `My journey into software development started with a simple question: "How does that work?" That curiosity led me to work on everything from IoT software to revenue cycle management and enterprise projects. Along the way, I’ve honed my skills in debugging, troubleshooting, and finding creative solutions to tough problems.

              I enjoy solving tough problems and building things that matter. Every mistake is a chance to improve, and that approach has made me a stronger engineer.

              When I’m not coding, I’m spending time with my family or exploring new ideas and technologies.`
      )
    ])
  )
}

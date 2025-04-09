import { h } from "../lib";

export function now() {
  return (
    h('article', [
      h('section', [
        h('br'),
        h('h2', "What I'm Up To Now", "codystar-regular"),
        h('i', "Where I'm at, what I'm focused on, and what I'm not"),
        h('p', `Lately, I’ve been diving into Rust and TypeScript, working on personal projects that challenge and expand my skills.

              I’m also contributing to open-source, but my main focus is building tools that solve real problems for me —whether it's aggregators or just practical utilities.

              Outside of coding, I spend time with my family and explore Thailand. Lately, I’ve been experimenting with photography, trying to capture the beauty of wildlife and the world around me.`
        ),
        h('br'),
        h('h2', "What I’m Not Doing", "codystar-regular"),
        h('ul', [
          h("li", [h("b", "🏃‍♂️💨 Chasing the rat race"), h("span", " – I’m not grinding for promotions, climbing corporate ladders, or overworking myself for someone else’s bottom line. Instead, I focus on meaningful work that improves my life.")]),
          h("li", [h('b', "🔥 Burning out"), h("span", " – I enjoy coding, but I’m not sacrificing my health or personal time for endless hustle. Balance matters.")]),
          h("li", [h('b', '❌ Building things I don’t believe in'), h('span', " – I’m not chasing trends or making things just because they’re 'hot.' If it doesn’t solve a real problem or spark my interest, I’m not doing it.")]),
        ]),
        h('p', "Right now, my priority is doing fulfilling work, enjoying life, and growing at my own pace."),
      ])
    ])
  )
}

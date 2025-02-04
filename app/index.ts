b($('header', [
  $("h1", "Triston Armstrong"),
  $('i', "Senior Software Engineer"),
]))

b($('nav', [
  a('[Github]', "https://github.com/tristonarmstrong"),
  $('span', " | "),
  a('[LinkedIn]', "https://www.linkedin.com/in/triston-armstrong-7248b229b/"),
  $('span', " | "),
  a('[Email]', "mailto:triston95strong@gmail.com"),
]))

b($('main', [
  // --- SUMMARY SECTION
  $('section',
    $('p', `I build useful apps that make daily tasks easier 🛠️. I work with TypeScript, Rust, and Python 🐍 and enjoy learning new things.

            Outside of coding, I like gaming 🎮, spending time with family 👨‍👩‍👧‍👦, and keeping up with tech 🚀. I focus on creating good work and working well with others 🤝.`
    )
  ),

  $('hr'),

  $('article', [
    // --- ABOUT SECTION
    $('section', [
      $('h2', "A Little About Me About 👋"),
      $('i', "Thanks for stopping by! Here's a bit about me."),
      $('p', `My journey into software development started with a simple question: "How does that work?" 🤔 That curiosity led me to work on everything from IoT software ⚙️ to revenue cycle management 💰 and enterprise projects 🏢. Along the way, I’ve honed my skills in debugging 🐞, troubleshooting 🛠️, and finding creative solutions to tough problems.

              I love tackling challenges with a problem-solving mindset 🚀 and a passion for building things that make a real impact ✨. Mistakes are just opportunities to grow 🌱, and that mindset has helped me become a better engineer.

              When I’m not coding, I’m spending time with my family 👨‍👩‍👧‍👦 or exploring new ideas and technologies 💡.`
      )
    ]),
    // --- WORK SECTION
    $('section', [
      $('h3', "My Work History 🛠️"),
      $('i', "My tech toolbox is packed with goodies like TypeScript ⌨️, Rust ⚙️, and Python 🐍 – but my heart truly belongs to Open Source Software ❤️!"),
      $("ul", [
        $('li', [
          $('b', "Ventra health"),
          $("i", [
            $('span', " - Senior Software Engineer"),
            $('small', " <2023 - Present> 🏥")
          ]),

        ]),
        $('li', [
          $('b', "Randstad Technologies"),
          $("i", [
            $("span", " - Software Developer"),
            $("small", " <The Past> 🏢")
          ])
        ]),
        $('li', [
          $("b", "Damiano Global Corp"),
          $("i", [
            $("span", " - Senior Software Architect"),
            $("small", " <The Past> 🌐")
          ])
        ]),
        $('li', [
          $('b', "Makers Ladder LLC"),
          $("i", [
            $("span", " - Fullstack Software Developer"),
            $("small", " <The Past> 🪜")
          ])
        ]),
      ])
    ]),
  ]),

  $('hr'),

  $('article', [
    $('section', [
      $('h2', "What I'm Up To Now 🌱"),
      $('i', "Where I'm at, what I'm focused on, and what I'm not"),
      $('p', `Lately, I’ve been deep into Rust 🦀 and TypeScript ⌨️, pushing myself with personal projects that keep me learning and growing.

              I’m also contributing to open-source 🤝, but my main focus is building tools that solve real problems for me 🛠️—whether it's aggregators or just practical utilities 🧰.

              Outside of coding, I spend time with my family 👨‍👩‍👧‍👦 and explore Thailand 🇹🇭. Lately, I’ve been experimenting with photography 📷, trying to capture the beauty of wildlife and the world around me 🏞️.`
      ),
      $('h3', "The NOT"),
      $('ul', [
        $("li", [$("b", "Chasing the rat race 🏃‍♂️💨"), $("span", " – I’m not grinding for promotions, climbing corporate ladders, or overworking myself for someone else’s bottom line. Instead, I focus on meaningful work that improves my life.")]),
        $("li", [$('b', "Burning out 🔥"), $("span", " – I enjoy coding, but I’m not sacrificing my health or personal time for endless hustle. Balance matters.")]),
        $("li", [$('b', 'Building things I don’t believe in ❌'), $('span', " – I’m not chasing trends or making things just because they’re 'hot.' If it doesn’t solve a real problem or spark my interest, I’m not doing it.")]),
      ]),
      $('p', "Right now, my priority is doing fulfilling work, enjoying life, and growing at my own pace. 🚀"),
    ])
  ])]
))

b($('footer', [
  $('hr'),
  $('small', $('i', "Crafted with ❤️ by Triston Armstrong © 2025"))
]))

// UTILITIES ========== 
/** create an element with text */
function $<K extends keyof HTMLElementTagNameMap>(el: K, inner?: string | (HTMLElement | Node) | Array<HTMLElement | Node>): HTMLElementTagNameMap[K] {
  const _el = document.createElement(el)
  if (inner && typeof inner == 'string') { _el.innerText = inner }
  if (inner && (inner instanceof HTMLElement || inner instanceof Node)) { _el.appendChild(inner) }
  if (inner && inner instanceof Array) { inner.forEach(x => _el.appendChild(x)) }
  return _el
}

/** append a node to body */
function b(el: Node) {
  document.body.appendChild(el)
}


function a(name: string, href: string) {
  const _a = $('a', name)
  _a.href = href
  _a.target = "__blank"
  return _a
}

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
    $('p', `Software engineer crafting innovative utility apps 🛠️ that make everyday life easier.  I love building tools that simplify things and bring a little joy to daily routines. ✨

My toolkit includes TypeScript, Rust, and Python 🐍, and I'm always eager to learn and tackle new challenges.  Outside of coding, I'm passionate about gaming 🎮 (who isn't?!), spending time with family 👨‍👩‍👧‍👦, and exploring the ever-evolving world of tech. 🚀

I'm committed to delivering high-quality work and building meaningful connections.  I bring dedication, creativity, and a reliable spirit to everything I do.  🤝`)
  ),

  $('hr'),

  $('article', [
    // --- ABOUT SECTION
    $('section', [
      $('h2', "About 👋"),
      $('i', "Thanks for stopping by! Here's a bit about me."),
      $('p', `My software development journey started with a simple "how does that work?" 🤔 about the web's inner workings.  This curiosity led me down a fascinating path, working with diverse companies on everything from IoT software ⚙️ to revenue cycle management 💰, and even dipping my toes into enterprise-level projects 🏢.  These experiences have given me a solid foundation in debugging 🐞, troubleshooting 🛠️, and crafting creative solutions to tricky problems.

            I bring a unique mix of technical know-how 🤓, problem-solving enthusiasm 🚀, and top-notch debugging skills to the table. I'm passionate about building innovative solutions that truly make a difference ✨.

            What truly sets me apart?  I approach challenges with a humble mindset 🙏, understanding that mistakes happen and are opportunities for growth 🌱. This philosophy has helped me evolve as an engineer and become even more effective in my work.

            When I'm not coding, I love spending quality time with my family 👨‍👩‍👧‍👦 or exploring the exciting world of new ideas and technologies 💡.`)
    ]),
    // --- WORK SECTION
    $('section', [
      $('h3', "Work 🛠️"),
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
      $('h2', "Now 🌱"),
      $('i', "Where I'm at, what I'm focused on, and what I'm not"),
      $('p', `Lately, I've been heavily involved with Rust 🦀 and TypeScript ⌨️, working on personal projects that challenge me as a developer.

              On the side, I enjoy contributing to open-source projects 🤝, but more importantly, I've started a new initiative where I build useful tools for me 🛠️. It is a collection of aggregator tools, or just useful tools in general 🧰.

              When I'm not coding, you can find me spending time with my family 👨‍👩‍👧‍👦 or traveling around Thailand 🇹🇭. I've also been experimenting with photography 📷 and trying to capture the beauty of wildlife 🏞️.`)
    ])
  ])]
))

b($('footer', [
  $('hr'),
  $('p', "Crafted with ❤️ by Triston Armstrong © 2025")
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

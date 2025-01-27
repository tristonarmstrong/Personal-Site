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
    $('p',
      `Software engineer, slowly building innovative utility apps wherever I can. Focused on creating tools that simplify daily life.

    With expertise in TypeScript, Rust, and Python, I continuously improve skills and tackle new challenges. Passionate about gaming (go figure), family, and tech adventures.

    Striving to deliver high-quality work and build meaningful relationships, I bring dedication, creativity, and reliability to all aspects of my life.`)
  ),

  $('hr'),

  $('article', [
    // --- ABOUT SECTION
    $('section', [
      $('h2', "About"),
      $('i', "Thanks for stopping by! Here's a bit about me."),
      $('p', `Hello 👋, I'm a Software Engineer with a passion for Rust and Open-Source Software. With a knack for problem solving, I balance code with exploration and find peace in a cup of hot ☕ next to an open 🔥!

      My journey in software development began with a curiosity about how things worked "behind the scenes", on the web. This led me to working with various companies across industries from IoT software to revenue cycle management, and even dabbling in enterprise-level projects. Through these experiences, I've developed a strong foundation in debugging, troubleshooting, and finding creative solutions to complex problems.

      I bring a unique blend of technical expertise, problem-solving enthusiasm, and debugging skills to my work, with a passion for building innovative solutions that make a difference.

      What sets me apart is my ability to approach challenges with a humble mindset, recognizing that everyone makes mistakes and learning from those experiences. This has helped me grow as an engineer and become more effective in my work.

      When I'm not coding, you can find me spending time with family or exploring new ideas and technologies.`)

    ]),
    // --- WORK SECTION
    $('section', [
      $('h3', "Work"),
      $('i', "My Tech toolbox includes anything related to Typescript, Rust, and Python - but my true love? Open Source Software!"),
      $("ul", [
        $('li', [
          $('b', "Ventra health"),
          $("i", [
            $('span', " - Senior Software Engineer"),
            $('small', " <2023 - Present>")
          ]),

        ]),
        $('li', [
          $('b', "Randstad Technologies"),
          $("i", [
            $("span", " - Software Developer"),
            $("small", " <The Past>")
          ])
        ]),
        $('li', [
          $("b", "Damiano Global Corp"),
          $("i", [
            $("span", " - Senior Software Architect"),
            $("small", " <The Past>")
          ])
        ]),
        $('li', [
          $('b', "Makers Ladder LLC"),
          $("i", [
            $("span", " - Fullstack Software Developer"),
            $("small", " <The Past>")
          ])
        ]),
      ])
    ]),
  ]),

  $('hr'),

  $('article', [
    $('section', [
      $('h2', "Now"),
      $('i', "Where I'm at, what I'm focused on, and what I'm not"),
      $('p', `Lately, I've been heavily involved with Rust and TypeScript, working on personal projects that challenge me as a developer.

        On the side, I enjoy contributing to open-source projects, but more importantly I've started a new initiative called Klectr. Klectr is a collection (klection) of aggrigator tools, or just useful tools in general.

        When I'm not coding, you can find me spending time with my family or traveling around Thailand. I've also been experimenting with photography and trying to capture the beauty of wild life.`)
    ])
  ])]
))

b($('footer', [
  $('hr'),
  $('p', "all rights reserved")
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

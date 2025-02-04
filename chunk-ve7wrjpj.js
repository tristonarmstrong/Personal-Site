// app/utils.ts
function $(el, inner) {
  const _el = document.createElement(el);
  if (inner && typeof inner == "string") {
    _el.innerText = inner;
  }
  if (inner && (inner instanceof HTMLElement || inner instanceof Node)) {
    _el.appendChild(inner);
  }
  if (inner && inner instanceof Array) {
    inner.forEach((x) => _el.appendChild(x));
  }
  return _el;
}
function b(el) {
  document.body.appendChild(el);
}
function a(name, href) {
  const _a = $("a", name);
  _a.href = href;
  _a.target = "__blank";
  return _a;
}

// app/index.ts
b($("header", [
  $("h1", "Triston Armstrong"),
  $("i", "Senior Software Engineer")
]));
b($("nav", [
  a("Github", "https://github.com/tristonarmstrong"),
  $("span", " / "),
  a("LinkedIn", "https://www.linkedin.com/in/triston-armstrong-7248b229b/"),
  $("span", " / "),
  a("Email", "mailto:triston95strong@gmail.com")
]));
b($("main", [
  $("section", $("p", `I build useful apps that make daily tasks easier \uD83D\uDEE0️. I work with TypeScript, Rust, and Python \uD83D\uDC0D and enjoy learning new things.

            Outside of coding, I like gaming \uD83C\uDFAE, spending time with family \uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66, and keeping up with tech \uD83D\uDE80. I focus on creating good work and working well with others \uD83E\uDD1D.`)),
  $("hr"),
  $("article", [
    about(),
    work()
  ]),
  now(),
  projects()
]));
b($("footer", [
  $("hr"),
  $("small", $("i", "Crafted with ❤️ by Triston Armstrong © 2025"))
]));
function projectItem(title, link, techs, desc) {
  return $("p", [
    $("div", [
      a(title, link),
      $("i", $("small", ` ${techs}`)),
      $("div", desc)
    ])
  ]);
}
function projects() {
  return $("article", $("section", [
    $("h2", "My Top Projects \uD83D\uDE80"),
    $("i", "Here are a few projects I've worked on, ranging from personal tools to open-source contributions:"),
    projectItem("Todo", "google.com", "(rust/html)", "Something that i need to complete")
  ]));
}
function now() {
  return $("article", [
    $("section", [
      $("h2", "What I'm Up To Now \uD83D\uDEF8"),
      $("i", "Where I'm at, what I'm focused on, and what I'm not"),
      $("p", `Lately, I’ve been diving into Rust \uD83E\uDD80 and TypeScript ⌨️, working on personal projects that challenge and expand my skills.

              I’m also contributing to open-source \uD83E\uDD1D, but my main focus is building tools that solve real problems for me \uD83D\uDEE0️—whether it's aggregators or just practical utilities \uD83E\uDDF0.

              Outside of coding, I spend time with my family \uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66 and explore Thailand \uD83C\uDDF9\uD83C\uDDED. Lately, I’ve been experimenting with photography \uD83D\uDCF7, trying to capture the beauty of wildlife and the world around me \uD83C\uDFDE️.`),
      $("h3", "What I’m Not Doing ❌"),
      $("ul", [
        $("li", [$("b", "Chasing the rat race \uD83C\uDFC3‍♂️\uD83D\uDCA8"), $("span", " – I’m not grinding for promotions, climbing corporate ladders, or overworking myself for someone else’s bottom line. Instead, I focus on meaningful work that improves my life.")]),
        $("li", [$("b", "Burning out \uD83D\uDD25"), $("span", " – I enjoy coding, but I’m not sacrificing my health or personal time for endless hustle. Balance matters.")]),
        $("li", [$("b", "Building things I don’t believe in ❌"), $("span", " – I’m not chasing trends or making things just because they’re 'hot.' If it doesn’t solve a real problem or spark my interest, I’m not doing it.")])
      ]),
      $("p", "Right now, my priority is doing fulfilling work, enjoying life, and growing at my own pace. \uD83D\uDE80")
    ])
  ]);
}
function workItem(company, position, time) {
  return $("li", [
    $("b", company),
    $("i", [
      $("span", ` - ${position}`),
      $("small", ` ${time}`)
    ])
  ]);
}
function work() {
  return $("section", [
    $("h3", "Work History \uD83D\uDEE0️"),
    $("i", "I work with TypeScript ⌨️, Rust ⚙️, and Python \uD83D\uDC0D, but open-source software ❤️ is where I thrive!"),
    $("ul", [
      workItem("Ventra health", "Senior Software Engineer", "(2023 - Present) \uD83C\uDFE5"),
      workItem("Randstad Technologies", "Software Developer", "(The Past) \uD83C\uDFE2"),
      workItem("Damiano Global Corp", "Senior Software Architect", "(The Past) \uD83C\uDF10"),
      workItem("Makers Ladder LLC", "Fullstack Software Developer", "(The Past) \uD83E\uDE9C")
    ])
  ]);
}
function about() {
  return $("section", [
    $("h2", "About Me \uD83D\uDC7D"),
    $("i", "Thanks for stopping by! Here's a bit about me."),
    $("p", `My journey into software development started with a simple question: "How does that work?" \uD83E\uDD14 That curiosity led me to work on everything from IoT software ⚙️ to revenue cycle management \uD83D\uDCB0 and enterprise projects \uD83C\uDFE2. Along the way, I’ve honed my skills in debugging \uD83D\uDC1E, troubleshooting \uD83D\uDEE0️, and finding creative solutions to tough problems.

              I enjoy solving tough problems \uD83D\uDE80 and building things that matter ✨. Every mistake is a chance to improve \uD83C\uDF31, and that approach has made me a stronger engineer.

              When I’m not coding, I’m spending time with my family \uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66 or exploring new ideas and technologies \uD83D\uDCA1.`)
  ]);
}

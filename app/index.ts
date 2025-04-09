import { $, a, b } from "./utils"

b($('header', [
  $("h1", "Triston Armstrong", "rubik-regular"),
  $('i', "Senior Software Engineer", "light"),
]))

b($('nav', [
  // a('Github', "https://github.com/tristonarmstrong"),
  // $('span', " / "),
  // a('LinkedIn', "https://www.linkedin.com/in/triston-armstrong-7248b229b/"),
  // $('span', " / "),
  // a('Email', "mailto:triston95strong@gmail.com"),
]))

b($('main', [
  // --- SUMMARY SECTION
  $('section',
    $('p', `I build useful apps that make my daily tasks easier. I work with TypeScript, Rust, and Python and enjoy learning new things.

            Outside of coding, I like gaming with my wife, spending time with family, and keeping up with tech. I focus on creating good work and working well with others.`
    )
  ),


  $('article', [
    about(),
    work(),
  ]),
  now(),
  projects()
]
))

b($('footer', [
  $("br"),
  $('small', $('i', "Crafted with ❤️ by Triston Armstrong © 2025")),
]))

function projectItem(title: string, link: string, techs: string, desc: string) {
  return (
    $('p', [
      $('div', [
        a(title, link),
        $('i', $('small', ` ${techs}`)),
        $('div', desc),
      ])
    ])
  )
}

function projects() {
  return (
    $('article',
      $('section', [
        $('br'),
        $('h2', 'My Top Projects', "codystar-regular"),
        $('i', 'Here are a few projects I\'ve worked on, ranging from personal tools to open-source contributions:'),

        // Project 1
        projectItem("Todo", "google.com", "(rust/html)", "Something that i need to complete")
      ])
    )
  )
}

function now() {
  return (
    $('article', [
      $('section', [
        $('br'),
        $('h2', "What I'm Up To Now", "codystar-regular"),
        $('i', "Where I'm at, what I'm focused on, and what I'm not"),
        $('p', `Lately, I’ve been diving into Rust and TypeScript, working on personal projects that challenge and expand my skills.

              I’m also contributing to open-source, but my main focus is building tools that solve real problems for me —whether it's aggregators or just practical utilities.

              Outside of coding, I spend time with my family and explore Thailand. Lately, I’ve been experimenting with photography, trying to capture the beauty of wildlife and the world around me.`
        ),
        $('br'),
        $('h2', "What I’m Not Doing", "codystar-regular"),
        $('ul', [
          $("li", [$("b", "🏃‍♂️💨 Chasing the rat race"), $("span", " – I’m not grinding for promotions, climbing corporate ladders, or overworking myself for someone else’s bottom line. Instead, I focus on meaningful work that improves my life.")]),
          $("li", [$('b', "🔥 Burning out"), $("span", " – I enjoy coding, but I’m not sacrificing my health or personal time for endless hustle. Balance matters.")]),
          $("li", [$('b', '❌ Building things I don’t believe in'), $('span', " – I’m not chasing trends or making things just because they’re 'hot.' If it doesn’t solve a real problem or spark my interest, I’m not doing it.")]),
        ]),
        $('p', "Right now, my priority is doing fulfilling work, enjoying life, and growing at my own pace."),
      ])
    ])
  )
}

function workItem(company: string, position: string, time: string) {
  return (
    $('li', [
      $('b', company),
      $("i", [
        $('span', ` - ${position}`),
        $('small', ` ${time}`)
      ]),
    ])
  )
}

function work() {
  return (
    $('section', [
      $('br'),
      $('h2', "Work History", "codystar-regular"),
      $('i', "I work with TypeScript ⌨️, Rust ⚙️, and Python 🐍, but open-source software ❤️ is where I thrive!"),
      $("ul", [
        workItem("Ventra health", "Senior Software Engineer", "(2023 - Present) 🏥"),
        workItem("Randstad Technologies", "Software Developer", "(The Past) 🏢"),
        workItem("Damiano Global Corp", "Senior Software Architect", "(The Past) 🌐"),
        workItem("Makers Ladder LLC", "Fullstack Software Developer", "(The Past) 🪜"),
      ])
    ])
  )
}

function about() {
  return (
    $('section', [
      $('br'),
      $('h2', "About Me", "codystar-regular"),
      $('i', "Thanks for stopping by! Here's a bit about me."),
      $('p', `My journey into software development started with a simple question: "How does that work?" That curiosity led me to work on everything from IoT software to revenue cycle management and enterprise projects. Along the way, I’ve honed my skills in debugging, troubleshooting, and finding creative solutions to tough problems.

              I enjoy solving tough problems and building things that matter. Every mistake is a chance to improve, and that approach has made me a stronger engineer.

              When I’m not coding, I’m spending time with my family or exploring new ideas and technologies.`
      )
    ])
  )
}



import { h } from "../lib";
import { projectItem } from "./projectItem";

export function projects() {
  return (
    h('section', [
      h('br'),
      h('h2', 'My Top Projects', "codystar-regular"),
      h('i', 'Here are a few projects I\'ve worked on, ranging from personal tools to open-source contributions:'),

      h('ul', [
        projectItem("Rage", "https://github.com/tristonarmstrong/Rage", "( rust )", "Rage is a rust based git ui kind of like Gogs / cgit"),
        h('hr', undefined, 'dashed'),
        projectItem("Ferro", "https://github.com/tristonarmstrong/ferro", "( rust )", "Git Content Generation Using Local LLM "),
        h('hr', undefined, 'dashed'),
        projectItem("Standupy", "https://github.com/tristonarmstrong/standupy", "( tauri, kaioken )", "A native app i use to manage my standups and daily tasks"),
        h('hr', undefined, 'dashed'),
        projectItem("Web-Window-Manager", "https://github.com/tristonarmstrong/web-window-manager", "( typescript )", "A window manager for maintaining 'connections' to child windows/tabs in the browser"),
      ])
    ])
  )
}

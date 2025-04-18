import { h } from "../lib";
import { avatar } from "./avatar";
import { linkTo } from "./linkTo";
import email from '../resources/email.svg'

export function nav() {
  return h('nav', [
    h('li', [avatar("./image-3.jpg")]),
    h('div', [
      h('li', linkTo('Home', '/', "no-underline light border-b-2 border-[#ffce00]")),
      // h('li', linkTo('About', '#', "no-underline light")),
      // h('li', linkTo('Now', '#', "no-underline light")),
      // h('li', linkTo('Featured', '#', "no-underline light")),
    ], "flex justify-center gap-4"),
    h('li', [emailLogo()])
  ], "flex w-full justify-between list-none my-10 items-center")
}


function emailLogo() {
  let el = h('img', [], "text-white cursor-pointer")
  el.src = email
  return el
}


import { h } from "../lib";

export function avatar(src: string, onClick?: HTMLElement['onclick']) {
  const img = h('div', [], "rounded-full w-[40px] h-[40px] bg-cover bg-center")
  img.style.backgroundImage = `url(${src})`
  img.onclick = onClick ?? (() => { })

  return img
}

import { h } from "../lib";

export function highlightedText(text: string) {
  const el = h('span', text, 'font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffce00] to-red-500')
  return el
}

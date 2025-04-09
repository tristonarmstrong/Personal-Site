/** create an element with text */
export function $<
  K extends keyof HTMLElementTagNameMap
>(
  el: K,
  inner?: string | (HTMLElement | Node) | Array<HTMLElement | Node>,
  classList?: string
): HTMLElementTagNameMap[K] {
  const _el = document.createElement(el)
  if (classList) _el.classList = classList
  if (inner && typeof inner == 'string') { _el.innerText = inner }
  if (inner && (inner instanceof HTMLElement || inner instanceof Node)) { _el.appendChild(inner) }
  if (inner && inner instanceof Array) { inner.forEach(x => _el.appendChild(x)) }
  return _el
}

/** append a node to body */
export function b(el: Node) {
  document.body.appendChild(el)
}


export function btn(txt: string, onclick: HTMLButtonElement['onclick']): ReturnType<typeof $> {
  const el = $('button', txt)
  el.onclick = onclick
  return el
}

export function a(name: string, href: string) {
  const _a = $('a', name)
  _a.href = href
  _a.target = "__blank"
  return _a
}

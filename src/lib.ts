/** create an element with text */
export function h<
  K extends keyof HTMLElementTagNameMap
>(
  el: K,
  inner?: string | (HTMLElement | Node) | Array<HTMLElement | Node>,
  classList?: string
): HTMLElementTagNameMap[K] {
  const _el = document.createElement(el)
  // @ts-ignore-next-line
  if (classList) _el.classList = classList
  if (inner && typeof inner == 'string') { _el.innerText = inner }
  if (inner && (inner instanceof HTMLElement || inner instanceof Node)) { _el.appendChild(inner) }
  if (inner && inner instanceof Array) { inner.forEach(x => _el.appendChild(x)) }
  return _el
}

/** append a node to body */
export function bodyAdd(el: Node | Node[]) {
  if (Array.isArray(el)) {
    return el.forEach(e => document.body.appendChild(e))
  }
  document.body.appendChild(el)
}


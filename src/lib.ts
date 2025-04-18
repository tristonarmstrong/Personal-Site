export type ClassList = string | string[]
/** create an element with text */
export function h<
  K extends keyof HTMLElementTagNameMap
>(
  el: K,
  inner?: string | (HTMLElement | Node) | Array<HTMLElement | Node>,
  classList?: ClassList
): HTMLElementTagNameMap[K] {
  const _el = document.createElement(el)
  // @ts-ignore-next-line
  if (classList) _el.classList = Array.isArray(classList) ? classList.join(' ') : classList
  if (inner && typeof inner == 'string') { _el.innerHTML = inner }
  if (inner && (inner instanceof HTMLElement || inner instanceof Node)) { _el.appendChild(inner) }
  if (inner && inner instanceof Array) { inner.forEach(x => _el.appendChild(x)) }
  return _el
}

/** append a node to body */
export function bodyAdd(el: Node | Node[], classList?: string | string[]) {
  Array.isArray(el) ? el.forEach(e => document.body.appendChild(e)) : document.body.appendChild(el)
  // @ts-ignore-next-line
  if (classList) document.body.classList = Array.isArray(classList) ? classList.join(' ') : classList
}


import { allThangs } from "content-collections"
import { Navigation } from "../components/Navigation"
import { signal } from "kiru"

export const windowSize = signal(0)
if ("window" in globalThis) {
  window.__kiru.on("mount", () => {
    window.addEventListener("resize", (_) => {
      windowSize.value = window.innerWidth
    })
  })
}

export default function RootLayout({ children }: { children: JSX.Children }) {
  function _generateViewTransitionNamesFromContent() {
    return allThangs.map(thang => (`
        ::view-transition-old(image-${thang.slug}),
        ::view-transition-new(image-${thang.slug}) {
          height: 100%;
        }
      `)).join("\n")
  }
  return (
    <div className="max-w-[70ch] mx-auto mt-10 flex flex-col gap-4 px-2 sm:overflow-hidden">
      <style innerHTML={_generateViewTransitionNamesFromContent()} />
      <Navigation />

      {children}

      <footer className="text-center flex flex-col" style={"view-transition-name: foot"}>
        <hr className="opacity-50" />
        <div className={"flex justify-between items-end [&_*]:transition"}>
          <small className="opacity-50 hover:opacity-100">Made with ❤️ & 🍵</small>
          <a className="opacity-50 hover:opacity-100 flex items-end gap-1 hover:text-yellow-500" href="https://kirujs.dev" target={"_blank"} rel={"noopener"}>
            <small>Powered by</small>
            <div className="flex items-end justify-center">
              <svg className={"w-4"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="crimson" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
              <small className="text-primary font-bold flex items-center">Kiru</small>
            </div>
          </a>
        </div>
      </footer>
    </div>
  )
}

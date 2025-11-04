import { allThangs } from "content-collections"
import { useViewTransition } from "kiru"
import { Link, useFileRouter } from "kiru/router"
import { Avatar } from "../components/Avatar"
import { Mail } from "../components/icons/Mail"

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
    <div className="max-w-[70ch] mx-auto mt-10 flex flex-col gap-4 px-2">
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

function Navigation() {
  const { state } = useFileRouter()
  const transition = useViewTransition()

  const handleNavigate = (route: string) => () => {
    transition(() => {
      state.path = route
    })
  }

  return (
    <nav className="flex justify-between items-center">
      <AutoHiddenAvatar handleNavigate={handleNavigate} />
      <div className="flex gap-3 [&>*]:hover:text-yellow-500">
        <Link style={"view-transition-name: home"} to="/" onclick={handleNavigate("/")}>
          Home
          {state.path === '/' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: experience"} to="/experience" onclick={handleNavigate("/experience")}>
          Experience
          {state.path === '/experience' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: now"} to="/now" onclick={handleNavigate("/now")}>
          Now
          {state.path === '/now' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: thangs"} to="/thangs" onclick={handleNavigate("/thangs")}>
          Thangs
          {state.path === '/thangs' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
      </div>
      <a style={"view-transition-name: mail"} href="_" onclick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        const a = document.createElement('a')
        a.href = "mailto:triston95strong@gmail.com?subject=Reaching Out&body=Hey Triston, ...Put message here..."
        a.click()
      }}><Mail /></a>
    </nav>

  )
}

function AutoHiddenAvatar({ handleNavigate }: { handleNavigate: any }) {
  const { state } = useFileRouter()

  if (state.path.includes('blog')) return null

  return (
    <Link style={"view-transition-name: nav"} to="/" onclick={handleNavigate("/")}><Avatar /></Link>
  )
}

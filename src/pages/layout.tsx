import { useViewTransition } from "kiru"
import { Link, useFileRouter } from "kiru/router"
import { Avatar } from "../components/Avatar"
import { Mail } from "../components/icons/Mail"

export default function RootLayout({ children }: { children: JSX.Children }) {
  return (
    <div className="max-w-[70ch] mx-auto mt-10 flex flex-col gap-4 px-2">
      <Navigation />

      {children}

      <footer className="text-center flex flex-col" style={"view-transition-name: foot"}>
        <hr className="opacity-50" />
        <small className="opacity-50">© 2026 Triston Armstrong - <a className={"text-yellow-200 underline"} href="https://www.copyright.gov/title17/92chap1.html" target={"_blank"} rel={'noopener'}>All Rights Reserved</a></small>
        <small className="opacity-50">Made with ❤️ & 🍵</small>
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
      </div>
      <a href="_" onclick={(e) => {
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

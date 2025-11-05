import { useViewTransition } from "kiru"
import { Link, useFileRouter } from "kiru/router"
import { AutoHiddenAvatar } from "./AutoHiddenAvatar"

export function Navigation() {
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
      <div className="flex gap-3 [&>*]:hover:text-yellow-500  sm:[&>*]:text-lg [&>*]:text-sm">
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
    </nav>

  )
}

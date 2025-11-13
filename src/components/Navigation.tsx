import { Link, useFileRouter } from "kiru/router"
import { AutoHiddenAvatar } from "./AutoHiddenAvatar"

export function Navigation() {
  const { state } = useFileRouter()

  return (
    <nav className="flex justify-between items-center">
      <AutoHiddenAvatar />
      <div className="flex gap-3 [&>*]:hover:text-yellow-500  sm:[&>*]:text-lg [&>*]:text-sm">
        <Link style={"view-transition-name: home"} to="/">
          Home
          {state.pathname === '/' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: experience"} to="/experience" >
          Experience
          {state.pathname === '/experience' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: now"} to="/now">
          Now
          {state.pathname === '/now' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: thangs"} to="/thangs">
          Thangs
          {state.pathname === '/thangs' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
      </div>
    </nav>

  )
}

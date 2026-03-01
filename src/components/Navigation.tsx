import { Link, useFileRouter } from "kiru/router"
import { AutoHiddenAvatar } from "./AutoHiddenAvatar"

export function Navigation() {
  const { state } = useFileRouter()

  return (
    <nav className="flex justify-between items-center">
      <AutoHiddenAvatar />
      <div className="flex gap-3 [&>*]:hover:text-yellow-500  sm:[&>*]:text-lg [&>*]:text-sm">
        <Link style={"view-transition-name: home"} to="/" transition>
          Home
          {state.pathname.value === '/' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: experience"} to="/experience" transition>
          Experience
          {state.pathname.value === '/experience' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: now"} to="/now" transition>
          Now
          {state.pathname.value === '/now' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
        <Link style={"view-transition-name: thangs"} to="/thangs" transition>
          Thangs
          {state.pathname.value === '/thangs' && <div style={"view-transition-name: navborder"} className={"border-b border-yellow-500"} />}
        </Link>
      </div>
    </nav>

  )
}

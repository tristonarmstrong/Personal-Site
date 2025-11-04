import { useViewTransition } from "kiru"
import { Link, useFileRouter } from "kiru/router"
import { AutoHiddenAvatar } from "./AutoHiddenAvatar"
import { Avatar } from "./Avatar"
import { Mail } from "./icons/Mail"
import { mobileNavOpen, VerticalNavBar } from "./VerticalNavBar"


export function Navigation() {
  if (window.innerWidth < 500) return <MobileNavigation />
  return <DesktopNavigation />
}

function MobileNavigation() {
  const { state } = useFileRouter()
  const transition = useViewTransition()

  const handleNavigate = (route: string) => () => {
    transition(() => {
      state.path = route
    })
  }

  function _handleBurgerClick() {
    transition(() => {
      mobileNavOpen.value = !mobileNavOpen.value
    })
  }

  return (
    <nav className="flex justify-between items-center">
      <Link style={"view-transition-name: nav"} to="/" onclick={handleNavigate("/")}><Avatar /></Link>

      <div>
        <div onclick={_handleBurgerClick} style={"view-transition-name: mobile-nav"}><HamburgerIcon /></div>
        <VerticalNavBar />
      </div>
    </nav>

  )
}


function DesktopNavigation() {
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


function HamburgerIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNameName="lucide lucide-hamburger-icon lucide-hamburger"><path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" /><path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" /><path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" /><path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" /></svg>
}

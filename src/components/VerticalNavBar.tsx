import { Signal, useViewTransition, } from "kiru";
import { Link, useFileRouter } from "kiru/router";

export const mobileNavOpen = new Signal(false)

export function VerticalNavBar() {
  const { state } = useFileRouter()
  const transition = useViewTransition()

  const handleNavigate = (route: string) => () => {
    mobileNavOpen.value = false
    state.path = route
  }

  function _handleBackdropClick(e: Kiru.MouseEvent<HTMLDivElement>) {
    if (!e.target) return
    transition(() => {
      mobileNavOpen.value = false
    })
  }

  return (
    <div >
      {/* bg blur */}
      <div
        onclick={_handleBackdropClick}
        className={"absolute w-full h-full top-0 left-0 bg-[#0002] z-2 backdrop-filter backdrop-blur-[2px]"} style={`
            view-transition-name: mobile-nav-blur;
            display: ${mobileNavOpen.value ? 'block' : 'none'}
        `} />

      {/* actual bar */}
      <div className={"relative z-3 "}>
        <ul
          className={"absolute top-[-40px] gap-4 flex flex-col mr-4 border border-white rounded-full p-2 bg-[#fffc]"}
          style={`
            view-transition-name: mobile-nav-v;
            right: ${mobileNavOpen.value ? '-20px' : '-200px'}
          `}>
          <li>
            <Link style={"view-transition-name: home"} to="/" onclick={handleNavigate("/")}>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link style={"view-transition-name: experience"} to="/experience" onclick={handleNavigate("/experience")}>
              <ExperienceIcon />
            </Link>
          </li>
          <li>
            <Link style={"view-transition-name: now"} to="/now" onclick={handleNavigate("/now")}>
              <NowIcon />
            </Link>
          </li>
          <li>
            <Link style={"view-transition-name: thangs"} to="/thangs" onclick={handleNavigate("/thangs")}>
              <ThangsIcon />
            </Link>
          </li>
        </ul>
      </div >
    </div>
  )
}


function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-birdhouse-icon lucide-birdhouse"
    >
      <path d="M12 18v4" />
      <path d="m17 18 1.956-11.468" />
      <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
      <path d="M4 18h16" />
      <path d="M7 18 5.044 6.532" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  )
}
function ExperienceIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-business-icon lucide-briefcase-business"><path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
}
function NowIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
}
function ThangsIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-package-open-icon lucide-package-open"><path d="M12 22v-9" /><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" /><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" /><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" /></svg>
}

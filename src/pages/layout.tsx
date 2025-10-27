import { Link, useFileRouter } from "kiru/router"
import { Mail } from "../components/icons/Mail"
import { useSignal, useViewTransition } from "kiru"
import { Avatar } from "../components/Avatar"

export default function RootLayout({ children }: { children: JSX.Children }) {
  const { state } = useFileRouter()
  const transition = useViewTransition()
  const activeLink = useSignal(window.location.pathname)
  const activeStyle = "border-b-1 border-yellow-500"

  const handleNavigate = (route: string) => () => {
    transition(() => activeLink.value = route)
  }


  return (
    <div className="max-w-[500px] mx-auto mt-10 flex flex-col gap-4 px-2">
      <nav className="flex justify-between items-center">
        <Link style={"view-transition-name: nav"} to="/" onclick={handleNavigate("/")}><Avatar /></Link>
        <div className="flex gap-3 [&>*]:hover:text-yellow-500">
          <Link style={"view-transition-name: home"} to="/" onclick={handleNavigate("/")} className={activeLink.value == "/" ? activeStyle : ''}> Home</Link>
          <Link style={"view-transition-name: experience"} to="/experience" onclick={handleNavigate("/experience")} className={activeLink.value == "/experience" ? activeStyle : ''}> Experience</Link>
          <Link style={"view-transition-name: now"} to="/now" onclick={handleNavigate("/now")} className={activeLink.value == "/now" ? activeStyle : ''}> Now</Link>
        </div>
        <a href="#" onclick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          let a = document.createElement('a')
          a.href = "mailto:triston95strong@gmail.com?subject=Reaching Out&body=Hey Triston, ...Put message here..."
          a.click()
        }}><Mail /></a>
      </nav>

      {children}
      {/*
      <Router transition>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/now" element={<Now />} />
        <Route path="/blog" element={<Blogs />} fallthrough />
        <Route path="/project" element={<Projects />} fallthrough />
        <Route path="*" element={<h1>Oopsie! That page doesnt exist</h1>} />
      </Router>

    */}

      <footer className="text-center flex flex-col" style={"view-transition-name: foot"}>
        <hr className="opacity-50" />
        <small className="opacity-50">© 2026 Triston Armstrong - All Rights Reserved.</small>
        <small className="opacity-50">Made with ❤️ & 🍵</small>
      </footer>
    </div>
  )
}

import { Link, Route, Router, useSignal } from "kaioken"
import { Avatar } from "./components/Avatar"
import { Mail } from "./components/icons/Mail"
import Home from './pages/home'
import Now from "./pages/now"
import Experience from "./pages/experience"

export function App() {
  const activeLink = useSignal(window.location.pathname)
  const activeStyle = "border-b-1 border-yellow-500"

  return (
    <div className="max-w-[500px] mx-auto mt-10 flex flex-col gap-4">
      <nav className="flex justify-between items-center">
        <Link to="/"><Avatar /></Link>
        <div className="flex gap-3 [&>*]:hover:text-yellow-500">
          <Link to="/" onclick={() => activeLink.value = "/"} className={activeLink.value == "/" ? activeStyle : ''}> Home</Link>
          <Link to="/experience" onclick={() => activeLink.value = "/experience"} className={activeLink.value == "/experience" ? activeStyle : ''}> Experience</Link>
          <Link to="/now" onclick={() => activeLink.value = "/now"} className={activeLink.value == "/now" ? activeStyle : ''}> Now</Link>
        </div>
        <a href="#" onclick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          let a = document.createElement('a')
          a.href = "mailto:triston95strong@gmail.com?subject=Reaching Out&body=Hey Triston, ...Put message here..."
          a.click()
        }}><Mail /></a>
      </nav>

      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Now />} />
        <Route path="/now" element={<Experience />} />
      </Router>

      <footer className="text-center">
        <hr className="opacity-50" />
        <small className="opacity-50">All rights reserved Triston</small>
      </footer>
    </div>
  )
}


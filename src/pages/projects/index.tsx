import { Route, Router } from "kiru/router"

export function Projects() {
  return (
    <Router basePath="/" transition>
      <Route path="/web-window-manager" element={<div>web window manager</div>} />
      <Route path="/homeschool-calendar" element={<div>homeschool calendar</div>} />
      <Route path="/zlorb" element={<div>zlorb</div>} />
      <Route path="/ferro" element={<div>ferro</div>} />
      <Route path="/rage" element={<div>rage</div>} />
    </Router>
  )
}





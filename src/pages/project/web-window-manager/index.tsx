import { Link } from "kiru/router";

export default function Page() {
  return (
    <article>
      <header>
        <nav className={"mb-4"}>
          <Link to="/now">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:text-yellow-500 hover:scale-80 transition"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" /></svg>
          </Link>
        </nav>
        <h1 style={`view-transition-name: link-h-webwindowmanager`} className={"text-2xl font-bold"}>Web Window Manager</h1>
      </header>
      <code>unimplimented!()</code>
      <p>in the meantime heres the link to the repo:</p>
      <a target={"_blank"} className={"text-yellow-500"} href="https://github.com/tristonarmstrong/web-window-manager">HomeSchool Calendar</a>
    </article>
  )
}

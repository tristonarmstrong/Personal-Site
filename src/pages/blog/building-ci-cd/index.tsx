import { Link } from "kiru/router";
import { Avatar } from "../../../components/Avatar";

export default function BuildingCiCd() {
  return (
    <article className="text-sm mt-10 flex flex-col gap-6 [&_p]:text-justify">
      <header>
        <nav className={"mb-4"}>
          <Avatar />
          <Link to="/now">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="hover:text-yellow-500 hover:scale-80 transition"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" /></svg>
          </Link>
        </nav>
        <h1 style={`view-transition-name: link-h-buildingcicd`} className={"text-2xl font-bold"}>Building Zlorb: A Lightweight CI Daemon in Rust</h1>
      </header>
      <main style={`view-transition-name: buildingcicd-main`}>
        <p>
          Hey folks, I recently wrapped up a fun side project called <strong>zlorbrs</strong>—a simple, systemd-managed continuous integration tool designed for Git-based projects. Inspired by the need for a no-fuss way to monitor repos and auto-trigger builds, it focuses on efficiency without the bloat of enterprise CI systems. Here's a quick recap of what I accomplished, key architectural choices, and the tradeoffs involved.
        </p>

        <h3 className={"text-lg my-2 text-yellow-600"}>What We Accomplished</h3>
        <p>In just a few hours, I built a fully functional daemon that</p>
        <ul className={"[&>*]:ml-4 [&>*]:mb-1"}>
          <li> - Monitors multiple Git repositories for changes using the <a href="https://docs.rs/git2/latest/git2/" target={"_blank"}><code>git2</code></a> crate .</li>
          <li> - Performs safe fast-forward merges and triggers Bun builds when updates are detected or artifacts (like the <code>dist/</code> folder) are missing.</li>
          <li> - Includes a CLI (<code>zlorbrs-ctl</code>) for adding, listing, and removing repos without restarting the service.</li>
          <li> - Integrates seamlessly with systemd for reliable, auto-restarting operation.</li>
        </ul>
        <p>The end result? A tool that keeps your projects built and up-to-date with minimal overhead—<i>perfect for personal or small-team workflows.</i></p>

        <h3 className={"text-lg my-2 text-yellow-600"}>Architectural Decisions</h3>
        <p>I chose Rust for its memory safety and performance, structuring the project as a Cargo workspace with three crates: <code>zlorbrs-service</code> (<i>the core daemon with an infinite monitoring loop</i>), <code>zlorbrs-ctl</code> (<i>Clap-powered CLI</i>), and <code>zlorbrs-lib</code> (<i>shared utils for config handling</i>). Configs are stored as JSON files in <code>~/.config/zlorbrs/</code>, making setup intuitive and avoiding databases. Deployment uses a <code>justfile</code> for building/installing binaries and systemd units, ensuring easy Linux integration. Polling (<i>with configurable sleep intervals</i>) was picked over webhooks for simplicity—no need for external servers or auth setups.</p>
        <blockquote>Thats the answer the nerds will likely want to hear. In reality, i just like rust and like how easy it is to build and deploy with it.</blockquote>

        <h3 className={"text-lg my-2 text-yellow-600"}>TradeOffs</h3>
        <p>Going lightweight meant sacrificing advanced features like complex pipelines or parallel builds, which keeps it fast but limits scalability for large teams. Polling is reliable and easy to implement but less efficient than event-driven systems, potentially wasting CPU on idle checks. Tying builds to Bun targets JS/TS devs but excludes other ecosystems— <i>a deliberate choice for focus over generality</i>.</p>

        <br />

        <p>Overall, it's a win for quick setups, though it might need extensions for production heavylifting.</p>
      </main>

      <footer>
        Excited to iterate on this—feedback welcome! Check out the repo for more details. 🚀
      </footer>

    </article>
  )
}


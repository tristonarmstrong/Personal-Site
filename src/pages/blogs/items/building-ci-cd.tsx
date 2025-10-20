import { Link } from "kiru/router";

export function BuildingCiCd() {

  return (
    <article className="text-sm mt-10 flex flex-col gap-6">
      <header>
        <nav>
          <Link to="/now">{"< BACK"}</Link>
        </nav>
        <h1 style={`view-transition-name: link-h-buildingcicd`} className={"text-2xl font-bold"}>Building zlorbrs: A Lightweight CI Daemon in Rust</h1>
      </header>
      <main style={`view-transition-name: buildingcicd-main`}>
        <p>
          Hey folks, I recently wrapped up a fun side project called **zlorbrs**—a simple, systemd-managed continuous integration tool designed for Git-based projects. Inspired by the need for a no-fuss way to monitor repos and auto-trigger builds, it focuses on efficiency without the bloat of enterprise CI systems. Here's a quick recap of what I accomplished, key architectural choices, and the tradeoffs involved.
        </p>

        <h3>What We Accomplished</h3>
        <p>In just a few hours, I built a fully functional daemon that</p>
        <ul>
          <li>Monitors multiple Git repositories for changes using the `git2` crate.</li>
          <li>Performs safe fast-forward merges and triggers Bun builds when updates are detected or artifacts (like the `dist/` folder) are missing.</li>
          <li>Includes a CLI (`zlorbrs-ctl`) for adding, listing, and removing repos without restarting the service.</li>
          <li>Integrates seamlessly with systemd for reliable, auto-restarting operation.</li>
        </ul>

        <p>The end result? A tool that keeps your projects built and up-to-date with minimal overhead—perfect for personal or small-team workflows.</p>
        <h3>Architectural Decisions</h3>
        <p>I chose Rust for its memory safety and performance, structuring the project as a Cargo workspace with three crates: `zlorbrs-service` (the core daemon with an infinite monitoring loop), `zlorbrs-ctl` (Clap-powered CLI), and `zlorbrs-lib` (shared utils for config handling). Configs are stored as JSON files in `~/.config/zlorbrs/`, making setup intuitive and avoiding databases. Deployment uses a `justfile` for building/installing binaries and systemd units, ensuring easy Linux integration. Polling (with configurable sleep intervals) was picked over webhooks for simplicity—no need for external servers or auth setups.</p>
        <h3>TradeOffs</h3>
        <p>Going lightweight meant sacrificing advanced features like complex pipelines or parallel builds, which keeps it fast but limits scalability for large teams. Polling is reliable and easy to implement but less efficient than event-driven systems, potentially wasting CPU on idle checks. Tying builds to Bun targets JS/TS devs but excludes other ecosystems— a deliberate choice for focus over generality. Overall, it's a win for quick setups, though it might need extensions for production heavylifting.</p>
      </main>

      <footer>
        Excited to iterate on this—feedback welcome! Check out the repo for more details. 🚀
      </footer>

    </article>
  )
}

// 

// 

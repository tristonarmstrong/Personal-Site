// Generates 1200x630 OG cards for blog posts in the letter theme.
// Usage: bun scripts/og-cards.mjs
// Reads content/posts/*.mdx frontmatter, renders a themed HTML card per post,
// screenshots it with headless Chromium, writes public/og/<slug>.png.
import { writeFileSync, readFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = join(ROOT, "scripts", "og-assets");
const OG_DIR = join(ROOT, "public", "og");
const TMP = join(process.env.HOME || "/home/hatch", "workspace", ".og-tmp");
const CHROME = "/opt/meta-chromium/chrome";

mkdirSync(ASSETS, { recursive: true });
mkdirSync(OG_DIR, { recursive: true });
mkdirSync(TMP, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// ---- fonts: download latin woff2 for Tenor Sans + Caveat 600, cache locally ----
async function ensureFonts() {
	const tenorPath = join(ASSETS, "tenor-sans.woff2");
	const caveatPath = join(ASSETS, "caveat-600.woff2");
	if (existsSync(tenorPath) && existsSync(caveatPath)) {
		return {
			tenor: readFileSync(tenorPath).toString("base64"),
			caveat: readFileSync(caveatPath).toString("base64"),
		};
	}
	const css = await (
		await fetch("https://fonts.googleapis.com/css2?family=Tenor+Sans&family=Caveat:wght@600&display=swap", {
			headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36" },
		})
	).text();
	// grab the latin block per family: split on "/* latin */", take the last block mentioning the family
	function latinUrl(family) {
		const blocks = css.split("/* latin */").slice(1);
		for (let i = blocks.length - 1; i >= 0; i--) {
			const b = blocks[i];
			if (b.includes(family)) {
				const m = b.match(/url\((https:[^)]+\.woff2)\)/);
				if (m) return m[1];
			}
		}
		throw new Error("no latin woff2 for " + family);
	}
	for (const [name, path] of [["Tenor Sans", tenorPath], ["Caveat", caveatPath]]) {
		const url = latinUrl(name);
		const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
		writeFileSync(path, buf);
		console.log("cached font", name, buf.length, "bytes");
	}
	return {
		tenor: readFileSync(tenorPath).toString("base64"),
		caveat: readFileSync(caveatPath).toString("base64"),
	};
}

// ---- card html ----
function cardHtml(title, dateStr, fonts) {
	return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Tenor Sans';src:url(data:font/woff2;base64,${fonts.tenor}) format('woff2');}
@font-face{font-family:'Caveat';font-weight:600;src:url(data:font/woff2;base64,${fonts.caveat}) format('woff2');}
*{margin:0;padding:0;box-sizing:border-box;}
body{width:1200px;height:630px;
background:
radial-gradient(circle at 18% 22%, rgba(161,63,4,.045), transparent 42%),
radial-gradient(circle at 85% 78%, rgba(35,34,31,.05), transparent 44%),
#f1e7da;
display:flex;}
.card{flex:1;margin:34px;background:#fffdf9;border:1px solid #e3d6c1;border-radius:6px;
box-shadow:0 18px 50px rgba(35,34,31,.14);padding:64px 84px;display:flex;flex-direction:column;}
.eyebrow{font-family:'Caveat',cursive;font-weight:600;font-size:46px;color:#a13f04;line-height:1;}
.eyebrow svg{display:block;margin-top:2px;}
.titlewrap{flex:1;min-height:0;display:flex;align-items:center;overflow:hidden;padding:18px 0;}
#title{font-family:'Tenor Sans',Georgia,serif;color:#23221f;line-height:1.18;text-wrap:balance;}
.footer{display:flex;align-items:baseline;justify-content:space-between;border-top:2px solid #e3d6c1;padding-top:22px;}
.date{font-family:'Caveat',cursive;font-weight:600;font-size:38px;color:#6f6555;}
.byline{font-family:'Caveat',cursive;font-weight:600;font-size:38px;color:#23221f;}
</style></head><body><div class="card">
<div class="eyebrow">tristonarmstrong.com
<svg width="300" height="14" viewBox="0 0 300 14" fill="none"><path d="M4 9 C 60 3, 120 12, 180 7 S 270 5, 296 8" stroke="#a13f04" stroke-width="4" stroke-linecap="round" opacity="0.75"/></svg>
</div>
<div class="titlewrap"><h1 id="title">${esc(title)}</h1></div>
<div class="footer"><span class="date">${esc(dateStr)}</span><span class="byline">Triston Armstrong</span></div>
</div>
<script>
(async () => {
  await document.fonts.ready;
  const t = document.getElementById('title');
  const wrap = document.querySelector('.titlewrap');
  const avail = wrap.clientHeight;
  let s = 102;
  t.style.fontSize = s + 'px';
  while (t.offsetHeight > avail && s > 36) { s -= 4; t.style.fontSize = s + 'px'; }
  document.title = 'ready';
})();
</script>
</body></html>`;
}

// ---- posts ----
function slugify(title) {
	return title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function readPosts() {
	const dir = join(ROOT, "content", "posts");
	return readdirSync(dir)
		.filter((f) => f.endsWith(".mdx"))
		.map((f) => {
			const raw = readFileSync(join(dir, f), "utf8");
			const fm = raw.match(/^---\n([\s\S]*?)\n---/)[1];
			const title = fm.match(/^title:\s*["']?(.*?)["']?\s*$/m)[1];
			const date = fm.match(/^date:\s*(.+?)\s*$/m)[1];
			const dateStr = new Date(date + "T00:00:00Z").toLocaleDateString("en-US", {
				timeZone: "UTC", month: "long", day: "numeric", year: "numeric",
			});
			return { title, dateStr, slug: slugify(title) };
		});
}

// ---- chrome ----
async function launchChrome() {
	const profile = join(TMP, `chrome-profile-${Date.now()}`);
	mkdirSync(profile, { recursive: true });
	const proc = spawn(CHROME, [
		"--headless=new", "--disable-gpu", "--no-sandbox",
		"--hide-scrollbars", "--force-device-scale-factor=1",
		`--user-data-dir=${profile}`,
		"--remote-debugging-port=0",
		"about:blank",
	], { stdio: ["ignore", "ignore", "ignore"] });
	// Chrome writes its chosen port to the DevToolsActivePort file
	let port = null;
	for (let i = 0; i < 40; i++) {
		await sleep(250);
		try {
			const raw = readFileSync(join(profile, "DevToolsActivePort"), "utf8").trim().split("\n")[0];
			if (/^\d+$/.test(raw)) { port = parseInt(raw, 10); break; }
		} catch { /* not written yet */ }
		if (proc.exitCode !== null) throw new Error("chrome exited early, code " + proc.exitCode);
	}
	if (!port) throw new Error("chrome devtools timeout");
	return { proc, port };
}

async function main() {
	const fonts = await ensureFonts();
	const posts = readPosts();
	console.log(posts.length, "posts");

	const { proc, port } = await launchChrome();
	// attach to the page target (not the browser target)
	const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
	const pageTarget = targets.find((t) => t.type === "page") || targets[0];
	const wsUrl = pageTarget.webSocketDebuggerUrl;
	const ws = new WebSocket(wsUrl, { maxPayload: 64 * 1024 * 1024 });
	let id = 0;
	const pending = new Map();
	ws.onmessage = (ev) => {
		const m = JSON.parse(String(ev.data));
		if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
	};
	await new Promise((r) => (ws.onopen = r));
	const send = (method, params = {}) =>
		new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
	const evalJs = async (expr) =>
		(await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result.result.value;

	await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });

	for (const p of posts) {
		const htmlPath = join(TMP, `card-${p.slug}.html`);
		writeFileSync(htmlPath, cardHtml(p.title, p.dateStr, fonts));
		await send("Page.navigate", { url: "file://" + htmlPath });
		// wait for the fit script to signal readiness
		for (let i = 0; i < 40; i++) {
			await sleep(250);
			const t = await evalJs("document.title");
			if (t === "ready") break;
		}
		const shot = await send("Page.captureScreenshot", { format: "png" });
		const out = join(OG_DIR, `${p.slug}.png`);
		writeFileSync(out, Buffer.from(shot.result.data, "base64"));
		console.log("wrote", out);
	}
	ws.close();
	proc.kill();
	console.log("done");
	process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });

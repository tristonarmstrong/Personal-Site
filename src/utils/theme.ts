export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

function storedTheme(): Theme | null {
	try {
		const t = localStorage.getItem(STORAGE_KEY);
		return t === "dark" || t === "light" ? t : null;
	} catch {
		return null;
	}
}

function applyTheme(theme: Theme) {
	if (typeof document === "undefined") return;
	document.documentElement.classList.toggle("dark", theme === "dark");
}

export function getTheme(): Theme {
	if (typeof document === "undefined") return "light";
	return document.documentElement.classList.contains("dark")
		? "dark"
		: "light";
}

export function setTheme(theme: Theme) {
	applyTheme(theme);
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// storage unavailable (private mode etc.) — theme just won't persist
	}
}

/** Follow the OS theme live until the user picks one manually. */
export function watchSystemTheme() {
	if (
		typeof window === "undefined" ||
		typeof window.matchMedia !== "function"
	)
		return;
	const mq = window.matchMedia(MEDIA_QUERY);
	const onChange = () => {
		// A stored manual choice always wins over the OS.
		if (storedTheme() === null) {
			applyTheme(mq.matches ? "dark" : "light");
		}
	};
	if (typeof mq.addEventListener === "function") {
		mq.addEventListener("change", onChange);
	}
}

export function toggleTheme() {
	setTheme(getTheme() === "dark" ? "light" : "dark");
}

// Inline <head>-style init script, rendered as the first node of the layout
// so the theme class is set before first paint. Stored choice wins;
// otherwise the OS preference is used.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

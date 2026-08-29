export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getTheme(): Theme {
	if (typeof document === "undefined") return "light";
	return document.documentElement.classList.contains("dark")
		? "dark"
		: "light";
}

export function setTheme(theme: Theme) {
	if (typeof document === "undefined") return;
	document.documentElement.classList.toggle("dark", theme === "dark");
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// storage unavailable (private mode etc.) — theme just won't persist
	}
}

export function toggleTheme() {
	setTheme(getTheme() === "dark" ? "light" : "dark");
}

// Inline <head>-style init script, rendered as the first node of the layout
// so the theme class is set before first paint. Stored choice wins;
// otherwise the OS preference is used.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

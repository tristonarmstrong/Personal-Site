import { useRequestUpdate } from "kiru";
import { toggleTheme } from "../utils/theme";

export function ThemeToggle() {
	const requestUpdate = useRequestUpdate();

	return (
		<button
			type="button"
			onclick={() => {
				toggleTheme();
				requestUpdate();
			}}
			aria-label="Toggle color theme"
			title="Toggle color theme"
			className="p-2 rounded-full text-ink-soft hover:text-accent hover:rotate-12 transition-all duration-200"
		>
			{/* Icon swap is plain CSS so it's correct even before hydration */}
			<span className="theme-icon-moon block">
				<MoonIcon />
			</span>
			<span className="theme-icon-sun hidden">
				<SunIcon />
			</span>
		</button>
	);
}

function MoonIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M20.5 13.2A8.2 8.2 0 1 1 10.8 3.5a6.6 6.6 0 0 0 9.7 9.7Z" />
		</svg>
	);
}

function SunIcon() {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<circle cx="12" cy="12" r="4.2" />
			<path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7" />
		</svg>
	);
}

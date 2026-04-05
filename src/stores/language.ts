import { signal } from "kiru";

export type Language = "en" | "th";

export const currentLanguage = signal<Language>("en");

export function setLanguage(lang: Language) {
	currentLanguage.value = lang;
	if (typeof window !== "undefined") {
		localStorage.setItem("language", lang);
	}
}

export function initLanguage() {
	if (typeof window !== "undefined") {
		const saved = localStorage.getItem("language") as Language | null;
		if (saved && (saved === "en" || saved === "th")) {
			currentLanguage.value = saved;
		}
	}
}

export function toggleLanguage() {
	currentLanguage.value = currentLanguage.value === "en" ? "th" : "en";
	setLanguage(currentLanguage.value);
}

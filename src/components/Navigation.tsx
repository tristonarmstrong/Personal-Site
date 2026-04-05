import { Link, useFileRouter } from "kiru/router";
import { t } from "../i18n/translations";
import { currentLanguage, toggleLanguage } from "../stores/language";
import { AutoHiddenAvatar } from "./AutoHiddenAvatar";

export function Navigation() {
	const { state } = useFileRouter();

	return () => (
		<nav className="flex justify-between items-center">
			<AutoHiddenAvatar />
			<div className="flex gap-3 [&>*]:hover:text-yellow-500 sm:[&>*]:text-lg [&>*]:text-sm items-center">
				<Link style={"view-transition-name: home"} to="/" transition>
					{t("nav.home")}
					{state.pathname.value === "/" && (
						<div
							style={"view-transition-name: navborder"}
							className={"border-b border-yellow-500"}
						/>
					)}
				</Link>
				<Link
					style={"view-transition-name: experience"}
					to="/experience"
					transition
				>
					{t("nav.experience")}
					{state.pathname.value === "/experience" && (
						<div
							style={"view-transition-name: navborder"}
							className={"border-b border-yellow-500"}
						/>
					)}
				</Link>
				<Link style={"view-transition-name: now"} to="/now" transition>
					{t("nav.now")}
					{state.pathname.value === "/now" && (
						<div
							style={"view-transition-name: navborder"}
							className={"border-b border-yellow-500"}
						/>
					)}
				</Link>
				<Link style={"view-transition-name: thangs"} to="/thangs" transition>
					{t("nav.thangs")}
					{state.pathname.value === "/thangs" && (
						<div
							style={"view-transition-name: navborder"}
							className={"border-b border-yellow-500"}
						/>
					)}
				</Link>
				<button
					type="button"
					onclick={toggleLanguage}
					className="ml-2 px-2 py-1 text-xs border border-yellow-500/30 rounded hover:bg-yellow-500/10 transition-colors"
					title="Toggle Language"
				>
					{currentLanguage.value === "en" ? "EN" : "TH"}
				</button>
			</div>
		</nav>
	);
}

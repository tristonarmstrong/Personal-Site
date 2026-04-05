import { signal } from "kiru";
import { generateSEODescription, SEO } from "../components/SEO";
import { t } from "../i18n/translations";

const yearsExperience = signal(5);

if (typeof window !== "undefined") {
	yearsExperience.value = Math.abs(new Date().getFullYear() - 2020);
}

export default function Home() {
	return () => (
		<main
			className="text-sm mt-10 flex flex-col gap-4"
			style={"view-transition-name: homepage"}
		>
			<SEO description={generateSEODescription("home")} />
			<section>
				<h1 className="text-lg text-yellow-500">{t("home.title")}</h1>
				<p className="text-sm text-gray-400 italic">{t("home.role")}</p>
			</section>

			<section className="flex flex-col gap-4">
				<p>
					{t("home.description.part1")}{" "}
					<span
						className={"yearthing"}
						title={"I started programming professionally in year 2020"}
					>
						{yearsExperience.value} years
					</span>{" "}
					{t("home.description.part2")}{" "}
					<a
						className="text-yellow-500 underline"
						href={"https://automatetheboringstuff.com/"}
						target="_blank"
						rel="noopener"
					>
						{t("home.description.link")}
					</a>{" "}
					{t("home.description.part3")}
				</p>
			</section>

			<section className="flex flex-col gap-4 bg-[#fff2] rounded-lg p-2 opacity-50 border border-dashed border-[#fff3]">
				<small style={"color: var(--color-gray-400);"}>
					{t("home.livingSite")}
				</small>
			</section>
		</main>
	);
}

import { generateSEODescription, SEO } from "../../components/SEO";
import { t } from "../../i18n/translations";

export default function Experience() {
	return () => (
		<main
			className="text-sm mt-10 flex flex-col gap-4"
			style={"view-transition-name: homepage"}
		>
			<SEO
				title={t("experience.title")}
				description={generateSEODescription("experience")}
				url="/experience"
			/>
			<p>{t("experience.description")}</p>
			<ul>
				<Work
					href=""
					comp={t("experience.yourCompany")}
					time={t("experience.immediately")}
					focus
				/>
				<Work
					href="https://ventrahealth.com/"
					comp="Ventra Health"
					time="2023 - 2025"
				/>
				<Work
					href="https://www.randstadusa.com/"
					comp="Randstad Technologies"
					time="2021 - 2023"
				/>
				<Work
					href="https://damianoglobal.com/"
					comp="Damiano Global Corp."
					time="2021"
				/>
				<Work href="" comp="Makers Ladder LLC" time="2020" />
			</ul>
			<div>
				<h2 className={"font-bold text-gray-400"}>
					{t("experience.freelance.title")}
				</h2>
				<p className={"text-gray-400"}>
					{t("experience.freelance.description")}
				</p>
			</div>
			<ul>
				<Work
					href="https://www.upwork.com/freelancers/~018467e8cbe2f71382"
					comp="Upwork"
					time="$40,000+"
				/>
			</ul>
		</main>
	);
}

function Work({
	comp,
	time,
	href,
	focus = false,
}: {
	comp: string;
	time: string;
	href: string;
	focus?: boolean;
}) {
	const unmutedLink = "text-gray-700",
		mutedLink = "text-gray-400";
	const isMutedLink = href ? unmutedLink : mutedLink;
	const isFocused = focus ? "animate-pulse" : "";

	return (
		<a
			href={href}
			target={href ? "_blank" : undefined}
			rel={href ? "noopener" : undefined}
			className={`${isMutedLink} ${isFocused}`}
		>
			<li className={"flex w-full items-center gap-1"}>
				<span className={""}>{comp}</span>
				<span
					className={"h-full border border-dashed flex-1 border-gray-400"}
				></span>
				<span className={"text-sm italic"}>{time}</span>
			</li>
		</a>
	);
}

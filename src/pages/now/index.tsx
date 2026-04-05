import { allPosts, allProjects } from "content-collections";
import { Link } from "kiru/router";
import { generateSEODescription, SEO } from "../../components/SEO";
import { t } from "../../i18n/translations";
import { currentLanguage } from "../../stores/language";
import {
	getLocalizedPostsForListing,
	type LocalizedPost,
} from "../../utils/localizedContent";

export default function Now() {
	const allWebProjects = allProjects.filter((x) => x.type === "Web");
	const allToolProjects = allProjects.filter((x) => x.type === "Tool");

	return () => {
		// Get posts strictly filtered by current language (no fallback)
		const allPostsRearranged = getLocalizedPostsForListing(
			allPosts as LocalizedPost[],
			currentLanguage.value,
		);

		return (
			<main className="text-sm mt-10 flex flex-col gap-6">
				<SEO
					title={t("nav.now")}
					description={generateSEODescription("now")}
					url="/now"
				/>
				<h1 className={"text-2xl"}>{t("now.title")}</h1>
				<p>{t("now.description")}</p>
				<div>
					<div className={"mb-2"}>
						<h2 className={"text-xl text-yellow-500"}>
							{t("now.projects.title")}
						</h2>
						<p>{t("now.projects.description")}</p>
					</div>
					<span className={"font-bold text-gray-400"}>
						{t("now.projects.web")}
					</span>
					<div className={"mx-4"}>
						{allWebProjects.map((x) => (
							<Item
								label={x.title}
								href={`/project/${x.slug}`}
								transitionId={x.slug}
							/>
						))}
					</div>

					<span className={"font-bold text-gray-400"}>
						{t("now.projects.tool")}
					</span>
					<div className={"mx-4"}>
						{allToolProjects.map((x) => (
							<Item
								label={x.title}
								href={`/project/${x.slug}`}
								transitionId={x.slug}
							/>
						))}
					</div>
				</div>

				<div>
					<div className={"mb-2"}>
						<h2 className={"text-xl text-yellow-500"}>{t("now.oss.title")}</h2>
						<p>{t("now.oss.description")}</p>
					</div>
					<div className={"flex flex-col gap-1"}>
						<span className={"font-bold text-gray-400"}>
							{t("now.oss.successful")}
						</span>
						<div className={"mx-4"}>
							<Item
								label="BinCode"
								href="https://github.com/asadbek064/bincode/pull/1"
							/>
							<Item
								label="Dissent"
								href="https://github.com/diamondburned/dissent/pull/371"
							/>
							<Item label="Kiru" href="https://github.com/kirujs/kiru" />
							<Item
								label="ChaiLauncher (Window Control)"
								href="https://github.com/Chai-Foundation/ChaiLauncher/pull/13"
							/>
							<Item
								label="ChaiLauncher (Mod Loader)"
								href="https://github.com/Chai-Foundation/ChaiLauncher/pull/18"
							/>
							<Item
								label="Chai-MCVM"
								href="https://github.com/tristanpoland/Chai-MCVM/pull/1"
							/>
						</div>
						<span className={"font-bold text-gray-400"}>
							{t("now.oss.unsuccessful")}
						</span>
						<div className={"mx-4"}>
							<Item
								label="Omarchy (Flatpak Support)"
								href="https://github.com/basecamp/omarchy/issues/1881"
							/>
							<Item
								label="Omarchy (Auto Fetch Icons)"
								href="https://github.com/basecamp/omarchy/pull/1905"
							/>
							<Item
								label="Typescript"
								href="https://github.com/microsoft/TypeScript/pull/60269"
							/>
							<Item label="NX" href="https://github.com/nrwl/nx/pull/31846" />
						</div>
					</div>
				</div>

				<div>
					<div className={"mb-2"}>
						<h2 className={"text-xl text-yellow-500"}>
							{t("now.blogs.title")}
						</h2>
						<p>{t("now.blogs.description")}</p>
					</div>
					<ul className={"mx-4"}>
						{allPostsRearranged.map((x) => (
							<Item
								label={x.title}
								href={`/blog/${x.slug}`}
								transitionId={`${x.slug}`}
							/>
						))}
					</ul>
				</div>
			</main>
		);
	};
}

function Item({
	label,
	href,
	transitionId,
}: {
	label: string;
	href: string;
	transitionId?: string;
}) {
	const FALLBACK_ID = String(Math.floor(Math.random() * 10000));

	return () => {
		if (href.includes("http")) {
			return (
				<a href={href}>
					<LinkBody
						{...{ label, transitionId: transitionId ?? FALLBACK_ID }}
						external
					/>
				</a>
			);
		}

		return (
			<Link to={href} transition>
				<LinkBody {...{ label, transitionId: transitionId ?? FALLBACK_ID }} />
			</Link>
		);
	};
}

function LinkBody({
	label,
	transitionId,
	external = false,
}: {
	label: string;
	transitionId?: string;
	external?: boolean;
}) {
	const linkLabelTransitionId = `link-h-${transitionId}`;

	return () => (
		<li className={"flex w-full items-center gap-1 transition"}>
			<span
				className={"w-fit"}
				style={`view-transition-name: ${linkLabelTransitionId}`}
			>
				{label}
			</span>
			<span
				className={"h-full border border-dashed flex-1 border-gray-400"}
			></span>
			<span className={"text-sm italic"}>
				{external ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className=""
					>
						<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
						<path d="m21 3-9 9" />
						<path d="M15 3h6v6" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className=""
					>
						<path d="M3 5v14" />
						<path d="M21 12H7" />
						<path d="m15 18 6-6-6-6" />
					</svg>
				)}
			</span>
		</li>
	);
}

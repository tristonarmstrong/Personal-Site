import { allPosts, allProjects } from "content-collections";
import { Link } from "kiru/router";
import { signal } from "kiru";
import { SEO } from "../components/SEO";
import { RssIcon } from "../components/icons/Rss";
import { Avatar } from "../components/Avatar";

const yearsExperience = signal(5);

if (typeof window !== "undefined") {
	yearsExperience.value = Math.abs(new Date().getFullYear() - 2020);
}

export default function Home() {
	const allWebProjects = allProjects.filter((x) => x.type === "Web");
	const allToolProjects = allProjects.filter((x) => x.type === "Tool");
	const allPostsRearranged = allPosts.sort(
		(a, b) => b.date.getTime() - a.date.getTime(),
	);

	return () => (
		<main
			className="text-sm mt-10 flex flex-col gap-10"
			style={"view-transition-name: homepage"}
		>
			<SEO />

			{/* Bio Section - Material 3 Card with Avatar */}
			<section className="flex flex-col gap-4 p-5 rounded-2xl bg-[#141414] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
				<div className="flex items-start gap-4">
					<Avatar />
					<div>
						<h1 className="text-lg text-yellow-500">Triston Armstrong</h1>
						<p className="text-sm text-gray-400 italic">
							Senior Software Engineer
						</p>
					</div>
				</div>

				<p className="text-gray-300">
					Software Developer with {yearsExperience.value} years of experience,
					father to 3, and husband to 1 (not in that order) with a passion for
					building utility apps. I also greatly enjoy{" "}
					<a
						className="text-yellow-500 hover:underline"
						href={"https://automatetheboringstuff.com/"}
						target="_blank"
						rel="noopener"
					>
						automating the boring stuff
					</a>
					.
				</p>

				{/* Social Links */}
				<div className="flex items-center gap-4 mt-2">
					<a
						href="https://github.com/tristonarmstrong"
						target="_blank"
						rel="noopener"
						className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
						title="GitHub"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
							<path d="M9 18c-4.51 2-5-2-7-2" />
						</svg>
						<span className="text-sm">GitHub</span>
					</a>

					<a
						href="https://x.com/triston_armstr"
						target="_blank"
						rel="noopener"
						className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
						title="X (Twitter)"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
						</svg>
						<span className="text-sm">X</span>
					</a>

					<a
						href="https://www.linkedin.com/in/triston-armstrong-7248b229b"
						target="_blank"
						rel="noopener"
						className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
						title="LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect width="4" height="12" x="2" y="9" />
							<circle cx="4" cy="4" r="2" />
						</svg>
						<span className="text-sm">LinkedIn</span>
					</a>

					<a
						href="mailto:triston95strong@gmail.com"
						className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
						title="Email"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
						<span className="text-sm">Email</span>
					</a>

					<a
						href="/feed.xml"
						className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
						title="RSS Feed"
					>
						<RssIcon size={18} />
						<span className="text-sm">RSS</span>
					</a>
				</div>
			</section>

			{/* Experience Section */}
			<section className="flex flex-col gap-4">
				<h2 className="text-xl text-yellow-500">Experience</h2>
				<p className="text-gray-400">
					Companies I've worked at and maybe where I'm currently working if I
					can convince someone to give me money in exchange for some code.
				</p>
				<ul>
					<Work href="" comp="Your Company Here" time="Immediately" focus />
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
					<h3 className={"font-bold text-gray-400"}>Freelance Work</h3>
					<p className={"text-gray-400"}>
						My experience freelancing was cool! 10/10 would do again.
					</p>
				</div>
				<ul>
					<Work
						href="https://www.upwork.com/freelancers/~018467e8cbe2f71382"
						comp="Upwork"
						time="$40,000+"
					/>
				</ul>
			</section>

			{/* Now Section - Projects & OSS */}
			<section className="flex flex-col gap-6">
				<div>
					<h2 className={"text-xl text-yellow-500"}>What am I up to?</h2>
					<p className="text-gray-400 mt-2">
						I greatly enjoy building utility apps/tools for myself. I build
						these tools to better help me in my day to day life. All of my
						projects are very much a work-in-progress. To be honest, I dont
						think I'll ever finish them!
					</p>
				</div>

				<div>
					<div className={"mb-2"}>
						<h3 className={"text-lg text-gray-300"}>Projects</h3>
						<p className="text-gray-500">
							These are pojects that i actively work on. I have a graveyard too
						</p>
					</div>
					<span className={"font-bold text-gray-400"}>Web</span>
					<div className={"mx-4"}>
						{allWebProjects.map((x) => (
							<Item
								label={x.title}
								href={`/project/${x.slug}`}
								transitionId={x.slug}
							/>
						))}
					</div>

					<span className={"font-bold text-gray-400"}>Tool</span>
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
						<h3 className={"text-lg text-gray-300"}>OSS Contribs</h3>
						<p className="text-gray-500">
							I also enjoy contributing to open source projects when the
							opportunity presents itself! I've contributed to some, and a few
							that never made it through.
						</p>
					</div>
					<div className={"flex flex-col gap-1"}>
						<span className={"font-bold text-gray-400"}>Successful</span>
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
						<span className={"font-bold text-gray-400"}>UnSuccessful</span>
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
					<div className={"mb-2 flex items-center justify-between"}>
						<div>
							<h3 className={"text-lg text-gray-300"}>Blogs</h3>
							<p className="text-gray-500">
								Sometimes I have knowledge I find worth sharing, and thus I
								write up a little something something from time to time
							</p>
						</div>
					</div>
					<ul className={"mx-4"}>
						{allPostsRearranged.slice(0, 3).map((x) => (
							<Item
								label={x.title}
								href={`/blog/${x.slug}`}
								transitionId={`${x.slug}`}
							/>
						))}
					</ul>
					<div className="mx-4 mt-2">
						<Link
							to="/blog"
							className="text-sm text-gray-500 hover:text-yellow-500 transition"
							transition
						>
							View all posts →
						</Link>
					</div>
				</div>
			</section>

			{/* Living Site Note */}
			<section className="flex flex-col gap-4 bg-[#fff2] rounded-lg p-2 opacity-50 border border-dashed border-[#fff3]">
				<small style={"color: var(--color-gray-400);"}>
					This is a "living site". I push half-baked chunks of UI to showcase
					its development in realtime, just... cause.. i find it interesting
				</small>
			</section>
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
		<a href={href} target={"_blank"} className={`${isMutedLink} ${isFocused}`}>
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

let fallbackIdCounter = 0;

function Item({
	label,
	href,
	transitionId,
}: {
	label: string;
	href: string;
	transitionId?: string;
}) {
	const FALLBACK_ID = transitionId ?? String(++fallbackIdCounter);

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

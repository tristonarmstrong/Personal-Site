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
			className="text-sm mt-10 flex flex-col gap-8"
			style={"view-transition-name: homepage"}
		>
			<SEO />

			{/* Bio - Elevated Surface Container */}
			<section className="p-4 rounded-2xl bg-[#141414]">
				<div className="flex items-start gap-3">
					<Avatar />
					<div>
						<h1 className="text-xl font-normal text-yellow-500">
							Triston Armstrong
						</h1>
						<p className="text-sm text-gray-400">Senior Software Engineer</p>
					</div>
				</div>

				<p className="text-gray-300 mt-3">
					Software Developer with{" "}
					<span
						className="yearthing cursor-help"
						title="I started programming professionally in year 2020"
					>
						{yearsExperience.value} years
					</span>{" "}
					of experience, father to 3, and husband to 1 (not in that order) with
					a passion for building utility apps. I also greatly enjoy{" "}
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

				{/* Social Links - Minimal spacing */}
				<div className="flex items-center gap-1 mt-4">
					<SocialIcon
						href="https://github.com/tristonarmstrong"
						icon={<GithubIcon />}
						label="GitHub"
					/>
					<SocialIcon
						href="https://x.com/triston_armstr"
						icon={<XIcon />}
						label="X"
					/>
					<SocialIcon
						href="https://www.linkedin.com/in/triston-armstrong-7248b229b"
						icon={<LinkedinIcon />}
						label="LinkedIn"
					/>
					<SocialIcon
						href="mailto:triston95strong@gmail.com"
						icon={<EmailIcon />}
						label="Email"
					/>
					<SocialIcon href="/feed.xml" icon={<RssIcon />} label="RSS" />
				</div>
			</section>

			{/* Experience */}
			<section>
				<h2 className="text-xl font-medium text-yellow-500 mb-2">Experience</h2>
				<p className="text-gray-400 text-sm">
					Companies I've worked at and maybe where I'm currently working if I
					can convince someone to give me money in exchange for some code.
				</p>
				<ul className="mt-3 space-y-1">
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

				<div className="mt-4">
					<h3 className="font-medium text-gray-300">Freelance Work</h3>
					<p className="text-gray-400 text-sm mt-1">
						My experience freelancing was cool! 10/10 would do again.
					</p>
				</div>
				<ul className="mt-2">
					<Work
						href="https://www.upwork.com/freelancers/~018467e8cbe2f71382"
						comp="Upwork"
						time="$40,000+"
					/>
				</ul>
			</section>

			{/* Projects & OSS */}
			<section>
				<div className="mb-3">
					<h2 className="text-xl font-medium text-yellow-500">
						What am I up to?
					</h2>
					<p className="text-gray-400 text-sm mt-1">
						I greatly enjoy building utility apps/tools for myself.
					</p>
				</div>

				<div className="mb-3">
					<h3 className="text-sm font-medium text-gray-400 mb-1">Projects</h3>
					<p className="text-gray-500 text-xs mb-2">
						These are projects that i actively work on. I have a graveyard too
					</p>

					<h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
						Web
					</h4>
					<div className="ml-3 space-y-1">
						{allWebProjects.map((x) => (
							<Item
								label={x.title}
								href={`/project/${x.slug}`}
								transitionId={x.slug}
							/>
						))}
					</div>

					<h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1 mt-2">
						Tool
					</h4>
					<div className="ml-3 space-y-1">
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
					<h3 className="text-sm font-medium text-gray-400 mb-1">
						OSS Contribs
					</h3>
					<p className="text-gray-500 text-xs mb-2">
						I've contributed to some, and a few that never made it through.
					</p>

					<h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
						Successful
					</h4>
					<div className="ml-3 space-y-1">
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

					<h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1 mt-2">
						UnSuccessful
					</h4>
					<div className="ml-3 space-y-1">
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

				<div className="mt-4">
					<div className="flex items-baseline justify-between mb-2">
						<h3 className="text-sm font-medium text-gray-400">Blogs</h3>
						<Link
							to="/blog"
							className="text-xs text-gray-500 hover:text-yellow-500 transition"
							transition
						>
							View all →
						</Link>
					</div>
					<p className="text-gray-500 text-xs mb-2">
						Sometimes I have knowledge I find worth sharing.
					</p>
					<ul className="ml-3 space-y-1">
						{allPostsRearranged.slice(0, 3).map((x) => (
							<Item
								label={x.title}
								href={`/blog/${x.slug}`}
								transitionId={`${x.slug}`}
							/>
						))}
					</ul>
				</div>
			</section>

			{/* Living Site Note */}
			<section className="pt-4 border-t border-[#2a2a2a]">
				<p className="text-xs text-gray-500">
					This is a "living site". I push half-baked chunks of UI to showcase
					its development in realtime, just... cause.. i find it interesting
				</p>
			</section>
		</main>
	);
}

function SocialIcon({
	href,
	icon,
	label,
}: {
	href: string;
	icon: JSX.Element;
	label: string;
}) {
	return (
		<a
			href={href}
			target={href.startsWith("http") ? "_blank" : undefined}
			rel={href.startsWith("http") ? "noopener" : undefined}
			className="p-2 rounded-full text-gray-400 hover:text-yellow-500 hover:bg-[#1a1a1a] transition"
			aria-label={label}
			title={label}
		>
			{icon}
		</a>
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
	const isMutedLink = href ? "text-gray-400" : "text-gray-600";
	const isFocused = focus ? "animate-pulse" : "";

	return (
		<a
			href={href || undefined}
			target={href ? "_blank" : undefined}
			rel={href ? "noopener" : undefined}
			className={`${isMutedLink} ${isFocused} block py-0.5`}
		>
			<li className="flex w-full items-center gap-2 group">
				<span className="text-gray-300 group-hover:text-white transition-colors">
					{comp}
				</span>
				<span className="h-px flex-1 bg-[#2a2a2a]"></span>
				<span className="text-xs text-gray-500 tabular-nums group-hover:text-gray-300 transition-colors">
					{time}
				</span>
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
		<li className="flex w-full items-center gap-2 py-0.5 group cursor-pointer">
			<span
				className="w-fit text-gray-300 group-hover:text-white transition-colors"
				style={`view-transition-name: ${linkLabelTransitionId}`}
			>
				{label}
			</span>
			<span className="h-px flex-1 bg-[#2a2a2a]"></span>
			<span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
				{external ? "↗" : "→"}
			</span>
		</li>
	);
}

// Icons
function GithubIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}

function XIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}

function LinkedinIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

function EmailIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

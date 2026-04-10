import { allPosts, allProjects } from "content-collections";
import { Link } from "kiru/router";
import { signal } from "kiru";
import { SEO } from "../components/SEO";
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
			className="text-sm mt-10 flex flex-col gap-12"
			style={"view-transition-name: homepage"}
		>
			<SEO />

			{/* Bio Card - Material 3 Elevated Surface */}
			<section className="p-6 rounded-2xl bg-[#141414] shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
				<div className="flex items-start gap-4">
					<Avatar />
					<div className="flex-1">
						<h1 className="text-2xl font-normal text-gray-100">
							Triston Armstrong
						</h1>
						<p className="text-base text-gray-400 mt-1">
							Senior Software Engineer
						</p>
					</div>
				</div>

				<p className="text-gray-300 mt-4 leading-relaxed">
					Software Developer with{" "}
					<span
						className="text-yellow-500 cursor-help"
						title="I started programming professionally in year 2020"
					>
						{yearsExperience.value} years
					</span>{" "}
					of experience, father to 3, and husband to 1 (not in that order) with
					a passion for building utility apps. I also greatly enjoy{" "}
					<a
						className="text-yellow-500 hover:underline"
						href="https://automatetheboringstuff.com/"
						target="_blank"
						rel="noopener"
					>
						automating the boring stuff
					</a>
					.
				</p>

				{/* Social Links - Icon Only */}
				<div className="flex items-center gap-2 mt-6">
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

			{/* Experience Section */}
			<section>
				<h2 className="text-2xl font-normal text-gray-100 mb-4">Experience</h2>
				<p className="text-gray-400 mb-4">
					Companies I've worked at and maybe where I'm currently working if I
					can convince someone to give me money in exchange for some code.
				</p>
				<ul className="space-y-1">
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

				{/* Freelance */}
				<div className="mt-6">
					<h3 className="text-lg font-medium text-gray-200">Freelance Work</h3>
					<p className="text-gray-400 text-sm mt-1">
						My experience freelancing was cool! 10/10 would do again.
					</p>
				</div>
				<ul className="mt-2">
					<Work
						href="https://www.upwork.com/freelancers/~018467e8cbe2f71382"
						comp="Upwork"
						time="$40,000+"
						highlight
					/>
				</ul>
			</section>

			{/* Projects Section */}
			<section>
				<h2 className="text-2xl font-normal text-gray-100 mb-2">
					What am I up to?
				</h2>
				<p className="text-gray-400 mb-4">
					I greatly enjoy building utility apps/tools for myself. I build these
					tools to better help me in my day to day life. All of my projects are
					very much a work-in-progress.
				</p>

				{allWebProjects.length > 0 && (
					<div className="mb-4">
						<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
							Web
						</h3>
						<div className="ml-4 space-y-1">
							{allWebProjects.map((x) => (
								<Item
									label={x.title}
									href={`/project/${x.slug}`}
									transitionId={x.slug}
								/>
							))}
						</div>
					</div>
				)}

				{allToolProjects.length > 0 && (
					<div>
						<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
							Tools
						</h3>
						<div className="ml-4 space-y-1">
							{allToolProjects.map((x) => (
								<Item
									label={x.title}
									href={`/project/${x.slug}`}
									transitionId={x.slug}
								/>
							))}
						</div>
					</div>
				)}
			</section>

			{/* OSS Section */}
			<section>
				<h2 className="text-2xl font-normal text-gray-100 mb-4">
					OSS Contribs
				</h2>
				<p className="text-gray-400 mb-4">
					I also enjoy contributing to open source projects when the opportunity
					presents itself!
				</p>
				<div className="ml-4">
					<div className="mb-4">
						<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
							Successful
						</h3>
						<div className="space-y-1">
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
					</div>
					<div>
						<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
							Unsuccessful
						</h3>
						<div className="space-y-1">
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
			</section>

			{/* Blog Section - Latest 3 */}
			<section>
				<div className="flex items-baseline justify-between mb-4">
					<h2 className="text-2xl font-normal text-gray-100">Blog</h2>
					<Link
						to="/blog"
						className="text-sm text-gray-400 hover:text-yellow-500 transition"
						transition
					>
						View all
					</Link>
				</div>
				<p className="text-gray-400 mb-4">
					Sometimes I have knowledge I find worth sharing, and thus I write up a
					little something something from time to time.
				</p>
				<ul className="ml-4 space-y-1">
					{allPostsRearranged.slice(0, 3).map((x) => (
						<Item
							label={x.title}
							href={`/blog/${x.slug}`}
							transitionId={`${x.slug}`}
						/>
					))}
				</ul>
			</section>

			{/* Living Site Note */}
			<section className="pt-6 border-t border-gray-800">
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
	highlight = false,
}: {
	comp: string;
	time: string;
	href: string;
	focus?: boolean;
	highlight?: boolean;
}) {
	const isMutedLink = href ? "text-gray-400" : "text-gray-600";
	const isFocused = focus ? "animate-pulse" : "";
	const timeStyle = highlight ? "text-yellow-500 font-medium" : "text-gray-500";

	return (
		<a
			href={href || undefined}
			target={href ? "_blank" : undefined}
			rel={href ? "noopener" : undefined}
			className={`${isMutedLink} ${isFocused} block py-2 px-3 -mx-3 rounded-xl hover:bg-[#1a1a1a] transition-colors`}
		>
			<li className="flex w-full items-center gap-2">
				<span className="text-gray-300">{comp}</span>
				<span className="h-px flex-1 bg-gray-700"></span>
				<span className={`text-sm tabular-nums ${timeStyle}`}>{time}</span>
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
		<li className="flex w-full items-center gap-2 py-2 px-3 -mx-3 rounded-xl hover:bg-[#1a1a1a] transition-colors">
			<span
				className="w-fit text-gray-300"
				style={`view-transition-name: ${linkLabelTransitionId}`}
			>
				{label}
			</span>
			<span className="h-px flex-1 bg-gray-700"></span>
			<span className="text-xs text-gray-500">{external ? "↗" : "→"}</span>
		</li>
	);
}

// Icons
function GithubIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
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
			width="20"
			height="20"
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
			width="20"
			height="20"
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
			width="20"
			height="20"
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

function RssIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
		>
			<path d="M4 11a9 9 0 0 1 9 9" />
			<path d="M4 4a16 16 0 0 1 16 16" />
			<circle cx="5" cy="19" r="1" />
		</svg>
	);
}

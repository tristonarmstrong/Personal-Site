import { allPosts, allProjects } from "content-collections";
import { Link } from "kiru/router";
import { signal, onMount } from "kiru";
import { SEO } from "../components/SEO";
import { RssIcon } from "../components/icons/Rss";
import { Avatar } from "../components/Avatar";
import { GitHubActivity } from "../components/GitHubActivity";

export default function Home() {
	const yearsExperience = signal(5);
	const allPostsRearranged = allPosts.sort(
		(a, b) => b.date.getTime() - a.date.getTime(),
	);

	onMount(() => {
		yearsExperience.value = Math.abs(new Date().getFullYear() - 2020);
	});

	return () => (
		<main
			className="text-sm mt-10 flex flex-col gap-10 max-w-2xl"
			style={"view-transition-name: homepage"}
		>
			<SEO />

			{/* Header */}
			<section className="p-4 rounded-2xl bg-[#141414] flex flex-col gap-2">
				<div className="flex items-start gap-3">
					<Avatar size="lg" />
					<div>
						<h1 className="text-2xl font-bold tracking-tight text-yellow-500">
							Triston Armstrong
						</h1>
						<div className="flex gap-2 text-gray-500">
							<span>Senior Software Engineer</span>
							<span>·</span>
							<span>Utah, USA</span>
						</div>
					</div>
				</div>
				<p className="text-gray-300 mt-2 max-w-lg">
					Software Developer with{" "}
					<span
						className="yearthing text-yellow-500 cursor-help"
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

				{/* Social Links */}
				<div className="flex items-center gap-1 mt-3">
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

			<div className="w-full border-t border-dashed border-white/10" />

			{/* GitHub Activity */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Activity
				</h2>
				<GitHubActivity />
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* OSS Contributions */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					OSS
				</h2>
				<div className="flex flex-col gap-3">
					<DashedLink
						label="asadbek064/bincode"
						meta="merged"
						status="merged"
						href="https://github.com/asadbek064/bincode/pull/1"
					/>
					<DashedLink
						label="diamondburned/dissent"
						meta="merged"
						status="merged"
						href="https://github.com/diamondburned/dissent/pull/371"
					/>
					<DashedLink
						label="kirujs/kiru"
						meta="merged"
						status="merged"
						href="https://github.com/kirujs/kiru"
					/>
					<DashedLink
						label="Chai-Foundation/ChaiLauncher"
						meta="2 PRs"
						status="merged"
						href="https://github.com/Chai-Foundation/ChaiLauncher/pull/13"
					/>
					<DashedLink
						label="tristanpoland/Chai-MCVM"
						meta="merged"
						status="merged"
						href="https://github.com/tristanpoland/Chai-MCVM/pull/1"
					/>
					<DashedLink
						label="basecamp/omarchy"
						meta="rejected"
						status="rejected"
						href="https://github.com/basecamp/omarchy/issues/1881"
					/>
					<DashedLink
						label="microsoft/TypeScript"
						meta="rejected"
						status="rejected"
						href="https://github.com/microsoft/TypeScript/pull/60269"
					/>
					<DashedLink
						label="nrwl/nx"
						meta="closed"
						status="closed"
						href="https://github.com/nrwl/nx/pull/31846"
					/>
				</div>
			</section>

			{/* Projects */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Projects
				</h2>
				<div className="flex flex-col gap-3">
					{allProjects.map((x) => (
						<ProjectCard
							key={x.slug}
							title={x.title}
							href={`/project/${x.slug}`}
							type={x.type}
							summary={x.summary}
						/>
					))}
				</div>
			</section>

			{/* Blog */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Blog
				</h2>
				<div className="flex flex-col gap-3">
					{allPostsRearranged.slice(0, 3).map((x) => (
						<DashedItem
							key={x.slug}
							label={x.title}
							meta={x.date.toLocaleDateString("en-US", {
								month: "short",
								year: "numeric",
							})}
							href={`/blog/${x.slug}`}
							internal
						/>
					))}
				</div>
				<div className="mt-3">
					<Link
						to="/blog"
						className="text-xs text-gray-500 hover:text-gray-300 transition underline"
						transition
					>
						View all posts
					</Link>
				</div>
			</section>

			{/* Experience */}
			<section>
				<h2 className="text-xl font-bold tracking-tight text-gray-100 mb-4">
					Experience
				</h2>
				<div className="flex flex-col gap-3">
					<DashedItem label="Your Company Here" meta="Now" href="" highlight />
					<DashedItem
						label="Ventra Health"
						meta="2023 — 2025"
						href="https://ventrahealth.com/"
					/>
					<DashedItem
						label="Randstad Technologies"
						meta="2021 — 2023"
						href="https://www.randstadusa.com/"
					/>
					<DashedItem
						label="Damiano Global Corp."
						meta="2021"
						href="https://damianoglobal.com/"
					/>
					<DashedItem label="Makers Ladder LLC" meta="2020" href="" />
				</div>

				<div className="mt-4">
					<DashedItem
						label="Freelance (Upwork)"
						meta="$40k+"
						href="https://www.upwork.com/freelancers/~018467e8cbe2f71382"
					/>
				</div>
			</section>

			{/* Footer */}
			<section className="pt-4 border-t border-dashed border-white/10">
				<div className="flex items-center gap-4">
					<SocialLink href="https://github.com/tristonarmstrong" label="GitHub">
						<GithubIcon />
					</SocialLink>
					<SocialLink href="https://x.com/triston_armstr" label="X">
						<XIcon />
					</SocialLink>
					<SocialLink
						href="https://www.linkedin.com/in/triston-armstrong-7248b229b"
						label="LinkedIn"
					>
						<LinkedinIcon />
					</SocialLink>
					<SocialLink href="mailto:triston95strong@gmail.com" label="Email">
						<EmailIcon />
					</SocialLink>
				</div>
				<p className="text-xs text-gray-600 mt-4">
					This is a "living site". I push half-baked chunks of UI to showcase
					its development in realtime.
				</p>
			</section>
		</main>
	);
}

// Dashed line item (Experience, Blog)
function DashedItem({
	label,
	meta,
	href,
	internal = false,
	highlight = false,
}: {
	label: string;
	meta: string;
	href: string;
	internal?: boolean;
	highlight?: boolean;
}) {
	const labelClasses = highlight
		? "text-gray-200 animate-pulse"
		: "text-gray-300 group-hover:text-gray-100";

	const content = (
		<div className="flex items-center justify-between gap-4 group cursor-pointer">
			<span className={`text-sm ${labelClasses} transition-colors`}>
				{label}
			</span>
			<div className="border-t border-dashed border-white/10 flex-1 min-w-[2rem]" />
			<span className="text-xs text-gray-500 whitespace-nowrap">{meta}</span>
		</div>
	);

	if (!href) {
		return <div className="py-1">{content}</div>;
	}

	if (internal) {
		return (
			<Link to={href} className="block py-1" transition>
				{content}
			</Link>
		);
	}

	return (
		<a href={href} target="_blank" rel="noopener" className="block py-1">
			{content}
		</a>
	);
}

// External link with underline (OSS style)
function DashedLink({
	label,
	meta,
	href,
	status = "default",
}: {
	label: string;
	meta: string;
	href: string;
	status?: "merged" | "rejected" | "closed" | "open" | "default";
}) {
	const statusStyles = {
		merged: "bg-green-500/20 text-green-400 border-green-500/30",
		rejected: "bg-red-500/20 text-red-400 border-red-500/30",
		closed: "bg-orange-500/20 text-orange-400 border-orange-500/30",
		open: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
		default: "bg-gray-500/20 text-gray-400 border-gray-500/30",
	};

	return (
		<div className="flex items-center justify-between gap-4 py-1">
			<a
				href={href}
				target="_blank"
				rel="noopener"
				className="text-xs underline text-blue-400 hover:text-blue-500 transition-colors whitespace-nowrap"
			>
				{label}
			</a>
			<div className="border-t border-dashed border-white/10 flex-1 min-w-[2rem]" />
			<span
				className={`text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap ${statusStyles[status]}`}
			>
				{meta}
			</span>
		</div>
	);
}

// Project card with icon/border
function ProjectCard({
	title,
	href,
	type,
	summary,
}: {
	title: string;
	href: string;
	type: string;
	summary?: string;
}) {
	return (
		<Link
			to={href}
			className="flex items-start gap-3 p-3 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition group"
			transition
		>
			<div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-500 text-xs font-medium shrink-0 mt-0.5">
				{type.charAt(0)}
			</div>
			<div className="flex-1 min-w-0">
				<h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors tracking-tight">
					{title}
				</h3>
				{summary && (
					<p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
						{summary}
					</p>
				)}
			</div>
		</Link>
	);
}

// Social link (footer style)
function SocialLink({
	href,
	label,
	children,
}: {
	href: string;
	label: string;
	children: JSX.Element;
}) {
	return (
		<a
			href={href}
			target={href.startsWith("http") ? "_blank" : undefined}
			rel={href.startsWith("http") ? "noopener" : undefined}
			className="text-gray-500 hover:text-gray-300 transition"
			aria-label={label}
		>
			{children}
		</a>
	);
}

// Social icon (header style with circular background)
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

// Icons
function GithubIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
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
			width="16"
			height="16"
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
			width="16"
			height="16"
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
			width="16"
			height="16"
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

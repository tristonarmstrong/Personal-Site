import { allPosts, allProjects } from "content-collections";
import { onMount, signal } from "kiru";
import { Link } from "kiru/router";
import { Avatar } from "../components/Avatar";
import { GitHubActivity } from "../components/GitHubActivity";
import { RssIcon } from "../components/icons/Rss";
import { SEO } from "../components/SEO";

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
			<section className={"relative"}>
				<img
					className="rounded-xl z-0 hidden sm:block absolute"
					src="https://pbs.twimg.com/profile_banners/1087178748456325121/1772570468/1500x500" alt="me in cyber style thai tech cafe"
					style={"mask-image: linear-gradient(to top, transparent 5%, black 100%); -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);"}
				/>
				<div className="p-4 rounded-2xl bg-[#212121] flex flex-col gap-2 z-10 relative max-w-150 mx-auto sm:mt-40">
					<div className="flex items-start gap-3 z-10">
						<Avatar size="lg" />
						<div className={"z-10"}>
							<h1 className="text-2xl font-bold tracking-tight text-yellow-500 z-10">
								Triston Armstrong
							</h1>
							<div className="flex gap-2 text-gray-500 z-10">
								<span>Senior Software Engineer</span>
								<span>·</span>
								<span>Utah, USA</span>
							</div>
						</div>
					</div>
					<p className="text-gray-300 mt-2 max-w-lg leading-relaxed text-justify">
						I am a Senior Software Engineer with over{" "}
						<span className="yearthing text-yellow-500 cursor-help" title="I started programming professionally in year 2020">
							{yearsExperience.value} years
						</span>
						{" "} of experience building modern, scalable web applications. I bring strong expertise in React, TypeScript, JavaScript, and full-stack development, with significant experience modernizing legacy systems and delivering enterprise solutions.
					</p>
					<p className="text-gray-300 mt-2 max-w-lg leading-relaxed text-justify">
						Throughout my career, I’ve led frontend development efforts, migrated large codebases to TypeScript, optimized CI/CD pipelines, and worked closely with stakeholders to turn complex business requirements into clean, maintainable software. I’m known as a collaborative team player who enjoys mentoring junior developers and fostering a culture of constructive feedback.
					</p>

					{/* Social Links */}
					<div className="flex items-center gap-1 mt-3 [&>a]:bg-white/[0.1]">
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
				<div className="flex flex-col sm:flex-row gap-3">
					{allPostsRearranged.slice(0, 3).map((x) => (
						<div className={"px-4 py-3 bg-white/[0.03] rounded-xl flex-1 flex flex-col justify-between gap-2"}>
							<time className={"text-[#fff9] text-xs font-thin"}>{x.date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</time>
							<h2 className={"text-gray-400 font-bold"}>{x.title}</h2>
							<p className="text-[#fff9] font-thin text-xs">{x.summary.slice(0, 100)}...</p>
							<Link className={"text-xs ml-auto sm:ml-0"} to={`/blog/${x.slug}`}>Read More</Link>
						</div>
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
					{/* Open for opportunities - highlighted */}
					<div className="py-2 px-3 -mx-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20 border-dashed">
						<div className="flex items-center justify-between gap-4">
							<div className="flex items-center gap-2">
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
								</span>
								<span className="text-sm font-medium text-yellow-500">
									Your Company Here
								</span>
							</div>
							<span className="text-xs text-green-400/80 whitespace-nowrap font-medium">
								Available Now
							</span>
						</div>
					</div>
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

			{/* Get in Touch CTA */}
			<section className="p-4 rounded-2xl bg-white/[0.03]">
				<div className="flex items-start gap-3">
					<div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="text-yellow-500"
						>
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
						</svg>
					</div>
					<div className="flex-1 min-w-0">
						<h2 className="text-lg font-bold tracking-tight text-gray-100 mb-1">
							Let's work together
						</h2>
						<p className="text-sm text-gray-400 leading-relaxed mb-3">
							Have a project in mind or just want to chat? I'm always open to
							discussing new opportunities, creative ideas, or potential
							collaborations.
						</p>
						<button
							type="button"
							onclick={() => {
								const a = document.createElement("a");
								a.href =
									"mailto:triston95strong@gmail.com?subject=Reaching Out&body=Hey Triston, ...Put message here...";
								a.click();
							}}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition text-sm font-medium cursor-pointer"
						>
							<EmailIcon />
							<span>Send me an email</span>
						</button>
					</div>
				</div>
			</section>

			{/* Footer spacer */}
			<div className="h-20" />
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
		: "text-gray-400 group-hover:text-gray-100";

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
			className="flex items-start gap-3 p-3 rounded-md bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition group"
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

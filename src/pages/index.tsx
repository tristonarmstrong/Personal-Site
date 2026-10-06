import { allPosts, allProjects } from "content-collections";
import { For, onMount, signal } from "kiru";
import { Link } from "kiru/router";
import { GitHubActivity } from "../components/GitHubActivity";
import { RssIcon } from "../components/icons/Rss";
import { SEO } from "../components/SEO";
import "../scroll-theme.css";
import {
	MountedPortrait,
	Roller,
	ScrollFilters,
	SectionHeading,
	SealStamp,
	SilkBand,
} from "../components/scroll";

export default function Home() {
	const yearsExperience = signal(5);
	const allPostsRearranged = allPosts.sort(
		(a, b) => b.date.getTime() - a.date.getTime(),
	);

	onMount(() => {
		yearsExperience.value = Math.abs(new Date().getFullYear() - 2019);
		document.body.classList.add("scroll-page");
		return () => document.body.classList.remove("scroll-page");
	});

	function _handleEmailClick() {
		const a = document.createElement("a");
		a.href =
			"mailto:triston@klectr.dev?subject=Reaching Out&body=Hey Triston, ...Put message here...";
		a.click();
	}

	const openSourceContribsData = openSourceData();

	return () => (
		<main style={"view-transition-name: homepage"}>
			<SEO />
			<ScrollFilters />

			<div className="scroll-wrap">
				<Roller />
				<SilkBand />

				<div className="scroll-paper">
					<div className="hero-wash" aria-hidden="true" />

					{/* Hero — the opening inscription of the scroll */}
					<section className="relative text-center">
						<div
							className="hero-inscription vertical-rl font-brush"
							aria-hidden="true"
						>
							Senior Software Engineer
						</div>
						<MountedPortrait />
						<h1 className="font-brush hero-name mt-7">Triston Armstrong</h1>
						<p className="hero-meta mt-3">
							Senior Software Engineer · Utah, USA
						</p>
						<div className="max-w-xl mx-auto mt-6 text-left">
							<p>
								I am a Senior Software Engineer with over{" "}
								<span
									className="yearthing-scroll"
									title="I started programming professionally in year 2019"
								>
									{yearsExperience.value} years
								</span>{" "}
								of experience building applications in React, TypeScript, and
								Rust with significant experience modernizing legacy systems
								and delivering enterprise solutions. I’ve led frontend
								development efforts, migrated large codebases to TypeScript,
								optimized CI/CD pipelines, and worked closely with
								stakeholders to turn complex business requirements into
								clean, maintainable software.
							</p>
							<p className="mt-4">
								I’m known as a collaborative team player who enjoys mentoring
								junior developers and fostering a culture of constructive
								feedback.
							</p>
						</div>

						{/* Social Links */}
						<div className="flex items-center justify-center gap-2 mt-7">
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
								href="mailto:triston@klectr.dev"
								icon={<EmailIcon />}
								label="Email"
							/>
							<SocialIcon href="/feed.xml" icon={<RssIcon />} label="RSS" />
						</div>
					</section>

					{/* GitHub Activity */}
					<section>
						<SectionHeading sealChar="動" title="Activity" />
						<div className="gh-scroll">
							<GitHubActivity />
						</div>
					</section>

					{/* OSS Contributions — a catalog of colophons, newest first */}
					<section>
						<SectionHeading sealChar="源" title="Open Source" />
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
							<For
								each={openSourceContribsData}
								fallback={<div>No Open Source Contributions Yet</div>}
							>
								{(item) => (
									<Colophon
										label={item.label}
										meta={item.meta}
										status={item.status}
										href={item.href}
									/>
								)}
							</For>
						</div>
					</section>

					{/* Projects */}
					<section>
						<SectionHeading sealChar="作" title="Projects" />
						<div className="flex flex-col gap-3">
							{allProjects.map((x) => (
								<ProjectRow
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
						<SectionHeading sealChar="筆" title="Blog" />
						<div className="flex flex-col sm:flex-row gap-3">
							{allPostsRearranged.slice(0, 3).map((x) => (
								<div className="post-card flex-1">
									<time>
										{x.date.toLocaleDateString("en-US", {
											month: "short",
											day: "2-digit",
											year: "numeric",
										})}
									</time>
									<h3 className="font-brush">{x.title}</h3>
									<p>{x.summary.slice(0, 100)}...</p>
									<Link className="read-more" to={`/blog/${x.slug}`}>
										Read More
									</Link>
								</div>
							))}
						</div>
						<div className="mt-4">
							<Link to="/blog" className="brush-link text-xs" transition>
								View all posts
							</Link>
						</div>
					</section>

					{/* Experience */}
					<section>
						<SectionHeading sealChar="歷" title="Experience" />
						<div className="flex flex-col">
							<XpRow label="ByteBot" meta="2026 — present" href="" current />
							<XpRow
								label="Ventra Health"
								meta="2023 — 2025"
								href="https://ventrahealth.com/"
							/>
							<XpRow
								label="Randstad Technologies"
								meta="2021 — 2023"
								href="https://www.randstadusa.com/"
							/>
							<XpRow
								label="Damiano Global Corp."
								meta="2021"
								href="https://damianoglobal.com/"
							/>
							<XpRow label="Makers Ladder LLC" meta="2020" href="" />
						</div>

						<div className="mt-2">
							<XpRow
								label="Freelance (Upwork)"
								meta="$40k+"
								href="https://www.upwork.com/freelancers/~018467e8cbe2f71382"
							/>
						</div>
					</section>

					{/* Get in Touch CTA */}
					<section className="text-center">
						<SectionHeading sealChar="柬" title="Contact" />
						<div className="max-w-lg mx-auto">
							<h3 className="font-brush text-3xl mb-3">
								Let's work together
							</h3>
							<p className="text-sm leading-relaxed mb-5">
								Have a project in mind or just want to chat? I'm always open
								to discussing new opportunities, creative ideas, or potential
								collaborations.
							</p>
							<button
								type="button"
								onclick={_handleEmailClick}
								className="ink-btn"
							>
								<EmailIcon />
								<span>Send me an email</span>
							</button>
						</div>
					</section>

					{/* Colophon — the scroll's closing inscription */}
					<div className="colophon-end">
						<div className="rule">
							<SealStamp text="印" size="sm" />
							<small className="font-brush">Triston Armstrong · MMXXVI</small>
							<SealStamp text="藏" size="sm" />
						</div>
					</div>
				</div>

				<SilkBand />
				<Roller />
			</div>

			<div className="h-16" />
		</main>
	);
}

/** OSS catalog entry: brush-underlined label, ink leader, status chip. */
function Colophon({
	label,
	meta,
	status,
	href,
}: {
	label: string;
	meta: string;
	status: OssStatus;
	href: string;
}) {
	return (
		<div className="colophon">
			<a
				href={href}
				target="_blank"
				rel="noopener"
				className="brush-link label"
			>
				{label}
			</a>
			<span className="leader" aria-hidden="true" />
			<span className={`chip chip-${status}`}>{meta}</span>
		</div>
	);
}

/** Experience row: label, optional 今 seal for current role, leader, dates. */
function XpRow({
	label,
	meta,
	href,
	current = false,
}: {
	label: string;
	meta: string;
	href: string;
	current?: boolean;
}) {
	const inner = (
		<div className="xp-row group cursor-pointer">
			<span
				className="text-sm transition-colors"
				style={current ? "color:#1a1a1a;font-weight:600" : "color:#3a342a"}
			>
				{label}
			</span>
			{current && (
				<span className="xp-now" title="Current role">
					今
				</span>
			)}
			<span className="leader" aria-hidden="true" />
			<span className="text-xs whitespace-nowrap" style="color:#6b5f4c">
				{meta}
			</span>
		</div>
	);

	if (!href) {
		return <div className="py-0.5">{inner}</div>;
	}
	return (
		<a href={href} target="_blank" rel="noopener" className="block py-0.5">
			{inner}
		</a>
	);
}

/** Project entry mounted as a small paper card. */
function ProjectRow({
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
		<Link to={href} className="project-row group" transition>
			<div className="project-mark" aria-hidden="true">
				{type.charAt(0)}
			</div>
			<div className="flex-1 min-w-0">
				<h3 className="font-brush text-xl leading-snug" style="color:#1a1a1a">
					{title}
				</h3>
				{summary && (
					<p className="text-xs mt-1 leading-relaxed" style="color:#5a5348">
						{summary}
					</p>
				)}
			</div>
		</Link>
	);
}

// Social icon (ink ring button on paper)
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
			className="soc"
			aria-label={label}
			title={label}
		>
			{icon}
		</a>
	);
}

// Icons (unchanged artwork)
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

type OssStatus = "merged" | "rejected" | "closed" | "open" | "default";

function openSourceData(): Array<{
	label: string;
	meta: string;
	status: OssStatus;
	href: string;
}> {
	return [
		{
			label: "bjarneo/flux",
			meta: "merged",
			status: "merged",
			href: "https://github.com/bjarneo/flux/pull/3",
		},
		{
			label: "omacom/aether",
			meta: "merged",
			status: "merged",
			href: "https://github.com/omacom/aether/pull/125",
		},
		{
			label: "letstri/druk",
			meta: "merged",
			status: "merged",
			href: "https://github.com/letstri/druk/pull/5",
		},
		{
			label: "khurrambhutto/noted",
			meta: "merged",
			status: "merged",
			href: "https://github.com/khurrambhutto/noted/pull/3",
		},
		{
			label: "Far-Beyond-Pulsar/Plugin_Blueprints",
			meta: "merged",
			status: "merged",
			href: "https://github.com/Far-Beyond-Pulsar/Plugin_Blueprints/pull/7",
		},
		{
			label: "asadbek064/bincode",
			meta: "merged",
			status: "merged",
			href: "https://github.com/asadbek064/bincode/pull/1",
		},
		{
			label: "diamondburned/dissent",
			meta: "merged",
			status: "merged",
			href: "https://github.com/diamondburned/dissent/pull/371",
		},
		{
			label: "kirujs/kiru",
			meta: "merged",
			status: "merged",
			href: "https://github.com/kirujs/kiru",
		},
		{
			label: "Chai-Foundation/ChaiLauncher",
			meta: "2 PRs",
			status: "merged",
			href: "https://github.com/Chai-Foundation/ChaiLauncher/pull/13",
		},
		{
			label: "tristanpoland/Chai-MCVM",
			meta: "merged",
			status: "merged",
			href: "https://github.com/tristanpoland/Chai-MCVM/pull/1",
		},
		{
			label: "basecamp/omarchy",
			meta: "rejected",
			status: "rejected",
			href: "https://github.com/basecamp/omarchy/issues/1881",
		},
		{
			label: "microsoft/TypeScript",
			meta: "rejected",
			status: "rejected",
			href: "https://github.com/microsoft/TypeScript/pull/60269",
		},
		{
			label: "nrwl/nx",
			meta: "closed",
			status: "closed",
			href: "https://github.com/nrwl/nx/pull/31846",
		},
		{
			label: "MarsX-dev/floatui",
			meta: "4 PRs",
			status: "merged",
			href: "https://github.com/MarsX-dev/floatui/pull/6",
		},
		{
			label: "mantis-apps/mantis-cli",
			meta: "merged",
			status: "merged",
			href: "https://github.com/mantis-apps/mantis-cli/pull/47",
		},
		{
			label: "Smithay/smithay",
			meta: "merged",
			status: "merged",
			href: "https://github.com/Smithay/smithay/pull/1372",
		},
		{
			label: "RotherOSS/otobo",
			meta: "merged",
			status: "merged",
			href: "https://github.com/RotherOSS/otobo/pull/3266",
		},
		{
			label: "jankeesvw/omarchy-workspace-name",
			meta: "merged",
			status: "merged",
			href: "https://github.com/jankeesvw/omarchy-workspace-name/pull/2",
		},
		{
			label: "LankyMoose/matcha-js",
			meta: "merged",
			status: "merged",
			href: "https://github.com/LankyMoose/matcha-js/pull/1",
		},
	];
}

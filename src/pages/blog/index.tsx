import { allPosts } from "content-collections";
import { Link } from "kiru/router";
import { Avatar } from "../../components/Avatar";
import { RssIcon } from "../../components/icons/Rss";
import { SEO } from "../../components/SEO";
import {
	calculateReadingTime,
	formatReadingTime,
} from "../../utils/readingTime";

// Category detection based on keywords in title/summary
function detectCategory(
	title: string,
	summary: string,
): {
	name: string;
	color: string;
	icon: JSX.Element;
} {
	const text = (`${title} ${summary}`).toLowerCase();

	if (
		text.includes("interview") ||
		text.includes("personal") ||
		text.includes("career")
	) {
		return {
			name: "Personal",
			color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
			icon: <PersonalIcon />,
		};
	}
	if (
		text.includes("rust") ||
		text.includes("ci/cd") ||
		text.includes("build") ||
		text.includes("daemon")
	) {
		return {
			name: "Rust",
			color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
			icon: <CodeIcon />,
		};
	}
	if (
		text.includes("tutorial") ||
		text.includes("how to") ||
		text.includes("guide")
	) {
		return {
			name: "Tutorial",
			color: "bg-green-500/20 text-green-400 border-green-500/30",
			icon: <BookIcon />,
		};
	}
	if (
		text.includes("linux") ||
		text.includes("wayland") ||
		text.includes("macos") ||
		text.includes("os") ||
		text.includes("gpu")
	) {
		return {
			name: "Systems",
			color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
			icon: <TerminalIcon />,
		};
	}
	return {
		name: "Tech",
		color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
		icon: <SparkleIcon />,
	};
}


// Format last update time
function getLastUpdateText(date?: Date): string {
	if (!date) return "recently";
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	if (days === 0) return "today";
	if (days === 1) return "yesterday";
	if (days < 7) return `${days} days ago`;
	if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
	return `${Math.floor(days / 30)} months ago`;
}

export default function BlogIndex() {
	const allPostsRearranged = allPosts.sort(
		(a, b) => b.date.getTime() - a.date.getTime(),
	);

	const featuredPost = allPostsRearranged[0];
	const remainingPosts = allPostsRearranged.slice(1);

	return () => (
		<main className="text-sm mt-10 flex flex-col gap-10 max-w-2xl">
			<SEO
				title="Blog"
				description="Latest thoughts, tutorials, and tech deep-dives from Triston Armstrong."
				url="/blog"
			/>

			{/* Header */}
			<section className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md ">
				<div className="flex items-start gap-4">
					<Avatar size="lg" />
					<div className="flex-1 min-w-0">
						<div className="flex items-center justify-between gap-3 mb-2">
							<h1 className="text-2xl font-bold tracking-tight text-yellow-500">
								Blog
							</h1>
							<a
								href="/feed.xml"
								className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition text-xs font-medium border border-yellow-500/20"
								title="Subscribe to RSS feed"
							>
								<RssIcon size={12} />
								<span>Subscribe</span>
							</a>
						</div>

						<p className="text-gray-300 leading-relaxed text-justify">
							A collection of technical deep-dives, debugging war stories, and
							lessons learned from shipping software. I write about systems
							programming, Rust, developer tooling, and the occasional career
							reflection.
						</p>

						{/* Stats */}
						<div className="flex items-center gap-4 mt-4 text-xs">
							<div className="flex items-center gap-1.5 text-gray-500">
								<DocumentIcon size={12} />
								<span>{allPostsRearranged.length} posts</span>
							</div>
							<span className="text-gray-700">·</span>
							<div className="flex items-center gap-1.5 text-gray-500">
								<TagIcon size={12} />
								<span>5 topics</span>
							</div>
							<span className="text-gray-700">·</span>
							<div className="flex items-center gap-1.5 text-gray-500">
								<ClockIcon size={12} />
								<span>
									Updated {getLastUpdateText(allPostsRearranged[0]?.date)}
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="w-full border-t border-dashed border-white/10" />

			{/* Featured Post */}
			{featuredPost && (
				<section>
					<h2 className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-4">
						Latest Post
					</h2>
					<FeaturedPostCard post={featuredPost} />
				</section>
			)}

			{/* Post Grid */}
			<section>
				<h2 className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-4">
					All Posts ({allPostsRearranged.length})
				</h2>
				<div className="grid grid-cols-1 gap-3">
					{remainingPosts.map((post) => (
						<PostCard key={post.slug} post={post} />
					))}
				</div>
			</section>

			{/* Footer spacer */}
			<div className="h-20" />
		</main>
	);
}

// Featured post - larger, more prominent
function FeaturedPostCard({ post }: { post: (typeof allPosts)[0] }) {
	const category = detectCategory(post.title, post.summary);
	const readingTime = formatReadingTime(calculateReadingTime(post.mdx || ""));

	return (
		<Link
			to={`/blog/${post.slug}`}
			className={`flex flex-col p-5 rounded-xl bg-white/[0.05] backdrop-blur-md hover:bg-white/[0.08] transition group`}
			transition
		>
			<div className="flex items-center justify-between gap-4 mb-3">
				<div className="flex items-center gap-2">
					<span
						className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-xs ${category.color}`}
					>
						{category.icon}
						{category.name}
					</span>
				</div>
				<span className="text-xs text-gray-500">
					{post.date.toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
				</span>
			</div>

			<h3 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors tracking-tight mb-2">
				{post.title}
			</h3>

			<p className="text-sm text-gray-400 leading-relaxed mb-4 text-justify">
				{post.summary}
			</p>

			<div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
				<ClockIcon size={12} />
				<span>{readingTime}</span>
			</div>
		</Link>
	);
}

// Regular post card
function PostCard({ post }: { post: (typeof allPosts)[0] }) {
	const category = detectCategory(post.title, post.summary);
	const readingTime = formatReadingTime(calculateReadingTime(post.mdx || ""));

	return (
		<Link
			to={`/blog/${post.slug}`}
			className={`flex items-start gap-3 p-4 rounded-lg bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition group`}
			transition
		>
			{/* Icon avatar */}
			<div
				className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border ${category.color}`}
			>
				{category.icon}
			</div>

			<div className="flex-1 min-w-0">
				<div className="flex items-center justify-between gap-2 mb-1">
					<h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors tracking-tight truncate">
						{post.title}
					</h3>
				</div>

				<p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2">
					{post.summary}
				</p>

				<div className="flex items-center gap-3 text-[11px] text-gray-600">
					<span className="flex items-center gap-1">
						<ClockIcon size={10} />
						{readingTime}
					</span>
					<span>·</span>
					<span>
						{post.date.toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
						})}
					</span>
				</div>
			</div>
		</Link>
	);
}

// Icons
function CodeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	);
}

function BookIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
		</svg>
	);
}

function TerminalIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<polyline points="4 17 10 11 4 5" />
			<line x1="12" x2="20" y1="19" y2="19" />
		</svg>
	);
}

function PersonalIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

function SparkleIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
		</svg>
	);
}

function ClockIcon({ size = 12 }: { size?: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>
	);
}

function DocumentIcon({ size = 12 }: { size?: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<polyline points="14 2 14 8 20 8" />
		</svg>
	);
}

function TagIcon({ size = 12 }: { size?: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
			<circle cx="7" cy="7" r="1" />
		</svg>
	);
}

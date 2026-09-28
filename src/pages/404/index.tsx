import { Link } from "kiru/router";
import { allPosts, allProjects } from "content-collections";

// Get latest content for suggestions
const latestPost = allPosts.sort(
	(a, b) => b.date.getTime() - a.date.getTime(),
)[0];
const featuredProject = allProjects[0];

// Fun easter egg messages that rotate randomly
const easterEggMessages = [
	"Congratulations! You've discovered the void.",
	"This page is playing hide and seek. It's winning.",
	"You've reached the edge of the internet. Turn back now.",
	"Error 404: Page not found. But your curiosity is appreciated.",
	"Nothing to see here... except this delightful 404 page.",
	"You broke the internet! Just kidding, this link is broken.",
	"This page has gone to a better place. (The recycle bin.)",
];

const randomMessage =
	easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];

export default function NotFoundPage() {
	return () => (
		<div className="flex flex-col gap-6">
			{/* 404 Header */}
			<div className="text-center">
				<h1 className="font-hand text-accent" style="font-size: 5rem; line-height: 1;">404</h1>
				<p className="text-lg text-ink-soft">Page Not Found</p>
				<p className="text-sm text-ink-faint italic mt-2">"{randomMessage}"</p>
			</div>

			{/* Navigation */}
			<div className="flex justify-center">
				<Link to="/" className="text-accent underline" transition>
					← Go Home
				</Link>
			</div>

			{/* Suggestions */}
			<div className="mt-4">
				<h3 className="text-accent-deep mb-4">While you're here:</h3>

				{latestPost && (
					<div className="mb-4">
						<span className="text-ink-soft text-sm">Latest Post</span>
						<div className="mx-4">
							<Item
								label={latestPost.title}
								href={`/blog/${latestPost.slug}`}
							/>
						</div>
					</div>
				)}

				{featuredProject && (
					<div className="mb-4">
						<span className="text-ink-soft text-sm">Featured Project</span>
						<div className="mx-4">
							<Item
								label={featuredProject.title}
								href={`/project/${featuredProject.slug}`}
							/>
						</div>
					</div>
				)}

				<div className="mb-4">
					<span className="text-ink-soft text-sm">Browse</span>
					<div className="mx-4">
						<Item label="All Blog Posts" href="/blog" />
						<Item label="My Gear (Thangs)" href="/thangs" />
						<Item label="Sitemap" href="/sitemap.xml" external />
					</div>
				</div>
			</div>
		</div>
	);
}

function Item({
	label,
	href,
	external = false,
}: {
	label: string;
	href: string;
	external?: boolean;
}) {
	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener"
				className="flex w-full items-center gap-1 text-ink-soft hover:text-accent transition"
			>
				<span>{label}</span>
				<span className="h-full border border-dashed flex-1 border-line"></span>
				<span className="text-sm">↗</span>
			</a>
		);
	}

	return (
		<Link
			to={href}
			className="flex w-full items-center gap-1 text-ink-soft hover:text-accent transition"
			transition
		>
			<span>{label}</span>
			<span className="h-full border border-dashed flex-1 border-line"></span>
			<span className="text-sm">→</span>
		</Link>
	);
}

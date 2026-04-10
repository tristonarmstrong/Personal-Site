import { allPosts } from "content-collections";
import { Link } from "kiru/router";
import { SEO } from "../../components/SEO";
import { RssIcon } from "../../components/icons/Rss";

export default function BlogIndex() {
	const allPostsRearranged = allPosts.sort(
		(a, b) => b.date.getTime() - a.date.getTime(),
	);

	return () => (
		<main className="text-sm mt-10 flex flex-col gap-6">
			<SEO
				title="Blog"
				description="Latest thoughts, tutorials, and tech deep-dives from Triston Armstrong."
				url="/blog"
			/>
			<div className="flex items-center justify-between">
				<h2 className={"text-2xl text-yellow-500"}>Blog Posts</h2>
				<a
					href="/feed.xml"
					className="flex items-center gap-2 text-yellow-500 hover:opacity-80 transition text-sm"
					title="Subscribe to RSS feed"
				>
					<RssIcon size={16} />
					<span>RSS</span>
				</a>
			</div>
			<p>
				Sometimes I have knowledge I find worth sharing, and thus I write up a
				little something something from time to time.{" "}
				<a href="/feed.xml" className="text-yellow-500 underline">
					Subscribe via RSS
				</a>{" "}
				to get notified of new posts.
			</p>

			<ul className={"flex flex-col gap-2"}>
				{allPostsRearranged.map((x) => (
					<li key={x.slug}>
						<Link
							to={`/blog/${x.slug}`}
							transition
							className="text-yellow-500 underline"
						>
							{x.title}
						</Link>
						<span className="text-gray-500 ml-2">
							— {new Date(x.date).toLocaleDateString()}
						</span>
					</li>
				))}
			</ul>

			<div className="mt-8">
				<Link
					to="/"
					transition
					className="text-gray-400 hover:text-white underline"
				>
					← Back Home
				</Link>
			</div>
		</main>
	);
}
